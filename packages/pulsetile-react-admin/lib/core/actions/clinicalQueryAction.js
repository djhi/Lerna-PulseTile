"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.CLINICAL_QUERY_ACTION = functions_1.createRequestTypes('CLINICAL_QUERY_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
exports.clinicalQueryAction = {
    create: function (data) { return ({ type: exports.CLINICAL_QUERY_ACTION.CREATE, data: data }); },
    remove: function (data) { return ({ type: exports.CLINICAL_QUERY_ACTION.REMOVE, data: data }); },
};
