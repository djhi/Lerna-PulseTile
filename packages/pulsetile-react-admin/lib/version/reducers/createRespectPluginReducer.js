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
var initialState = {
    data: null,
    loading: false,
    error: null,
};
/**
 * This function creates reducer for ReSPECT-plugin actions
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} actionName
 */
function createRespectPluginReducer(actionName) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case actionName.REQUEST:
                return __assign({}, state, { loading: true });
            case actionName.CREATE:
                return __assign({}, state, { loading: false, data: action.data });
            case actionName.SUCCESS:
                return __assign({}, state, { loading: false, data: action.data });
            case actionName.FAILURE:
                return __assign({}, state, { loading: false, error: get_1.default(action, "error", null) });
            case actionName.REMOVE:
                return {
                    data: null,
                    loading: false,
                    error: null,
                };
            default:
                return state;
        }
    };
}
exports.default = createRespectPluginReducer;
