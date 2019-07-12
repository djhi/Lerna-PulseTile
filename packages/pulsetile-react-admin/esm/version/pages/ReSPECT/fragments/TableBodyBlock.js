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
import { STATUS_INCOMPLETE, STATUS_COMPLETED, DATE_FORMAT } from "../statuses";
import StatusCell from "./StatusCell";
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
    rowInProgress: {
        backgroundColor: "#dbe4ed",
        '& td span': {
            fontWeight: 600,
        },
    },
    rowPreview: {
        backgroundColor: theme.palette.mainColor,
        '& td span': {
            fontWeight: 600,
            color: theme.isOldDesign ? theme.palette.fontColor + " !important" : theme.palette.paperColor,
        },
        '&:hover td span': {
            color: theme.palette.paperColor + " !important"
        }
    }
}); };
var TableBodyBlock = /** @class */ (function (_super) {
    __extends(TableBodyBlock, _super);
    function TableBodyBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowClassName = function (status, item, isVersionInfo) {
            var result = 'rowInComplete';
            if (status === STATUS_COMPLETED) {
                result = 'rowCompleted';
            }
            else if (item.id === _this.props.currentRow) {
                result = 'rowInProgress';
            }
            if (isVersionInfo && item.id === _this.props.currentRow) {
                result = 'rowPreview';
            }
            if (isVersionInfo && (item.id === 1 || item.id === 10)) {
                result = 'rowStatusNone';
            }
            return result;
        };
        return _this;
    }
    TableBodyBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sections = _a.sections, onRowClick = _a.onRowClick, currentRow = _a.currentRow, sectionsInfo = _a.sectionsInfo, isVersionInfo = _a.isVersionInfo;
        return (React.createElement(TableBody, null, sections.map(function (item, key) {
            var status = get(sectionsInfo, [item.name, 'status'], STATUS_INCOMPLETE);
            var dateCompleted = get(sectionsInfo, [item.name, 'dateCompleted'], null);
            var dateCompletedConvert = isVersionInfo
                ? (dateCompleted ? moment(dateCompleted).format(DATE_FORMAT) : '-')
                : (dateCompleted ? dateCompleted : '-');
            var rowClassName = _this.getRowClassName(status, item, isVersionInfo);
            return (React.createElement(TableRow, { className: classes[rowClassName], key: key, onClick: function () { return onRowClick(item.id); } },
                React.createElement(TableCell, { scope: "row", padding: "none" },
                    React.createElement("span", null, item.section)),
                React.createElement(TableCell, { align: "right" },
                    React.createElement(StatusCell, { item: item, isVersionInfo: isVersionInfo, currentRow: currentRow, status: status }))));
        })));
    };
    return TableBodyBlock;
}(Component));
;
export default withStyles(styles)(TableBodyBlock);
