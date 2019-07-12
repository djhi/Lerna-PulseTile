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
import { STATUS_INCOMPLETE, STATUS_COMPLETED, DATE_FORMAT, TIME_FORMAT } from "../../statuses";
var styles = function (theme) { return ({
    rowCompleted: {
        backgroundColor: "#fff",
    },
    rowInComplete: {
        backgroundColor: "#f1f0f0",
        '& td span': {
            color: "#6d6c6c",
        },
    },
    currentRow: {
        backgroundColor: theme.palette.secondaryMainColor,
        '& td span': {
            color: "#fff",
        },
    }
}); };
var TableBodyBlock = /** @class */ (function (_super) {
    __extends(TableBodyBlock, _super);
    function TableBodyBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowClassName = function (status, item) {
            var result = 'rowInComplete';
            if (status === STATUS_COMPLETED) {
                result = 'rowCompleted';
            }
            return result;
        };
        return _this;
    }
    TableBodyBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentVersion = _a.currentVersion, showVersion = _a.showVersion, versionsInfo = _a.versionsInfo;
        return (React.createElement(React.Fragment, null,
            React.createElement(TableBody, null, versionsInfo && versionsInfo.map(function (item, key) {
                var status = get(item, 'status', STATUS_INCOMPLETE);
                var dateCreated = get(item, 'dateCreated', '-');
                var date = moment(dateCreated).format(DATE_FORMAT);
                var time = moment(dateCreated).format(TIME_FORMAT);
                var author = get(item, 'author', null);
                var rowClassName = _this.getRowClassName(status, item);
                var version = get(item, 'version', null);
                var sourceId = get(item, 'sourceId', null);
                return (React.createElement(TableRow, { className: (currentVersion === version) ? classes.currentRow : classes[rowClassName], key: key, onClick: function () { return showVersion(version, sourceId); } },
                    React.createElement(TableCell, { scope: "row", padding: "none" },
                        React.createElement("span", null, version)),
                    React.createElement(TableCell, { scope: "row", padding: "none" },
                        React.createElement("span", null, date)),
                    React.createElement(TableCell, { scope: "row", padding: "none" },
                        React.createElement("span", null, time)),
                    React.createElement(TableCell, { align: "right" },
                        React.createElement("span", null, (version === 1) ? 'System' : author))));
            }))));
    };
    return TableBodyBlock;
}(Component));
;
export default withStyles(styles)(TableBodyBlock);
