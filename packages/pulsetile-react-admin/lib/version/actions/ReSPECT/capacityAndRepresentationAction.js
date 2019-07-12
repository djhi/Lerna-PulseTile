"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.CAPACITY_AND_REPRESENTATION_ACTION = functions_1.createRequestTypes('CAPACITY_AND_REPRESENTATION_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.capacityAndRepresentationAction = {
    request: function (data) { return ({ type: exports.CAPACITY_AND_REPRESENTATION_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.CAPACITY_AND_REPRESENTATION_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.CAPACITY_AND_REPRESENTATION_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.CAPACITY_AND_REPRESENTATION_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.CAPACITY_AND_REPRESENTATION_ACTION.REMOVE, data: data }); },
};
