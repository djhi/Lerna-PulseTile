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
import React from "react";
import { TextField, DateField } from "react-admin";
import ListTemplate from "../../common/ResourseTemplates/ListTemplate";
import AllergiesCreate from "./AllergiesCreate";
import AllergiesEdit from "./AllergiesEdit";
import AllergiesShow from "./AllergiesShow";
import DatagridRow from "./fragments/DatagridRow";
/**
 * This component returns block with Allergies list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var AllergiesList = function (props) { return (React.createElement(ListTemplate, __assign({ create: AllergiesCreate, edit: AllergiesEdit, show: AllergiesShow, resourceUrl: "allergies", title: "Allergies", CustomRow: DatagridRow, isCustomDatagrid: true }, props),
    React.createElement(TextField, { source: "cause", label: "Cause" }),
    React.createElement(DateField, { source: "dateCreated", label: "Date" }),
    React.createElement(TextField, { source: "source", label: "Source" }))); };
export default AllergiesList;
