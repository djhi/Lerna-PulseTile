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
import moment from "moment";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";
import { connect } from 'react-redux';
import { Toolbar } from "react-admin";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CreateButton from "../../../core/common/Buttons/CreateButton";
import EmptyListBlock from "../../../core/common/ResourseTemplates/EmptyListBlock";
var styles = function (theme) { return ({
    chartBlock: {
        width: '100%',
        height: 500,
        backgroundColor: theme.palette.paperColor,
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 0,
    },
}); };
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
var VitalsChart = /** @class */ (function (_super) {
    __extends(VitalsChart, _super);
    function VitalsChart() {
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
        /**
         * This action is run when user click on the dot on the chart
         *
         * @author BogdanScherban <bsc@piogroup.net>
         * @param {shape} e
         */
        _this.onPointClick = function (e) {
            var history = _this.props.history;
            var sourceId = get(e, 'payload.sourceId', null);
            var detailsUrl = '/vitalsigns/' + sourceId;
            history.push(detailsUrl);
        };
        return _this;
    }
    VitalsChart.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentList = _a.currentList, vitalsList = _a.vitalsList, vitalsEmergencySummary = _a.vitalsEmergencySummary, history = _a.history, createUrl = _a.createUrl;
        var disabledLines = this.state.disabledLines;
        var vitalsListArray = vitalsEmergencySummary ? Object.values(vitalsEmergencySummary) : Object.values(vitalsList);
        var chartData = [];
        for (var i = 0, n = vitalsListArray.length; i < n; i++) {
            var item = vitalsListArray[i];
            chartData.push({
                name: moment(item.dateCreate).format('MM-DD-YYYY'),
                diastolicBP: item.diastolicBP,
                heartRate: item.heartRate,
                oxygenSaturation: item.oxygenSaturation,
                respirationRate: item.respirationRate,
                systolicBP: item.systolicBP,
                temperature: item.temperature,
                sourceId: item.sourceId,
            });
        }
        var DOT_RADIUS = 8;
        var STROKE_WIDTH = 4;
        var linesArray = [
            { dataKey: "respirationRate", color: "#99C78C", label: React.createElement(Typography, null, "Respiration Rate, resps/min") },
            { dataKey: "oxygenSaturation", color: "#E18FC0", label: React.createElement(Typography, null, "Oxygen Saturation, %") },
            { dataKey: "heartRate", color: "#ACC2D7", label: React.createElement(Typography, null, "Heart Rate, bpm") },
            { dataKey: "systolicBP", color: "#EABA97", label: React.createElement(Typography, null, "Systolic BP, mmHg") },
            { dataKey: "diastolicBP", color: "#99D9DE", label: React.createElement(Typography, null, "Diastolic BP, mmHg") },
            { dataKey: "temperature", color: "#E3A08F", label: React.createElement(Typography, null, "Temperature, C") },
        ];
        if (currentList.length === 0) {
            return (React.createElement(EmptyListBlock, null));
        }
        return (React.createElement("div", { className: classes.chartBlock },
            React.createElement(ResponsiveContainer, { width: '98%' },
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
                        return (React.createElement(Line, { key: key, type: "monotone", name: item.label, dataKey: item.dataKey, stroke: item.color, activeDot: { r: DOT_RADIUS, onClick: function (e) { return _this.onPointClick(e); } }, strokeWidth: STROKE_WIDTH }));
                    }))),
            createUrl &&
                React.createElement(Toolbar, { className: classes.toolbar },
                    React.createElement(CreateButton, { history: history, redirectPath: createUrl }))));
    };
    return VitalsChart;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        vitalsList: get(state, 'admin.resources.vitalsigns.data', []),
        currentList: get(state, 'admin.resources.vitalsigns.list.ids', []),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(VitalsChart));
