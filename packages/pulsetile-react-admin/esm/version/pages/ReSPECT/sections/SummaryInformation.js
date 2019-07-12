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
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { summaryInformationAction } from "../../../actions/ReSPECT/summaryInformationAction";
import MainFormBlock from "../fragments/MainFormBlock";
import SectionToolbar from "../fragments/SectionToolbar";
import { TOTAL_ROWS_NUMBER, DATE_FORMAT } from "../statuses";
import { getSectionStatus, getFilledValues } from "../functions";
import formStyles from "../fragments/formStyles";
var FORM_FIELDS_NUMBER = 1;
var defaultValues = {
    author: localStorage.getItem('username'),
};
var SummaryInformation = /** @class */ (function (_super) {
    __extends(SummaryInformation, _super);
    function SummaryInformation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
        };
        _this.submitForm = function (data) {
            var additionalData = {
                status: getSectionStatus(data, FORM_FIELDS_NUMBER),
                dateCompleted: moment().format(DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addSummaryInformation(formData);
            var nextStep = (_this.props.currentRow > TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        return _this;
    }
    SummaryInformation.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, summaryInformation = _a.summaryInformation, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var isMainPanel = this.state.isMainPanel;
        var filledValues = getFilledValues(sectionsInfo, latestVersionInfo, summaryInformation, 'summaryInformation', isVersionInfo, defaultValues);
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement(LocalForm, { model: "summaryInformation", onSubmit: function (values) { return _this.submitForm(values); } },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Summary of relevant information for this plan."),
                        React.createElement(Control.textarea, { className: classes.formTextarea, model: "summaryInformation.summary", defaultValue: filledValues.summary, disabled: isVersionInfo }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "Including diagnosis, communication needs (e.g. interpreter, communication aids) and reasons for the preferences and recommendations recorded.")),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Details of other relevant planning documents"),
                        React.createElement(Control.textarea, { className: classes.formTextarea, model: "summaryInformation.details", defaultValue: filledValues.details, disabled: isVersionInfo }),
                        React.createElement(FormHelperText, { className: classes.formHelpText }, "Details of other relevant planning documents and where to find them (e.g. Advance Decision to Refuse Treatment, Advance Care Plan). Also include known wishes about organ donation.")),
                    !isVersionInfo && React.createElement(SectionToolbar, { onRowClick: onRowClick })))));
    };
    return SummaryInformation;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        summaryInformation: state.custom.summaryInformation.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addSummaryInformation: function (data) {
            dispatch(summaryInformationAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(SummaryInformation));
