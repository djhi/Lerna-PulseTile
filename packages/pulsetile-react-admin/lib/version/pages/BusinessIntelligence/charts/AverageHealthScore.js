"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var recharts_1 = require("recharts");
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Typography/index"));
var COLOR_EMPTY = '#e9e4e4';
var styles = function (theme) { return ({
    chartTitle: {
        padding: 10,
        fontSize: 14,
        fontWeight: 600,
    },
    chartBlock: {
        width: '100%',
        height: 180,
        textAlign: 'center',
        paddingTop: 10,
    },
    emptyBlock: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    value: {
        marginTop: -140,
    },
    bordersLabels: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: -20,
    }
}); };
var AverageHealthScore = function (_a) {
    var classes = _a.classes, color = _a.color, healthScore = _a.healthScore;
    var data = [
        { name: 'Group A', value: healthScore },
        { name: 'Group B', value: 100 - healthScore }
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_2.default, { variant: "body1", className: classes.chartTitle }, "Average Health Score"),
        (healthScore > 0)
            ?
                react_1.default.createElement("div", { className: classes.chartBlock },
                    react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 200 },
                        react_1.default.createElement(recharts_1.PieChart, null,
                            react_1.default.createElement(recharts_1.Pie, { data: data, startAngle: 180, endAngle: 0, innerRadius: 60, outerRadius: 80, paddingAngle: 5, dataKey: "value" },
                                react_1.default.createElement(recharts_1.Cell, { fill: color }),
                                react_1.default.createElement(recharts_1.Cell, { fill: COLOR_EMPTY })))),
                    react_1.default.createElement(index_2.default, { variant: "h1", className: classes.value },
                        healthScore,
                        " %"),
                    react_1.default.createElement(index_2.default, { variant: "body1" }, "Moderate"),
                    react_1.default.createElement("div", { className: classes.bordersLabels },
                        react_1.default.createElement(index_2.default, { variant: "caption" }, "Unhealthy"),
                        react_1.default.createElement(index_2.default, { variant: "caption" }, "Healthy")))
            :
                react_1.default.createElement("div", { className: classes.emptyBlock },
                    react_1.default.createElement(index_2.default, { variant: "body1" }, "No Records Found"))));
};
exports.default = index_1.withStyles(styles)(AverageHealthScore);
