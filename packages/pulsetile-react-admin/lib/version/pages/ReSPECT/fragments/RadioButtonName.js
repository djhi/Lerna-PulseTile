"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var styles = {
    radioMainTitle: {
        marginBottom: 0,
        fontSize: 18,
        fontWeight: 800,
    },
    radioHelpTitle: {
        marginTop: 0,
    },
};
var RadioButtonName = function (_a) {
    var classes = _a.classes, mainTitle = _a.mainTitle, helpTitle = _a.helpTitle;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { className: classes.radioMainTitle }, mainTitle),
        react_1.default.createElement("p", { className: classes.radioHelpTitle }, helpTitle)));
};
exports.default = styles_1.withStyles(styles)(RadioButtonName);
