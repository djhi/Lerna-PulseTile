import { createRequestTypes } from "../../core/actions/functions";
export var FEEDS_LIST_ACTION = createRequestTypes('FEEDS_LIST_ACTION');
export var feedsListAction = {
    request: function (data) { return ({ type: FEEDS_LIST_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: FEEDS_LIST_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: FEEDS_LIST_ACTION.FAILURE, error: error }); },
};
