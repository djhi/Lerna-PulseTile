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
import { LocalForm } from 'react-redux-form';
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { capacityAndRepresentationAction } from "../../../actions/ReSPECT/capacityAndRepresentationAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import RadioButtonWithLink from "../fragments/RadioButtonWithLink";
import { TOTAL_ROWS_NUMBER, DATE_FORMAT } from "../statuses";
import { getSectionStatus, getFilledValues, getStateData } from "../functions";
import formStyles from "../fragments/formStyles";
var FORM_FIELDS_NUMBER = 2;
var defaultValues = {
    author: localStorage.getItem('username'),
};
var CapacityAndRepresentation = /** @class */ (function (_super) {
    __extends(CapacityAndRepresentation, _super);
    function CapacityAndRepresentation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            capacityFirst: getStateData(_this.props, 'capacityAndRepresentation.capacityFirst'),
            legalProxyValue: getStateData(_this.props, 'capacityAndRepresentation.legalProxyValue'),
        };
        _this.submitForm = function (data) {
            var _a = _this.state, capacityFirst = _a.capacityFirst, legalProxyValue = _a.legalProxyValue;
            var additionalData = {
                capacityFirst: capacityFirst,
                legalProxyValue: legalProxyValue,
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = getSectionStatus(formData, FORM_FIELDS_NUMBER);
            _this.props.addCapacityAndRepresentation(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.handleCheckingBoolean = function (e) {
            var _a;
            _this.setState((_a = {},
                _a[e.target.name] = (e.target.value === 'true'),
                _a));
        };
        _this.handleChecking = function (e) {
            var _a;
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        return _this;
    }
    CapacityAndRepresentation.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, capacityAndRepresentation = _a.capacityAndRepresentation, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, capacityFirst = _b.capacityFirst, legalProxyValue = _b.legalProxyValue;
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, capacityAndRepresentation, 'capacityAndRepresentation', isVersionInfo, defaultValues);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement(LocalForm, { model: "capacityAndRepresentation", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Does the person have sufficient capacity to participate in making the recommendations on this plan?"),
                        React.createElement(RadioGroup, { name: "capacityFirst", className: classes.radioGroup, value: String(capacityFirst), onChange: function (e) { return _this.handleCheckingBoolean(e); } },
                            React.createElement(FormControlLabel, { value: "true", disabled: isVersionInfo, control: React.createElement(Radio, null), label: "Yes" }),
                            React.createElement(FormControlLabel, { value: "false", disabled: isVersionInfo, control: React.createElement(Radio, null), label: "No" }))),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Do they have legal proxy (e.g. welfare attorney, person with parental responsibility who can participate on their behalf in making recommendations?"),
                        React.createElement(RadioGroup, { name: "legalProxyValue", className: classes.radioGroup, value: legalProxyValue, onChange: function (e) { return _this.handleChecking(e); } },
                            React.createElement(FormControlLabel, { value: "Yes", disabled: isVersionInfo, control: React.createElement(Radio, null), label: React.createElement(RadioButtonWithLink, { onRowClick: onRowClick }) }),
                            React.createElement(FormControlLabel, { value: "No", disabled: isVersionInfo, control: React.createElement(Radio, null), label: "No" }),
                            React.createElement(FormControlLabel, { value: "Unknown", disabled: isVersionInfo, control: React.createElement(Radio, null), label: "Unknown" }))),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return CapacityAndRepresentation;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        capacityAndRepresentation: state.custom.capacityAndRepresentation.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addCapacityAndRepresentation: function (data) {
            dispatch(capacityAndRepresentationAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(CapacityAndRepresentation));
