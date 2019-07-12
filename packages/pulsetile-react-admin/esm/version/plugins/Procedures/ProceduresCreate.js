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
import CreateTemplate from "../../../core/common/ResourseTemplates/CreateTemplate";
import Form from "./fragments/Form";
/**
 * This component returns Procedure creation form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var ProceduresCreate = function (props) { return (React.createElement(CreateTemplate, __assign({ isCustom: true, blockTitle: "Procedure" }, props),
    React.createElement(Form, __assign({ isCreate: true }, props)))); };
export default ProceduresCreate;
