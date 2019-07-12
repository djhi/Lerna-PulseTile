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
import MdtCreate from "./MdtCreate";
import MdtEdit from "./MdtEdit";
import MdtShow from "./MdtShow";
import DatagridRow from "./fragments/DatagridRow";
/**
 * This component returns block with MDT list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 * @constructor
 */
var MdtList = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(ListTemplate, __assign({ create: MdtCreate, edit: MdtEdit, show: MdtShow, resourceUrl: "mdtreports", title: "Generic MDT", CustomRow: DatagridRow, isCustomDatagrid: true }, rest),
        React.createElement(DateField, { label: "Date of Request", source: "dateOfRequest" }),
        React.createElement(TextField, { label: "Service / Team", source: "serviceTeam" }),
        React.createElement(DateField, { label: "Date of Meeting", source: "dateOfMeeting" }),
        React.createElement(TextField, { label: "Source", source: "source" })));
};
export default MdtList;
