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
import { LocalForm, Control } from 'react-redux-form';
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { involvementAction } from "../../../actions/ReSPECT/involvenentAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import InsertedRadioButtonGroup from "../fragments/InsertedRadioButtonGroup";
import { TOTAL_ROWS_NUMBER, DATE_FORMAT } from "../statuses";
import { getSectionStatus, getStateData, getFilledValues } from "../functions";
import formStyles from "../fragments/formStyles";
var FORM_FIELDS_NUMBER = 2;
var defaultValues = {
    author: localStorage.getItem('username'),
};
var Involvement = /** @class */ (function (_super) {
    __extends(Involvement, _super);
    function Involvement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            variant: getStateData(_this.props, 'involvement.involvementValue'),
        };
        _this.submitForm = function (data) {
            var variant = _this.state.variant;
            var additionalData = {
                involvementValue: variant,
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = getSectionStatus(formData, FORM_FIELDS_NUMBER);
            if (additionalData.involvementValue !== "valueSetD") {
                formData.notSelectingReason = "";
            }
            _this.props.addInvolvement(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.handleChange = function (event) {
            _this.setState({ variant: event.target.value });
        };
        return _this;
    }
    Involvement.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, involvement = _a.involvement, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, variant = _b.variant;
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, involvement, 'involvement', isVersionInfo, defaultValues);
        var InsertRadioValues = ['valueSetC1', 'valueSetC2', 'valueSetC3'];
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement(LocalForm, { model: "involvement", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "The clinician(s) signing this plan is/are confirming that (select A,B or C, OR complete section D below):"),
                        React.createElement(RadioGroup, { name: "involvementValue", className: classes.radioGroup, value: variant, onChange: function (e) { return _this.handleChange(e); } },
                            React.createElement(FormControlLabel, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetA", control: React.createElement(Radio, null), label: "A - This person has the mental capacity to participate in making these recommendations. They have been fully involved in making this plan." }),
                            React.createElement(FormControlLabel, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetB", control: React.createElement(Radio, null), label: "B - This person does not have the mental capacity to participate in making these recommendations. This plan has been made in accordance with capacity law, including, where applicable, in consultation with their legal proxy, or where no proxy, with relevant family members / friends." }),
                            React.createElement(FormControlLabel, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetC", control: React.createElement(Radio, null), label: React.createElement(InsertedRadioButtonGroup, { isSelected: variant === 'valueSetC' || InsertRadioValues.indexOf(variant) !== -1, variant: variant, isVersionInfo: isVersionInfo, handleChange: this.handleChange }) }),
                            React.createElement(FormControlLabel, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetD", control: React.createElement(Radio, null), label: "D - if no other option has been selected, valid reasons must be stated here" }))),
                    (variant === 'valueSetD') &&
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(Control.textarea, { className: classes.formTextarea, model: "involvement.notSelectingReason", defaultValue: filledValues.notSelectingReason, disabled: isVersionInfo }),
                            React.createElement(FormHelperText, { className: classes.formHelpText }, "Document full explanation in the clinical record")),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Record date, names and roles of those involved in decision making, and where records of discussion can be found"),
                        React.createElement(Control.textarea, { className: classes.formTextarea, model: "involvement.documentExplanation", defaultValue: filledValues.documentExplanation, disabled: isVersionInfo })),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return Involvement;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        involvement: state.custom.involvement.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addInvolvement: function (data) {
            dispatch(involvementAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(Involvement));
