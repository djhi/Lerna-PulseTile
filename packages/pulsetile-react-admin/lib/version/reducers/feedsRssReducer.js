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
var feedsRssAction_1 = require("../actions/feedsRssAction");
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
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    var currentRss = get_1.default(state, 'data', {});
    switch (action.type) {
        case feedsRssAction_1.FEEDS_RSS_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case feedsRssAction_1.FEEDS_RSS_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, data: Object.assign({}, currentRss, get_1.default(action, "data", [])) });
        case feedsRssAction_1.FEEDS_RSS_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get_1.default(action, "error", null) });
        default:
            return state;
    }
});
