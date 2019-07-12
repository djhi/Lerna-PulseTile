import { createRequestTypes } from "../../../core/actions/functions";
export var CLINICAL_SIGNATURES_ACTION = createRequestTypes('CLINICAL_SIGNATURES_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var clinicalSignaturesAction = {
    request: function (data) { return ({ type: CLINICAL_SIGNATURES_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: CLINICAL_SIGNATURES_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: CLINICAL_SIGNATURES_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: CLINICAL_SIGNATURES_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: CLINICAL_SIGNATURES_ACTION.REMOVE, data: data }); },
};
