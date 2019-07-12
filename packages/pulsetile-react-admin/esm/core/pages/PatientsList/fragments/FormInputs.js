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
import React from "react";
import { TextInput, DateInput, RadioButtonGroupInput } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
var genderChoices = [
    { id: 'male', name: 'Male' },
    { id: 'female', name: 'Female' },
];
var styles = {
    halfWidthBlock: {
        width: "auto !important",
    },
    halfWidth: {
        display: "inline-block",
        width: "50% !important",
    },
    labelBlock: {
        '& > div': {
            marginBottom: "0px !important",
        },
    },
};
var FormInputs = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(TextInput, __assign({}, rest, { source: "prefix", label: "Preferred Name", fullWidth: true })),
        React.createElement("div", { className: classes.halfWidthBlock },
            React.createElement(TextInput, { className: classes.halfWidth, source: "firstName", label: "Name" }),
            React.createElement(TextInput, { className: classes.halfWidth, source: "lastName", label: "Surname" })),
        React.createElement(DateInput, { source: "birthDate", label: "Born", fullWidth: true }),
        React.createElement(RadioButtonGroupInput, { source: "gender", label: "Gender", choices: genderChoices }),
        React.createElement(TextInput, { source: "address", label: "Address", fullWidth: true }),
        React.createElement("div", { className: classes.halfWidthBlock },
            React.createElement(TextInput, { className: classes.halfWidth, source: "city", label: "City" }),
            React.createElement(TextInput, { className: classes.halfWidth, source: "district", label: "District" })),
        React.createElement("div", { className: classes.halfWidthBlock },
            React.createElement(TextInput, { className: classes.halfWidth, source: "postCode", label: "Post Code" }),
            React.createElement(TextInput, { className: classes.halfWidth, source: "country", label: "Country" })),
        React.createElement(TextInput, { source: "phone", label: "Telephone Number", fullWidth: true }),
        React.createElement(TextInput, { source: "nhsNumber", label: "NHS Number", fullWidth: true })));
};
export default withStyles(styles)(FormInputs);
