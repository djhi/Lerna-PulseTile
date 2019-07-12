"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var formStyles_1 = __importDefault(require("../../../../core/config/formStyles"));
/**
 * This component returns Referrals creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 */
var ReferralsInputs = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.TextInput, { source: "referralFrom", label: "Referral From", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.TextInput, { source: "referralTo", label: "Referral To", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.DateInput, { source: "dateOfReferral", label: "Date of Referral", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.LongTextInput, { source: "referralReason", label: "Reason for Referral", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.LongTextInput, { source: "referralSummary", label: "Clinical Summary", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.TextInput, { source: "author", label: "Author", fullWidth: true, defaultValue: localStorage.getItem('username'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true })),
        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement(react_admin_1.DateInput, { source: "dateSubmitted", label: "Date", fullWidth: true, defaultValue: moment_1.default().format('MM/DD/YYYY'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true }))));
};
exports.default = styles_1.withStyles(formStyles_1.default)(ReferralsInputs);
