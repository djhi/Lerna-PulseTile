"use strict";
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
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var formStyles_1 = __importDefault(require("../../../../core/config/formStyles"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
/**
 * This component returns Vaccinations creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 */
var VaccinationsCreate = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.TextInput, { source: "vaccinationName", label: "Name", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.DateInput, { source: "vaccinationDateTime", label: "Vaccination date", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.TextInput, { source: "series", label: "Series", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.LongTextInput, { source: "comment", label: "Comment", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.TextInput, { source: "author", label: "Author", fullWidth: true, defaultValue: localStorage.getItem('username'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.DateInput, { source: "dateSubmitted", label: "Date", fullWidth: true, defaultValue: moment_1.default().format('MM/DD/YYYY'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true }))));
};
exports.default = styles_1.withStyles(formStyles_1.default)(VaccinationsCreate);
