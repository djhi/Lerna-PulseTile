import { createRequestTypes } from "./functions";
export var SHOW_HEADINGS_ACTION = createRequestTypes('SHOW_HEADINGS_ACTION');
export var showHeadingsAction = {
    request: function (data) { return ({ type: SHOW_HEADINGS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SHOW_HEADINGS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SHOW_HEADINGS_ACTION.FAILURE, error: error }); },
};
