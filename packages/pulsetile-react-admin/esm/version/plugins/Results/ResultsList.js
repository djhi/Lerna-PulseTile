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
import { DateField, TextField } from "react-admin";
import ListTemplate from "../../../core/common/ResourseTemplates/ListTemplate";
import ResultsShow from "./ResultsShow";
import DatagridRow from "./fragments/DatagridRow";
/**
 * This component returns block with Results list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 * @constructor
 */
var ResultsList = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(ListTemplate, __assign({ show: ResultsShow, resourceUrl: "labresults", title: "Results", notCreate: true, CustomRow: DatagridRow, isCustomDatagrid: true }, rest),
        React.createElement(DateField, { label: "Test Name", source: "testName" }),
        React.createElement(TextField, { label: "Sample Taken", source: "sampleTaken" }),
        React.createElement(TextField, { label: "Date Created", source: "dateCreated" }),
        React.createElement(TextField, { label: "Source", source: "source" })));
};
export default ResultsList;
