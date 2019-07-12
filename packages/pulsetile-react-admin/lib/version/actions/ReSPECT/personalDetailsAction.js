"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.PERSONAL_DETAILS_ACTION = functions_1.createRequestTypes('PERSONAL_DETAILS_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.personalDetailsAction = {
    request: function (data) { return ({ type: exports.PERSONAL_DETAILS_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.PERSONAL_DETAILS_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.PERSONAL_DETAILS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.PERSONAL_DETAILS_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.PERSONAL_DETAILS_ACTION.REMOVE, data: data }); },
};
