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
import { ADVANCED_SEARCH_ACTION } from "../actions/advancedSearchAction";
var initialState = {
    data: false,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADVANCED_SEARCH_ACTION.CREATE:
            return __assign({}, state, { data: action.data });
        case ADVANCED_SEARCH_ACTION.REMOVE:
            return __assign({}, state, { data: null });
        default:
            return state;
    }
});
