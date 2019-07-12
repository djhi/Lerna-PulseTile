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
var moment_1 = __importDefault(require("moment"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var CustomDatagridRow_1 = __importDefault(require("../../../common/ResourseTemplates/fragments/CustomDatagridRow"));
var constants_1 = require("../../../common/ResourseTemplates/fragments/constants");
var ProblemsDatagridRow = function (props) {
    var record = props.record;
    if (!record) {
        return null;
    }
    return (react_1.default.createElement(CustomDatagridRow_1.default, __assign({}, props),
        react_1.default.createElement(TableCell_1.default, { key: record.id + "-problem" }, record.problem),
        react_1.default.createElement(TableCell_1.default, { key: record.id + "-dateOfOnset" }, moment_1.default(record.dateOfOnset).format(constants_1.DATE_FORMAT)),
        react_1.default.createElement(TableCell_1.default, { key: record.id + "-source" }, record.source)));
};
exports.default = ProblemsDatagridRow;
