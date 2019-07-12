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
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar, BarChart } from "recharts";
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
                React.createElement(Typography, null, get(payload, '[0].payload.name', null))),
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Diabetes: "),
                React.createElement(Typography, null, get(payload, '[0].payload.diabetes', null))),
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Measles: "),
                React.createElement(Typography, null, get(payload, '[0].payload.measles', null))),
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Asthma: "),
                React.createElement(Typography, null, get(payload, '[0].payload.asthma', null))),
            React.createElement("div", { className: classes.tooltipRow },
                React.createElement(Typography, { className: classes.parameterName }, "Dementia: "),
                React.createElement(Typography, null, get(payload, '[0].payload.dementia', null)))));
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
        _this.toggleBar = function (e) {
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
    DiagnosisByAge.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isDiagnosisVisible = _a.isDiagnosisVisible, isAgeRangeVisible = _a.isAgeRangeVisible, diagnosisByAge = _a.diagnosisByAge;
        var disabledLines = this.state.disabledLines;
        var linesArray = [
            { dataKey: "measles", color: COLOR_MEASLES, label: React.createElement(Typography, null, "Measles") },
            { dataKey: "asthma", color: COLOR_ASTHMA, label: React.createElement(Typography, null, "Asthma") },
            { dataKey: "diabetes", color: COLOR_DIABETES, label: React.createElement(Typography, null, "Diabetes") },
            { dataKey: "dementia", color: COLOR_DEMENTIA, label: React.createElement(Typography, null, "Dementia") },
        ];
        var ticksArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        var legendInfo = linesArray
            .filter(function (item) { return isDiagnosisVisible(item.dataKey); })
            .map(function (item) { return ({
            dataKey: item.dataKey,
            color: item.color,
            value: item.label,
        }); });
        var dummyDataFilter = diagnosisByAge.filter(function (item) { return isAgeRangeVisible(item.name); });
        return (React.createElement("div", { className: classes.mainBlock },
            React.createElement("div", { className: classes.chartBlock },
                React.createElement(ResponsiveContainer, { height: 400 },
                    React.createElement(BarChart, { data: dummyDataFilter, margin: { top: 5, right: 0, left: 0, bottom: 25 } },
                        React.createElement(XAxis, { dataKey: "name", fontFamily: "sans-serif", tick: { dy: 10 } }),
                        React.createElement(YAxis, { tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'] }),
                        React.createElement(CartesianGrid, { stroke: "#ebebeb" }),
                        React.createElement(Tooltip, { content: React.createElement(CustomTooltip, { classes: classes }), cursor: false }),
                        linesArray.map(function (item, key) {
                            if (disabledLines.indexOf(item.dataKey) !== -1 || !isDiagnosisVisible(item.dataKey)) {
                                return null;
                            }
                            return (React.createElement(Bar, { key: key, dataKey: item.dataKey, stackId: "a", fill: item.color }));
                        }),
                        React.createElement(Legend, { payload: legendInfo, onClick: function (e) { return _this.toggleBar(e); } }))))));
    };
    return DiagnosisByAge;
}(Component));
;
export default withStyles(styles)(DiagnosisByAge);
