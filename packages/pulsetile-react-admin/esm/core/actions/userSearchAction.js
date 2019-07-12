import { createRequestTypes } from "../../core/actions/functions";
export var USER_SEARCH_ACTION = createRequestTypes('USER_SEARCH_ACTION', { REMOVE: 'REMOVE', REQUEST_ID: 'REQUEST_ID', SEARCH_BY: 'SEARCH_BY' });
export var userSearchAction = {
    request: function (data) { return ({ type: USER_SEARCH_ACTION.REQUEST, data: data }); },
    requestId: function (data) { return ({ type: USER_SEARCH_ACTION.REQUEST_ID, data: data }); },
    searchBy: function (searchType, value) { return ({ type: USER_SEARCH_ACTION.SEARCH_BY, searchType: searchType, value: value }); },
    remove: function (data) { return ({ type: USER_SEARCH_ACTION.REMOVE, data: data }); },
};
