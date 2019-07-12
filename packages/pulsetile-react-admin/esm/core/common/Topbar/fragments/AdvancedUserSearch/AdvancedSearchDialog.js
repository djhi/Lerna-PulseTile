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
import DialogTemplate from "./DialogTemplate";
import formStyles from "./fragments/formStyles";
import RangeLine from "./fragments/RangeLine";
import Button from "@material-ui/core/Button";
import { userSearchAction } from "../../../../actions/userSearchAction";
import { advancedSearchAction } from "../../../../actions/advancedSearchAction";
import { clinicalQueryAction } from "../../../../actions/clinicalQueryAction";
var AdvancedSearchDialog = /** @class */ (function (_super) {
    __extends(AdvancedSearchDialog, _super);
    function AdvancedSearchDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            ageParams: 'ageRange',
            dateOfBirth: null,
            gender: null,
            age: [0, 100],
            nhsNumber: null,
            lastName: null,
            firstName: null,
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
        _this.changeBlockTitle = function (e, paramName) {
            var _a;
            _this.setState((_a = {},
                _a[paramName] = e.target.value,
                _a));
        };
        _this.closeModal = function () {
            _this.setState({
                ageParams: 'ageRange',
                dateOfBirth: null,
                gender: null,
                age: [0, 100],
                nhsNumber: null,
                lastName: null,
                firstName: null,
            });
            _this.props.removeAdvancedSearch();
            _this.props.onClose();
        };
        _this.getBlockTitle = function () {
            var _a = _this.state, age = _a.age, ageParams = _a.ageParams, nhsNumber = _a.nhsNumber, firstName = _a.firstName, lastName = _a.lastName, dateOfBirth = _a.dateOfBirth, gender = _a.gender;
            var title = "Patient Search - Advanced";
            var titleArray = [];
            if (nhsNumber) {
                titleArray.push("NHS number: " + nhsNumber);
            }
            if (firstName) {
                titleArray.push("First Name: " + firstName);
            }
            if (lastName) {
                titleArray.push("Last Name: " + lastName);
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
            var lastName = formData.lastName, firstName = formData.firstName, nhsNumber = formData.nhsNumber;
            var _a = _this.state, dateOfBirth = _a.dateOfBirth, gender = _a.gender, age = _a.age;
            var searchDateOfBirth = dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : null;
            var advancedSearchData = {
                title: _this.getBlockTitle(),
                nhsNumber: nhsNumber,
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: searchDateOfBirth,
                minAge: age[0],
                maxAge: age[1],
                gender: gender
            };
            _this.props.removeUserSearch();
            _this.props.removeClinicalQuery();
            _this.props.setAdvancedSearch(advancedSearchData);
            if (nhsNumber) {
                _this.props.setUserId(nhsNumber);
            }
            else if (lastName) {
                _this.props.setUserSearch(lastName.toLowerCase());
            }
            else if (searchDateOfBirth) {
                _this.props.setSearchType('by_birthdate', searchDateOfBirth);
            }
            else if (gender) {
                _this.props.setSearchType('by_gender', gender);
            }
            else if (age) {
                _this.props.setSearchType('by_age', age);
            }
            window.location.replace('/#/patients');
            _this.props.onClose();
        };
        return _this;
    }
    AdvancedSearchDialog.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var _a = this.state, lastName = _a.lastName, firstName = _a.firstName, nhsNumber = _a.nhsNumber, age = _a.age, ageParams = _a.ageParams, dateOfBirth = _a.dateOfBirth, gender = _a.gender;
        var title = this.getBlockTitle();
        return (React.createElement(DialogTemplate, __assign({ title: title }, this.props),
            React.createElement(LocalForm, { model: "advancedSearch", onSubmit: function (values) { return _this.submitForm(values); } },
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "NHS Number"),
                    React.createElement(Control.text, { className: classes.formInput, type: "number", model: "advancedSearch.nhsNumber", defaultValue: nhsNumber, placeholder: "e.g. 123 456 7890", onChange: function (e) { return _this.changeBlockTitle(e, 'nhsNumber'); } })),
                React.createElement(FormGroup, { className: classes.smallFormGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Last Name"),
                    React.createElement(Control.text, { className: classes.formInput, model: "advancedSearch.lastName", defaultValue: lastName, onChange: function (e) { return _this.changeBlockTitle(e, 'lastName'); }, placeholder: "e.g. Smith" })),
                React.createElement(FormGroup, { className: classes.smallFormGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "First Name"),
                    React.createElement(Control.text, { className: classes.formInput, model: "advancedSearch.firstName", defaultValue: firstName, onChange: function (e) { return _this.changeBlockTitle(e, 'firstName'); }, placeholder: "e.g. John" })),
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
    return AdvancedSearchDialog;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        advancedSearchInfo: get(state, 'custom.advancedSearch.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setUserSearch: function (data) {
            dispatch(userSearchAction.request(data));
        },
        setUserId: function (data) {
            dispatch(userSearchAction.requestId(data));
        },
        setSearchType: function (type, value) {
            dispatch(userSearchAction.searchBy(type, value));
        },
        removeUserSearch: function () {
            dispatch(userSearchAction.remove());
        },
        removeAdvancedSearch: function () {
            dispatch(advancedSearchAction.remove());
        },
        removeClinicalQuery: function () {
            dispatch(clinicalQueryAction.remove());
        },
        setAdvancedSearch: function (data) {
            dispatch(advancedSearchAction.create(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(formStyles)(AdvancedSearchDialog));
