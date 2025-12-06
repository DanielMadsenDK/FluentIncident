import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { x_1118332_fluentin_incident } from '../tables/incident.now'

/**
 * Business Rule: Set Created By
 * 
 * Automatically sets the created_by field to the current user when a new incident is created.
 * This ensures every incident tracks who created it.
 */
export const set_created_by_rule = BusinessRule({
    $id: Now.ID['incident.br.set_created_by'],
    name: 'Set Created By on Incident',
    table: x_1118332_fluentin_incident.name,
    action: ['insert'],
    when: 'before',
    order: 100,
    active: true,
    description: 'Automatically sets the created_by field to the current user when creating an incident',
    script: `
        (function executeRule(current, previous /*null when async*/) {
            // Set created_by to current user if not already set
            if (!current.created_by) {
                current.created_by = gs.getUserID();
            }
        })(current, previous);
    `
})
