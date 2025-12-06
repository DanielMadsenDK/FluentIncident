/**
 * Application Menu Configuration
 * 
 * Defines the FluentIncident application menu and navigation modules
 * for the ServiceNow application navigator.
 */

import '@servicenow/sdk/global'
import { ApplicationMenu } from '@servicenow/sdk/core'
import { Record } from '@servicenow/sdk/core'

/**
 * FluentIncident Application Menu
 * 
 * Creates the main application menu entry in the ServiceNow navigator.
 * Users can find and access all incident management modules under this menu.
 */
export const fluent_incident_menu = ApplicationMenu({
    $id: Now.ID['fluent_incident.menu'],
    title: 'FluentIncident',
    name: 'x_1118332_fluentin_app',
    active: true,
    hint: 'Incident Management Application',
    description: 'Custom incident management application built with ServiceNow Fluent',
    order: 100,
})

/**
 * Incidents List Module
 * 
 * Navigation module that displays a list of all incidents.
 * Accessible from the FluentIncident application menu.
 */
export const incidents_list_module = Record({
    $id: Now.ID['fluent_incident.module.incidents_list'],
    table: 'sys_app_module',
    data: {
        title: 'Incidents',
        name: 'x_1118332_fluentin_incident',
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'LIST',
        order: 100,
        hint: 'View and manage all incidents',
    }
})

/**
 * Create New Incident Module
 * 
 * Navigation module for quickly creating a new incident record.
 */
export const create_incident_module = Record({
    $id: Now.ID['fluent_incident.module.create_incident'],
    table: 'sys_app_module',
    data: {
        title: 'Create New Incident',
        name: 'x_1118332_fluentin_incident',
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'NEW',
        order: 200,
        hint: 'Create a new incident',
    }
})
