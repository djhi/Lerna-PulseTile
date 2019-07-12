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
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var capacityAndRepresentationAction_1 = require("../../../actions/ReSPECT/capacityAndRepresentationAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var RadioButtonWithLink_1 = __importDefault(require("../fragments/RadioButtonWithLink"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
var FORM_FIELDS_NUMBER = 2;
var defaultValues = {
    author: localStorage.getItem('username'),
};
var CapacityAndRepresentation = /** @class */ (function (_super) {
    __extends(CapacityAndRepresentation, _super);
    function CapacityAndRepresentation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            capacityFirst: functions_1.getStateData(_this.props, 'capacityAndRepresentation.capacityFirst'),
            legalProxyValue: functions_1.getStateData(_this.props, 'capacityAndRepresentation.legalProxyValue'),
        };
        _this.submitForm = function (data) {
            var _a = _this.state, capacityFirst = _a.capacityFirst, legalProxyValue = _a.legalProxyValue;
            var additionalData = {
                capacityFirst: capacityFirst,
                legalProxyValue: legalProxyValue,
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            formData.status = functions_1.getSectionStatus(formData, FORM_FIELDS_NUMBER);
            _this.props.addCapacityAndRepresentation(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.handleCheckingBoolean = function (e) {
            var _a;
            _this.setState((_a = {},
                _a[e.target.name] = (e.target.value === 'true'),
                _a));
        };
        _this.handleChecking = function (e) {
            var _a;
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        return _this;
    }
    CapacityAndRepresentation.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, capacityAndRepresentation = _a.capacityAndRepresentation, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, capacityFirst = _b.capacityFirst, legalProxyValue = _b.legalProxyValue;
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, capacityAndRepresentation, 'capacityAndRepresentation', isVersionInfo, defaultValues);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "capacityAndRepresentation", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Does the person have sufficient capacity to participate in making the recommendations on this plan?"),
                        react_1.default.createElement(RadioGroup_1.default, { name: "capacityFirst", className: classes.radioGroup, value: String(capacityFirst), onChange: function (e) { return _this.handleCheckingBoolean(e); } },
                            react_1.default.createElement(FormControlLabel_1.default, { value: "true", disabled: isVersionInfo, control: react_1.default.createElement(Radio_1.default, null), label: "Yes" }),
                            react_1.default.createElement(FormControlLabel_1.default, { value: "false", disabled: isVersionInfo, control: react_1.default.createElement(Radio_1.default, null), label: "No" }))),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Do they have legal proxy (e.g. welfare attorney, person with parental responsibility who can participate on their behalf in making recommendations?"),
                        react_1.default.createElement(RadioGroup_1.default, { name: "legalProxyValue", className: classes.radioGroup, value: legalProxyValue, onChange: function (e) { return _this.handleChecking(e); } },
                            react_1.default.createElement(FormControlLabel_1.default, { value: "Yes", disabled: isVersionInfo, control: react_1.default.createElement(Radio_1.default, null), label: react_1.default.createElement(RadioButtonWithLink_1.default, { onRowClick: onRowClick }) }),
                            react_1.default.createElement(FormControlLabel_1.default, { value: "No", disabled: isVersionInfo, control: react_1.default.createElement(Radio_1.default, null), label: "No" }),
                            react_1.default.createElement(FormControlLabel_1.default, { value: "Unknown", disabled: isVersionInfo, control: react_1.default.createElement(Radio_1.default, null), label: "Unknown" }))),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return CapacityAndRepresentation;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        capacityAndRepresentation: state.custom.capacityAndRepresentation.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addCapacityAndRepresentation: function (data) {
            dispatch(capacityAndRepresentationAction_1.capacityAndRepresentationAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(CapacityAndRepresentation));
