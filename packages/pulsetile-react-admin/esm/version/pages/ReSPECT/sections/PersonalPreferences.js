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
import { personalPreferencesAction } from "../../../actions/ReSPECT/personalPreferencesAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import RangeLine from "../fragments/RangeLine";
import { TOTAL_ROWS_NUMBER, DATE_FORMAT } from "../statuses";
import { getSectionStatus, getFilledValues, getStateData } from "../functions";
import formStyles from "../fragments/formStyles";
var FORM_FIELDS_NUMBER = 2;
var defaultValues = {
    author: localStorage.getItem('username'),
};
var PersonalPreferences = /** @class */ (function (_super) {
    __extends(PersonalPreferences, _super);
    function PersonalPreferences() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            preferencesValue: [getStateData(_this.props, 'personalPreferences.preferencesValue', 50)],
        };
        _this.submitForm = function (data) {
            var preferencesValue = _this.state.preferencesValue;
            var userPreferencesValue = get(preferencesValue, '[0]', 1);
            var additionalData = {
                preferencesValue: (userPreferencesValue >= 1) ? userPreferencesValue : 1,
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = getSectionStatus(formData, FORM_FIELDS_NUMBER);
            _this.props.addPersonalPreferences(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.setRangeInput = function (values) {
            _this.setState({
                preferencesValue: values
            });
        };
        return _this;
    }
    PersonalPreferences.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, personalPreferences = _a.personalPreferences, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, preferencesValue = _b.preferencesValue;
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, personalPreferences, 'personalPreferences', isVersionInfo, defaultValues);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement(RangeLine, { onChangeRange: this.setRangeInput, sourceName: preferencesValue, title: "How would you balance your priorities for care?", helpTitle: "Please mark along the scale", leftText: "Prioritising sustaining life, even at the expense of some comfort", rightText: "Prioritising comfort, even at the expense of saving life" }),
                React.createElement(LocalForm, { model: "personalPreferences", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Considering the priorities above, what is more important to you?"),
                        React.createElement(Control.textarea, { className: classes.formTextarea, model: "personalPreferences.preferencesText", defaultValue: filledValues.preferencesText, disabled: isVersionInfo }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "Optional")),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return PersonalPreferences;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        personalPreferences: state.custom.personalPreferences.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addPersonalPreferences: function (data) {
            dispatch(personalPreferencesAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(PersonalPreferences));
