"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_form_1 = require("react-redux-form");
var moment_1 = __importDefault(require("moment"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var DialogTemplate_1 = __importDefault(require("./DialogTemplate"));
var formStyles_1 = __importDefault(require("./fragments/formStyles"));
var RangeLine_1 = __importDefault(require("./fragments/RangeLine"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var userSearchAction_1 = require("../../../../actions/userSearchAction");
var advancedSearchAction_1 = require("../../../../actions/advancedSearchAction");
var clinicalQueryAction_1 = require("../../../../actions/clinicalQueryAction");
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
                titleArray.push("Date of Birth: " + moment_1.default(dateOfBirth).format('DD-MMM-YYYY'));
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
            var searchDateOfBirth = dateOfBirth ? moment_1.default(dateOfBirth).format('YYYY-MM-DD') : null;
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
        return (react_1.default.createElement(DialogTemplate_1.default, __assign({ title: title }, this.props),
            react_1.default.createElement(react_redux_form_1.LocalForm, { model: "advancedSearch", onSubmit: function (values) { return _this.submitForm(values); } },
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "NHS Number"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, type: "number", model: "advancedSearch.nhsNumber", defaultValue: nhsNumber, placeholder: "e.g. 123 456 7890", onChange: function (e) { return _this.changeBlockTitle(e, 'nhsNumber'); } })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Last Name"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "advancedSearch.lastName", defaultValue: lastName, onChange: function (e) { return _this.changeBlockTitle(e, 'lastName'); }, placeholder: "e.g. Smith" })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "First Name"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "advancedSearch.firstName", defaultValue: firstName, onChange: function (e) { return _this.changeBlockTitle(e, 'firstName'); }, placeholder: "e.g. John" })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Select Age Params"),
                    react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: 'ageParams', onChange: function (e) { return _this.changeAgeParams(e); } },
                        react_1.default.createElement("option", { value: 'ageRange', selected: ageParams === 'ageRange' }, "Age Range"),
                        react_1.default.createElement("option", { value: 'dateOfBirth', selected: ageParams === 'dateOfBirth' }, "Date of Birth"))),
                ageParams === 'ageRange'
                    ?
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Age Range (Years)"),
                            react_1.default.createElement(RangeLine_1.default, { age: age, onChangeRange: this.onChangeRange }))
                    :
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date of Birth"),
                            react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, popperPlacement: "auto-right", selected: dateOfBirth, onChange: function (value) { return _this.changeDateOfBirth(value); }, dateFormat: 'dd-MM-YYYY' })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Gender"),
                    react_1.default.createElement(RadioGroup_1.default, { name: "gender", className: classes.radioGroup, value: gender, onChange: function (e) { return _this.handleChangeGender(e); } },
                        react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, value: "male", control: react_1.default.createElement(Radio_1.default, null), label: "Male" }),
                        react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, value: "female", control: react_1.default.createElement(Radio_1.default, null), label: "Female" }))),
                react_1.default.createElement("div", { className: classes.toolbar },
                    react_1.default.createElement(Button_1.default, { type: "button", "aria-label": "Close", className: classes.closeButton, onClick: function () { return _this.closeModal(); } }, "Close"),
                    react_1.default.createElement(Button_1.default, { type: "submit", "aria-label": "Reload page", className: classes.searchButton }, "Search")))));
    };
    return AdvancedSearchDialog;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        advancedSearchInfo: get_1.default(state, 'custom.advancedSearch.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setUserSearch: function (data) {
            dispatch(userSearchAction_1.userSearchAction.request(data));
        },
        setUserId: function (data) {
            dispatch(userSearchAction_1.userSearchAction.requestId(data));
        },
        setSearchType: function (type, value) {
            dispatch(userSearchAction_1.userSearchAction.searchBy(type, value));
        },
        removeUserSearch: function () {
            dispatch(userSearchAction_1.userSearchAction.remove());
        },
        removeAdvancedSearch: function () {
            dispatch(advancedSearchAction_1.advancedSearchAction.remove());
        },
        removeClinicalQuery: function () {
            dispatch(clinicalQueryAction_1.clinicalQueryAction.remove());
        },
        setAdvancedSearch: function (data) {
            dispatch(advancedSearchAction_1.advancedSearchAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(AdvancedSearchDialog));
