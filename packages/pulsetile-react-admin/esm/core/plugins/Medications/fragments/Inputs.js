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
import { DateInput, SelectInput, LongTextInput, TextInput } from "react-admin";
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import formStyles from "../../../config/formStyles";
import { routesArray } from "./selects";
import FormGroup from "@material-ui/core/FormGroup";
/**
 * This component returns fields for Medications creation/editing forms
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 */
var MedicationsInputs = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "name", label: "Name", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(SelectInput, { source: "route", label: "Route", choices: routesArray, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customSelector } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "doseAmount", label: "Dose Amount", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "doseDirections", label: "Dose Description", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "doseTiming", label: "Dose Timing", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "medicationCode", label: "Medication Description", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(DateInput, { source: "startDate", label: "Start date", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "author", label: "Author", fullWidth: true, defaultValue: localStorage.getItem('username'), disabled: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(DateInput, { source: "dateCreated", label: "Date", fullWidth: true, defaultValue: moment().format('MM/DD/YYYY'), disabled: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } }))));
};
export default withStyles(formStyles)(MedicationsInputs);
