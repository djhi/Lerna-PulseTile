"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.ADVANCED_SEARCH_ACTION = functions_1.createRequestTypes('ADVANCED_SEARCH_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.advancedSearchAction = {
    create: function (data) { return ({ type: exports.ADVANCED_SEARCH_ACTION.CREATE, data: data }); },
    remove: function (data) { return ({ type: exports.ADVANCED_SEARCH_ACTION.REMOVE, data: data }); },
};
