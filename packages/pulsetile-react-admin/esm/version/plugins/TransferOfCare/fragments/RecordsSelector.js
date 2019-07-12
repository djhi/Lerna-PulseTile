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
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Table from '@material-ui/core/Table';
import TableHeadBlock from "./TableHeadBlock";
import TableBodyBlock from "./TableBodyBlock";
var styles = function (theme) { return ({
    tableWrapper: {
        margin: 20,
    },
    tableList: {
        '& thead': {
            backgroundColor: theme.palette.borderColor,
            '& tr th span span': {
                color: theme.palette.fontColor,
            },
            '& tr th': {
                paddingLeft: 10,
            },
            '& tr': {
                height: 48,
            },
        },
        '& tbody tr td': {
            paddingLeft: 10,
        },
        '& tbody tr:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
        },
        '& tbody tr:hover td  p': {
            color: theme.palette.paperColor,
        }
    },
}); };
var RecordsSelector = /** @class */ (function (_super) {
    __extends(RecordsSelector, _super);
    function RecordsSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSelectorValue = function (item, recordType) {
            var result = '';
            if (recordType === 'problems') {
                result = get(item, 'problem', null);
            }
            else if (recordType === 'medications') {
                result = get(item, 'name', null) + ' ' + get(item, 'doseAmount', null);
            }
            else if (recordType === 'referrals') {
                result = get(item, 'referralFrom', null) + ' ' + get(item, 'referralTo', null);
            }
            return result;
        };
        return _this;
    }
    RecordsSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, recordType = _a.recordType, recordsList = _a.recordsList, selectItem = _a.selectItem, recordsArray = _a.recordsArray, removeItem = _a.removeItem;
        return (React.createElement(React.Fragment, null,
            React.createElement(FormGroup, { className: classes.formGroup },
                React.createElement(FormLabel, { className: classes.formLabel }, "Records"),
                React.createElement("select", { className: classes.formSelect, onChange: function (e) { return selectItem(e); }, required: true },
                    React.createElement("option", { value: '' }, "-- Select to --"),
                    recordsList && recordsList.map(function (item, key) {
                        return (React.createElement("option", { key: key, value: item.sourceId }, _this.getSelectorValue(item, recordType)));
                    }))),
            (recordsArray && recordsArray.length > 0) &&
                React.createElement("div", { className: classes.tableWrapper },
                    React.createElement(Table, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                        React.createElement(TableHeadBlock, null),
                        React.createElement(TableBodyBlock, { list: recordsArray, removeItem: removeItem })))));
    };
    return RecordsSelector;
}(Component));
;
export default withStyles(styles)(RecordsSelector);
