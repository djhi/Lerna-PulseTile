"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.INVOLVEMENT_ACTION = functions_1.createRequestTypes('INVOLVEMENT_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.involvementAction = {
    request: function (data) { return ({ type: exports.INVOLVEMENT_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.INVOLVEMENT_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.INVOLVEMENT_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.INVOLVEMENT_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.INVOLVEMENT_ACTION.REMOVE, data: data }); },
};
