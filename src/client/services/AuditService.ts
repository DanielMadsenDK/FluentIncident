// Extend Window interface to include g_ck property
declare global {
    interface Window {
        g_ck: string
    }
}

export class AuditService {
    private readonly tableName: string

    constructor() {
        this.tableName = 'x_1118332_fluentin_incident_audit'
    }

    // Return all audit records
    async list() {
        try {
            const searchParams = new URLSearchParams()
            searchParams.set('sysparm_display_value', 'all')
            searchParams.set('sysparm_fields', 'sys_id,incident,changed_by,change_date,field_name,old_value,new_value')
            searchParams.set('sysparm_query', 'ORDERBYDESCchange_date')

            const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            const { result } = await response.json()
            return result || []
        } catch (error) {
            console.error('Error fetching audits:', error)
            throw error
        }
    }

    // Get a single audit record by sys_id
    async get(sysId) {
        try {
            const searchParams = new URLSearchParams()
            searchParams.set('sysparm_display_value', 'all')

            const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            const { result } = await response.json()
            return result
        } catch (error) {
            console.error(`Error fetching audit ${sysId}:`, error)
            throw error
        }
    }

    // Get audits filtered by incident number
    async getByIncident(incidentNumber) {
        try {
            const searchParams = new URLSearchParams()
            searchParams.set('sysparm_display_value', 'all')
            searchParams.set('sysparm_fields', 'sys_id,incident,changed_by,change_date,field_name,old_value,new_value')
            searchParams.set('sysparm_query', `incident=${incidentNumber}^ORDERBYDESCchange_date`)

            const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            const { result } = await response.json()
            return result || []
        } catch (error) {
            console.error(`Error fetching audits for incident ${incidentNumber}:`, error)
            throw error
        }
    }

    // Helper method to extract value from ServiceNow field object
    getValue(field) {
        return typeof field === 'object' ? field.value : field
    }

    // Helper method to extract display value from ServiceNow field object
    getDisplay(field) {
        return typeof field === 'object' ? field.display_value : field
    }
}
