import React from "react";
import { TextInput, DateInput, LongTextInput } from "react-admin";
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from "@material-ui/core/FormGroup";
import formStyles from "../../../config/formStyles";
/**
 * This component returns inputs for Allergies creation/editing forms
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 */
var AllergiesInputs = function (_a) {
    var classes = _a.classes;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "cause", label: "Cause", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "reaction", label: "Reaction / Description", rows: 20, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "causeCode", label: "Terminology", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "causeTerminology", label: "Terminology Code", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "author", label: "Author", defaultValue: localStorage.getItem('username'), disabled: true, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(DateInput, { className: classes.labelBlock, source: "dateCreated", label: "Date", defaultValue: moment().format('MM/DD/YYYY'), disabled: true, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } }))));
};
export default withStyles(formStyles)(AllergiesInputs);
