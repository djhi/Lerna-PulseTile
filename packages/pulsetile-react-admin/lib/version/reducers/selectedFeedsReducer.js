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
var setSelectedFeedsAction_1 = require("../actions/setSelectedFeedsAction");
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
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case setSelectedFeedsAction_1.SET_SELECTED_FEEDS_ACTION:
            return __assign({}, state, { loading: false, data: get_1.default(action, "data", []) });
        default:
            return state;
    }
});
