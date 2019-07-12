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
var VaccinationsCreate_1 = __importDefault(require("./VaccinationsCreate"));
var VaccinationsEdit_1 = __importDefault(require("./VaccinationsEdit"));
var VaccinationsShow_1 = __importDefault(require("./VaccinationsShow"));
var DatagridRow_1 = __importDefault(require("./fragments/DatagridRow"));
/**
 * This component returns block with Vaccinations list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 * @constructor
 */
var VaccinationsList = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(ListTemplate_1.default, __assign({ create: VaccinationsCreate_1.default, edit: VaccinationsEdit_1.default, show: VaccinationsShow_1.default, resourceUrl: "vaccinations", title: "Vaccinations", CustomRow: DatagridRow_1.default, isCustomDatagrid: true }, rest),
        react_1.default.createElement(react_admin_1.TextField, { label: "Vaccination Name", source: "vaccinationName" }),
        react_1.default.createElement(react_admin_1.DateField, { label: "Date and Time", source: "dateCreated" }),
        react_1.default.createElement(react_admin_1.TextField, { label: "Source", source: "source" })));
};
exports.default = VaccinationsList;
