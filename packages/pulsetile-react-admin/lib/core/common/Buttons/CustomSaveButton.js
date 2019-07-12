"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Done_1 = __importDefault(require("@material-ui/icons/Done"));
var styles = function (theme) { return ({
    saveButton: {
        display: "flex",
        alignItems: "flex-end",
        width: 130,
        height: 40,
        margin: 8,
        backgroundColor: theme.palette.secondaryMainColor,
        color: "white",
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        padding: 0,
        "& svg": {
            marginRight: 5,
        },
        "& span": {
            textTransform: "capitalize"
        },
        "&:hover": {
            backgroundColor: "white",
            color: theme.palette.secondaryMainColor,
        }
    },
}); };
/**
 * This component returns Save button with custom styles
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 */
var CustomSaveButton = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(react_admin_1.SaveButton, __assign({ "aria-label": "Complete", label: "Complete", icon: react_1.default.createElement(Done_1.default, { className: classes.icon }), className: classes.saveButton }, rest)));
};
exports.default = styles_1.withStyles(styles)(CustomSaveButton);
