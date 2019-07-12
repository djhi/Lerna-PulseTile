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
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
var rows = [
    { id: 'section', numeric: false, disablePadding: false, label: 'Section' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];
var TableHeadBlock = /** @class */ (function (_super) {
    __extends(TableHeadBlock, _super);
    function TableHeadBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeadBlock.prototype.render = function () {
        return (React.createElement(TableHead, null,
            React.createElement(TableRow, null, rows.map(function (row) { return (React.createElement(TableCell, { key: row.id, align: row.numeric ? 'right' : 'left', padding: row.disablePadding ? 'none' : 'default' }, row.label)); }, this))));
    };
    return TableHeadBlock;
}(Component));
;
export default TableHeadBlock;
