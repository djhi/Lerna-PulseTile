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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var userSearchAction_1 = require("../actions/userSearchAction");
var initialState = {
    data: false,
    loading: false,
    error: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case userSearchAction_1.USER_SEARCH_ACTION.REQUEST:
            return __assign({}, state, { loading: false, data: action.data });
        case userSearchAction_1.USER_SEARCH_ACTION.REQUEST_ID:
            return __assign({}, state, { loading: false, id: action.data });
        case userSearchAction_1.USER_SEARCH_ACTION.SEARCH_BY:
            return __assign({}, state, { loading: false, type: get_1.default(action, 'searchType', null), value: get_1.default(action, 'value', null) });
        case userSearchAction_1.USER_SEARCH_ACTION.REMOVE:
            return __assign({}, state, { loading: false, data: null, id: null, type: null, value: null });
        default:
            return state;
    }
});
