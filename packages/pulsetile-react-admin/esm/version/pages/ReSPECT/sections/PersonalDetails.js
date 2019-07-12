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
import { LocalForm, Control } from 'react-redux-form';
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { personalDetailsAction } from "../../../actions/ReSPECT/personalDetailsAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import { TOTAL_ROWS_NUMBER, DATE_FORMAT } from "../statuses";
import { getSectionStatus, getFilledValues } from "../functions";
import formStyles from "../fragments/formStyles";
var FORM_FIELDS_NUMBER = 9;
var PersonalDetails = /** @class */ (function (_super) {
    __extends(PersonalDetails, _super);
    function PersonalDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
        };
        _this.submitForm = function (data) {
            var _a = _this.props, sectionsInfo = _a.sectionsInfo, currentRow = _a.currentRow, onRowClick = _a.onRowClick, addPersonalDetails = _a.addPersonalDetails;
            var additionalData = {
                status: getSectionStatus(data, FORM_FIELDS_NUMBER),
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            addPersonalDetails(formData);
            var nextStep = (currentRow > TOTAL_ROWS_NUMBER) ? null : (currentRow + 1);
            onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.getUserNameInfo = function (totalName) {
            var totalNameArray = totalName.split(' ');
            var surname = totalNameArray.pop();
            var preferredName = totalNameArray.shift();
            return {
                preferredName: preferredName,
                firstName: totalNameArray.join(' '),
                surname: surname
            };
        };
        return _this;
    }
    PersonalDetails.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, personalDetails = _a.personalDetails, patientInfo = _a.patientInfo, title = _a.title, onRowClick = _a.onRowClick, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, birthDate = _b.birthDate;
        var userNameInfo = patientInfo.name ? this.getUserNameInfo(patientInfo.name) : null;
        var defaultValues = {
            preferredName: userNameInfo ? userNameInfo.preferredName : null,
            firstName: userNameInfo ? userNameInfo.firstName : null,
            surname: userNameInfo ? userNameInfo.surname : null,
            birthDate: patientInfo.birthDate ? moment(patientInfo.birthDate).format(DATE_FORMAT) : moment().format(DATE_FORMAT),
            streetAddress: patientInfo.address,
            city: patientInfo.city,
            county: patientInfo.district,
            country: patientInfo.country,
            postCode: patientInfo.postCode,
            nhsNumber: patientInfo.nhsNumber,
            author: localStorage.getItem('username'),
        };
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, personalDetails, 'personalDetails', isVersionInfo, defaultValues);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement(LocalForm, { model: "personalDetails", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Preferred Name"),
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.preferredName", defaultValue: filledValues.preferredName, disabled: true })),
                    React.createElement(FormGroup, { className: classes.smallFormGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "First Name"),
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.firstName", defaultValue: filledValues.firstName, disabled: true })),
                    React.createElement(FormGroup, { className: classes.smallFormGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Surname"),
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.surname", defaultValue: filledValues.surname, disabled: true })),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Date of Birth"),
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.birthDate", defaultValue: filledValues.birthDate, disabled: true })),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Address"),
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.streetAddress", defaultValue: filledValues.streetAddress, disabled: true }),
                        React.createElement(FormHelperText, { className: classes.formHelpTextStreetAddress }, "Street address")),
                    React.createElement(FormGroup, { className: classes.smallFormGroup },
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.city", defaultValue: filledValues.city, disabled: true }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "City")),
                    React.createElement(FormGroup, { className: classes.smallFormGroup },
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.county", defaultValue: filledValues.county, disabled: true }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "County")),
                    React.createElement(FormGroup, { className: classes.smallFormGroup },
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.postCode", defaultValue: filledValues.postCode, disabled: true }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "Post code")),
                    React.createElement(FormGroup, { className: classes.smallFormGroup },
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.country", defaultValue: filledValues.country, disabled: true }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "Country")),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "NHS / CHI / Health Care Number"),
                        React.createElement(Control.text, { className: classes.formInput, model: "personalDetails.nhsNumber", defaultValue: filledValues.nhsNumber, disabled: true })),
                    !isVersionInfo &&
                        React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return PersonalDetails;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        personalDetails: state.custom.personalDetails.data,
        patientInfo: get(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addPersonalDetails: function (sectionData) {
            dispatch(personalDetailsAction.create(sectionData));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(PersonalDetails));
