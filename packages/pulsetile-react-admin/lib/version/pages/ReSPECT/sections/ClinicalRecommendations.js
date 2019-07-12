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
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var clinicalRecommendationsAction_1 = require("../../../actions/ReSPECT/clinicalRecommendationsAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var RangeLine_1 = __importDefault(require("../fragments/RangeLine"));
var RadioButtonName_1 = __importDefault(require("../fragments/RadioButtonName"));
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
var cprVariants_1 = require("../fragments/cprVariants");
var FORM_FIELDS_NUMBER = 3;
var defaultValues = {
    clinicalSignature: localStorage.getItem('username'),
    dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
    author: localStorage.getItem('username'),
};
var ClinicalRecommendations = /** @class */ (function (_super) {
    __extends(ClinicalRecommendations, _super);
    function ClinicalRecommendations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            cprValue: functions_1.getStateData(_this.props, 'clinicalRecommendations.cprValue'),
            focusValue: functions_1.getInitialRangeLine(_this.props, 'clinicalRecommendations.focusValue', cprVariants_1.FOCUS_LEFT, cprVariants_1.FOCUS_RIGHT, 50),
            firstSignature: null,
            secondSignature: null,
            dateCompleted: null,
        };
        _this.submitForm = function (data) {
            var _a = _this.state, focusValue = _a.focusValue, cprValue = _a.cprValue, dateCompleted = _a.dateCompleted;
            var additionalData = {
                cprValue: cprValue,
                focusValue: get_1.default(focusValue, '[0]', 0) >= 50 ? cprVariants_1.FOCUS_RIGHT : cprVariants_1.FOCUS_LEFT,
                dateCompleted: dateCompleted ? moment_1.default(dateCompleted).format(statuses_1.DATE_FORMAT) : moment_1.default().format(statuses_1.DATE_FORMAT),
                dateDecision: functions_1.getDateUnix(),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = functions_1.getSectionStatus(formData, FORM_FIELDS_NUMBER);
            _this.props.addClinicalRecommendations(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.setRangeInput = function (values) {
            var valueFromArray = get_1.default(values, [0], null);
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
            var dateFromStorage = get_1.default(filledValues, 'dateCompleted', null);
            return dateCompleted ? dateCompleted : functions_1.getDateForDatepicker(dateFromStorage);
        };
        return _this;
    }
    ClinicalRecommendations.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, clinicalRecommendations = _a.clinicalRecommendations, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, focusValue = _b.focusValue, cprValue = _b.cprValue, dateCompleted = _b.dateCompleted;
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, clinicalRecommendations, 'clinicalRecommendations', isVersionInfo, defaultValues);
        var dateFromStorage = get_1.default(filledValues, 'dateCompleted', null);
        var dateToForm = dateCompleted ? dateCompleted : functions_1.getDateForDatepicker(dateFromStorage);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement(RangeLine_1.default, { onChangeRange: this.setRangeInput, sourceName: focusValue, title: "Clinical recommendations for emergency care and treatment", helpTitle: "Please mark along the scale", leftText: "Focus on life sustaining treatment as per guidance below", rightText: "Focus on sympton control as per guidance below" }),
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "clinicalRecommendations", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinical Guidance"),
                        react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "clinicalRecommendations.clinicalGuidance", defaultValue: filledValues.clinicalGuidance, disabled: isVersionInfo }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Now provide clinical guidance on specific inverventions that may or may not be wanted or Clinically appropriate, including being taken or admitted to hospital +/- receiving life support.")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "CPR recommendations"),
                        react_1.default.createElement(RadioGroup_1.default, { name: "cprValue", className: classes.radioGroup, value: cprValue, onChange: function (e) { return _this.handleChecking(e); } }, cprVariants_1.cprVariants.map(function (item, key) {
                            return (react_1.default.createElement(FormControlLabel_1.default, { key: key, value: item.id, disabled: isVersionInfo, control: react_1.default.createElement(Radio_1.default, null), label: react_1.default.createElement(RadioButtonName_1.default, { mainTitle: item.mainTitle, helpTitle: item.helpTitle }) }));
                        }))),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinician signature"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "clinicalRecommendations.clinicalSignature", defaultValue: filledValues.clinicalSignature, disabled: true })),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date completed"),
                        react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: dateToForm, onChange: function (value) { return _this.changeDateCompleted(value); }, todayButton: "Today", disabled: isVersionInfo, dateFormat: statuses_1.DATE_PICKER_FORMAT })),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return ClinicalRecommendations;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalRecommendations: state.custom.clinicalRecommendations.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addClinicalRecommendations: function (data) {
            dispatch(clinicalRecommendationsAction_1.clinicalRecommendationsAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(ClinicalRecommendations));
