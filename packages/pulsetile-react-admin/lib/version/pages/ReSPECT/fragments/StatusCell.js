"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var statuses_1 = require("../statuses");
var styles = {
    tableCellInpogress: {
        color: '#7bb0e5',
        fontSize: 14,
        fontWeight: 800,
    },
    tableCellCompleted: {
        color: '#30ad57',
        fontSize: 14,
        fontWeight: 800,
    },
};
var StatusCell = function (_a) {
    var classes = _a.classes, item = _a.item, currentRow = _a.currentRow, status = _a.status, isVersionInfo = _a.isVersionInfo;
    // For the sections 1 and 10 in version info view mode
    if ((isVersionInfo && item.id === 1) || item.id === 10 || status === statuses_1.STATUS_NONE) {
        return (react_1.default.createElement("span", { className: classes.tableCellCompleted }, statuses_1.STATUS_NONE));
    }
    if (!isVersionInfo && item.id === currentRow) {
        return (react_1.default.createElement("span", { className: classes.tableCellInpogress }, statuses_1.STATUS_EDITING));
    }
    else if (status === statuses_1.STATUS_COMPLETED) {
        return (react_1.default.createElement("span", { className: classes.tableCellCompleted }, statuses_1.STATUS_COMPLETED));
    }
    return (react_1.default.createElement("span", null, statuses_1.STATUS_INCOMPLETE));
};
exports.default = styles_1.withStyles(styles)(StatusCell);
