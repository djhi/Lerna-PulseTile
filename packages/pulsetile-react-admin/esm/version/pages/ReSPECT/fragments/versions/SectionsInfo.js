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
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { STATUS_INCOMPLETE, STATUS_COMPLETED, STATUS_NONE, DATE_FORMAT } from "../../statuses";
import StatusCell from "../StatusCell";
var styles = function (theme) { return ({
    rowCompleted: {
        backgroundColor: theme.palette.paperColor,
    },
    rowStatusNone: {
        backgroundColor: theme.palette.paperColor,
    },
    rowInComplete: {
        backgroundColor: "#f1f0f0",
        '& td span': {
            color: "#6d6c6c",
        },
    },
}); };
var SectionsInfo = /** @class */ (function (_super) {
    __extends(SectionsInfo, _super);
    function SectionsInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowClassName = function (versionInfo, status, item) {
            var result = 'rowInComplete';
            if (status === STATUS_COMPLETED) {
                result = 'rowCompleted';
            }
            if (versionInfo && (item.id === 1 || item.id === 10)) {
                result = 'rowStatusNone';
            }
            return result;
        };
        _this.getStatusLabel = function (versionInfo, item) {
            if (Number(item.id) === 1 || Number(item.id) === 10) {
                return STATUS_NONE;
            }
            return get(versionInfo, [item.name, 'status'], STATUS_INCOMPLETE);
        };
        return _this;
    }
    SectionsInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sections = _a.sections, versionInfo = _a.versionInfo, toggleMode = _a.toggleMode, currentVersion = _a.currentVersion;
        return (React.createElement(TableBody, null, sections.map(function (item, key) {
            var status = _this.getStatusLabel(versionInfo, item);
            var dateCompleted = get(versionInfo, [item.name, 'dateCompleted'], null);
            var dateCompletedConvert = dateCompleted
                ? moment(dateCompleted).format(DATE_FORMAT)
                : '-';
            var rowClassName = _this.getRowClassName(versionInfo, status, item);
            return (React.createElement(TableRow, { className: classes[rowClassName], key: key, onClick: function () { return toggleMode(currentVersion, item.id); } },
                React.createElement(TableCell, { scope: "row", padding: "none" },
                    React.createElement("span", null, item.section)),
                React.createElement(TableCell, { align: "right" },
                    React.createElement(StatusCell, { item: item, currentRow: null, status: status }))));
        })));
    };
    return SectionsInfo;
}(Component));
;
export default withStyles(styles)(SectionsInfo);
