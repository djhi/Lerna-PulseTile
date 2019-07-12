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
import { EMERGENCY_SUMMARY_ACTION } from "../actions/emergencySummaryAction";
var initialState = {
    data: null,
    loading: false,
    error: null,
};
/**
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} state
 * @param {shape} action
 * @return {shape}
 */
export default (function (state, action) {
    var _a;
    if (state === void 0) { state = initialState; }
    var currentData = get(state, 'data', {});
    switch (action.type) {
        case EMERGENCY_SUMMARY_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case EMERGENCY_SUMMARY_ACTION.SUCCESS:
            var resource = get(action, 'data.resource', null);
            var data = get(action, 'data.data', []);
            return __assign({}, state, { loading: false, data: Object.assign({}, currentData, (_a = {},
                    _a[resource] = data,
                    _a)) });
        case EMERGENCY_SUMMARY_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get(action, "error", null) });
        default:
            return state;
    }
});
