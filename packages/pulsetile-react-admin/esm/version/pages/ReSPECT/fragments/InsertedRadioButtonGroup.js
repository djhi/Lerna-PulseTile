import React from "react";
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
var styles = function (theme) { return ({
    formGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    formLabel: {
        display: "block",
        color: theme.palette.fontColor,
        fontSize: 14,
        marginBottom: 5,
    },
    formLabelVersion: {
        display: "block",
        color: "#bebebe",
        fontSize: 14,
        marginBottom: 5,
    },
    formInput: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
    },
    formTextarea: {
        width: '98%',
        height: 180,
        padding: 10,
    },
    formHelpText: {
        marginBottom: 5,
    },
    radioGroup: {
        marginLeft: 25,
        marginBottom: 25,
    },
}); };
var InsertedRadioButtonGroup = function (_a) {
    var classes = _a.classes, isSelected = _a.isSelected, variant = _a.variant, handleChange = _a.handleChange, isVersionInfo = _a.isVersionInfo;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormLabel, { className: isVersionInfo ? classes.formLabelVersion : classes.formLabel }, "C - This person is less than 16 (Scotland) / 18 (UK)"),
        isSelected &&
            React.createElement(RadioGroup, { name: "nonSelectABCreason", className: classes.radioGroup, value: variant, onChange: function (e) { return handleChange(e); } },
                React.createElement(FormHelperText, null, "Please select 1 or 2, and also 3 as applicable or explain in section D below."),
                React.createElement(FormControlLabel, { value: "valueSetC1", control: React.createElement(Radio, null), disabled: isVersionInfo, label: "1 - They have sufficient maturity and understanding to participate in making this plan." }),
                React.createElement(FormControlLabel, { value: "valueSetC2", control: React.createElement(Radio, null), disabled: isVersionInfo, label: "2 - They do not have sufficient maturity and understanding to participate in making this plan. Their views, when known, have been taken into account." }),
                React.createElement(FormControlLabel, { value: "valueSetC3", control: React.createElement(Radio, null), disabled: isVersionInfo, label: "3 - Those holding parental responsibility have been fully involved in discussing and making this plan." }))));
};
export default withStyles(styles)(InsertedRadioButtonGroup);
