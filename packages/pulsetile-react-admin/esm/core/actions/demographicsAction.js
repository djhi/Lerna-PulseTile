import { createRequestTypes } from "./functions";
export var DEMOGRAPHICS_ACTION = createRequestTypes('DEMOGRAPHICS_ACTION');
export var demographicsAction = {
    request: function (data) { return ({ type: DEMOGRAPHICS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: DEMOGRAPHICS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: DEMOGRAPHICS_ACTION.FAILURE, error: error }); },
};
