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
import { TextField, DateField } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import ShowTemplate from "../../common/ResourseTemplates/ShowTemplate";
var styles = {
    labelBlock: {
        '& > div': {
            marginTop: "0px !important",
            marginBottom: "0px !important",
        },
    },
};
/**
 * This component returns block with Allergies details component
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ProblemsShow = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(ShowTemplate, __assign({ pageTitle: "Problem / Diagnosis" }, rest),
        React.createElement(TextField, { className: classes.labelBlock, label: "Problem issue", source: "problem" }),
        React.createElement(TextField, { className: classes.labelBlock, label: "Description", source: "description" }),
        React.createElement(TextField, { className: classes.labelBlock, label: "Author", source: "author" }),
        React.createElement(DateField, { className: classes.labelBlock, label: "Date", source: "dateCreated" })));
};
export default withStyles(styles)(ProblemsShow);
