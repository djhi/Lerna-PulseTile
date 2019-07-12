import { createRequestTypes } from "../../../core/actions/functions";
export var PERSONAL_DETAILS_ACTION = createRequestTypes('PERSONAL_DETAILS_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var personalDetailsAction = {
    request: function (data) { return ({ type: PERSONAL_DETAILS_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: PERSONAL_DETAILS_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: PERSONAL_DETAILS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: PERSONAL_DETAILS_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: PERSONAL_DETAILS_ACTION.REMOVE, data: data }); },
};
