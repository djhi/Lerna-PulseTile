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
import { FEEDS_RSS_ACTION } from "../actions/feedsRssAction";
var initialState = {
    data: [],
    loading: false,
    error: null,
};
/**
 * This component returns reducer for RSS getting
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} state
 * @param {shape} action
 * @return {shape}
 */
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    var currentRss = get(state, 'data', {});
    switch (action.type) {
        case FEEDS_RSS_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case FEEDS_RSS_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, data: Object.assign({}, currentRss, get(action, "data", [])) });
        case FEEDS_RSS_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get(action, "error", null) });
        default:
            return state;
    }
});
