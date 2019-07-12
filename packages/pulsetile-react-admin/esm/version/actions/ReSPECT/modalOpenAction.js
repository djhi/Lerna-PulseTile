import { createRequestTypes } from "../../../core/actions/functions";
export var MODAL_OPEN_ACTION = createRequestTypes('MODAL_OPEN_ACTION');
export var modalOpenAction = {
    request: function (data) { return ({ type: MODAL_OPEN_ACTION.REQUEST, data: data }); },
};
