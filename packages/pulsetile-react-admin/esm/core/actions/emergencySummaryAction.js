import { createRequestTypes } from "./functions";
export var EMERGENCY_SUMMARY_ACTION = createRequestTypes('EMERGENCY_SUMMARY_ACTION');
export var emergencySummaryAction = {
    request: function (resource, patientId) { return ({ type: EMERGENCY_SUMMARY_ACTION.REQUEST, resource: resource, patientId: patientId }); },
    success: function (data) { return ({ type: EMERGENCY_SUMMARY_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: EMERGENCY_SUMMARY_ACTION.FAILURE, error: error }); },
};
