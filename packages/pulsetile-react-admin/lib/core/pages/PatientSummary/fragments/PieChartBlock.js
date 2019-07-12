"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var recharts_1 = require("recharts");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles = {
    chartBlock: {
        width: '100%',
        height: 180,
        textAlign: 'center',
        paddingTop: 10,
    },
    value: {
        marginTop: -145,
    },
    diagnosis: {
        marginTop: 10,
    }
};
var COLOR_EMPTY = '#e9e4e4';
var PieChartBlock = function (_a) {
    var classes = _a.classes, value = _a.value, units = _a.units, color = _a.color, title = _a.title, maximal = _a.maximal, diagnosis = _a.diagnosis;
    var data = [
        { name: 'Group A', value: value },
        { name: 'Group B', value: (maximal - value) }
    ];
    return (react_1.default.createElement("div", { className: classes.chartBlock },
        react_1.default.createElement(Typography_1.default, { variant: "h1" }, title),
        react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 200 },
            react_1.default.createElement(recharts_1.PieChart, null,
                react_1.default.createElement(recharts_1.Pie, { data: data, startAngle: 180, endAngle: 0, innerRadius: 60, outerRadius: 80, paddingAngle: 5, dataKey: "value" },
                    react_1.default.createElement(recharts_1.Cell, { fill: color }),
                    react_1.default.createElement(recharts_1.Cell, { fill: COLOR_EMPTY })))),
        react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.value }, value),
        react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.units }, units),
        react_1.default.createElement(Typography_1.default, { variant: "caption", className: classes.diagnosis }, diagnosis)));
};
exports.default = styles_1.withStyles(styles)(PieChartBlock);
