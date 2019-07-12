import { createRequestTypes } from "../../../core/actions/functions";
export var PERSONAL_PREFERENCES_ACTION = createRequestTypes('PERSONAL_PREFERENCES_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var personalPreferencesAction = {
    request: function (data) { return ({ type: PERSONAL_PREFERENCES_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: PERSONAL_PREFERENCES_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: PERSONAL_PREFERENCES_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: PERSONAL_PREFERENCES_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: PERSONAL_PREFERENCES_ACTION.REMOVE, data: data }); },
};
