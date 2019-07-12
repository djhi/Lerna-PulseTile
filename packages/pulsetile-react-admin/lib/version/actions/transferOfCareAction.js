"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../core/actions/functions");
exports.TRANSFER_OF_CARE_ACTION = functions_1.createRequestTypes('TRANSFER_OF_CARE_ACTION', {
    CREATE: 'CREATE',
    REQUEST_ONE: 'REQUEST_ONE',
    LIST: 'LIST',
    DETAILS: 'DETAILS',
});
exports.transferOfCareAction = {
    request: function (data) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.REQUEST, data: data }); },
    requestOne: function (heading, sourceId) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.REQUEST_ONE, heading: heading, sourceId: sourceId }); },
    list: function (data) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.LIST, data: data }); },
    details: function (data) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.DETAILS, data: data }); },
    create: function (data) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.SUCCESS, data: data }); },
    error: function (data) { return ({ type: exports.TRANSFER_OF_CARE_ACTION.FAILURE, data: data }); },
};
