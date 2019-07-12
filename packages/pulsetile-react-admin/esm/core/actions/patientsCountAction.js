import { createRequestTypes } from "./functions";
export var PATIENTS_COUNT_ACTION = createRequestTypes('PATIENTS_COUNT_ACTION');
export var patientsCountAction = {
    request: function (data) { return ({ type: PATIENTS_COUNT_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: PATIENTS_COUNT_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: PATIENTS_COUNT_ACTION.FAILURE, error: error }); },
};
