import { createRequestTypes } from "./functions";
export var ADVANCED_SEARCH_ACTION = createRequestTypes('ADVANCED_SEARCH_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var advancedSearchAction = {
    create: function (data) { return ({ type: ADVANCED_SEARCH_ACTION.CREATE, data: data }); },
    remove: function (data) { return ({ type: ADVANCED_SEARCH_ACTION.REMOVE, data: data }); },
};
