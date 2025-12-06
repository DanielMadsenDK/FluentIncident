import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import auditPage from '../../client/audit.html'

UiPage({
    $id: Now.ID['audit-viewer-page'],
    endpoint: 'x_1118332_fluentin_audit_viewer.do',
    description: 'Audit Viewer UI Page',
    category: 'general',
    html: auditPage,
    direct: true,
})
