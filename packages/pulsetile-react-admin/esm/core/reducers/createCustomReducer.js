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
var initialState = {
    data: null,
    loading: false,
    error: null,
};
/**
 * This function creates custom reducer by action name
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  actionName
 * @param {string} data
 */
export default function createCustomReducer(actionName, data) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case actionName.REQUEST:
                return __assign({}, state, { loading: true });
            case actionName.SUCCESS:
                return __assign({}, state, { loading: false, data: get(action, data, []) });
            case actionName.FAILURE:
                return __assign({}, state, { loading: false, error: get(action, "error", null) });
            default:
                return state;
        }
    };
}
