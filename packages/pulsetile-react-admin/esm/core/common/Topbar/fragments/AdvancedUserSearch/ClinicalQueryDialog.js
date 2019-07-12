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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from "react";
import get from "lodash/get";
import { LocalForm, Control } from 'react-redux-form';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { userSearchAction } from "../../../../actions/userSearchAction";
import { advancedSearchAction } from "../../../../actions/advancedSearchAction";
import { clinicalQueryAction } from "../../../../actions/clinicalQueryAction";
import DialogTemplate from "./DialogTemplate";
import formStyles from "./fragments/formStyles";
import RangeLine from "./fragments/RangeLine";
import Button from "@material-ui/core/Button";
var ClinicalQueryDialog = /** @class */ (function (_super) {
    __extends(ClinicalQueryDialog, _super);
    function ClinicalQueryDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchQuery: null,
            searchValue: null,
            ageParams: 'ageRange',
            dateOfBirth: null,
            gender: null,
            age: [0, 100],
            searchType: null,
        };
        _this.changeAgeParams = function (e) {
            _this.setState({
                ageParams: e.target.value,
            });
        };
        _this.changeDateOfBirth = function (value) {
            _this.setState({
                dateOfBirth: value,
            });
        };
        _this.handleChangeGender = function (e) {
            _this.setState({
                gender: e.target.value,
            });
        };
        _this.onChangeRange = function (values) {
            _this.setState({
                age: values
            });
        };
        _this.changeSearchType = function (e) {
            _this.setState({
                searchType: e.target.value,
            });
        };
        _this.changeBlockTitle = function (e, paramName) {
            var _a;
            _this.setState((_a = {},
                _a[paramName] = e.target.value,
                _a));
        };
        _this.getBlockTitle = function () {
            var _a = _this.state, searchQuery = _a.searchQuery, searchValue = _a.searchValue, age = _a.age, ageParams = _a.ageParams, searchType = _a.searchType, dateOfBirth = _a.dateOfBirth, gender = _a.gender;
            var title = "Clinical Query";
            var titleArray = [];
            if (searchType) {
                titleArray.push("Search Type: " + searchType);
            }
            if (searchQuery && searchValue) {
                titleArray.push(searchQuery + ": " + searchValue);
            }
            if (ageParams === 'ageRange') {
                titleArray.push("Age Range: " + age[0] + "-" + age[1]);
            }
            else if (dateOfBirth) {
                titleArray.push("Date of Birth: " + moment(dateOfBirth).format('DD-MMM-YYYY'));
            }
            if (gender) {
                titleArray.push("Gender: " + gender);
            }
            if (titleArray.length > 0) {
                title += ': ';
                title += titleArray.join(', ');
            }
            return title;
        };
        _this.submitForm = function (formData) {
            var _a = _this.state, searchType = _a.searchType, ageParams = _a.ageParams, searchQuery = _a.searchQuery, searchValue = _a.searchValue, dateOfBirth = _a.dateOfBirth, gender = _a.gender, age = _a.age;
            var clinicalQueryData = {
                title: _this.getBlockTitle(),
                searchType: searchType,
                searchQuery: searchQuery,
                searchValue: searchValue,
                dateOfBirth: (ageParams === 'dateOfBirth' && dateOfBirth) ? moment(dateOfBirth).format('DD-MM-YYYY') : null,
                minAge: age[0],
                maxAge: age[1],
                gender: gender
            };
            _this.props.removeUserSearch();
            _this.props.removeAdvancedSearch();
            _this.props.setClinicalQuery(clinicalQueryData);
            window.location.replace('/#/patients');
            _this.props.onClose();
        };
        _this.closeModal = function () {
            _this.setState({
                searchQuery: null,
                searchValue: null,
                ageParams: 'ageRange',
                dateOfBirth: null,
                gender: null,
                age: [0, 100],
                searchType: null,
            });
            _this.props.removeClinicalQuery();
            _this.props.onClose();
        };
        return _this;
    }
    ClinicalQueryDialog.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var _a = this.state, age = _a.age, searchType = _a.searchType, searchValue = _a.searchValue, searchQuery = _a.searchQuery, ageParams = _a.ageParams, dateOfBirth = _a.dateOfBirth, gender = _a.gender;
        var title = this.getBlockTitle();
        return (React.createElement(DialogTemplate, __assign({ title: title }, this.props),
            React.createElement(LocalForm, { model: "clinicalQuery", onSubmit: function (values) { return _this.submitForm(values); } },
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Search Type"),
                    React.createElement(Control.select, { className: classes.formSelect, model: 'clinicalQuery.searchType', onChange: function (e) { return _this.changeSearchType(e); }, required: true },
                        React.createElement("option", null),
                        React.createElement("option", { value: 'allergies', selected: searchType === 'allergies' }, "Allergies"),
                        React.createElement("option", { value: 'problems', selected: searchType === 'problems' }, "Problems / Diagnosis"),
                        React.createElement("option", { value: 'procedures', selected: searchType === 'procedures' }, "Procedures"),
                        React.createElement("option", { value: 'medications', selected: searchType === 'medications' }, "Medications"))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Search Query"),
                    React.createElement("div", { className: classes.searchQueryBlock },
                        React.createElement(Control.select, { className: classes.formSelect, model: 'clinicalQuery.searchQuery', onChange: function (e) { return _this.changeBlockTitle(e, 'searchQuery'); } },
                            React.createElement("option", null),
                            React.createElement("option", { value: 'contains', selected: searchQuery === 'contains' }, "Contains")),
                        React.createElement(Control.text, { className: classes.formInputRight, model: "clinicalQuery.searchValue", defaultValue: searchValue, onChange: function (e) { return _this.changeBlockTitle(e, 'searchValue'); }, required: true }))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Select Age Params"),
                    React.createElement(Control.select, { className: classes.formSelect, model: 'ageParams', onChange: function (e) { return _this.changeAgeParams(e); } },
                        React.createElement("option", { value: 'ageRange', selected: ageParams === 'ageRange' }, "Age Range"),
                        React.createElement("option", { value: 'dateOfBirth', selected: ageParams === 'dateOfBirth' }, "Date of Birth"))),
                ageParams === 'ageRange'
                    ?
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Age Range (Years)"),
                            React.createElement(RangeLine, { age: age, onChangeRange: this.onChangeRange }))
                    :
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Date of Birth"),
                            React.createElement(DatePicker, { className: classes.formInput, popperPlacement: "auto-right", selected: dateOfBirth, onChange: function (value) { return _this.changeDateOfBirth(value); }, dateFormat: 'dd-MM-YYYY' })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Gender"),
                    React.createElement(RadioGroup, { name: "gender", className: classes.radioGroup, value: gender, onChange: function (e) { return _this.handleChangeGender(e); } },
                        React.createElement(FormControlLabel, { className: classes.formControlLabel, value: "male", control: React.createElement(Radio, null), label: "Male" }),
                        React.createElement(FormControlLabel, { className: classes.formControlLabel, value: "female", control: React.createElement(Radio, null), label: "Female" }))),
                React.createElement("div", { className: classes.toolbar },
                    React.createElement(Button, { type: "button", "aria-label": "Close", className: classes.closeButton, onClick: function () { return _this.closeModal(); } }, "Close"),
                    React.createElement(Button, { type: "submit", "aria-label": "Reload page", className: classes.searchButton }, "Search")))));
    };
    return ClinicalQueryDialog;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalQueryInfo: get(state, 'custom.clinicalQuery.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        removeUserSearch: function () {
            dispatch(userSearchAction.remove());
        },
        removeAdvancedSearch: function () {
            dispatch(advancedSearchAction.remove());
        },
        removeClinicalQuery: function () {
            dispatch(clinicalQueryAction.remove());
        },
        setClinicalQuery: function (data) {
            dispatch(clinicalQueryAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(ClinicalQueryDialog));
