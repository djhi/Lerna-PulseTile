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
var showHeadingsAction_1 = require("../actions/showHeadingsAction");
var config_1 = require("../pages/PatientSummary/config");
var initialState = {
    data: config_1.getHeadingsLists(),
    loading: false,
    error: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case showHeadingsAction_1.SHOW_HEADINGS_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case showHeadingsAction_1.SHOW_HEADINGS_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, data: __assign({}, action.data) });
        case showHeadingsAction_1.SHOW_HEADINGS_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get_1.default(action, "error", null) });
        default:
            return state;
    }
});
