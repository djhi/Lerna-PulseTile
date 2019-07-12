"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../core/actions/functions");
exports.FEEDS_LIST_ACTION = functions_1.createRequestTypes('FEEDS_LIST_ACTION');
exports.feedsListAction = {
    request: function (data) { return ({ type: exports.FEEDS_LIST_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.FEEDS_LIST_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.FEEDS_LIST_ACTION.FAILURE, error: error }); },
};
