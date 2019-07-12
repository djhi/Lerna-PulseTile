import { createRequestTypes } from "./functions";
export var SHOW_MODE_ACTION = createRequestTypes('SHOW_MODE_ACTION');
export var showModeAction = {
    request: function (data) { return ({ type: SHOW_MODE_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SHOW_MODE_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SHOW_MODE_ACTION.FAILURE, error: error }); },
};
