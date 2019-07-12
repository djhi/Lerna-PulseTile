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
var businessIntelligenceAction_1 = require("../actions/BusinessIntelligence/businessIntelligenceAction");
var dummyBIdata_1 = __importDefault(require("./dummyBIdata"));
var initialState = {
    data: false,
    patients: null,
    loading: false,
    error: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case businessIntelligenceAction_1.BUSINESS_INTELLIGENCE_ACTION.REQUEST:
            return __assign({}, state, { loading: true, patients: null });
        case businessIntelligenceAction_1.BUSINESS_INTELLIGENCE_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, patients: dummyBIdata_1.default.patients });
        case businessIntelligenceAction_1.BUSINESS_INTELLIGENCE_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get_1.default(action, 'error', null) });
        case businessIntelligenceAction_1.BUSINESS_INTELLIGENCE_ACTION.UPDATE:
            return __assign({}, state, { loading: false, data: get_1.default(action, 'data', null) });
        case businessIntelligenceAction_1.BUSINESS_INTELLIGENCE_ACTION.REMOVE:
            return __assign({}, state, { loading: false, data: null });
        default:
            return state;
    }
});
