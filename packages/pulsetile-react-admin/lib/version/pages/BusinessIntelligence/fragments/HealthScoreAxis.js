"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("@material-ui/core/styles/index");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles = function (theme) { return ({
    mainBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: -25,
    },
    itemBlock: {
        width: '30%',
        height: 30,
        textAlign: 'center',
    },
    itemBlockCenter: {
        width: '40%',
        height: 30,
        textAlign: 'center',
    },
    borderBlock: {
        height: 15,
    },
    borderBlockCenter: {
        height: 15,
        borderLeft: "1px solid " + theme.palette.fontColor,
        borderRight: "1px solid " + theme.palette.fontColor
    }
}); };
var HealthScoreAxis = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement("div", { className: classes.mainBlock },
        react_1.default.createElement("div", { className: classes.itemBlock },
            react_1.default.createElement("div", { className: classes.borderBlock }),
            react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Poor")),
        react_1.default.createElement("div", { className: classes.itemBlockCenter },
            react_1.default.createElement("div", { className: classes.borderBlockCenter }),
            react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Good")),
        react_1.default.createElement("div", { className: classes.itemBlock },
            react_1.default.createElement("div", { className: classes.borderBlock }),
            react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Very Good"))));
};
exports.default = index_1.withStyles(styles)(HealthScoreAxis);
