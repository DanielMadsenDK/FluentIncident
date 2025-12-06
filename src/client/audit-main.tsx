import React from 'react'
import ReactDOM from 'react-dom/client'
import AuditApp from './audit-app'

const rootElement = document.getElementById('root')
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <AuditApp />
        </React.StrictMode>
    )
}
