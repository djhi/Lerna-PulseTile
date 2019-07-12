"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.DEMOGRAPHICS_ACTION = functions_1.createRequestTypes('DEMOGRAPHICS_ACTION');
exports.demographicsAction = {
    request: function (data) { return ({ type: exports.DEMOGRAPHICS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.DEMOGRAPHICS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.DEMOGRAPHICS_ACTION.FAILURE, error: error }); },
};
