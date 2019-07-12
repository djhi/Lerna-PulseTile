"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var ExitToApp_1 = __importDefault(require("@material-ui/icons/ExitToApp"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles = function (theme) { return ({
    button: {
        display: "block",
        width: 140,
        height: 40,
        margin: "8px !important",
        color: "white",
        backgroundColor: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            color: theme.palette.secondaryMainColor,
            backgroundColor: "white",
        },
    },
    icon: {
        marginLeft: 10,
    },
}); };
/**
 * This component returns custom Logout button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {func}    userLogout
 * @param {string}  title
 * @param {boolean} hideIcon
 */
var CustomLogoutButton = function (_a) {
    var classes = _a.classes, userLogout = _a.userLogout, _b = _a.title, title = _b === void 0 ? "Sign Out" : _b, hideIcon = _a.hideIcon;
    return (react_1.default.createElement(Tooltip_1.default, { title: title },
        react_1.default.createElement(IconButton_1.default, { className: classes.button, onClick: function () { return userLogout(); }, "aria-label": "Sign Out" },
            title,
            !hideIcon && react_1.default.createElement(ExitToApp_1.default, { className: classes.icon }))));
};
var mapDispatchToProps = {
    userLogout: react_admin_1.userLogout,
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(styles_1.withStyles(styles)(CustomLogoutButton));
