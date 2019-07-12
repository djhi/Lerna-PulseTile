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
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import get from "lodash/get";
var styles = {
    chartBlock: {
        width: '100%',
        height: 500,
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
};
function getTooltipFormatter(value, name) {
    var row = get(name, 'props.children', null);
    if (!row) {
        return null;
    }
    var nameArray = row.split(', ');
    var parameter = nameArray[0];
    var units = nameArray[1];
    return (React.createElement("span", null,
        React.createElement(Typography, { variant: "h1" },
            parameter,
            ":"),
        React.createElement(Typography, null,
            " ",
            value,
            ", ",
            units)));
}
var DummyVitalsChart = /** @class */ (function (_super) {
    __extends(DummyVitalsChart, _super);
    function DummyVitalsChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            disabledLines: [],
        };
        /**
         * This action is run when user click on the dot on the legend to toggle lines visibility
         *
         * @author BogdanScherban <bsc@piogroup.net>
         * @param {shape} e
         */
        _this.toggleLine = function (e) {
            var disabledLines = _this.state.disabledLines;
            var dataKey = e.dataKey;
            var newDisabledLinesArray = [];
            if (disabledLines.indexOf(dataKey) !== -1) {
                newDisabledLinesArray = disabledLines.filter(function (item) { return item !== dataKey; });
            }
            else {
                newDisabledLinesArray = disabledLines.concat(dataKey);
            }
            _this.setState({
                disabledLines: newDisabledLinesArray
            });
        };
        return _this;
    }
    DummyVitalsChart.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var disabledLines = this.state.disabledLines;
        var vitalsListArray = [
            {
                number: 1,
                dateCreate: 'Jan',
                newsScore: 13,
                respirationRate: 7,
                oxygenSupplemental: true,
                heartRate: 92,
                temperature: 38,
                levelOfConsciousness: "Pain",
                systolicBP: 92,
                diastolicBP: 92,
                oxygenSaturation: 77,
            },
            {
                number: 2,
                dateCreate: 'Feb',
                newsScore: 11,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 91,
                temperature: 37,
                levelOfConsciousness: "Pain",
                systolicBP: 91,
                diastolicBP: 92,
                oxygenSaturation: 78,
            },
            {
                number: 3,
                dateCreate: 'Mar',
                newsScore: 10,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 91,
                temperature: 37,
                levelOfConsciousness: "Pain",
                systolicBP: 92,
                diastolicBP: 91,
                oxygenSaturation: 72,
            },
            {
                number: 4,
                dateCreate: 'Apr',
                newsScore: 11,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 95,
                temperature: 36,
                levelOfConsciousness: "Pain",
                systolicBP: 90,
                diastolicBP: 95,
                oxygenSaturation: 73,
            },
            {
                number: 5,
                dateCreate: 'May',
                newsScore: 12,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 91,
                temperature: 36,
                levelOfConsciousness: "Pain",
                systolicBP: 93,
                diastolicBP: 93,
                oxygenSaturation: 77,
            },
            {
                number: 6,
                dateCreate: 'Jun',
                newsScore: 14,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 91,
                temperature: 37,
                levelOfConsciousness: "Pain",
                systolicBP: 95,
                diastolicBP: 92,
                oxygenSaturation: 76,
            },
            {
                number: 7,
                dateCreate: 'Jul',
                newsScore: 14,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 94,
                temperature: 36,
                levelOfConsciousness: "Pain",
                systolicBP: 93,
                diastolicBP: 93,
                oxygenSaturation: 79,
            },
            {
                number: 8,
                dateCreate: 'Aug',
                newsScore: 13,
                respirationRate: 9,
                oxygenSupplemental: true,
                heartRate: 91,
                temperature: 37,
                levelOfConsciousness: "Pain",
                systolicBP: 89,
                diastolicBP: 88,
                oxygenSaturation: 81,
            },
        ];
        var chartData = [];
        for (var i = 0, n = vitalsListArray.length; i < n; i++) {
            var item = vitalsListArray[i];
            chartData.push({
                name: item.dateCreate,
                // diastolicBP: item.diastolicBP,
                heartRate: item.heartRate,
                oxygenSaturation: item.oxygenSaturation,
                respirationRate: item.respirationRate,
                systolicBP: item.systolicBP,
                // temperature: item.temperature,
                sourceId: item.sourceId,
            });
        }
        console.log(chartData);
        var DOT_RADIUS = 8;
        var STROKE_WIDTH = 4;
        var linesArray = [
            { dataKey: "respirationRate", color: "#99C78C", label: React.createElement(Typography, null, "Respiration Rate, resps/min") },
            { dataKey: "oxygenSaturation", color: "#E18FC0", label: React.createElement(Typography, null, "Oxygen Saturation, %") },
            { dataKey: "heartRate", color: "#ACC2D7", label: React.createElement(Typography, null, "Heart Rate, bpm") },
            { dataKey: "systolicBP", color: "#EABA97", label: React.createElement(Typography, null, "Systolic BP, mmHg") },
        ];
        return (React.createElement("div", { className: classes.chartBlock },
            React.createElement(ResponsiveContainer, { width: '99%' },
                React.createElement(LineChart, { data: chartData, margin: { top: 25, left: 0 } },
                    React.createElement(XAxis, { dataKey: "name", tick: { fontFamily: '"HK Grotesk Regular", Arial, sans-serif', fontSize: 14 } }),
                    React.createElement(YAxis, { tick: { fontFamily: '"HK Grotesk Regular", Arial, sans-serif', fontSize: 14 } }),
                    React.createElement(Tooltip, { formatter: function (value, name) { return getTooltipFormatter(value, name); }, labelFormatter: function (value) {
                            return (React.createElement(Typography, null,
                                "Date: ",
                                value));
                        } }),
                    React.createElement(Legend, { payload: linesArray.map(function (item) { return ({
                            dataKey: item.dataKey,
                            color: item.color,
                            value: item.label,
                        }); }), onClick: function (e) { return _this.toggleLine(e); } }),
                    React.createElement(CartesianGrid, { stroke: "#e5e5e5", strokeDasharray: "5 5" }),
                    linesArray.map(function (item, key) {
                        if (disabledLines.indexOf(item.dataKey) !== -1) {
                            return null;
                        }
                        return (React.createElement(Line, { key: key, type: "monotone", name: item.label, dataKey: item.dataKey, stroke: item.color, activeDot: { r: DOT_RADIUS }, strokeWidth: STROKE_WIDTH }));
                    })))));
    };
    return DummyVitalsChart;
}(Component));
;
export default (withStyles(styles)(DummyVitalsChart));
