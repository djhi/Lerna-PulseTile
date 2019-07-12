"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.COLUMNS_TOGGLING_ACTION = functions_1.createRequestTypes('COLUMNS_TOGGLING_ACTION', { TOGGLE: 'TOGGLE', REMOVE: 'REMOVE' });
exports.columnsTogglingAction = {
    toggle: function (resource, columnName, value) { return ({ type: exports.COLUMNS_TOGGLING_ACTION.TOGGLE, resource: resource, columnName: columnName, value: value }); },
    remove: function (data) { return ({ type: exports.COLUMNS_TOGGLING_ACTION.REMOVE, data: data }); },
};
