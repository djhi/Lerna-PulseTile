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
var personalPreferencesAction_1 = require("../../../actions/ReSPECT/personalPreferencesAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var RangeLine_1 = __importDefault(require("../fragments/RangeLine"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
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
            preferencesValue: [functions_1.getStateData(_this.props, 'personalPreferences.preferencesValue', 50)],
        };
        _this.submitForm = function (data) {
            var preferencesValue = _this.state.preferencesValue;
            var userPreferencesValue = get_1.default(preferencesValue, '[0]', 1);
            var additionalData = {
                preferencesValue: (userPreferencesValue >= 1) ? userPreferencesValue : 1,
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = functions_1.getSectionStatus(formData, FORM_FIELDS_NUMBER);
            _this.props.addPersonalPreferences(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
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
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, personalPreferences, 'personalPreferences', isVersionInfo, defaultValues);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement(RangeLine_1.default, { onChangeRange: this.setRangeInput, sourceName: preferencesValue, title: "How would you balance your priorities for care?", helpTitle: "Please mark along the scale", leftText: "Prioritising sustaining life, even at the expense of some comfort", rightText: "Prioritising comfort, even at the expense of saving life" }),
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "personalPreferences", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Considering the priorities above, what is more important to you?"),
                        react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "personalPreferences.preferencesText", defaultValue: filledValues.preferencesText, disabled: isVersionInfo }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Optional")),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return PersonalPreferences;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        personalPreferences: state.custom.personalPreferences.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addPersonalPreferences: function (data) {
            dispatch(personalPreferencesAction_1.personalPreferencesAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(PersonalPreferences));
