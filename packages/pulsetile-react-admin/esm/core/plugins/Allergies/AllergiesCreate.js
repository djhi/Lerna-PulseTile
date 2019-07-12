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
import Inputs from "./fragments/Inputs";
/**
 * This component returns Allergies creation form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var AllergiesCreate = function (props) { return (React.createElement(CreateTemplate, __assign({ blockTitle: "Allergy" }, props),
    React.createElement(Inputs, null))); };
export default AllergiesCreate;
