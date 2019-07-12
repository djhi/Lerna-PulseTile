"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("@material-ui/core/styles/index");
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var styles = function (theme) { return ({
    titleBlock: {
        display: "flex",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 15,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    secondTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 24,
        fontWeight: 700,
    },
    chartIcon: {
        paddingRight: 5,
    },
    description: {
        padding: 10,
        fontSize: 16,
    }
}); };
var BarChartTitle = function (_a) {
    var classes = _a.classes, mainTitle = _a.mainTitle, secondTitle = _a.secondTitle, description = _a.description;
    return (react_1.default.createElement("div", { className: classes.chartContainer },
        react_1.default.createElement("div", { className: classes.titleBlock },
            react_1.default.createElement(Tooltip_1.default, { title: "Chart" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: classes.chartIcon, icon: free_solid_svg_icons_1.faChartBar, size: "1.5x" })),
            react_1.default.createElement(Typography_1.default, { className: classes.title }, mainTitle)),
        react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.secondTitle }, secondTitle),
        react_1.default.createElement(Typography_1.default, { className: classes.description }, description)));
};
exports.default = index_1.withStyles(styles)(BarChartTitle);
