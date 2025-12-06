import React from 'react'
import './AuditList.css'

export default function AuditList({ audits, onRefresh, service }) {
    const getValue = (field) => (typeof field === 'object' ? field.value : field)
    const getDisplay = (field) => (typeof field === 'object' ? field.display_value : field)

    if (audits.length === 0) {
        return (
            <div className="audit-list-empty">
                <p>No audit records found.</p>
            </div>
        )
    }

    return (
        <div className="audit-list-container">
            <div className="audit-list-header">
                <h2>Audit Records ({audits.length})</h2>
                <button className="refresh-button" onClick={onRefresh}>
                    Refresh
                </button>
            </div>

            <div className="audit-table-wrapper">
                <table className="audit-table">
                    <thead>
                        <tr>
                            <th>Incident</th>
                            <th>Changed By</th>
                            <th>Change Date</th>
                            <th>Field Name</th>
                            <th>Old Value</th>
                            <th>New Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {audits.map((audit) => {
                            const sysId = getValue(audit.sys_id)
                            const incident = getDisplay(audit.incident) || getValue(audit.incident)
                            const changedBy = getDisplay(audit.changed_by) || getValue(audit.changed_by)
                            const changeDate = getDisplay(audit.change_date) || getValue(audit.change_date)
                            const fieldName = getDisplay(audit.field_name) || getValue(audit.field_name)
                            const oldValue = getDisplay(audit.old_value) || getValue(audit.old_value)
                            const newValue = getDisplay(audit.new_value) || getValue(audit.new_value)

                            return (
                                <tr key={sysId}>
                                    <td className="audit-incident">{incident || '-'}</td>
                                    <td className="audit-changed-by">{changedBy || '-'}</td>
                                    <td className="audit-change-date">
                                        {changeDate ? new Date(changeDate).toLocaleString() : '-'}
                                    </td>
                                    <td className="audit-field-name">
                                        <span className="field-badge">{fieldName || '-'}</span>
                                    </td>
                                    <td className="audit-old-value">
                                        <span className="value-text">{oldValue || '-'}</span>
                                    </td>
                                    <td className="audit-new-value">
                                        <span className="value-text">{newValue || '-'}</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
