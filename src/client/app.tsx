import React, { useState, useEffect, useMemo } from 'react'
import { IncidentService } from './services/IncidentService'
import IncidentList from './components/IncidentList'
import IncidentForm from './components/IncidentForm'
import './app.css'

export default function App() {
    const [incidents, setIncidents] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [selectedIncident, setSelectedIncident] = useState(null)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const incidentService = useMemo(() => new IncidentService(), [])

    const refreshIncidents = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await incidentService.list()
            setIncidents(data)
        } catch (err) {
            setError('Failed to load incidents: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        void refreshIncidents()
    }, [])

    const handleCreateClick = () => {
        setSelectedIncident(null)
        setShowForm(true)
    }

    const handleEditClick = (incident) => {
        setSelectedIncident(incident)
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
        setSelectedIncident(null)
    }

    const handleFormSubmit = async (formData) => {
        setLoading(true)
        try {
            if (selectedIncident) {
                const sysId =
                    typeof selectedIncident.sys_id === 'object'
                        ? selectedIncident.sys_id.value
                        : selectedIncident.sys_id
                await incidentService.update(sysId, formData)
            } else {
                await incidentService.create(formData)
            }
            setShowForm(false)
            await refreshIncidents()
        } catch (err) {
            setError('Failed to save incident: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const filteredIncidents = useMemo(() => {
        const trimmedQuery = searchQuery.trim()
        
        if (!trimmedQuery) {
            return incidents
        }

        const query = trimmedQuery.toLowerCase()
        const filtered = incidents.filter((incident) => {
            const number = typeof incident.number === 'object' ? incident.number.display_value : incident.number
            const shortDesc =
                typeof incident.short_description === 'object'
                    ? incident.short_description.display_value
                    : incident.short_description
            const description =
                typeof incident.description === 'object'
                    ? incident.description.display_value
                    : incident.description
            const status = typeof incident.status === 'object' ? incident.status.display_value : incident.status
            const priority = typeof incident.priority === 'object' ? incident.priority.display_value : incident.priority

            const matches = (
                (number && String(number).toLowerCase().includes(query)) ||
                (shortDesc && String(shortDesc).toLowerCase().includes(query)) ||
                (description && String(description).toLowerCase().includes(query)) ||
                (status && String(status).toLowerCase().includes(query)) ||
                (priority && String(priority).toLowerCase().includes(query))
            )
            
            return matches
        })
        
        console.log('Search query:', query, 'Total incidents:', incidents.length, 'Filtered:', filtered.length)
        return filtered
    }, [incidents, searchQuery])

    return (
        <div className="incident-app">
            <header className="app-header">
                <h1>Incident Response Manager</h1>
                <button className="create-button" onClick={handleCreateClick}>
                    Create New Incident
                </button>
            </header>

            {error && (
                <div className="error-message">
                    {error}
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            )}

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search incidents by number, description, status, or priority..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <button className="clear-search" onClick={() => setSearchQuery('')}>
                        ×
                    </button>
                )}
            </div>

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <IncidentList
                    incidents={filteredIncidents}
                    onEdit={handleEditClick}
                    onRefresh={refreshIncidents}
                    service={incidentService}
                />
            )}

            {showForm && (
                <IncidentForm incident={selectedIncident} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
            )}
        </div>
    )
}
