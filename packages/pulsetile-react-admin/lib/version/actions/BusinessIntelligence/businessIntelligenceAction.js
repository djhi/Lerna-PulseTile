"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.BUSINESS_INTELLIGENCE_ACTION = functions_1.createRequestTypes('BUSINESS_INTELLIGENCE_ACTION', { UPDATE: 'UPDATE', REMOVE: 'REMOVE' });
exports.businessIntelligenceAction = {
    request: function (data) { return ({ type: exports.BUSINESS_INTELLIGENCE_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.BUSINESS_INTELLIGENCE_ACTION.SUCCESS, data: data }); },
    error: function (data) { return ({ type: exports.BUSINESS_INTELLIGENCE_ACTION.FAILURE, data: data }); },
    update: function (data) { return ({ type: exports.BUSINESS_INTELLIGENCE_ACTION.UPDATE, data: data }); },
    remove: function (data) { return ({ type: exports.BUSINESS_INTELLIGENCE_ACTION.REMOVE, data: data }); },
};
