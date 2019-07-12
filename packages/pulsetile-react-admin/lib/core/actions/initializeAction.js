"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.INITIALIZE_ACTION = functions_1.createRequestTypes('INITIALIZE_ACTION');
exports.initializeAction = {
    request: function (data) { return ({ type: exports.INITIALIZE_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.INITIALIZE_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.INITIALIZE_ACTION.FAILURE, error: error }); },
};
