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
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.name', null))),
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Diabetes: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.diabetes', null))),
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Measles: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.measles', null))),
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Asthma: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.asthma', null))),
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Dementia: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.dementia', null)))));
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
            { dataKey: "measles", color: constants_1.COLOR_MEASLES, label: react_1.default.createElement(index_2.default, null, "Measles") },
            { dataKey: "asthma", color: constants_1.COLOR_ASTHMA, label: react_1.default.createElement(index_2.default, null, "Asthma") },
            { dataKey: "diabetes", color: constants_1.COLOR_DIABETES, label: react_1.default.createElement(index_2.default, null, "Diabetes") },
            { dataKey: "dementia", color: constants_1.COLOR_DEMENTIA, label: react_1.default.createElement(index_2.default, null, "Dementia") },
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
        return (react_1.default.createElement("div", { className: classes.mainBlock },
            react_1.default.createElement("div", { className: classes.chartBlock },
                react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 400 },
                    react_1.default.createElement(recharts_1.BarChart, { data: dummyDataFilter, margin: { top: 5, right: 0, left: 0, bottom: 25 } },
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name", fontFamily: "sans-serif", tick: { dy: 10 } }),
                        react_1.default.createElement(recharts_1.YAxis, { tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'] }),
                        react_1.default.createElement(recharts_1.CartesianGrid, { stroke: "#ebebeb" }),
                        react_1.default.createElement(recharts_1.Tooltip, { content: react_1.default.createElement(CustomTooltip, { classes: classes }), cursor: false }),
                        linesArray.map(function (item, key) {
                            if (disabledLines.indexOf(item.dataKey) !== -1 || !isDiagnosisVisible(item.dataKey)) {
                                return null;
                            }
                            return (react_1.default.createElement(recharts_1.Bar, { key: key, dataKey: item.dataKey, stackId: "a", fill: item.color }));
                        }),
                        react_1.default.createElement(recharts_1.Legend, { payload: legendInfo, onClick: function (e) { return _this.toggleBar(e); } }))))));
    };
    return DiagnosisByAge;
}(react_1.Component));
;
exports.default = index_1.withStyles(styles)(DiagnosisByAge);
