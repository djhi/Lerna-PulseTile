import React from "react";
import { TextInput, DateInput, LongTextInput } from "react-admin";
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from "@material-ui/core/FormGroup";
import formStyles from "../../../../core/config/formStyles";
/**
 * This component returns Referrals creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 */
var ReferralsInputs = function (_a) {
    var classes = _a.classes;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "referralFrom", label: "Referral From", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "referralTo", label: "Referral To", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(DateInput, { source: "dateOfReferral", label: "Date of Referral", fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "referralReason", label: "Reason for Referral", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(LongTextInput, { source: "referralSummary", label: "Clinical Summary", rows: 20, fullWidth: true, InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customTextarea } }, InputLabelProps: { shrink: true, className: classes.customFormLabel } })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(TextInput, { source: "author", label: "Author", fullWidth: true, defaultValue: localStorage.getItem('username'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true })),
        React.createElement(FormGroup, { className: classes.formGroup },
            React.createElement(DateInput, { source: "dateSubmitted", label: "Date", fullWidth: true, defaultValue: moment().format('MM/DD/YYYY'), InputProps: { disableUnderline: true, classes: { root: classes.customRoot, input: classes.customInput } }, InputLabelProps: { shrink: true, className: classes.customFormLabel }, disabled: true }))));
};
export default withStyles(formStyles)(ReferralsInputs);
