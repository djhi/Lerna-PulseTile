"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.SHOW_MODE_ACTION = functions_1.createRequestTypes('SHOW_MODE_ACTION');
exports.showModeAction = {
    request: function (data) { return ({ type: exports.SHOW_MODE_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SHOW_MODE_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SHOW_MODE_ACTION.FAILURE, error: error }); },
};
