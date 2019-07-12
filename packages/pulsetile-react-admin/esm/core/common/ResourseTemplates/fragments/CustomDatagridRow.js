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
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
var styles = function (theme) { return ({
    tableRow: {
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor + '!important',
            cursor: "pointer"
        },
        '&:hover td': {
            color: theme.palette.paperColor,
        },
    },
    tableRowActive: {
        backgroundColor: theme.palette.secondaryMainColor + '!important',
        '& td': {
            color: theme.palette.paperColor,
        }
    },
}); };
var CustomDatagridRow = /** @class */ (function (_super) {
    __extends(CustomDatagridRow, _super);
    function CustomDatagridRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isActiveRow = function () {
            var _a = _this.props, id = _a.id, location = _a.location;
            var pathname = get(location, 'pathname', null);
            var pathnameArray = pathname ? pathname.split('/') : [];
            var sourceId = get(pathnameArray, [2], null);
            return id === sourceId;
        };
        return _this;
    }
    CustomDatagridRow.prototype.render = function () {
        var _a = this.props, classes = _a.classes, record = _a.record, id = _a.id, history = _a.history, basePath = _a.basePath, children = _a.children;
        if (!record) {
            return null;
        }
        var detailsPath = basePath + '/' + id;
        var isActiveRow = this.isActiveRow();
        return (React.createElement(TableRow, { className: isActiveRow ? classes.tableRowActive : classes.tableRow, key: record.id, onClick: function () { return history.push(detailsPath); } }, children));
    };
    return CustomDatagridRow;
}(Component));
;
export default withStyles(styles)(CustomDatagridRow);
