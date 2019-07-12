import { createRequestTypes } from "./functions";
export var HTTP_ERROR_ACTION = createRequestTypes('HTTP_ERROR_ACTION', { SAVE: 'SAVE', REMOVE: 'REMOVE' });
export var httpErrorAction = {
    save: function (data) { return ({ type: HTTP_ERROR_ACTION.SAVE, data: data }); },
    remove: function (data) { return ({ type: HTTP_ERROR_ACTION.REMOVE, data: data }); },
};
