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
var react_admin_1 = require("react-admin");
var ListTemplate_1 = __importDefault(require("../../common/ResourseTemplates/ListTemplate"));
var AllergiesCreate_1 = __importDefault(require("./AllergiesCreate"));
var AllergiesEdit_1 = __importDefault(require("./AllergiesEdit"));
var AllergiesShow_1 = __importDefault(require("./AllergiesShow"));
var DatagridRow_1 = __importDefault(require("./fragments/DatagridRow"));
/**
 * This component returns block with Allergies list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var AllergiesList = function (props) { return (react_1.default.createElement(ListTemplate_1.default, __assign({ create: AllergiesCreate_1.default, edit: AllergiesEdit_1.default, show: AllergiesShow_1.default, resourceUrl: "allergies", title: "Allergies", CustomRow: DatagridRow_1.default, isCustomDatagrid: true }, props),
    react_1.default.createElement(react_admin_1.TextField, { source: "cause", label: "Cause" }),
    react_1.default.createElement(react_admin_1.DateField, { source: "dateCreated", label: "Date" }),
    react_1.default.createElement(react_admin_1.TextField, { source: "source", label: "Source" }))); };
exports.default = AllergiesList;
