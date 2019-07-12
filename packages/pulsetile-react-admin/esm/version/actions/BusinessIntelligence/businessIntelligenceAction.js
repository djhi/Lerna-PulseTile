import { createRequestTypes } from "../../../core/actions/functions";
export var BUSINESS_INTELLIGENCE_ACTION = createRequestTypes('BUSINESS_INTELLIGENCE_ACTION', { UPDATE: 'UPDATE', REMOVE: 'REMOVE' });
export var businessIntelligenceAction = {
    request: function (data) { return ({ type: BUSINESS_INTELLIGENCE_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: BUSINESS_INTELLIGENCE_ACTION.SUCCESS, data: data }); },
    error: function (data) { return ({ type: BUSINESS_INTELLIGENCE_ACTION.FAILURE, data: data }); },
    update: function (data) { return ({ type: BUSINESS_INTELLIGENCE_ACTION.UPDATE, data: data }); },
    remove: function (data) { return ({ type: BUSINESS_INTELLIGENCE_ACTION.REMOVE, data: data }); },
};
