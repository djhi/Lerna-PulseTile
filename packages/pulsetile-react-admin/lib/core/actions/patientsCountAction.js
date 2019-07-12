"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.PATIENTS_COUNT_ACTION = functions_1.createRequestTypes('PATIENTS_COUNT_ACTION');
exports.patientsCountAction = {
    request: function (data) { return ({ type: exports.PATIENTS_COUNT_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.PATIENTS_COUNT_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.PATIENTS_COUNT_ACTION.FAILURE, error: error }); },
};
