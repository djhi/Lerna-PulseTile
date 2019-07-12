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
var react_redux_1 = require("react-redux");
var react_redux_form_1 = require("react-redux-form");
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var involvenentAction_1 = require("../../../actions/ReSPECT/involvenentAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var InsertedRadioButtonGroup_1 = __importDefault(require("../fragments/InsertedRadioButtonGroup"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
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
            variant: functions_1.getStateData(_this.props, 'involvement.involvementValue'),
        };
        _this.submitForm = function (data) {
            var variant = _this.state.variant;
            var additionalData = {
                involvementValue: variant,
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = functions_1.getSectionStatus(formData, FORM_FIELDS_NUMBER);
            if (additionalData.involvementValue !== "valueSetD") {
                formData.notSelectingReason = "";
            }
            _this.props.addInvolvement(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
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
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, involvement, 'involvement', isVersionInfo, defaultValues);
        var InsertRadioValues = ['valueSetC1', 'valueSetC2', 'valueSetC3'];
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "involvement", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "The clinician(s) signing this plan is/are confirming that (select A,B or C, OR complete section D below):"),
                        react_1.default.createElement(RadioGroup_1.default, { name: "involvementValue", className: classes.radioGroup, value: variant, onChange: function (e) { return _this.handleChange(e); } },
                            react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetA", control: react_1.default.createElement(Radio_1.default, null), label: "A - This person has the mental capacity to participate in making these recommendations. They have been fully involved in making this plan." }),
                            react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetB", control: react_1.default.createElement(Radio_1.default, null), label: "B - This person does not have the mental capacity to participate in making these recommendations. This plan has been made in accordance with capacity law, including, where applicable, in consultation with their legal proxy, or where no proxy, with relevant family members / friends." }),
                            react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetC", control: react_1.default.createElement(Radio_1.default, null), label: react_1.default.createElement(InsertedRadioButtonGroup_1.default, { isSelected: variant === 'valueSetC' || InsertRadioValues.indexOf(variant) !== -1, variant: variant, isVersionInfo: isVersionInfo, handleChange: this.handleChange }) }),
                            react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, disabled: isVersionInfo, value: "valueSetD", control: react_1.default.createElement(Radio_1.default, null), label: "D - if no other option has been selected, valid reasons must be stated here" }))),
                    (variant === 'valueSetD') &&
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "involvement.notSelectingReason", defaultValue: filledValues.notSelectingReason, disabled: isVersionInfo }),
                            react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Document full explanation in the clinical record")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Record date, names and roles of those involved in decision making, and where records of discussion can be found"),
                        react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "involvement.documentExplanation", defaultValue: filledValues.documentExplanation, disabled: isVersionInfo })),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return Involvement;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        involvement: state.custom.involvement.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addInvolvement: function (data) {
            dispatch(involvenentAction_1.involvementAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(Involvement));
