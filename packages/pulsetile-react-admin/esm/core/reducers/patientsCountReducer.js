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
import { PATIENTS_COUNT_ACTION } from "../actions/patientsCountAction";
var initialState = {
    data: null,
    loading: false,
    error: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case PATIENTS_COUNT_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case PATIENTS_COUNT_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, data: __assign({}, action.data) });
        case PATIENTS_COUNT_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get(action, "error", null) });
        default:
            return state;
    }
});
