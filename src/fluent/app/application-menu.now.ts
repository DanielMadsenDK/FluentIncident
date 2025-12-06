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
    category: '',
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
        title: 'All Incidents',
        name: 'x_1118332_fluentin_incident', // This is the table name to link to
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'LIST',
        order: 100,
        hint: 'View and manage all incidents',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
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
        name: 'x_1118332_fluentin_incident', // This is the table name to link to
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'NEW',
        order: 200,
        hint: 'Create a new incident',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

/**
 * My Incident Audit Changes Module
 *
 * Navigation module that displays incident audit records filtered to show
 * only changes made by the current logged-in user.
 */
export const my_audit_changes_module = Record({
    $id: Now.ID['fluent_incident.module.my_audit_changes'],
    table: 'sys_app_module',
    data: {
        title: 'My Audit Changes',
        name: 'x_1118332_fluentin_incident_audit', // This is the table name to link to
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'LIST',
        filter: 'changed_byDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
        order: 300,
        hint: 'View incident audit changes made by me',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

/**
 * Incident Manager UI Page Module
 *
 * Navigation module that links to the custom UI page for incident management.
 */
export const incident_manager_page_module = Record({
    $id: Now.ID['fluent_incident.module.incident_manager_page'],
    table: 'sys_app_module',
    data: {
        title: 'Incident Manager',
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'DIRECT',
        query: 'x_1118332_fluentin_incident_manager.do', // Use query field, not uri_page
        order: 400,
        hint: 'Custom incident management interface',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

/**
 * Audit Viewer UI Page Module
 *
 * Navigation module that links to the custom UI page for viewing audit records.
 */
export const audit_viewer_page_module = Record({
    $id: Now.ID['fluent_incident.module.audit_viewer_page'],
    table: 'sys_app_module',
    data: {
        title: 'Audit Viewer',
        application: fluent_incident_menu.$id,
        active: true,
        link_type: 'DIRECT',
        query: 'x_1118332_fluentin_audit_viewer.do',
        order: 500,
        hint: 'View all incident audit records',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})
