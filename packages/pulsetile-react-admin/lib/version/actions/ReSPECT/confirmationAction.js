"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.CONFIRMATION_ACTION = functions_1.createRequestTypes('CONFIRMATION_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.confirmationAction = {
    request: function (data) { return ({ type: exports.CONFIRMATION_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.CONFIRMATION_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.CONFIRMATION_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.CONFIRMATION_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.CONFIRMATION_ACTION.REMOVE, data: data }); },
};
