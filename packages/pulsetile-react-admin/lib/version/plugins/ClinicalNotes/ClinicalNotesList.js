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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var ListTemplate_1 = __importDefault(require("../../../core/common/ResourseTemplates/ListTemplate"));
var ClinicalNotesCreate_1 = __importDefault(require("./ClinicalNotesCreate"));
var ClinicalNotesEdit_1 = __importDefault(require("./ClinicalNotesEdit"));
var ClinicalNotesShow_1 = __importDefault(require("./ClinicalNotesShow"));
var DatagridRow_1 = __importDefault(require("./fragments/DatagridRow"));
/**
 * This component returns block with Personal Notes list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 * @constructor
 */
var PersonalNotesList = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(ListTemplate_1.default, __assign({ create: ClinicalNotesCreate_1.default, edit: ClinicalNotesEdit_1.default, show: ClinicalNotesShow_1.default, resourceUrl: "clinicalnotes", title: "Clinical Notes", CustomRow: DatagridRow_1.default, isCustomDatagrid: true }, rest),
        react_1.default.createElement(react_admin_1.TextField, { label: "Type", source: "clinicalNotesType" }),
        react_1.default.createElement(react_admin_1.TextField, { label: "Author", source: "author" }),
        react_1.default.createElement(react_admin_1.DateField, { label: "Date Created", source: "dateCreated" }),
        react_1.default.createElement(react_admin_1.TextField, { label: "Source", source: "source" })));
};
exports.default = PersonalNotesList;
