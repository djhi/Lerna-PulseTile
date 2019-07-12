"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../core/actions/functions");
exports.USER_SEARCH_ACTION = functions_1.createRequestTypes('USER_SEARCH_ACTION', { REMOVE: 'REMOVE', REQUEST_ID: 'REQUEST_ID', SEARCH_BY: 'SEARCH_BY' });
exports.userSearchAction = {
    request: function (data) { return ({ type: exports.USER_SEARCH_ACTION.REQUEST, data: data }); },
    requestId: function (data) { return ({ type: exports.USER_SEARCH_ACTION.REQUEST_ID, data: data }); },
    searchBy: function (searchType, value) { return ({ type: exports.USER_SEARCH_ACTION.SEARCH_BY, searchType: searchType, value: value }); },
    remove: function (data) { return ({ type: exports.USER_SEARCH_ACTION.REMOVE, data: data }); },
};
