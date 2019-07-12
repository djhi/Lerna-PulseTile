import { createRequestTypes } from "../../../core/actions/functions";
export var CAPACITY_AND_REPRESENTATION_ACTION = createRequestTypes('CAPACITY_AND_REPRESENTATION_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var capacityAndRepresentationAction = {
    request: function (data) { return ({ type: CAPACITY_AND_REPRESENTATION_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: CAPACITY_AND_REPRESENTATION_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: CAPACITY_AND_REPRESENTATION_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: CAPACITY_AND_REPRESENTATION_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: CAPACITY_AND_REPRESENTATION_ACTION.REMOVE, data: data }); },
};
