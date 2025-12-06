import React, { useState, useEffect, useMemo } from 'react'
import { AuditService } from './services/AuditService'
import AuditList from './components/AuditList'
import './app.css'

export default function AuditApp() {
    const [audits, setAudits] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const auditService = useMemo(() => new AuditService(), [])

    const refreshAudits = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await auditService.list()
            setAudits(data)
        } catch (err) {
            setError('Failed to load audit records: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        void refreshAudits()
    }, [])

    const filteredAudits = useMemo(() => {
        const trimmedQuery = searchQuery.trim()
        
        if (!trimmedQuery) {
            return audits
        }

        const query = trimmedQuery.toLowerCase()
        const filtered = audits.filter((audit) => {
            const incident = typeof audit.incident === 'object' ? audit.incident.display_value : audit.incident
            const changedBy = 
                typeof audit.changed_by === 'object' 
                    ? audit.changed_by.display_value 
                    : audit.changed_by
            const fieldName = 
                typeof audit.field_name === 'object' 
                    ? audit.field_name.display_value 
                    : audit.field_name
            const oldValue = 
                typeof audit.old_value === 'object' 
                    ? audit.old_value.display_value 
                    : audit.old_value
            const newValue = 
                typeof audit.new_value === 'object' 
                    ? audit.new_value.display_value 
                    : audit.new_value

            const matches = (
                (incident && String(incident).toLowerCase().includes(query)) ||
                (changedBy && String(changedBy).toLowerCase().includes(query)) ||
                (fieldName && String(fieldName).toLowerCase().includes(query)) ||
                (oldValue && String(oldValue).toLowerCase().includes(query)) ||
                (newValue && String(newValue).toLowerCase().includes(query))
            )
            
            return matches
        })
        
        console.log('Search query:', query, 'Total audits:', audits.length, 'Filtered:', filtered.length)
        return filtered
    }, [audits, searchQuery])

    return (
        <div className="incident-app">
            <header className="app-header">
                <h1>Audit Viewer</h1>
                <button className="create-button" onClick={refreshAudits} disabled={loading}>
                    {loading ? 'Refreshing...' : 'Refresh'}
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
                    placeholder="Search audit records by incident, user, field name, or values..."
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
                <AuditList
                    audits={filteredAudits}
                    onRefresh={refreshAudits}
                    service={auditService}
                />
            )}
        </div>
    )
}
