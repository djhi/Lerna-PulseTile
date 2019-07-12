"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.SUMMARY_INFORMATION_ACTION = functions_1.createRequestTypes('SUMMARY_INFORMATION_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.summaryInformationAction = {
    request: function (data) { return ({ type: exports.SUMMARY_INFORMATION_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.SUMMARY_INFORMATION_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.SUMMARY_INFORMATION_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SUMMARY_INFORMATION_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.SUMMARY_INFORMATION_ACTION.REMOVE, data: data }); },
};
