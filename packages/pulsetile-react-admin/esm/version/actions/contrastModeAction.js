import { createRequestTypes } from "../../core/actions/functions";
export var CONTRAST_MODE_ACTION = createRequestTypes('CONTRAST_MODE_ACTION');
export var contrastModeAction = {
    request: function (data) { return ({ type: CONTRAST_MODE_ACTION.REQUEST, data: data }); },
};
