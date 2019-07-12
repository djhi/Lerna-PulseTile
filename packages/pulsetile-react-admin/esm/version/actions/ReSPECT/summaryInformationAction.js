import { createRequestTypes } from "../../../core/actions/functions";
export var SUMMARY_INFORMATION_ACTION = createRequestTypes('SUMMARY_INFORMATION_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var summaryInformationAction = {
    request: function (data) { return ({ type: SUMMARY_INFORMATION_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: SUMMARY_INFORMATION_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: SUMMARY_INFORMATION_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SUMMARY_INFORMATION_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: SUMMARY_INFORMATION_ACTION.REMOVE, data: data }); },
};
