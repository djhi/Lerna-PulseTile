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
var react_redux_1 = require("react-redux");
var react_redux_form_1 = require("react-redux-form");
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var personalDetailsAction_1 = require("../../../actions/ReSPECT/personalDetailsAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
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
                status: functions_1.getSectionStatus(data, FORM_FIELDS_NUMBER),
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            addPersonalDetails(formData);
            var nextStep = (currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (currentRow + 1);
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
            birthDate: patientInfo.birthDate ? moment_1.default(patientInfo.birthDate).format(statuses_1.DATE_FORMAT) : moment_1.default().format(statuses_1.DATE_FORMAT),
            streetAddress: patientInfo.address,
            city: patientInfo.city,
            county: patientInfo.district,
            country: patientInfo.country,
            postCode: patientInfo.postCode,
            nhsNumber: patientInfo.nhsNumber,
            author: localStorage.getItem('username'),
        };
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, personalDetails, 'personalDetails', isVersionInfo, defaultValues);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "personalDetails", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Preferred Name"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.preferredName", defaultValue: filledValues.preferredName, disabled: true })),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "First Name"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.firstName", defaultValue: filledValues.firstName, disabled: true })),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Surname"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.surname", defaultValue: filledValues.surname, disabled: true })),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date of Birth"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.birthDate", defaultValue: filledValues.birthDate, disabled: true })),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Address"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.streetAddress", defaultValue: filledValues.streetAddress, disabled: true }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpTextStreetAddress }, "Street address")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.city", defaultValue: filledValues.city, disabled: true }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "City")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.county", defaultValue: filledValues.county, disabled: true }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "County")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.postCode", defaultValue: filledValues.postCode, disabled: true }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Post code")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.country", defaultValue: filledValues.country, disabled: true }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Country")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "NHS / CHI / Health Care Number"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "personalDetails.nhsNumber", defaultValue: filledValues.nhsNumber, disabled: true })),
                    !isVersionInfo &&
                        react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return PersonalDetails;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        personalDetails: state.custom.personalDetails.data,
        patientInfo: get_1.default(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addPersonalDetails: function (sectionData) {
            dispatch(personalDetailsAction_1.personalDetailsAction.create(sectionData));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(PersonalDetails));
