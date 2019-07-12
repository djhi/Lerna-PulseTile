"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var recharts_1 = require("recharts");
var index_1 = require("@material-ui/core/styles/index");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var constants_1 = require("../constants");
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
        return (react_1.default.createElement("text", { x: item.x, y: item.y, stroke: 'none', alignmentBaseline: 'middle', className: 'recharts-text recharts-pie-label-text', textAnchor: 'end' },
            react_1.default.createElement("tspan", { x: item.x, textAnchor: item.textAnchor, dy: '0em' }, value)));
    }
    return null;
}
;
var CustomTooltip = function (_a) {
    var classes = _a.classes, active = _a.active, payload = _a.payload;
    if (active) {
        return (react_1.default.createElement("div", { className: classes.tooltip },
            react_1.default.createElement("div", { className: classes.tooltipRow },
                react_1.default.createElement(Typography_1.default, { className: classes.parameterName },
                    get_1.default(payload, '[0].name', null),
                    ":"),
                react_1.default.createElement(Typography_1.default, null, get_1.default(payload, '[0].value', null)))));
    }
    return null;
};
var PieChartByGender = function (_a) {
    var classes = _a.classes, label = _a.label, male = _a.male, female = _a.female, isGenderVisible = _a.isGenderVisible;
    var data = [
        { name: 'Female', type: 'female', value: female, fill: constants_1.COLOR_FEMALE, color: constants_1.COLOR_FEMALE },
        { name: 'Male', type: 'male', value: male, fill: constants_1.COLOR_MALE, color: constants_1.COLOR_MALE },
    ];
    var total = male + female;
    var dataFilter = [];
    data.map(function (item) {
        if (isGenderVisible(item.type)) {
            dataFilter.push(item);
        }
    });
    return (react_1.default.createElement("div", { className: classes.mainBlock },
        react_1.default.createElement(Typography_1.default, { variant: "h1" }, label),
        react_1.default.createElement("div", { className: classes.chartBlock },
            react_1.default.createElement(recharts_1.ResponsiveContainer, { width: '100%', height: 400 },
                react_1.default.createElement(recharts_1.PieChart, null,
                    react_1.default.createElement(recharts_1.Pie, { isAnimationActive: false, data: dataFilter, label: function (item) { return getCustomLabel(item, dataFilter, total); }, labelLine: false }, data.map(function (item, key) {
                        return (react_1.default.createElement(recharts_1.Cell, { fill: item.color, color: item.color, key: key }));
                    })),
                    react_1.default.createElement(recharts_1.Tooltip, { content: react_1.default.createElement(CustomTooltip, { classes: classes }), cursor: false }))))));
};
exports.default = index_1.withStyles(styles)(PieChartByGender);
