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
var emergencySummaryAction_1 = require("../actions/emergencySummaryAction");
var initialState = {
    data: null,
    loading: false,
    error: null,
};
/**
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} state
 * @param {shape} action
 * @return {shape}
 */
exports.default = (function (state, action) {
    var _a;
    if (state === void 0) { state = initialState; }
    var currentData = get_1.default(state, 'data', {});
    switch (action.type) {
        case emergencySummaryAction_1.EMERGENCY_SUMMARY_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case emergencySummaryAction_1.EMERGENCY_SUMMARY_ACTION.SUCCESS:
            var resource = get_1.default(action, 'data.resource', null);
            var data = get_1.default(action, 'data.data', []);
            return __assign({}, state, { loading: false, data: Object.assign({}, currentData, (_a = {},
                    _a[resource] = data,
                    _a)) });
        case emergencySummaryAction_1.EMERGENCY_SUMMARY_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get_1.default(action, "error", null) });
        default:
            return state;
    }
});
