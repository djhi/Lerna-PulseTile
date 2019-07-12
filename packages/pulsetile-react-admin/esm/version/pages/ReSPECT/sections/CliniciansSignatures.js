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
import { connect } from 'react-redux';
import { LocalForm, Control, actions } from 'react-redux-form';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import { clinicalSignaturesAction } from "../../../actions/ReSPECT/clinicalSignaturesAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import AddNewButton from "../fragments/buttons/AddNewButton";
import TableOfRows from "../fragments/TableOfRows";
import { TOTAL_ROWS_NUMBER, STATUS_INCOMPLETE, STATUS_COMPLETED, DATE_FORMAT, DATE_TIME_PICKER_FORMAT } from "../statuses";
import { getStateData, getDateUnix } from "../functions";
import formStyles from "../fragments/formStyles";
var tableHeadersArray = [
    { id: 'clinicialName', label: 'Clinical Name', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'isSrc', label: 'SRC', isNumeric: false, isBinary: true, isDate: false, disablePadding: true },
    { id: 'dateSigned', label: 'Date', isNumeric: false, isBinary: false, isDate: true, disablePadding: false },
];
var CliniciansSignatures = /** @class */ (function (_super) {
    __extends(CliniciansSignatures, _super);
    function CliniciansSignatures() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            dateSigned: null,
            rowsArray: getStateData(_this.props, 'clinicalSignatures.signaturesArray', []),
            clinicalSignature: localStorage.getItem('username'),
        };
        _this.submitForm = function (data) {
            var rowsArray = _this.state.rowsArray;
            var additionalData = {
                signaturesArray: rowsArray,
                status: (rowsArray.length > 0) ? STATUS_COMPLETED : STATUS_INCOMPLETE,
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addCliniciansSignatures(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.changeDateAndTime = function (value) {
            _this.setState({
                dateSigned: value,
            });
        };
        _this.addNewRow = function (values) {
            var _a = _this.state, rowsArray = _a.rowsArray, dateSigned = _a.dateSigned;
            var additionalData = {
                dateSigned: getDateUnix(moment(dateSigned).format(DATE_FORMAT)),
            };
            var newRow = Object.assign({}, values, additionalData);
            var newRowsArray = rowsArray.concat(newRow);
            _this.setState({
                rowsArray: newRowsArray,
                dateSigned: null,
            });
            _this.formDispatch(actions.reset('clinicalSignaturesRow'));
            _this.formDispatch(actions.change('clinicalSignaturesRow.gmcNumber', null));
            _this.formDispatch(actions.change('clinicalSignaturesRow.clinicalSignature', localStorage.getItem('username')));
        };
        _this.addSignature = function (name, ref) {
            var _a;
            _this.setState((_a = {},
                _a[name] = ref,
                _a));
        };
        _this.toNumber = function (value) {
            return value ? Number(value) : null;
        };
        return _this;
    }
    CliniciansSignatures.prototype.attachDispatch = function (dispatch) {
        this.formDispatch = dispatch;
    };
    CliniciansSignatures.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, rowsArray = _b.rowsArray, dateSigned = _b.dateSigned, clinicalSignature = _b.clinicalSignature;
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                (rowsArray && rowsArray.length > 0) &&
                    React.createElement(TableOfRows, { headers: tableHeadersArray, rowsArray: rowsArray }),
                !isVersionInfo &&
                    React.createElement(LocalForm, { model: "clinicalSignaturesRow", onSubmit: function (values) { return _this.addNewRow(values); }, getDispatch: function (dispatch) { return _this.attachDispatch(dispatch); } },
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.mainFormLabel }, "Clinician Signature")),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Designation (grade / speciality)"),
                            React.createElement(Control.text, { className: classes.formInput, model: "clinicalSignaturesRow.designation", required: true })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Clinician name"),
                            React.createElement(Control.text, { className: classes.formInput, model: "clinicalSignaturesRow.clinicialName", required: true })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "GMC / NMC / HCPC number"),
                            React.createElement(Control.text, { className: classes.formInput, type: "number", parser: function (value) { return _this.toNumber(value); }, model: "clinicalSignaturesRow.gmcNumber", required: true })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Date & Time"),
                            React.createElement(DatePicker, { className: classes.formInput, selected: dateSigned, timeFormat: "HH:mm", timeIntervals: 15, dateFormat: DATE_TIME_PICKER_FORMAT, timeInputLabel: "Time:", showTimeInput: true, onChange: function (value) { return _this.changeDateAndTime(value); } })),
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Clinician signature"),
                            React.createElement(Control.text, { className: classes.formInput, model: "clinicalSignaturesRow.clinicalSignature", defaultValue: clinicalSignature, disabled: true })),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(Control.checkbox, { className: classes.checkbox, model: "clinicalSignaturesRow.isSrc", disabled: isVersionInfo }),
                            React.createElement(Typography, null, "Senior responsible clinician")),
                        React.createElement(AddNewButton, null)),
                React.createElement(LocalForm, { model: "clinicalSignatures", onSubmit: function (values) { return _this.submitForm(values); } }, !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return CliniciansSignatures;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalSignatures: state.custom.clinicalSignatures.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addCliniciansSignatures: function (data) {
            dispatch(clinicalSignaturesAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(CliniciansSignatures));
