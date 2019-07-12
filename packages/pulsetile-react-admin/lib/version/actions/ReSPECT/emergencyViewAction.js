"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.EMERGENCY_VIEW_ACTION = functions_1.createRequestTypes('EMERGENCY_VIEW_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.emergencyViewAction = {
    request: function (data) { return ({ type: exports.EMERGENCY_VIEW_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.EMERGENCY_VIEW_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.EMERGENCY_VIEW_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.EMERGENCY_VIEW_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.EMERGENCY_VIEW_ACTION.REMOVE, data: data }); },
};
