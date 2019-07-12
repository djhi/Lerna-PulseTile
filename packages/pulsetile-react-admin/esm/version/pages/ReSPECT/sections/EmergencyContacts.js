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
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { emergencyContactsAction } from "../../../actions/ReSPECT/emergencyContactsAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import AddNewButton from "../fragments/buttons/AddNewButton";
import TableOfRows from "../fragments/TableOfRows";
import { TOTAL_ROWS_NUMBER, STATUS_COMPLETED, STATUS_INCOMPLETE, DATE_FORMAT } from "../statuses";
import { getFilledValues, getStateData } from "../functions";
import formStyles from "../fragments/formStyles";
var defaultValues = {
    nhsNumber: localStorage.getItem('userId'),
    author: localStorage.getItem('username'),
};
var tableHeadersArray = [
    { id: 'name', label: 'Name', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'role', label: 'Role', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'phone', label: 'Telephone', isNumeric: true, isBinary: false, isDate: false, disablePadding: false },
];
var contactsArray = [
    { id: 'Legal proxy or parent', label: 'Legal proxy or parent' },
    { id: 'Family or friend or other', label: 'Family or friend or other' },
    { id: 'GP', label: 'GP' },
    { id: 'Lead consultant', label: 'Lead consultant' },
];
var EmergencyContacts = /** @class */ (function (_super) {
    __extends(EmergencyContacts, _super);
    function EmergencyContacts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            rowsArray: getStateData(_this.props, 'emergencyContacts.contactsArray', []),
        };
        _this.submitForm = function (data) {
            var rowsArray = _this.state.rowsArray;
            var additionalData = {
                contactsArray: rowsArray,
                status: (rowsArray.length > 0) ? STATUS_COMPLETED : STATUS_INCOMPLETE,
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addEmergencyContacts(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.addNewRow = function (values) {
            var rowsArray = _this.state.rowsArray;
            var newRowsArray = rowsArray.concat(values);
            _this.setState({
                rowsArray: newRowsArray,
            });
            _this.formDispatch(actions.reset('emergencyContactsRow'));
            _this.formDispatch(actions.change('emergencyContactsRow.role', ''));
        };
        return _this;
    }
    EmergencyContacts.prototype.attachDispatch = function (dispatch) {
        this.formDispatch = dispatch;
    };
    EmergencyContacts.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, emergencyContacts = _a.emergencyContacts, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, rowsArray = _b.rowsArray;
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, emergencyContacts, 'emergencyContacts', isVersionInfo, defaultValues);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                (rowsArray && rowsArray.length > 0) &&
                    React.createElement(TableOfRows, { headers: tableHeadersArray, rowsArray: rowsArray }),
                !isVersionInfo &&
                    React.createElement(LocalForm, { model: "emergencyContactsRow", onSubmit: function (values) { return _this.addNewRow(values); }, getDispatch: function (dispatch) { return _this.attachDispatch(dispatch); } },
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Emergency Contact Role"),
                            React.createElement(Control.select, { className: classes.formSelect, model: "emergencyContactsRow.role", required: true },
                                React.createElement("option", { value: '' }, "(no selected)"),
                                contactsArray.map(function (item, key) {
                                    return (React.createElement("option", { key: key, value: item.id }, item.label));
                                }))),
                        React.createElement(FormGroup, { className: classes.smallFormGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Name"),
                            React.createElement(Control.text, { className: classes.formInput, model: "emergencyContactsRow.name", required: true })),
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Telephone"),
                            React.createElement(Control.text, { className: classes.formInput, model: "emergencyContactsRow.phone", required: true })),
                        React.createElement(AddNewButton, null)),
                React.createElement(LocalForm, { model: "emergencyContacts", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Other details"),
                        React.createElement(Control.textarea, { className: classes.formTextarea, model: "emergencyContacts.details", defaultValue: filledValues.details, disabled: isVersionInfo })),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return EmergencyContacts;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        emergencyContacts: state.custom.emergencyContacts.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addEmergencyContacts: function (data) {
            dispatch(emergencyContactsAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(EmergencyContacts));
