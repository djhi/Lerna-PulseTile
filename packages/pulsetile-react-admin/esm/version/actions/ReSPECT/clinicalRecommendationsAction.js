import { createRequestTypes } from "../../../core/actions/functions";
export var CLINICAL_RECOMMENDATIONS_ACTION = createRequestTypes('CLINICAL_RECOMMENDATIONS_ACTION', { CREATE: 'CREATE', REMOVE: 'REMOVE' });
export var clinicalRecommendationsAction = {
    request: function (data) { return ({ type: CLINICAL_RECOMMENDATIONS_ACTION.REQUEST, data: data }); },
    create: function (data) { return ({ type: CLINICAL_RECOMMENDATIONS_ACTION.CREATE, data: data }); },
    success: function (data) { return ({ type: CLINICAL_RECOMMENDATIONS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: CLINICAL_RECOMMENDATIONS_ACTION.FAILURE, error: error }); },
    remove: function (data) { return ({ type: CLINICAL_RECOMMENDATIONS_ACTION.REMOVE, data: data }); },
};
