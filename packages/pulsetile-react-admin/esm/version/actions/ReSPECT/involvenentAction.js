import { createRequestTypes } from "../../../core/actions/functions";
export var INVOLVEMENT_ACTION = createRequestTypes('INVOLVEMENT_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var involvementAction = {
    request: function (data) { return ({ type: INVOLVEMENT_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: INVOLVEMENT_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: INVOLVEMENT_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: INVOLVEMENT_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: INVOLVEMENT_ACTION.REMOVE, data: data }); },
};
