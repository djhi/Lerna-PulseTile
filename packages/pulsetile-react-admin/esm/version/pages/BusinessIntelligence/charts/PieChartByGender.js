import React from "react";
import get from "lodash/get";
import { ResponsiveContainer, PieChart, Cell, Pie, Tooltip } from "recharts";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography";
import { COLOR_MALE, COLOR_FEMALE } from "../constants";
var styles = function (theme) { return ({
    mainBlock: {
        minHeight: 400,
        width: '100%',
        padding: 10,
        textAlign: 'center',
    },
    chartTitle: {
        fontSize: 14,
        fontWeight: 600,
    },
    chartBlock: {
        width: '95%',
        '& .recharts-text.recharts-pie-label-text tspan': {
            fontFamily: '"HK Grotesk SemiBold", Arial, sans-serif',
            fontSize: 16,
            fontWeight: 800,
            color: theme.palette.fontColor,
        }
    },
    tooltip: {
        padding: 5,
        backgroundColor: theme.palette.paperColor,
    },
    tooltipRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    parameterName: {
        fontWeight: 600,
        marginRight: 10,
    }
}); };
function getCustomLabel(item, dataFilter, total) {
    if (dataFilter.length === 2) {
        var value = Math.floor(100 * item.value / total);
        return (React.createElement("text", { x: item.x, y: item.y, stroke: 'none', alignmentBaseline: 'middle', className: 'recharts-text recharts-pie-label-text', textAnchor: 'end' },
            React.createElement("tspan", { x: item.x, textAnchor: item.textAnchor, dy: '0em' }, value)));
    }
    return null;
}
;
var CustomTooltip = function (_a) {
    var classes = _a.classes, active = _a.active, payload = _a.payload;
    if (active) {
        return (React.createElement("div", { className: classes.tooltip },
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName },
                    get(payload, '[0].name', null),
                    ":"),
                React.createElement(Typography, null, get(payload, '[0].value', null)))));
    }
    return null;
};
var PieChartByGender = function (_a) {
    var classes = _a.classes, label = _a.label, male = _a.male, female = _a.female, isGenderVisible = _a.isGenderVisible;
    var data = [
        { name: 'Female', type: 'female', value: female, fill: COLOR_FEMALE, color: COLOR_FEMALE },
        { name: 'Male', type: 'male', value: male, fill: COLOR_MALE, color: COLOR_MALE },
    ];
    var total = male + female;
    var dataFilter = [];
    data.map(function (item) {
        if (isGenderVisible(item.type)) {
            dataFilter.push(item);
        }
    });
    return (React.createElement("div", { className: classes.mainBlock },
        React.createElement(Typography, { variant: "h1" }, label),
        React.createElement("div", { className: classes.chartBlock },
            React.createElement(ResponsiveContainer, { width: '100%', height: 400 },
                React.createElement(PieChart, null,
                    React.createElement(Pie, { isAnimationActive: false, data: dataFilter, label: function (item) { return getCustomLabel(item, dataFilter, total); }, labelLine: false }, data.map(function (item, key) {
                        return (React.createElement(Cell, { fill: item.color, color: item.color, key: key }));
                    })),
                    React.createElement(Tooltip, { content: React.createElement(CustomTooltip, { classes: classes }), cursor: false }))))));
};
export default withStyles(styles)(PieChartByGender);
