"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var settings_1 = require("./settings");
var CustomDatagridRow_1 = __importDefault(require("../../../../core/common/ResourseTemplates/fragments/CustomDatagridRow"));
var constants_1 = require("../../../../core/common/ResourseTemplates/fragments/constants");
var styles = function (theme) { return ({
    newsScoreCellDanger: {
        borderLeft: "5px solid " + settings_1.DANGER_COLOR + " !important"
    },
    newsScoreCellWarning: {
        borderLeft: "5px solid " + settings_1.WARNING_COLOR + " !important"
    },
    newsScoreCellSuccess: {
        borderLeft: "5px solid " + settings_1.SUCCESS_COLOR + " !important"
    },
}); };
function defineColor(newsScoreValue) {
    var result = '';
    if (newsScoreValue > 6) {
        result = 'newsScoreCellDanger';
    }
    else if (newsScoreValue > 4) {
        result = 'newsScoreCellWarning';
    }
    else if (newsScoreValue > 0) {
        result = 'newsScoreCellSuccess';
    }
    return result;
}
;
var DatagridRow = function (props) {
    var classes = props.classes, record = props.record;
    if (!record) {
        return null;
    }
    var newsScore = get_1.default(record, 'newsScore', null);
    var newsScoreCellClassName = defineColor(newsScore);
    return (react_1.default.createElement(CustomDatagridRow_1.default, __assign({}, props),
        react_1.default.createElement(TableCell_1.default, { key: record.id + "-number" }, record.number),
        react_1.default.createElement(TableCell_1.default, { key: record.id + "-dateCreate" }, moment_1.default(record.dateCreate).format(constants_1.DATE_FORMAT)),
        react_1.default.createElement(TableCell_1.default, { className: classes[newsScoreCellClassName], key: record.id + "-newsScore" }, record.newsScore),
        react_1.default.createElement(TableCell_1.default, { key: record.id + "-source" }, record.source)));
};
exports.default = styles_1.withStyles(styles)(DatagridRow);
