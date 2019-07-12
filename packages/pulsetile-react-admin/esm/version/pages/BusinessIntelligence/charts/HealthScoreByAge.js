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
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography/index";
import { COLOR_DIABETES, COLOR_MEASLES, COLOR_ASTHMA, COLOR_DEMENTIA } from "../constants";
var styles = function (theme) { return ({
    mainBlock: {
        minHeight: 400,
    },
    chartTitle: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 600,
    },
    chartBlock: {
        width: '100%',
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
                React.createElement(Typography, { className: classes.parameterName }, "Age: "),
                React.createElement(Typography, null, get(payload, '[0].payload.x', null))),
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Value: "),
                React.createElement(Typography, null, get(payload, '[0].payload.y', null)))));
    }
    return null;
};
var DiagnosisByAge = /** @class */ (function (_super) {
    __extends(DiagnosisByAge, _super);
    function DiagnosisByAge() {
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
        _this.isScatterVisible = function (type) {
            var isDiagnosisVisible = _this.props.isDiagnosisVisible;
            var disabledLines = _this.state.disabledLines;
            return disabledLines.indexOf(type) === -1 && isDiagnosisVisible(type);
        };
        return _this;
    }
    DiagnosisByAge.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isDiagnosisVisible = _a.isDiagnosisVisible, isAgeRangeVisible = _a.isAgeRangeVisible, diagnosisByAge = _a.diagnosisByAge;
        var linesArray = [
            { dataKey: "measles", color: COLOR_MEASLES, label: React.createElement(Typography, null, "Measles") },
            { dataKey: "asthma", color: COLOR_ASTHMA, label: React.createElement(Typography, null, "Asthma") },
            { dataKey: "diabetes", color: COLOR_DIABETES, label: React.createElement(Typography, null, "Diabetes") },
            { dataKey: "dementia", color: COLOR_DEMENTIA, label: React.createElement(Typography, null, "Dementia") },
        ];
        var ticksArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        var dummyDataFilter = diagnosisByAge.filter(function (item) { return isAgeRangeVisible(item.name); });
        var dummyDiabetes = [];
        var dummyAsthma = [];
        var dummyMeasles = [];
        var dummyDementia = [];
        for (var i = 0, n = dummyDataFilter.length; i < n; i++) {
            var item = dummyDataFilter[i];
            dummyDiabetes.push({ x: item.name, y: item.diabetes });
            dummyAsthma.push({ x: item.name, y: item.asthma });
            dummyMeasles.push({ x: item.name, y: item.measles });
            dummyDementia.push({ x: item.name, y: item.dementia });
        }
        var legendInfo = linesArray
            .filter(function (item) { return isDiagnosisVisible(item.dataKey); })
            .map(function (item) { return ({
            dataKey: item.dataKey,
            color: item.color,
            value: item.label,
        }); });
        return (React.createElement("div", { className: classes.mainBlock },
            React.createElement("div", { className: classes.chartBlock },
                React.createElement(ResponsiveContainer, { height: 400 },
                    React.createElement(ScatterChart, { margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                        React.createElement(CartesianGrid, { stroke: "#ebebeb" }),
                        React.createElement(XAxis, { dataKey: "x", tick: { dy: 10 }, allowDuplicatedCategory: false }),
                        React.createElement(YAxis, { dataKey: "y", tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'] }),
                        React.createElement(Tooltip, { content: React.createElement(CustomTooltip, { classes: classes }), cursor: false }),
                        this.isScatterVisible('measles') && React.createElement(Scatter, { data: dummyMeasles, name: "Measles", stroke: COLOR_MEASLES, fill: COLOR_MEASLES }),
                        this.isScatterVisible('asthma') && React.createElement(Scatter, { data: dummyAsthma, name: "Asthma", stroke: COLOR_ASTHMA, fill: COLOR_ASTHMA }),
                        this.isScatterVisible('diabetes') && React.createElement(Scatter, { data: dummyDiabetes, name: "Diabetes", stroke: COLOR_DIABETES, fill: COLOR_DIABETES }),
                        this.isScatterVisible('dementia') && React.createElement(Scatter, { data: dummyDementia, name: "Dementia", stroke: COLOR_DEMENTIA, fill: COLOR_DEMENTIA }),
                        React.createElement(Legend, { payload: legendInfo, onClick: function (e) { return _this.toggleLine(e); } }))))));
    };
    return DiagnosisByAge;
}(Component));
;
export default withStyles(styles)(DiagnosisByAge);
