"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.PERSONAL_PREFERENCES_ACTION = functions_1.createRequestTypes('PERSONAL_PREFERENCES_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.personalPreferencesAction = {
    request: function (data) { return ({ type: exports.PERSONAL_PREFERENCES_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.PERSONAL_PREFERENCES_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.PERSONAL_PREFERENCES_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.PERSONAL_PREFERENCES_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.PERSONAL_PREFERENCES_ACTION.REMOVE, data: data }); },
};
