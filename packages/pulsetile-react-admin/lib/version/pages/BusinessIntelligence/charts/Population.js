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
        return (react_1.default.createElement("div", { className: classes.tooltip },
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Year: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].payload.name', null))),
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(index_2.default, { className: classes.parameterName }, "Population: "),
                react_1.default.createElement(index_2.default, null, get_1.default(payload, '[0].value', null)))));
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
        return (react_1.default.createElement("div", { className: classes.mainBlock },
            react_1.default.createElement(index_2.default, { variant: "body1", className: classes.chartTitle }, "Population"),
            react_1.default.createElement(index_2.default, { variant: "body1", className: classes.populationNumber }, population),
            react_1.default.createElement("div", { className: classes.chartBlock },
                react_1.default.createElement(recharts_1.ResponsiveContainer, { height: 200 },
                    react_1.default.createElement(recharts_1.AreaChart, { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { stroke: "#ebebeb" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name", tick: { dy: 10 } }),
                        react_1.default.createElement(recharts_1.YAxis, { tick: { dx: -10 }, ticks: ticksArray, domain: [0, 'dataMax'], unit: "m" }),
                        react_1.default.createElement(recharts_1.Tooltip, { content: react_1.default.createElement(CustomTooltip, { classes: classes }), cursor: false }),
                        react_1.default.createElement(recharts_1.Area, { type: "linear", dataKey: "uv", stroke: color, fill: color }))))));
    };
    return Population;
}(react_1.Component));
;
exports.default = index_1.withStyles(styles)(Population);
