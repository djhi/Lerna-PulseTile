import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { withStyles } from '@material-ui/core/styles/index';
import Typography from "@material-ui/core/Typography";
var DEFAULT_STEP = 5;
var styles = function (theme) { return ({
    chartBlock: {
        width: '95%',
        height: 350,
    },
    bar: {
        cursor: "pointer",
    },
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
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: 10,
    },
    chartIcon: {
        paddingRight: 5,
    },
    description: {
        padding: 10,
    },
    tooltip: {
        backgroundColor: theme.palette.fontColor,
        padding: 10,
        borderRadius: 5,
        '& p': {
            color: theme.palette.paperColor,
        },
        '& span': {
            color: theme.palette.paperColor,
            marginBottom: 10,
        }
    },
    patientsNumber: {
        display: "flex",
        flexDirection: "row",
    },
    square: {
        width: 15,
        height: 15,
        marginRight: 5,
    }
}); };
var CustomTooltip = function (_a) {
    var classes = _a.classes, active = _a.active, payload = _a.payload, label = _a.label, barColor = _a.barColor, borderColor = _a.borderColor;
    if (active) {
        return (React.createElement("div", { className: classes.tooltip },
            React.createElement(Typography, { variant: "h3" }, label),
            React.createElement("div", { className: classes.patientsNumber },
                React.createElement("div", { className: classes.square, style: { backgroundColor: barColor, border: "1px solid " + borderColor } }),
                React.createElement(Typography, null,
                    "Patients: ",
                    payload[0].value))));
    }
    return null;
};
function getTicksArray(data) {
    var result = [];
    var maximal = 0;
    data.map(function (item) {
        if (item.RespondentPercentage > maximal) {
            maximal = item.RespondentPercentage;
        }
    });
    var ticksNumber = Math.ceil(maximal / DEFAULT_STEP) + 1;
    for (var i = 0; i < ticksNumber; i++) {
        result.push(i * DEFAULT_STEP);
    }
    return result;
}
var BarChartTemplate = function (_a) {
    var classes = _a.classes, data = _a.data, history = _a.history, onClickAction = _a.onClickAction, searchType = _a.searchType, barColor = _a.barColor, borderColor = _a.borderColor;
    var ticksArray = getTicksArray(data);
    return (React.createElement("div", { className: classes.chartBlock },
        React.createElement(ResponsiveContainer, { width: '100%' },
            React.createElement(BarChart, { data: data, margin: { top: 5, right: 0, left: 0, bottom: 25 } },
                React.createElement(XAxis, { dataKey: "Text", fontFamily: "sans-serif", tick: { dy: 10 } }),
                React.createElement(YAxis, { tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'] }),
                React.createElement(CartesianGrid, { stroke: "#ebebeb" }),
                React.createElement(Tooltip, { content: React.createElement(CustomTooltip, { classes: classes, barColor: barColor, borderColor: borderColor }), cursor: false }),
                React.createElement(Bar, { dataKey: "RespondentPercentage", stroke: borderColor, fillOpacity: "0.7", onClick: function (item) { return onClickAction(history, searchType, item); }, className: classes.bar }, data.map(function (entry, index) { return (React.createElement(Cell, { fill: barColor })); }))))));
};
export default withStyles(styles)(BarChartTemplate);
