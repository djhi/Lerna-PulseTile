"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.EMERGENCY_SUMMARY_ACTION = functions_1.createRequestTypes('EMERGENCY_SUMMARY_ACTION');
exports.emergencySummaryAction = {
    request: function (resource, patientId) { return ({ type: exports.EMERGENCY_SUMMARY_ACTION.REQUEST, resource: resource, patientId: patientId }); },
    success: function (data) { return ({ type: exports.EMERGENCY_SUMMARY_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.EMERGENCY_SUMMARY_ACTION.FAILURE, error: error }); },
};
