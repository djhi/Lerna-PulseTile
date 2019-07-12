import React from "react";
import { ResponsiveContainer, Cell, Pie, PieChart } from "recharts";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
    return (React.createElement("div", { className: classes.chartBlock },
        React.createElement(Typography, { variant: "h1" }, title),
        React.createElement(ResponsiveContainer, { height: 200 },
            React.createElement(PieChart, null,
                React.createElement(Pie, { data: data, startAngle: 180, endAngle: 0, innerRadius: 60, outerRadius: 80, paddingAngle: 5, dataKey: "value" },
                    React.createElement(Cell, { fill: color }),
                    React.createElement(Cell, { fill: COLOR_EMPTY })))),
        React.createElement(Typography, { variant: "h1", className: classes.value }, value),
        React.createElement(Typography, { variant: "body1", className: classes.units }, units),
        React.createElement(Typography, { variant: "caption", className: classes.diagnosis }, diagnosis)));
};
export default withStyles(styles)(PieChartBlock);
