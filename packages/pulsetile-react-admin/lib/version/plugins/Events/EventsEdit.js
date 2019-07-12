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
var react_1 = __importDefault(require("react"));
var EditTemplate_1 = __importDefault(require("../../../core/common/ResourseTemplates/EditTemplate"));
var Form_1 = __importDefault(require("./fragments/Form"));
/**
 * This component returns block with edit form for Events
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var EventsEdit = function (props) { return (react_1.default.createElement(EditTemplate_1.default, __assign({ isCustom: true, blockTitle: "Event" }, props),
    react_1.default.createElement(Form_1.default, __assign({}, props)))); };
exports.default = EventsEdit;
