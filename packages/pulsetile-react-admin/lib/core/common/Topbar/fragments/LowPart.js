"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var PageTitle_1 = __importDefault(require("./PageTitle"));
var styles = {
    greenPart: {
        backgroundColor: "#0D672F",
    },
    logo: {
        width: "auto",
    },
    menuButton: {
        marginRight: 20,
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
};
/**
 * This component returns low part of Showcase TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var LowPart = function (_a) {
    var classes = _a.classes, setSidebarVisibility = _a.setSidebarVisibility, isSidebarOpen = _a.isSidebarOpen, isMenuVisible = _a.isMenuVisible, location = _a.location, patientInfo = _a.patientInfo;
    return (react_1.default.createElement(Toolbar_1.default, { className: classes.greenPart },
        isMenuVisible &&
            react_1.default.createElement(Tooltip_1.default, { title: "Menu" },
                react_1.default.createElement(IconButton_1.default, { className: classes.menuButton, color: "inherit", "aria-label": "Menu" },
                    react_1.default.createElement(Menu_1.default, { onClick: function () { return setSidebarVisibility(!isSidebarOpen); } }))),
        react_1.default.createElement(PageTitle_1.default, { location: location, classes: classes, patientInfo: patientInfo })));
};
exports.default = styles_1.withStyles(styles)(LowPart);
