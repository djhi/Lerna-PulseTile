var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import get from "lodash/get";
import { BUSINESS_INTELLIGENCE_ACTION } from "../actions/BusinessIntelligence/businessIntelligenceAction";
import dummyData from "./dummyBIdata";
var initialState = {
    data: false,
    patients: null,
    loading: false,
    error: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case BUSINESS_INTELLIGENCE_ACTION.REQUEST:
            return __assign({}, state, { loading: true, patients: null });
        case BUSINESS_INTELLIGENCE_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, patients: dummyData.patients });
        case BUSINESS_INTELLIGENCE_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get(action, 'error', null) });
        case BUSINESS_INTELLIGENCE_ACTION.UPDATE:
            return __assign({}, state, { loading: false, data: get(action, 'data', null) });
        case BUSINESS_INTELLIGENCE_ACTION.REMOVE:
            return __assign({}, state, { loading: false, data: null });
        default:
            return state;
    }
});
