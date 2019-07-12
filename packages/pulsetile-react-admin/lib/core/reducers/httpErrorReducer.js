"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var httpErrorAction_1 = require("../actions/httpErrorAction");
var initialState = {
    data: null,
    loading: false,
    error: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case httpErrorAction_1.HTTP_ERROR_ACTION.SAVE:
            return __assign({}, state, { loading: false, data: __assign({}, action.data) });
        case httpErrorAction_1.HTTP_ERROR_ACTION.REMOVE:
            return __assign({}, state, { loading: false, data: null });
        default:
            return state;
    }
});
