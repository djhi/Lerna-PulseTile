"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var VersionCreateButton_1 = __importDefault(require("../buttons/VersionCreateButton"));
var styles = function (theme) { return ({
    emptyBlock: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 48,
        backgroundColor: theme.palette.paperColor,
        textAlign: "center",
        borderBottom: "1px solid " + theme.palette.borderColor,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
    },
}); };
var EmptyRow = function (_a) {
    var classes = _a.classes, versionsInfo = _a.versionsInfo, toggleMode = _a.toggleMode, isLoading = _a.isLoading;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.emptyBlock },
            react_1.default.createElement(Typography_1.default, null, isLoading ? 'Loading...' : 'No Records found')),
        react_1.default.createElement("div", null, !isLoading && react_1.default.createElement(VersionCreateButton_1.default, { toggleMode: toggleMode }))));
};
exports.default = styles_1.withStyles(styles)(EmptyRow);
