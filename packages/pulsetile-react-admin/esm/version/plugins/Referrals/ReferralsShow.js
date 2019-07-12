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
import ShowTemplate from "../../../core/common/ResourseTemplates/ShowTemplate";
/**
 * This component returns block with Referral details component
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ReferralsShow = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(ShowTemplate, __assign({ pageTitle: "Referral" }, rest),
        React.createElement(TextField, { source: "referralFrom", label: "Referral From" }),
        React.createElement(TextField, { source: "referralTo", label: "Referral To" }),
        React.createElement(DateField, { source: "dateOfReferral", label: "Date of Referral" }),
        React.createElement(TextField, { source: "referralReason", label: "Reason of Referral" }),
        React.createElement(TextField, { source: "referralSummary", label: "Clinical Summary" }),
        React.createElement(TextField, { source: "author", label: "Author" })));
};
export default ReferralsShow;
