"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("@material-ui/core/styles/index");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var constants_1 = require("../constants");
var styles = function (theme) { return ({
    legend: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    title: {
        paddingTop: 5,
    },
    legendParameter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        margin: 5,
    },
    square: {
        width: 16,
        height: 16,
        marginRight: 5,
    }
}); };
var MapLegend = function (_a) {
    var classes = _a.classes, isPoorSelected = _a.isPoorSelected, isGoodSelected = _a.isGoodSelected, isVeryGoodSelected = _a.isVeryGoodSelected, togglePoor = _a.togglePoor, toggleGood = _a.toggleGood, toggleVeryGood = _a.toggleVeryGood;
    return (react_1.default.createElement("div", { className: classes.legend },
        react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.title }, "HealthScore"),
        react_1.default.createElement("div", { className: classes.legendParameter, onClick: function () { return togglePoor(); } },
            react_1.default.createElement("div", { className: classes.square, style: { opacity: isPoorSelected ? 1 : 0.6, backgroundColor: constants_1.COLOR_RED, border: "1px solid " + constants_1.COLOR_RED } }),
            react_1.default.createElement(Typography_1.default, null, "Poor (0-25)")),
        react_1.default.createElement("div", { className: classes.legendParameter, onClick: function () { return toggleGood(); } },
            react_1.default.createElement("div", { className: classes.square, style: { opacity: isGoodSelected ? 1 : 0.6, backgroundColor: constants_1.COLOR_AMBER, border: "1px solid " + constants_1.COLOR_AMBER } }),
            react_1.default.createElement(Typography_1.default, null, "Good (26-75)")),
        react_1.default.createElement("div", { className: classes.legendParameter, onClick: function () { return toggleVeryGood(); } },
            react_1.default.createElement("div", { className: classes.square, style: { opacity: isVeryGoodSelected ? 1 : 0.6, backgroundColor: constants_1.COLOR_GREEN, border: "1px solid " + constants_1.COLOR_GREEN } }),
            react_1.default.createElement(Typography_1.default, null, "Very Good (76-100)"))));
};
exports.default = index_1.withStyles(styles)(MapLegend);
