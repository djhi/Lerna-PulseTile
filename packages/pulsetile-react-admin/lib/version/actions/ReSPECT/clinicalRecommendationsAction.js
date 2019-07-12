"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.CLINICAL_RECOMMENDATIONS_ACTION = functions_1.createRequestTypes('CLINICAL_RECOMMENDATIONS_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.clinicalRecommendationsAction = {
    request: function (data) { return ({ type: exports.CLINICAL_RECOMMENDATIONS_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: exports.CLINICAL_RECOMMENDATIONS_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.CLINICAL_RECOMMENDATIONS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.CLINICAL_RECOMMENDATIONS_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: exports.CLINICAL_RECOMMENDATIONS_ACTION.REMOVE, data: data }); },
};
