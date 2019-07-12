import { createRequestTypes } from "../../core/actions/functions";
export var TRANSFER_OF_CARE_ACTION = createRequestTypes('TRANSFER_OF_CARE_ACTION', {
    CREATE: 'CREATE',
    REQUEST_ONE: 'REQUEST_ONE',
    LIST: 'LIST',
    DETAILS: 'DETAILS',
});
export var transferOfCareAction = {
    request: function (data) { return ({ type: TRANSFER_OF_CARE_ACTION.REQUEST, data: data }); },
    requestOne: function (heading, sourceId) { return ({ type: TRANSFER_OF_CARE_ACTION.REQUEST_ONE, heading: heading, sourceId: sourceId }); },
    list: function (data) { return ({ type: TRANSFER_OF_CARE_ACTION.LIST, data: data }); },
    details: function (data) { return ({ type: TRANSFER_OF_CARE_ACTION.DETAILS, data: data }); },
    create: function (data) { return ({ type: TRANSFER_OF_CARE_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: TRANSFER_OF_CARE_ACTION.SUCCESS, data: data }); },
    error: function (data) { return ({ type: TRANSFER_OF_CARE_ACTION.FAILURE, data: data }); },
};
