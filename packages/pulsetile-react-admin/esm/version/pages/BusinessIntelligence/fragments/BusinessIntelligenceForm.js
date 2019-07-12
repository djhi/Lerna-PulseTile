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
import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { businessIntelligenceAction } from "../../../actions/BusinessIntelligence/businessIntelligenceAction";
import { genderArray, diagnosisArray } from "../constants";
import RangeLine from "../fragments/RangeLine";
import HealthScoreAxis from "../fragments/HealthScoreAxis";
import Button from "@material-ui/core/Button";
var styles = function (theme) {
    var _a;
    return ({
        currentTabContainer: {
            width: "100%",
            backgroundColor: theme.palette.paperColor,
            margin: 0,
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
        },
        formLabel: (_a = {
                display: "block"
            },
            _a[theme.breakpoints.only('xs')] = {
                width: '100%',
            },
            _a[theme.breakpoints.up('sm')] = {
                width: '20%',
            },
            _a.fontWeight = 800,
            _a.color = theme.palette.fontColor,
            _a.fontSize = 14,
            _a.marginTop = 10,
            _a.marginBottom = 10,
            _a.paddingTop = 5,
            _a),
        dialogLabel: {
            display: "inline-block",
            minWidth: '20%',
            marginTop: 10,
        },
        checkbox: {
            display: "inline-block",
            height: 24,
        },
        checkboxLabel: {
            display: "inline-block",
        },
        customCheckbox: {
            '&$checked': {
                color: theme.palette.mainColor,
            }
        },
        checked: {},
        toolbar: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
        },
        updateButton: {
            display: "block",
            width: 140,
            height: 40,
            margin: "8px !important",
            color: theme.palette.secondaryMainColor,
            backgroundColor: theme.palette.paperColor,
            border: "1px solid " + theme.palette.secondaryMainColor,
            borderRadius: theme.isRectangleButtons ? 0 : 25,
            fontSize: 16,
            fontWeight: 800,
            "&:hover": {
                backgroundColor: theme.palette.secondaryMainColor,
                color: theme.palette.paperColor,
            },
        },
        resetButton: {
            display: "block",
            width: 140,
            height: 40,
            margin: "8px !important",
            color: theme.palette.dangerColor,
            backgroundColor: theme.palette.paperColor,
            border: "1px solid " + theme.palette.dangerColor,
            borderRadius: theme.isRectangleButtons ? 0 : 25,
            fontSize: 16,
            fontWeight: 800,
            "&:hover": {
                backgroundColor: theme.palette.dangerColor,
                color: theme.palette.paperColor,
            },
        },
        filterIcon: {
            marginLeft: 5,
        }
    });
};
var BusinessIntelligenceForm = /** @class */ (function (_super) {
    __extends(BusinessIntelligenceForm, _super);
    function BusinessIntelligenceForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            age: [0, 100],
            healthScore: [0, 100],
            gender: [],
            diagnosis: [],
        };
        _this.setInitialValues = function () {
            var genders = [];
            var diagnosis = [];
            for (var i = 0, n = genderArray.length; i < n; i++) {
                var genderItem = genderArray[i];
                genders.push(genderItem.type);
            }
            for (var i = 0, n = diagnosisArray.length; i < n; i++) {
                var diagnosisItem = diagnosisArray[i];
                diagnosis.push(diagnosisItem.type);
            }
            _this.setState({
                gender: genders,
                diagnosis: diagnosis,
            });
        };
        _this.resetForm = function () {
            var resetBusinessIntelligence = _this.props.resetBusinessIntelligence;
            _this.setState(function (state) { return ({
                age: [0, 100],
                healthScore: [0, 100],
            }); }, function () {
                _this.setInitialValues();
                resetBusinessIntelligence();
            });
        };
        _this.isGenderChecked = function (item) {
            var gender = _this.state.gender;
            return gender.indexOf(item) !== -1;
        };
        _this.isDiagnosisChecked = function (item) {
            var diagnosis = _this.state.diagnosis;
            return diagnosis.indexOf(item) !== -1;
        };
        _this.checkItem = function (currentArray, item) {
            var result = false;
            for (var i = 0, n = currentArray.length; i < n; i++) {
                var currentItem = currentArray[i];
                if (currentItem === item) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        _this.toggleGender = function (item) {
            var currentGenders = _this.state.gender;
            var isItemPresented = _this.checkItem(currentGenders, item);
            if (isItemPresented) {
                var index = currentGenders.indexOf(item);
                currentGenders.splice(index, 1);
            }
            else {
                currentGenders.push(item);
            }
            _this.setState({
                gender: currentGenders,
            });
        };
        _this.toggleDiagnosis = function (item) {
            var currentDiagnosis = _this.state.diagnosis;
            var isItemPresented = _this.checkItem(currentDiagnosis, item);
            if (isItemPresented) {
                var index = currentDiagnosis.indexOf(item);
                currentDiagnosis.splice(index, 1);
            }
            else {
                currentDiagnosis.push(item);
            }
            _this.setState({
                diagnosis: currentDiagnosis,
            });
        };
        _this.onChangeAgeRange = function (values) {
            _this.setState({
                age: values
            });
        };
        _this.onChangeHealthScoreRange = function (values) {
            _this.setState({
                healthScore: values
            });
        };
        _this.updateBusinessIntelligence = function () {
            var _a = _this.state, age = _a.age, healthScore = _a.healthScore, gender = _a.gender, diagnosis = _a.diagnosis;
            _this.props.updateBusinessIntelligence({
                age: age,
                healthScore: healthScore,
                gender: gender,
                diagnosis: diagnosis,
            });
        };
        return _this;
    }
    BusinessIntelligenceForm.prototype.componentDidMount = function () {
        this.setInitialValues();
    };
    BusinessIntelligenceForm.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var _a = this.state, age = _a.age, healthScore = _a.healthScore;
        return (React.createElement(React.Fragment, null,
            React.createElement(Grid, { className: classes.currentTabContainer, container: true },
                React.createElement(Grid, { item: true, sm: 12, md: 6 },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "By Age"),
                        React.createElement(RangeLine, { age: age, onChangeRange: this.onChangeAgeRange }))),
                React.createElement(Grid, { item: true, sm: 12, md: 6 },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "By Health Score"),
                        React.createElement(RangeLine, { age: healthScore, onChangeRange: this.onChangeHealthScoreRange, RangeLineAxis: HealthScoreAxis }))),
                React.createElement(Grid, { item: true, sm: 12, md: 6 },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "By Diagnosis"),
                        diagnosisArray.map(function (item, key) {
                            return (React.createElement("div", { key: key, className: classes.dialogLabel },
                                React.createElement(Checkbox, { className: classes.checkbox, checked: _this.isDiagnosisChecked(item.type), onChange: function () { return _this.toggleDiagnosis(item.type); }, classes: { root: classes.customCheckbox, checked: classes.checked } }),
                                React.createElement(Typography, { className: classes.checkboxLabel }, item.label)));
                        }))),
                React.createElement(Grid, { item: true, sm: 12, md: 6 },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.formLabel }, "By Gender"),
                        genderArray.map(function (item, key) {
                            return (React.createElement("div", { key: key, className: classes.dialogLabel },
                                React.createElement(Checkbox, { className: classes.checkbox, checked: _this.isGenderChecked(item.type), onChange: function () { return _this.toggleGender(item.type); }, classes: { root: classes.customCheckbox, checked: classes.checked } }),
                                React.createElement(Typography, { className: classes.checkboxLabel }, item.label)));
                        })))),
            React.createElement("div", { className: classes.toolbar },
                React.createElement(Button, { type: "button", "aria-label": "Update", className: classes.resetButton, onClick: function () { return _this.resetForm(); } },
                    "Reset",
                    React.createElement(FontAwesomeIcon, { icon: faTimesCircle, className: classes.filterIcon, size: "1x" })),
                React.createElement(Button, { type: "submit", "aria-label": "Update", className: classes.updateButton, onClick: function () { return _this.updateBusinessIntelligence(); } },
                    "Update",
                    React.createElement(FontAwesomeIcon, { icon: faFilter, className: classes.filterIcon, size: "1x" })))));
    };
    return BusinessIntelligenceForm;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        businessIntelligence: get(state, 'custom.businessIntelligence.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        updateBusinessIntelligence: function (data) {
            dispatch(businessIntelligenceAction.update(data));
        },
        resetBusinessIntelligence: function () {
            dispatch(businessIntelligenceAction.remove());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BusinessIntelligenceForm));
