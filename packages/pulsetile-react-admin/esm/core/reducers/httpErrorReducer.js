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
import { HTTP_ERROR_ACTION } from "../actions/httpErrorAction";
var initialState = {
    data: null,
    loading: false,
    error: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case HTTP_ERROR_ACTION.SAVE:
            return __assign({}, state, { loading: false, data: __assign({}, action.data) });
        case HTTP_ERROR_ACTION.REMOVE:
            return __assign({}, state, { loading: false, data: null });
        default:
            return state;
    }
});
