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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { clinicalRecommendationsAction } from "../../../actions/ReSPECT/clinicalRecommendationsAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import { TOTAL_ROWS_NUMBER, DATE_FORMAT, DATE_PICKER_FORMAT } from "../statuses";
import { getSectionStatus, getFilledValues, getStateData, getInitialRangeLine, getDateUnix, getDateForDatepicker } from "../functions";
import RangeLine from "../fragments/RangeLine";
import RadioButtonName from "../fragments/RadioButtonName";
import formStyles from "../fragments/formStyles";
import { cprVariants, FOCUS_LEFT, FOCUS_RIGHT } from "../fragments/cprVariants";
var FORM_FIELDS_NUMBER = 3;
var defaultValues = {
    clinicalSignature: localStorage.getItem('username'),
    dateCompleted: moment().format(DATE_FORMAT),
    author: localStorage.getItem('username'),
};
var ClinicalRecommendations = /** @class */ (function (_super) {
    __extends(ClinicalRecommendations, _super);
    function ClinicalRecommendations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            cprValue: getStateData(_this.props, 'clinicalRecommendations.cprValue'),
            focusValue: getInitialRangeLine(_this.props, 'clinicalRecommendations.focusValue', FOCUS_LEFT, FOCUS_RIGHT, 50),
            firstSignature: null,
            secondSignature: null,
            dateCompleted: null,
        };
        _this.submitForm = function (data) {
            var _a = _this.state, focusValue = _a.focusValue, cprValue = _a.cprValue, dateCompleted = _a.dateCompleted;
            var additionalData = {
                cprValue: cprValue,
                focusValue: get(focusValue, '[0]', 0) >= 50 ? FOCUS_RIGHT : FOCUS_LEFT,
                dateCompleted: dateCompleted ? moment(dateCompleted).format(DATE_FORMAT) : moment().format(DATE_FORMAT),
                dateDecision: getDateUnix(),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = getSectionStatus(formData, FORM_FIELDS_NUMBER);
            _this.props.addClinicalRecommendations(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.setRangeInput = function (values) {
            var valueFromArray = get(values, [0], null);
            _this.setState({
                focusValue: (valueFromArray > 50) ? [99] : [1]
            });
        };
        _this.handleChecking = function (e) {
            _this.setState({
                cprValue: e.target.value,
            });
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
        _this.getDateToForm = function (dateCompleted) {
            var filledValues = _this.getFilledValuesArray();
            var dateFromStorage = get(filledValues, 'dateCompleted', null);
            return dateCompleted ? dateCompleted : getDateForDatepicker(dateFromStorage);
        };
        return _this;
    }
    ClinicalRecommendations.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, clinicalRecommendations = _a.clinicalRecommendations, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, focusValue = _b.focusValue, cprValue = _b.cprValue, dateCompleted = _b.dateCompleted;
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, clinicalRecommendations, 'clinicalRecommendations', isVersionInfo, defaultValues);
        var dateFromStorage = get(filledValues, 'dateCompleted', null);
        var dateToForm = dateCompleted ? dateCompleted : getDateForDatepicker(dateFromStorage);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement(RangeLine, { onChangeRange: this.setRangeInput, sourceName: focusValue, title: "Clinical recommendations for emergency care and treatment", helpTitle: "Please mark along the scale", leftText: "Focus on life sustaining treatment as per guidance below", rightText: "Focus on sympton control as per guidance below" }),
                React.createElement(LocalForm, { model: "clinicalRecommendations", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Clinical Guidance"),
                        React.createElement(Control.textarea, { className: classes.formTextarea, model: "clinicalRecommendations.clinicalGuidance", defaultValue: filledValues.clinicalGuidance, disabled: isVersionInfo }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "Now provide clinical guidance on specific inverventions that may or may not be wanted or Clinically appropriate, including being taken or admitted to hospital +/- receiving life support.")),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "CPR recommendations"),
                        React.createElement(RadioGroup, { name: "cprValue", className: classes.radioGroup, value: cprValue, onChange: function (e) { return _this.handleChecking(e); } }, cprVariants.map(function (item, key) {
                            return (React.createElement(FormControlLabel, { key: key, value: item.id, disabled: isVersionInfo, control: React.createElement(Radio, null), label: React.createElement(RadioButtonName, { mainTitle: item.mainTitle, helpTitle: item.helpTitle }) }));
                        }))),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Clinician signature"),
                        React.createElement(Control.text, { className: classes.formInput, model: "clinicalRecommendations.clinicalSignature", defaultValue: filledValues.clinicalSignature, disabled: true })),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Date completed"),
                        React.createElement(DatePicker, { className: classes.formInput, selected: dateToForm, onChange: function (value) { return _this.changeDateCompleted(value); }, todayButton: "Today", disabled: isVersionInfo, dateFormat: DATE_PICKER_FORMAT })),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return ClinicalRecommendations;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalRecommendations: state.custom.clinicalRecommendations.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addClinicalRecommendations: function (data) {
            dispatch(clinicalRecommendationsAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(ClinicalRecommendations));
