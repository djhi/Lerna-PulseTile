"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var recharts_1 = require("recharts");
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CreateButton_1 = __importDefault(require("../../../core/common/Buttons/CreateButton"));
var EmptyListBlock_1 = __importDefault(require("../../../core/common/ResourseTemplates/EmptyListBlock"));
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
    var row = get_1.default(name, 'props.children', null);
    if (!row) {
        return null;
    }
    var nameArray = row.split(', ');
    var parameter = nameArray[0];
    var units = nameArray[1];
    return (react_1.default.createElement("span", null,
        react_1.default.createElement(Typography_1.default, { variant: "h1" },
            parameter,
            ":"),
        react_1.default.createElement(Typography_1.default, null,
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
            var sourceId = get_1.default(e, 'payload.sourceId', null);
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
                name: moment_1.default(item.dateCreate).format('MM-DD-YYYY'),
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
            { dataKey: "respirationRate", color: "#99C78C", label: react_1.default.createElement(Typography_1.default, null, "Respiration Rate, resps/min") },
            { dataKey: "oxygenSaturation", color: "#E18FC0", label: react_1.default.createElement(Typography_1.default, null, "Oxygen Saturation, %") },
            { dataKey: "heartRate", color: "#ACC2D7", label: react_1.default.createElement(Typography_1.default, null, "Heart Rate, bpm") },
            { dataKey: "systolicBP", color: "#EABA97", label: react_1.default.createElement(Typography_1.default, null, "Systolic BP, mmHg") },
            { dataKey: "diastolicBP", color: "#99D9DE", label: react_1.default.createElement(Typography_1.default, null, "Diastolic BP, mmHg") },
            { dataKey: "temperature", color: "#E3A08F", label: react_1.default.createElement(Typography_1.default, null, "Temperature, C") },
        ];
        if (currentList.length === 0) {
            return (react_1.default.createElement(EmptyListBlock_1.default, null));
        }
        return (react_1.default.createElement("div", { className: classes.chartBlock },
            react_1.default.createElement(recharts_1.ResponsiveContainer, { width: '98%' },
                react_1.default.createElement(recharts_1.LineChart, { data: chartData, margin: { top: 25, left: 0 } },
                    react_1.default.createElement(recharts_1.XAxis, { dataKey: "name", tick: { fontFamily: '"HK Grotesk Regular", Arial, sans-serif', fontSize: 14 } }),
                    react_1.default.createElement(recharts_1.YAxis, { tick: { fontFamily: '"HK Grotesk Regular", Arial, sans-serif', fontSize: 14 } }),
                    react_1.default.createElement(recharts_1.Tooltip, { formatter: function (value, name) { return getTooltipFormatter(value, name); }, labelFormatter: function (value) {
                            return (react_1.default.createElement(Typography_1.default, null,
                                "Date: ",
                                value));
                        } }),
                    react_1.default.createElement(recharts_1.Legend, { payload: linesArray.map(function (item) { return ({
                            dataKey: item.dataKey,
                            color: item.color,
                            value: item.label,
                        }); }), onClick: function (e) { return _this.toggleLine(e); } }),
                    react_1.default.createElement(recharts_1.CartesianGrid, { stroke: "#e5e5e5", strokeDasharray: "5 5" }),
                    linesArray.map(function (item, key) {
                        if (disabledLines.indexOf(item.dataKey) !== -1) {
                            return null;
                        }
                        return (react_1.default.createElement(recharts_1.Line, { key: key, type: "monotone", name: item.label, dataKey: item.dataKey, stroke: item.color, activeDot: { r: DOT_RADIUS, onClick: function (e) { return _this.onPointClick(e); } }, strokeWidth: STROKE_WIDTH }));
                    }))),
            createUrl &&
                react_1.default.createElement(react_admin_1.Toolbar, { className: classes.toolbar },
                    react_1.default.createElement(CreateButton_1.default, { history: history, redirectPath: createUrl }))));
    };
    return VitalsChart;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        vitalsList: get_1.default(state, 'admin.resources.vitalsigns.data', []),
        currentList: get_1.default(state, 'admin.resources.vitalsigns.list.ids', []),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(VitalsChart));
