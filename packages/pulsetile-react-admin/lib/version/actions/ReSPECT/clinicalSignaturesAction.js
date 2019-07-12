"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.CLINICAL_SIGNATURES_ACTION = functions_1.createRequestTypes('CLINICAL_SIGNATURES_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.clinicalSignaturesAction = {
    request: function (data) { return ({ type: exports.CLINICAL_SIGNATURES_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.CLINICAL_SIGNATURES_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.CLINICAL_SIGNATURES_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.CLINICAL_SIGNATURES_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.CLINICAL_SIGNATURES_ACTION.REMOVE, data: data }); },
};
