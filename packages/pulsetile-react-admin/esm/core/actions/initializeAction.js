import { createRequestTypes } from "./functions";
export var INITIALIZE_ACTION = createRequestTypes('INITIALIZE_ACTION');
export var initializeAction = {
    request: function (data) { return ({ type: INITIALIZE_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: INITIALIZE_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: INITIALIZE_ACTION.FAILURE, error: error }); },
};
