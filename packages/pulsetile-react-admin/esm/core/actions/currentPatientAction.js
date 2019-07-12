import { createRequestTypes } from "./functions";
export var CURRENT_PATIENT_ACTION = createRequestTypes('CURRENT_PATIENT_ACTION', {
    REQUEST_PHOTO: 'REQUEST_PHOTO',
    SUCCESS_PHOTO: 'SUCCESS_PHOTO',
    FAILURE_PHOTO: 'FAILURE_PHOTO'
});
export var currentPatientAction = {
    request: function (data) { return ({ type: CURRENT_PATIENT_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: CURRENT_PATIENT_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: CURRENT_PATIENT_ACTION.FAILURE, error: error }); },
    requestPhoto: function (data) { return ({ type: CURRENT_PATIENT_ACTION.REQUEST_PHOTO, data: data }); },
    successPhoto: function (data) { return ({ type: CURRENT_PATIENT_ACTION.SUCCESS_PHOTO, data: data }); },
    errorPhoto: function (data) { return ({ type: CURRENT_PATIENT_ACTION.FAILURE_PHOTO, data: data }); },
};
