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
import { TextField } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import ShowTemplate from "../../../core/common/ResourseTemplates/ShowTemplate";
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
var TopThreeThingsShow = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(ShowTemplate, __assign({ pageTitle: "Top Three Things" }, rest),
        React.createElement(TextField, { className: classes.labelBlock, source: "name1", label: "Issue #1" }),
        React.createElement(TextField, { className: classes.labelBlock, source: "description1", label: "Description #1" }),
        React.createElement(TextField, { className: classes.labelBlock, source: "name2", label: "Issue #2" }),
        React.createElement(TextField, { className: classes.labelBlock, source: "description2", label: "Description #2" }),
        React.createElement(TextField, { className: classes.labelBlock, source: "name3", label: "Issue #3" }),
        React.createElement(TextField, { className: classes.labelBlock, source: "description3", label: "Description #3" })));
};
export default withStyles(styles)(TopThreeThingsShow);
