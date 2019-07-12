var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
import get from "lodash/get";
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from "recharts";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography/index";
var COLOR_EMPTY = '#e9e4e4';
var COLOR_AMBER = '#ffac5a';
var COLOR_GREEN = '#2dcd0d';
var COLOR_YELLOW = '#fbf800';
var COLOR_RED = '#ff5d00';
var styles = function (theme) { return ({
    mainBlock: {
        minHeight: 300,
    },
    chartTitle: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 600,
    },
    populationNumber: {
        paddingLeft: 10,
    },
    chartBlock: {
        width: '100%',
        height: 180,
        textAlign: 'center',
        paddingTop: 10,
        '& .recharts-text.recharts-cartesian-axis-tick-value': {
            fontFamily: '"HK Grotesk SemiBold", Arial, sans-serif',
            fontSize: 14,
        },
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
var CustomTooltip = function (_a) {
    var classes = _a.classes, active = _a.active, payload = _a.payload;
    if (active) {
        return (React.createElement("div", { className: classes.tooltip },
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Year: "),
                React.createElement(Typography, null, get(payload, '[0].payload.name', null))),
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Population: "),
                React.createElement(Typography, null, get(payload, '[0].value', null)))));
    }
    return null;
};
var Population = /** @class */ (function (_super) {
    __extends(Population, _super);
    function Population() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Population.prototype.render = function () {
        var _a = this.props, classes = _a.classes, color = _a.color, population = _a.population;
        var data = [
            { name: '2008', uv: 3 },
            { name: '2009', uv: 2.8 },
            { name: '2010', uv: 3.5 },
            { name: '2011', uv: 3.1 },
            { name: '2012', uv: 3.6 },
            { name: '2013', uv: 2.4 },
            { name: '2014', uv: 3.4 },
            { name: '2015', uv: 3.6 },
            { name: '2016', uv: 2.7 },
            { name: '2017', uv: 3.3 },
            { name: '2018', uv: 3.5 },
        ];
        var ticksArray = [0, 1, 2, 3, 4, 5];
        return (React.createElement("div", { className: classes.mainBlock },
            React.createElement(Typography, { variant: "body1", className: classes.chartTitle }, "Population"),
            React.createElement(Typography, { variant: "body1", className: classes.populationNumber }, population),
            React.createElement("div", { className: classes.chartBlock },
                React.createElement(ResponsiveContainer, { height: 200 },
                    React.createElement(AreaChart, { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                        React.createElement(CartesianGrid, { stroke: "#ebebeb" }),
                        React.createElement(XAxis, { dataKey: "name", tick: { dy: 10 } }),
                        React.createElement(YAxis, { tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'], unit: "m" }),
                        React.createElement(Tooltip, { content: React.createElement(CustomTooltip, { classes: classes }), cursor: false }),
                        React.createElement(Area, { type: "linear", dataKey: "uv", stroke: color, fill: color }))))));
    };
    return Population;
}(Component));
;
export default withStyles(styles)(Population);
