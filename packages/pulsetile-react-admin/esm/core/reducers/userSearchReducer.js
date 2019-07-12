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
import { USER_SEARCH_ACTION } from "../actions/userSearchAction";
var initialState = {
    data: false,
    loading: false,
    error: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case USER_SEARCH_ACTION.REQUEST:
            return __assign({}, state, { loading: false, data: action.data });
        case USER_SEARCH_ACTION.REQUEST_ID:
            return __assign({}, state, { loading: false, id: action.data });
        case USER_SEARCH_ACTION.SEARCH_BY:
            return __assign({}, state, { loading: false, type: get(action, 'searchType', null), value: get(action, 'value', null) });
        case USER_SEARCH_ACTION.REMOVE:
            return __assign({}, state, { loading: false, data: null, id: null, type: null, value: null });
        default:
            return state;
    }
});
