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
import { Toolbar } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import CancelButton from "../Buttons/CancelButton";
import CustomSaveButton from "../Buttons/CustomSaveButton";
var styles = function (theme) { return ({
    toolbar: {
        backgroundColor: theme.palette.toolbarColor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
}); };
/**
 * This component returns custom toolbar for edit form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func}  changeViewType
 * @param {shape} props
 * @constructor
 */
var EditToolbar = function (_a) {
    var classes = _a.classes, changeViewType = _a.changeViewType, props = __rest(_a, ["classes", "changeViewType"]);
    return (React.createElement(Toolbar, __assign({ className: classes.toolbar }, props),
        React.createElement(CancelButton, { redirectTo: changeViewType }),
        React.createElement(CustomSaveButton, __assign({}, props))));
};
export default withStyles(styles)(EditToolbar);
