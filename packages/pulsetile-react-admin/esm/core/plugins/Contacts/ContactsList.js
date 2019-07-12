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
import { TextField } from "react-admin";
import ListTemplate from "../../common/ResourseTemplates/ListTemplate";
import ContactsCreate from "./ContactsCreate";
import ContactsEdit from "./ContactsEdit";
import ContactsShow from "./ContactsShow";
import DatagridRow from "./fragments/DatagridRow";
/**
 * This component returns block with Contacts list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var ContactsList = function (props) { return (React.createElement(ListTemplate, __assign({ create: ContactsCreate, edit: ContactsEdit, show: ContactsShow, resourceUrl: "contacts", title: "Contacts", CustomRow: DatagridRow, isCustomDatagrid: true }, props),
    React.createElement(TextField, { source: "name", label: "Name" }),
    React.createElement(TextField, { source: "relationship", label: "Relationship" }),
    React.createElement(TextField, { source: "nextOfKin", label: "Next Of Kin" }),
    React.createElement(TextField, { source: "source", label: "Source" }))); };
export default ContactsList;
