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
import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
var styles = function (theme) { return ({
    checkboxItem: {
        width: 120,
    },
    selectAll: {
        display: "block",
        border: "1px solid " + theme.palette.secondaryMainColor,
        height: 'auto',
        width: 120,
        boxSizing: "border-box",
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        color: theme.palette.secondaryMainColor,
        '&:hover': {
            color: theme.palette.paperColor,
            backgroundColor: theme.palette.secondaryMainColor
        }
    },
    formGroup: {
        paddingTop: 10,
        paddingBottom: 10,
    }
}); };
var CustomDisabledCheckbox = withStyles(function (theme) { return ({
    root: {
        color: theme.palette.disabledColor,
        '&$checked': {
            color: theme.palette.disabledColor,
        },
    },
    checked: {},
}); })(function (props) { return React.createElement(Checkbox, __assign({ color: "default" }, props)); });
var CustomCheckbox = withStyles(function (theme) { return ({
    root: {
        color: theme.palette.secondaryMainColor,
        '&$checked': {
            color: theme.palette.secondaryMainColor,
        },
    },
    checked: {},
}); })(function (props) { return React.createElement(Checkbox, __assign({ color: "default" }, props)); });
var columnsArray = [
    'name', 'address', 'born', 'gender', 'nhsNumber',
    'ordersDate', 'resultsDate', 'vitalsDate', 'problemsDate',
    'ordersCount', 'resultsCount', 'vitalsCount', 'problemsCount'
];
var defaultHiddenColumns = [
    'ordersDate', 'resultsDate', 'vitalsDate', 'problemsDate',
    'ordersCount', 'resultsCount', 'vitalsCount', 'problemsCount'
];
var PATIENT_INFO = 'patientInfo';
var DATE_TIME = 'dateTime';
var COUNT = 'count';
var ColumnsTogglingPopover = /** @class */ (function (_super) {
    __extends(ColumnsTogglingPopover, _super);
    function ColumnsTogglingPopover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            patientInfo: true,
            name: true,
            gender: true,
            born: true,
            address: true,
            nhsNumber: true,
            dateTime: false,
            // ordersDate: false,
            // resultsDate: false,
            vitalsDate: false,
            problemsDate: false,
            count: false,
            // ordersCount: false,
            // resultsCount: false,
            vitalsCount: false,
            problemsCount: false,
        };
        _this.handleChange = function (columnName) {
            var _a;
            var value = !_this.state[columnName];
            _this.setState((_a = {}, _a[columnName] = value, _a), function () { return _this.props.toggleColumn(columnName, value); });
        };
        _this.toggleColumnIfHidden = function (columnName, value) {
            var hiddenColumns = _this.props.hiddenColumns;
            if (value && hiddenColumns.indexOf(columnName) !== -1) {
                _this.props.toggleColumn(columnName, value);
            }
            else if (!value) {
                _this.props.toggleColumn(columnName, value);
            }
        };
        _this.selectAll = function (value) {
            var _a = _this.state, patientInfo = _a.patientInfo, dateTime = _a.dateTime, count = _a.count;
            if (value === PATIENT_INFO) {
                var patientInfoValue = !patientInfo;
                _this.setState({
                    patientInfo: patientInfoValue,
                    address: patientInfoValue,
                    nhsNumber: patientInfoValue,
                });
                _this.toggleColumnIfHidden('address', patientInfoValue);
                _this.toggleColumnIfHidden('nhsNumber', patientInfoValue);
            }
            if (value === DATE_TIME) {
                var dateTimeValue = !dateTime;
                _this.setState({
                    dateTime: dateTimeValue,
                    // ordersDate: dateTimeValue,
                    // resultsDate: dateTimeValue,
                    vitalsDate: dateTimeValue,
                    problemsDate: dateTimeValue,
                });
                // this.toggleColumnIfHidden('ordersDate', dateTimeValue);
                // this.toggleColumnIfHidden('resultsDate', dateTimeValue);
                _this.toggleColumnIfHidden('vitalsDate', dateTimeValue);
                _this.toggleColumnIfHidden('problemsDate', dateTimeValue);
            }
            if (value === COUNT) {
                var countValue = !count;
                _this.setState({
                    count: countValue,
                    // ordersCount: countValue,
                    // resultsCount: countValue,
                    vitalsCount: countValue,
                    problemsCount: countValue,
                });
                // this.toggleColumnIfHidden('ordersCount', countValue);
                // this.toggleColumnIfHidden('resultsCount', countValue);
                _this.toggleColumnIfHidden('vitalsCount', countValue);
                _this.toggleColumnIfHidden('problemsCount', countValue);
            }
        };
        return _this;
    }
    ColumnsTogglingPopover.prototype.componentDidMount = function () {
        var _this = this;
        var hiddenColumns = this.props.hiddenColumns;
        columnsArray.map(function (item) {
            var _a;
            if (hiddenColumns.length > 0) {
                _this.setState((_a = {},
                    _a[item] = (hiddenColumns.indexOf(item) === -1),
                    _a));
            }
            else {
                _this.setState({
                    dateTime: true,
                    ordersDate: true,
                    resultsDate: true,
                    vitalsDate: true,
                    problemsDate: true,
                    count: true,
                    ordersCount: true,
                    resultsCount: true,
                    vitalsCount: true,
                    problemsCount: true,
                });
            }
        });
    };
    ColumnsTogglingPopover.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var _a = this.state, name = _a.name, gender = _a.gender, born = _a.born, address = _a.address, nhsNumber = _a.nhsNumber, ordersDate = _a.ordersDate, resultsDate = _a.resultsDate, vitalsDate = _a.vitalsDate, problemsDate = _a.problemsDate, ordersCount = _a.ordersCount, resultsCount = _a.resultsCount, vitalsCount = _a.vitalsCount, problemsCount = _a.problemsCount;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                React.createElement(Typography, null, "PATIENT INFO"),
                React.createElement(Divider, null),
                React.createElement(FormGroup, { row: true },
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomDisabledCheckbox, { checked: name, onChange: function () { return _this.handleChange("name"); }, value: "name", disabled: true }), label: "Name" }),
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomDisabledCheckbox, { checked: gender, onChange: function () { return _this.handleChange("gender"); }, value: "gender", disabled: true }), label: "Gender" }),
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomDisabledCheckbox, { checked: born, onChange: function () { return _this.handleChange("born"); }, value: "born", disabled: true }), label: "Born" })),
                React.createElement(FormGroup, { row: true },
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomCheckbox, { checked: address, onChange: function () { return _this.handleChange("address"); }, value: "address" }), label: "Address" }),
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomCheckbox, { checked: nhsNumber, onChange: function () { return _this.handleChange("nhsNumber"); }, value: "nhsNumber" }), label: "NHS No." }),
                    React.createElement(Button, { onClick: function () { return _this.selectAll(PATIENT_INFO); }, "aria-label": "Select All", className: classes.selectAll }, "Select all"))),
            React.createElement("div", null,
                React.createElement(Typography, null, "DATE / TIME"),
                React.createElement(Divider, null),
                React.createElement(FormGroup, { row: true }),
                React.createElement(FormGroup, { className: classes.formGroup, row: true },
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomCheckbox, { checked: vitalsDate, onChange: function () { return _this.handleChange("vitalsDate"); }, value: "vitalsDate" }), label: "Vitals" }),
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomCheckbox, { checked: problemsDate, onChange: function () { return _this.handleChange("problemsDate"); }, value: "problemsDate" }), label: "Problems" }),
                    React.createElement(Button, { onClick: function () { return _this.selectAll(DATE_TIME); }, "aria-label": "Select All", className: classes.selectAll }, "Select all"))),
            React.createElement("div", null,
                React.createElement(Typography, null, "COUNT"),
                React.createElement(Divider, null),
                React.createElement(FormGroup, { row: true }),
                React.createElement(FormGroup, { className: classes.formGroup, row: true },
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomCheckbox, { checked: vitalsCount, onChange: function () { return _this.handleChange("vitalsCount"); }, value: "vitalsCount" }), label: "Vitals" }),
                    React.createElement(FormControlLabel, { className: classes.checkboxItem, control: React.createElement(CustomCheckbox, { checked: problemsCount, onChange: function () { return _this.handleChange("problemsCount"); }, value: "problemsCount" }), label: "Problems" }),
                    React.createElement(Button, { onClick: function () { return _this.selectAll(COUNT); }, "aria-label": "Select All", className: classes.selectAll }, "Select all")))));
    };
    return ColumnsTogglingPopover;
}(Component));
var mapStateToProps = function (state) {
    return {
        hiddenColumns: get(state, 'custom.toggleColumns.data.patients', []),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(ColumnsTogglingPopover));
