"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
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
    }
}); };
var EmptyListBlock = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement("div", { className: classes.emptyBlock },
        react_1.default.createElement(Typography_1.default, null, "No Records found")));
};
exports.default = styles_1.withStyles(styles)(EmptyListBlock);
