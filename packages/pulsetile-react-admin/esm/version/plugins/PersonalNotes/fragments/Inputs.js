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
import React from "react";
import { TextInput, DateInput, LongTextInput } from "react-admin";
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from "@material-ui/core/FormGroup";
import formStyles from "../../../../core/config/formStyles";
/**
 * This component returns Personal Notes creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 */
var PersonalNotesInput = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "noteType", label: "Type", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "notes", label: "Note", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "author", label: "Author", fullWidth: true, defaultValue: localStorage.getItem('username'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(DateInput, { source: "dateSubmitted", label: "Date", fullWidth: true, defaultValue: moment().format('MM/DD/YYYY'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true }))));
};
export default withStyles(formStyles)(PersonalNotesInput);
