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
import CreateTemplate from "../../common/ResourseTemplates/CreateTemplate";
import FormInputs from "./fragments/FormInputs";
/**
 * This component returns Patient creation form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var PatientCreate = function (props) { return (React.createElement(CreateTemplate, __assign({ blockTitle: "Patient" }, props),
    React.createElement(FormInputs, null))); };
export default PatientCreate;
