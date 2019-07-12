import { createRequestTypes } from "../../../core/actions/functions";
export var EMERGENCY_CONTACTS_ACTION = createRequestTypes('EMERGENCY_CONTACTS_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var emergencyContactsAction = {
    request: function (data) { return ({ type: EMERGENCY_CONTACTS_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: EMERGENCY_CONTACTS_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: EMERGENCY_CONTACTS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: EMERGENCY_CONTACTS_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: EMERGENCY_CONTACTS_ACTION.REMOVE, data: data }); },
};
