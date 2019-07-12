"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
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
var CustomDisabledCheckbox = styles_1.withStyles(function (theme) { return ({
    root: {
        color: theme.palette.disabledColor,
        '&$checked': {
            color: theme.palette.disabledColor,
        },
    },
    checked: {},
}); })(function (props) { return react_1.default.createElement(Checkbox_1.default, __assign({ color: "default" }, props)); });
var CustomCheckbox = styles_1.withStyles(function (theme) { return ({
    root: {
        color: theme.palette.secondaryMainColor,
        '&$checked': {
            color: theme.palette.secondaryMainColor,
        },
    },
    checked: {},
}); })(function (props) { return react_1.default.createElement(Checkbox_1.default, __assign({ color: "default" }, props)); });
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
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(Typography_1.default, null, "PATIENT INFO"),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement(FormGroup_1.default, { row: true },
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomDisabledCheckbox, { checked: name, onChange: function () { return _this.handleChange("name"); }, value: "name", disabled: true }), label: "Name" }),
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomDisabledCheckbox, { checked: gender, onChange: function () { return _this.handleChange("gender"); }, value: "gender", disabled: true }), label: "Gender" }),
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomDisabledCheckbox, { checked: born, onChange: function () { return _this.handleChange("born"); }, value: "born", disabled: true }), label: "Born" })),
                react_1.default.createElement(FormGroup_1.default, { row: true },
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomCheckbox, { checked: address, onChange: function () { return _this.handleChange("address"); }, value: "address" }), label: "Address" }),
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomCheckbox, { checked: nhsNumber, onChange: function () { return _this.handleChange("nhsNumber"); }, value: "nhsNumber" }), label: "NHS No." }),
                    react_1.default.createElement(Button_1.default, { onClick: function () { return _this.selectAll(PATIENT_INFO); }, "aria-label": "Select All", className: classes.selectAll }, "Select all"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Typography_1.default, null, "DATE / TIME"),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement(FormGroup_1.default, { row: true }),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup, row: true },
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomCheckbox, { checked: vitalsDate, onChange: function () { return _this.handleChange("vitalsDate"); }, value: "vitalsDate" }), label: "Vitals" }),
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomCheckbox, { checked: problemsDate, onChange: function () { return _this.handleChange("problemsDate"); }, value: "problemsDate" }), label: "Problems" }),
                    react_1.default.createElement(Button_1.default, { onClick: function () { return _this.selectAll(DATE_TIME); }, "aria-label": "Select All", className: classes.selectAll }, "Select all"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Typography_1.default, null, "COUNT"),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement(FormGroup_1.default, { row: true }),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup, row: true },
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomCheckbox, { checked: vitalsCount, onChange: function () { return _this.handleChange("vitalsCount"); }, value: "vitalsCount" }), label: "Vitals" }),
                    react_1.default.createElement(FormControlLabel_1.default, { className: classes.checkboxItem, control: react_1.default.createElement(CustomCheckbox, { checked: problemsCount, onChange: function () { return _this.handleChange("problemsCount"); }, value: "problemsCount" }), label: "Problems" }),
                    react_1.default.createElement(Button_1.default, { onClick: function () { return _this.selectAll(COUNT); }, "aria-label": "Select All", className: classes.selectAll }, "Select all")))));
    };
    return ColumnsTogglingPopover;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        hiddenColumns: get_1.default(state, 'custom.toggleColumns.data.patients', []),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(ColumnsTogglingPopover));
