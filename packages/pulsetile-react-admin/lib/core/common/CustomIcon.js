"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) { return ({
    fontAwesomeIcon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight: 10,
        height: 37,
        boxSizing: 'border-box',
    },
}); };
var CustomIcon = function (_a) {
    var classes = _a.classes, iconClassName = _a.iconClassName;
    return (react_1.default.createElement("div", { className: classes.fontAwesomeIcon },
        react_1.default.createElement("i", { className: iconClassName })));
};
exports.default = styles_1.withStyles(styles)(CustomIcon);
