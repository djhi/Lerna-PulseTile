"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.SHOW_HEADINGS_ACTION = functions_1.createRequestTypes('SHOW_HEADINGS_ACTION');
exports.showHeadingsAction = {
    request: function (data) { return ({ type: exports.SHOW_HEADINGS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SHOW_HEADINGS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SHOW_HEADINGS_ACTION.FAILURE, error: error }); },
};
