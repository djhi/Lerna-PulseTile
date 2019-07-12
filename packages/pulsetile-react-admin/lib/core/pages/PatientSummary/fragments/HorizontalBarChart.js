"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles = function (theme) { return ({
    backgroundBlock: {
        height: 16,
        backgroundColor: theme.palette.disabledColor,
        borderRadius: 8,
    },
    coloredBlock: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        height: '100%',
    },
    title: {
        marginTop: 15,
    }
}); };
var HorizontalBarChart = function (_a) {
    var classes = _a.classes, title = _a.title, color = _a.color, value = _a.value, maximal = _a.maximal;
    var colorBlockWidth = 100 * value / maximal;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.backgroundBlock },
            react_1.default.createElement("div", { className: classes.coloredBlock, style: { backgroundColor: color, width: colorBlockWidth + '%' } })),
        react_1.default.createElement(Typography_1.default, { variant: "caption", className: classes.title }, title)));
};
exports.default = styles_1.withStyles(styles)(HorizontalBarChart);
