"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.EMERGENCY_CONTACTS_ACTION = functions_1.createRequestTypes('EMERGENCY_CONTACTS_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.emergencyContactsAction = {
    request: function (data) { return ({ type: exports.EMERGENCY_CONTACTS_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.EMERGENCY_CONTACTS_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.EMERGENCY_CONTACTS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.EMERGENCY_CONTACTS_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.EMERGENCY_CONTACTS_ACTION.REMOVE, data: data }); },
};
