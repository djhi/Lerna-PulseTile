import { createRequestTypes } from "../../../core/actions/functions";
export var VERSIONS_SERVER_ACTION = createRequestTypes('VERSIONS_SERVER_ACTION', {
    CREATE: 'CREATE',
    PUT: 'PUT',
    REQUEST_ONE: 'REQUEST_ONE',
    REQUEST_LATEST: 'REQUEST_LATEST',
    SUCCESS_ONE: 'SUCCESS_ONE',
    SUCCESS_LATEST: 'SUCCESS_LATEST',
    SUCCESS_CREATE: 'SUCCESS_CREATE',
    SUCCESS_PUT: 'SUCCESS_PUT',
});
export var versionsServerAction = {
    request: function (data) { return ({ type: VERSIONS_SERVER_ACTION.REQUEST, data: data }); },
    requestOne: function (sourceId, versionId) { return ({ type: VERSIONS_SERVER_ACTION.REQUEST_ONE, sourceId: sourceId, versionId: versionId }); },
    requestLatest: function (sourceId, versionId) { return ({ type: VERSIONS_SERVER_ACTION.REQUEST_LATEST, sourceId: sourceId, versionId: versionId }); },
    create: function (data) { return ({ type: VERSIONS_SERVER_ACTION.CREATE, data: data }); },
    put: function (sourceId, versionId, versionData) { return ({ type: VERSIONS_SERVER_ACTION.PUT, sourceId: sourceId, versionId: versionId, versionData: versionData }); },
    success: function (data) { return ({ type: VERSIONS_SERVER_ACTION.SUCCESS, data: data }); },
    successOne: function (data) { return ({ type: VERSIONS_SERVER_ACTION.SUCCESS_ONE, data: data }); },
    successLatest: function (data) { return ({ type: VERSIONS_SERVER_ACTION.SUCCESS_LATEST, data: data }); },
    successCreate: function (data) { return ({ type: VERSIONS_SERVER_ACTION.SUCCESS_CREATE, data: data }); },
    successPut: function (data) { return ({ type: VERSIONS_SERVER_ACTION.SUCCESS_PUT, data: data }); },
    error: function (error) { return ({ type: VERSIONS_SERVER_ACTION.FAILURE, error: error }); },
};
