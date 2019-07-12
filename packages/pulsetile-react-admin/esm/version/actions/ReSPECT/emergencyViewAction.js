import { createRequestTypes } from "../../../core/actions/functions";
export var EMERGENCY_VIEW_ACTION = createRequestTypes('EMERGENCY_VIEW_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var emergencyViewAction = {
    request: function (data) { return ({ type: EMERGENCY_VIEW_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: EMERGENCY_VIEW_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: EMERGENCY_VIEW_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: EMERGENCY_VIEW_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: EMERGENCY_VIEW_ACTION.REMOVE, data: data }); },
};
