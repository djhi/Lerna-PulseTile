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
var recharts_1 = require("recharts");
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Typography/index"));
var constants_1 = require("../constants");
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
        return (react_1.default.createElement("div", { className: classes.tooltip },
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Age: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.x', null))),
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Value: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.y', null)))));
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
            { dataKey: "measles", color: constants_1.COLOR_MEASLES, label: react_1.default.createElement(index_2.default, null, "Measles") },
            { dataKey: "asthma", color: constants_1.COLOR_ASTHMA, label: react_1.default.createElement(index_2.default, null, "Asthma") },
            { dataKey: "diabetes", color: constants_1.COLOR_DIABETES, label: react_1.default.createElement(index_2.default, null, "Diabetes") },
            { dataKey: "dementia", color: constants_1.COLOR_DEMENTIA, label: react_1.default.createElement(index_2.default, null, "Dementia") },
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
        return (react_1.default.createElement("div", { className: classes.mainBlock },
            react_1.default.createElement("div", { className: classes.chartBlock },
                react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 400 },
                    react_1.default.createElement(recharts_1.ScatterChart, { margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { stroke: "#ebebeb" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "x", tick: { dy: 10 }, allowDuplicatedCategory: false }),
                        react_1.default.createElement(recharts_1.YAxis, { dataKey: "y", tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'] }),
                        react_1.default.createElement(recharts_1.Tooltip, { content: react_1.default.createElement(CustomTooltip, { classes: classes }), cursor: false }),
                        this.isScatterVisible('measles') && react_1.default.createElement(recharts_1.Scatter, { data: dummyMeasles, name: "Measles", stroke: constants_1.COLOR_MEASLES, fill: constants_1.COLOR_MEASLES }),
                        this.isScatterVisible('asthma') && react_1.default.createElement(recharts_1.Scatter, { data: dummyAsthma, name: "Asthma", stroke: constants_1.COLOR_ASTHMA, fill: constants_1.COLOR_ASTHMA }),
                        this.isScatterVisible('diabetes') && react_1.default.createElement(recharts_1.Scatter, { data: dummyDiabetes, name: "Diabetes", stroke: constants_1.COLOR_DIABETES, fill: constants_1.COLOR_DIABETES }),
                        this.isScatterVisible('dementia') && react_1.default.createElement(recharts_1.Scatter, { data: dummyDementia, name: "Dementia", stroke: constants_1.COLOR_DEMENTIA, fill: constants_1.COLOR_DEMENTIA }),
                        react_1.default.createElement(recharts_1.Legend, { payload: legendInfo, onClick: function (e) { return _this.toggleLine(e); } }))))));
    };
    return DiagnosisByAge;
}(react_1.Component));
;
exports.default = index_1.withStyles(styles)(DiagnosisByAge);
