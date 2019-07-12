import { createRequestTypes } from "../../../core/actions/functions";
export var CONFIRMATION_ACTION = createRequestTypes('CONFIRMATION_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var confirmationAction = {
    request: function (data) { return ({ type: CONFIRMATION_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: CONFIRMATION_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: CONFIRMATION_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: CONFIRMATION_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: CONFIRMATION_ACTION.REMOVE, data: data }); },
};
