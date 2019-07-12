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
import { SET_SELECTED_FEEDS_ACTION } from "../actions/setSelectedFeedsAction";
var initialState = {
    data: [],
    loading: false,
    error: null,
};
/**
 * This component returns reducer for Feeds list action
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} state
 * @param {shape} action
 * @return {shape}
 */
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SET_SELECTED_FEEDS_ACTION:
            return __assign({}, state, { loading: false, data: get(action, "data", []) });
        default:
            return state;
    }
});
