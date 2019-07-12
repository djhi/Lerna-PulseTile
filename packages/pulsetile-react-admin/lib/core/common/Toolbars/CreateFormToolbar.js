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
var Block_1 = __importDefault(require("@material-ui/icons/Block"));
var CustomSaveButton_1 = __importDefault(require("../../common/Buttons/CustomSaveButton"));
var styles = function (theme) { return ({
    listButton: {
        display: "flex",
        flexDirection: "row",
        width: 110,
        height: 40,
        margin: "8px !important",
        padding: 0,
        color: theme.palette.paperColor,
        backgroundColor: theme.palette.dangerColor,
        border: "1px solid " + theme.palette.dangerColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            color: theme.palette.dangerColor,
            backgroundColor: theme.palette.paperColor,
        },
        "& svg": {
            marginRight: 2,
        },
        "& span": {
            textTransform: "capitalize",
        },
    },
    toolbar: {
        backgroundColor: theme.palette.toolbarColor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
}); };
/**
 * This component returns toolbar without delete button for create forms
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} props
 */
var CreateFormToolbar = function (_a) {
    var classes = _a.classes, props = __rest(_a, ["classes"]);
    return (react_1.default.createElement(react_admin_1.Toolbar, __assign({ className: classes.toolbar }, props),
        react_1.default.createElement(react_admin_1.ListButton, { label: "Cancel", icon: react_1.default.createElement(Block_1.default, null), className: classes.listButton }),
        react_1.default.createElement(CustomSaveButton_1.default, __assign({}, props))));
};
exports.default = styles_1.withStyles(styles)(CreateFormToolbar);
