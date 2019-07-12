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
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var summaryInformationAction_1 = require("../../../actions/ReSPECT/summaryInformationAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
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
                status: functions_1.getSectionStatus(data, FORM_FIELDS_NUMBER),
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addSummaryInformation(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
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
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, summaryInformation, 'summaryInformation', isVersionInfo, defaultValues);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "summaryInformation", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Summary of relevant information for this plan."),
                        react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "summaryInformation.summary", defaultValue: filledValues.summary, disabled: isVersionInfo }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Including diagnosis, communication needs (e.g. interpreter, communication aids) and reasons for the preferences and recommendations recorded.")),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Details of other relevant planning documents"),
                        react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "summaryInformation.details", defaultValue: filledValues.details, disabled: isVersionInfo }),
                        react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, "Details of other relevant planning documents and where to find them (e.g. Advance Decision to Refuse Treatment, Advance Care Plan). Also include known wishes about organ donation.")),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return SummaryInformation;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        summaryInformation: state.custom.summaryInformation.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addSummaryInformation: function (data) {
            dispatch(summaryInformationAction_1.summaryInformationAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(SummaryInformation));
