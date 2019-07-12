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
var styles_1 = require("@material-ui/core/styles");
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_admin_1.TextInput, __assign({}, rest, { source: "prefix", label: "Preferred Name", fullWidth: true })),
        react_1.default.createElement("div", { className: classes.halfWidthBlock },
            react_1.default.createElement(react_admin_1.TextInput, { className: classes.halfWidth, source: "firstName", label: "Name" }),
            react_1.default.createElement(react_admin_1.TextInput, { className: classes.halfWidth, source: "lastName", label: "Surname" })),
        react_1.default.createElement(react_admin_1.DateInput, { source: "birthDate", label: "Born", fullWidth: true }),
        react_1.default.createElement(react_admin_1.RadioButtonGroupInput, { source: "gender", label: "Gender", choices: genderChoices }),
        react_1.default.createElement(react_admin_1.TextInput, { source: "address", label: "Address", fullWidth: true }),
        react_1.default.createElement("div", { className: classes.halfWidthBlock },
            react_1.default.createElement(react_admin_1.TextInput, { className: classes.halfWidth, source: "city", label: "City" }),
            react_1.default.createElement(react_admin_1.TextInput, { className: classes.halfWidth, source: "district", label: "District" })),
        react_1.default.createElement("div", { className: classes.halfWidthBlock },
            react_1.default.createElement(react_admin_1.TextInput, { className: classes.halfWidth, source: "postCode", label: "Post Code" }),
            react_1.default.createElement(react_admin_1.TextInput, { className: classes.halfWidth, source: "country", label: "Country" })),
        react_1.default.createElement(react_admin_1.TextInput, { source: "phone", label: "Telephone Number", fullWidth: true }),
        react_1.default.createElement(react_admin_1.TextInput, { source: "nhsNumber", label: "NHS Number", fullWidth: true })));
};
exports.default = styles_1.withStyles(styles)(FormInputs);
