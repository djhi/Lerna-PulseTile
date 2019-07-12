import { createRequestTypes } from "./functions";
export var CLINICAL_QUERY_ACTION = createRequestTypes('CLINICAL_QUERY_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var clinicalQueryAction = {
    create: function (data) { return ({ type: CLINICAL_QUERY_ACTION.CREATE, data: data }); },
    remove: function (data) { return ({ type: CLINICAL_QUERY_ACTION.REMOVE, data: data }); },
};
