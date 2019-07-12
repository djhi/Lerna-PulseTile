import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography/index";
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography, { variant: "body1", className: classes.chartTitle }, "Average Health Score"),
        (healthScore > 0)
            ?
                React.createElement("div", { className: classes.chartBlock },
                    React.createElement(ResponsiveContainer, { height: 200 },
                        React.createElement(PieChart, null,
                            React.createElement(Pie, { data: data, startAngle: 180, endAngle: 0, innerRadius: 60, outerRadius: 80, paddingAngle: 5, dataKey: "value" },
                                React.createElement(Cell, { fill: color }),
                                React.createElement(Cell, { fill: COLOR_EMPTY })))),
                    React.createElement(Typography, { variant: "h1", className: classes.value },
                        healthScore,
                        " %"),
                    React.createElement(Typography, { variant: "body1" }, "Moderate"),
                    React.createElement("div", { className: classes.bordersLabels },
                        React.createElement(Typography, { variant: "caption" }, "Unhealthy"),
                        React.createElement(Typography, { variant: "caption" }, "Healthy")))
            :
                React.createElement("div", { className: classes.emptyBlock },
                    React.createElement(Typography, { variant: "body1" }, "No Records Found"))));
};
export default withStyles(styles)(AverageHealthScore);
