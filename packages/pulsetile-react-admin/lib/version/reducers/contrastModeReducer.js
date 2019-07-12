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
var contrastModeAction_1 = require("../actions/contrastModeAction");
var initialState = {
    data: false,
    loading: false,
    error: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case contrastModeAction_1.CONTRAST_MODE_ACTION.REQUEST:
            return __assign({}, state, { loading: false, data: !state.data });
        default:
            return state;
    }
});
