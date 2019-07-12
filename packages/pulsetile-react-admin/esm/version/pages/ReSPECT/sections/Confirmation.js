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
import React, { Component } from 'react';
import get from "lodash/get";
import { connect } from 'react-redux';
import { LocalForm, Control, actions } from 'react-redux-form';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { confirmationAction } from "../../../actions/ReSPECT/confirmationAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import AddNewButton from "../fragments/buttons/AddNewButton";
import TableOfRows from "../fragments/TableOfRows";
import { TOTAL_ROWS_NUMBER, STATUS_COMPLETED, STATUS_INCOMPLETE, DATE_FORMAT, DATE_PICKER_FORMAT } from "../statuses";
import { getFilledValues, getStateData, getDateUnix, getDateForDatepicker } from "../functions";
import formStyles from "../fragments/formStyles";
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
            rowsArray: getStateData(_this.props, 'confirmation.confirmationsArray', []),
            dateCompleted: null,
            clinicalSignature: localStorage.getItem('username'),
        };
        _this.submitForm = function (data) {
            var _a = _this.state, rowsArray = _a.rowsArray, dateCompleted = _a.dateCompleted;
            var additionalData = {
                confirmationsArray: rowsArray,
                status: (rowsArray.length > 0) ? STATUS_COMPLETED : STATUS_INCOMPLETE,
                dateCompleted: dateCompleted ? moment(dateCompleted).format(DATE_FORMAT) : moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addConfirmations(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
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
                reviewDate: getDateUnix(moment(reviewDate).format(DATE_FORMAT)),
            };
            var newRow = Object.assign({}, values, additionalData);
            var newRowsArray = rowsArray.concat(newRow);
            _this.setState({
                rowsArray: newRowsArray,
                reviewDate: null,
            });
            _this.formDispatch(actions.reset('confirmationRow'));
            _this.formDispatch(actions.change('confirmationRow.clinicalSignature', localStorage.getItem('username')));
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
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, confirmation, 'confirmation', isVersionInfo, defaultValues);
        var dateFromStorage = get(filledValues, 'dateCompleted', null);
        var dateToForm = dateCompleted ? dateCompleted : getDateForDatepicker(dateFromStorage);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                (rowsArray && rowsArray.length > 0) &&
                    React.createElement(TableOfRows, { headers: tableHeadersArray, rowsArray: rowsArray }),
                !isVersionInfo &&
                    React.createElement(LocalForm, { model: "confirmationRow", onSubmit: function (values) { return _this.addNewRow(values); }, getDispatch: function (dispatch) { return _this.attachDispatch(dispatch); } },
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.mainFormLabel }, "Clinician Signature")),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Review date"),
                            React.createElement(DatePicker, { className: classes.formInput, selected: reviewDate, onChange: function (value) { return _this.changeReviewDate(value); }, dateFormat: DATE_PICKER_FORMAT })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Designation (grade / speciality)"),
                            React.createElement(Control.text, { className: classes.formInput, model: "confirmationRow.designation", required: true })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Clinician name"),
                            React.createElement(Control.text, { className: classes.formInput, model: "confirmationRow.clinicialName", required: true })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "GMC / NMC / HCPC number"),
                            React.createElement(Control.text, { className: classes.formInput, model: "confirmationRow.gmcNumber", required: true })),
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Clinician signature"),
                            React.createElement(Control.text, { className: classes.formInput, model: "confirmationRow.clinicalSignature", defaultValue: clinicalSignature, disabled: true })),
                        React.createElement(AddNewButton, null)),
                React.createElement(LocalForm, { model: "confirmation", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Date completed"),
                        React.createElement(DatePicker, { className: classes.formInput, selected: dateToForm, onChange: function (value) { return _this.changeDateCompleted(value); }, todayButton: "Today", dateFormat: DATE_PICKER_FORMAT, disabled: isVersionInfo })),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return Confirmation;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        confirmation: state.custom.confirmation.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addConfirmations: function (data) {
            dispatch(confirmationAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(Confirmation));
