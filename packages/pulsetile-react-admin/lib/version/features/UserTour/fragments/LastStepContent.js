"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) { return ({
    link: {
        color: theme.palette.mainColor,
        textDecoration: "none",
    },
}); };
var LastStepContent = function (_a) {
    var classes = _a.classes, title = _a.title, link = _a.link;
    return (react_1.default.createElement("p", { className: "tour-body-content" },
        "For more information and a guide on how to use ",
        title,
        ", please go to ",
        react_1.default.createElement("a", { className: classes.link, href: link, title: title, target: "_blank" }, link)));
};
exports.default = styles_1.withStyles(styles)(LastStepContent);
