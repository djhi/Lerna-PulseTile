"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) { return ({
    link: {
        color: theme.palette.secondaryMainColor,
    }
}); };
var RadioButtonWithLink = function (_a) {
    var classes = _a.classes, onRowClick = _a.onRowClick;
    return (react_1.default.createElement("p", null,
        "Yes (if so, document details in ",
        react_1.default.createElement("span", { className: classes.link, onClick: function () { return onRowClick(10); } }, "emergency contact section"),
        ")"));
};
exports.default = styles_1.withStyles(styles)(RadioButtonWithLink);
