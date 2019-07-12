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
var react_redux_form_1 = require("react-redux-form");
var moment_1 = __importDefault(require("moment"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var confirmationAction_1 = require("../../../actions/ReSPECT/confirmationAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var AddNewButton_1 = __importDefault(require("../fragments/buttons/AddNewButton"));
var TableOfRows_1 = __importDefault(require("../fragments/TableOfRows"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
var defaultValues = {
    nhsNumber: localStorage.getItem('userId'),
    author: localStorage.getItem('username'),
};
var tableHeadersArray = [
    { id: 'clinicialName', label: 'Clinician Name', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'designation', label: 'Designation', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'reviewDate', label: 'Date', isNumeric: false, isBinary: false, isDate: true, disablePadding: false },
];
var Confirmation = /** @class */ (function (_super) {
    __extends(Confirmation, _super);
    function Confirmation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            reviewDate: null,
            rowsArray: functions_1.getStateData(_this.props, 'confirmation.confirmationsArray', []),
            dateCompleted: null,
            clinicalSignature: localStorage.getItem('username'),
        };
        _this.submitForm = function (data) {
            var _a = _this.state, rowsArray = _a.rowsArray, dateCompleted = _a.dateCompleted;
            var additionalData = {
                confirmationsArray: rowsArray,
                status: (rowsArray.length > 0) ? statuses_1.STATUS_COMPLETED : statuses_1.STATUS_INCOMPLETE,
                dateCompleted: dateCompleted ? moment_1.default(dateCompleted).format(statuses_1.DATE_FORMAT) : moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addConfirmations(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.changeReviewDate = function (value) {
            _this.setState({
                reviewDate: value,
            });
        };
        _this.addNewRow = function (values) {
            var _a = _this.state, rowsArray = _a.rowsArray, reviewDate = _a.reviewDate;
            var additionalData = {
                reviewDate: functions_1.getDateUnix(moment_1.default(reviewDate).format(statuses_1.DATE_FORMAT)),
            };
            var newRow = Object.assign({}, values, additionalData);
            var newRowsArray = rowsArray.concat(newRow);
            _this.setState({
                rowsArray: newRowsArray,
                reviewDate: null,
            });
            _this.formDispatch(react_redux_form_1.actions.reset('confirmationRow'));
            _this.formDispatch(react_redux_form_1.actions.change('confirmationRow.clinicalSignature', localStorage.getItem('username')));
        };
        _this.addSignature = function (name, ref) {
            var _a;
            _this.setState((_a = {},
                _a[name] = ref,
                _a));
        };
        _this.changeDateCompleted = function (value) {
            _this.setState({
                dateCompleted: value,
            });
        };
        return _this;
    }
    Confirmation.prototype.attachDispatch = function (dispatch) {
        this.formDispatch = dispatch;
    };
    Confirmation.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, confirmation = _a.confirmation, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, rowsArray = _b.rowsArray, reviewDate = _b.reviewDate, dateCompleted = _b.dateCompleted, clinicalSignature = _b.clinicalSignature;
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, confirmation, 'confirmation', isVersionInfo, defaultValues);
        var dateFromStorage = get_1.default(filledValues, 'dateCompleted', null);
        var dateToForm = dateCompleted ? dateCompleted : functions_1.getDateForDatepicker(dateFromStorage);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                (rowsArray && rowsArray.length > 0) &&
                    react_1.default.createElement(TableOfRows_1.default, { headers: tableHeadersArray, rowsArray: rowsArray }),
                !isVersionInfo &&
                    react_1.default.createElement(react_redux_form_1.LocalForm, { model: "confirmationRow", onSubmit: function (values) { return _this.addNewRow(values); }, getDispatch: function (dispatch) { return _this.attachDispatch(dispatch); } },
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.mainFormLabel }, "Clinician Signature")),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Review date"),
                            react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: reviewDate, onChange: function (value) { return _this.changeReviewDate(value); }, dateFormat: statuses_1.DATE_PICKER_FORMAT })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Designation (grade / speciality)"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "confirmationRow.designation", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinician name"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "confirmationRow.clinicialName", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "GMC / NMC / HCPC number"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "confirmationRow.gmcNumber", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinician signature"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "confirmationRow.clinicalSignature", defaultValue: clinicalSignature, disabled: true })),
                        react_1.default.createElement(AddNewButton_1.default, null)),
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "confirmation", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date completed"),
                        react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: dateToForm, onChange: function (value) { return _this.changeDateCompleted(value); }, todayButton: "Today", dateFormat: statuses_1.DATE_PICKER_FORMAT, disabled: isVersionInfo })),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return Confirmation;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        confirmation: state.custom.confirmation.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addConfirmations: function (data) {
            dispatch(confirmationAction_1.confirmationAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(Confirmation));
