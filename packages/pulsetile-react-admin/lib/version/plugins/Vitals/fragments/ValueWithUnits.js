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
var react_redux_form_1 = require("react-redux-form");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var RangeLinePopover_1 = __importDefault(require("./RangeLinePopover"));
var settings_1 = require("./settings");
var styles = function (theme) { return ({
    formGroup: {
        width: '50%',
        float: "left",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    formGroupInside: {
        width: '100%',
        paddingLeft: 10,
        borderLeft: "2px solid " + theme.palette.borderColor
    },
    formGroupInsideDanger: {
        width: '100%',
        paddingLeft: 10,
        borderLeft: "5px solid " + settings_1.DANGER_COLOR
    },
    formGroupInsideWarning: {
        width: '100%',
        paddingLeft: 10,
        borderLeft: "5px solid " + settings_1.WARNING_COLOR
    },
    formGroupInsideSuccess: {
        width: '100%',
        paddingLeft: 10,
        borderLeft: "5px solid " + settings_1.SUCCESS_COLOR
    },
    formLabel: {
        display: "block",
        fontWeight: 800,
        color: theme.palette.fontColor,
        fontSize: 14,
        marginBottom: 15,
    },
    valueAndUnits: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start"
    },
    formInputUnits: {
        width: '20%',
        height: 25,
        paddingLeft: 10,
    },
    formInputUnitsDanger: {
        width: '20%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: settings_1.DANGER_COLOR,
    },
    formInputUnitsWarning: {
        width: '20%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: settings_1.WARNING_COLOR,
    },
    formInputUnitsSuccess: {
        width: '20%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: settings_1.SUCCESS_COLOR,
    },
    units: {
        width: '30%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        borderTop: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
    parameterBlock: {
        display: 'flex',
        textAlign: 'center',
        width: '20%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        border: "1px solid " + theme.palette.borderColor,
    },
    parameterBlockDanger: {
        display: 'flex',
        textAlign: 'center',
        width: '20%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: settings_1.DANGER_COLOR,
        border: "1px solid " + theme.palette.borderColor,
    },
    parameterBlockWarning: {
        display: 'flex',
        textAlign: 'center',
        width: '20%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: settings_1.WARNING_COLOR,
        border: "1px solid " + theme.palette.borderColor,
    },
    parameterBlockSuccess: {
        display: 'flex',
        textAlign: 'center',
        width: '20%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: settings_1.SUCCESS_COLOR,
        border: "1px solid " + theme.palette.borderColor,
    },
}); };
var ValueWithUnits = /** @class */ (function (_super) {
    __extends(ValueWithUnits, _super);
    function ValueWithUnits() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            formGroupClassName: 'formGroupInside',
            formInputClassName: 'formInputUnits',
            parameterClassName: 'parameterBlock'
        };
        _this.defineColors = function (model, value) {
            var limits = get_1.default(settings_1.rangeLineLimits, model, null);
            var formInput = 'formInputUnits';
            var formGroup = 'formGroupInside';
            var parameterBlock = 'parameterBlock';
            var nonScoreValue = 0;
            if (value && limits) {
                if (value <= limits.redMin || value >= limits.redMax) {
                    formInput = 'formInputUnitsDanger';
                    formGroup = 'formGroupInsideDanger';
                    parameterBlock = 'parameterBlockDanger';
                    nonScoreValue = 3;
                }
                else if (value >= limits.greenMin && value <= limits.greenMax) {
                    formInput = 'formInputUnitsSuccess';
                    formGroup = 'formGroupInsideSuccess';
                    parameterBlock = 'parameterBlockSuccess';
                    nonScoreValue = 1;
                }
                else {
                    formInput = 'formInputUnitsWarning';
                    formGroup = 'formGroupInsideWarning';
                    parameterBlock = 'parameterBlockWarning';
                    nonScoreValue = 2;
                }
            }
            _this.setState({
                formInputClassName: formInput,
                formGroupClassName: formGroup,
                parameterClassName: parameterBlock,
            }, function () { return _this.props.updateInput(model, nonScoreValue); });
        };
        _this.handleClick = function (event) {
            _this.setState({
                anchorEl: event.currentTarget,
            });
        };
        _this.handleClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        _this.changeColor = function (e) {
            var name = e.target.name;
            var value = e.target.value;
            var nameStr = name.replace('vitals.', '');
            _this.defineColors(nameStr, value);
        };
        return _this;
    }
    ValueWithUnits.prototype.componentDidMount = function () {
        var _a = this.props, model = _a.model, value = _a.value;
        this.defineColors(model, value);
    };
    ValueWithUnits.prototype.componentWillReceiveProps = function (nextProps, props) {
        var newItemId = get_1.default(nextProps, 'sourceId', null);
        var prevItemId = get_1.default(this.props, 'sourceId', null);
        if (newItemId !== prevItemId) {
            var model = nextProps.model, value = nextProps.value;
            this.defineColors(model, value);
        }
    };
    ValueWithUnits.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, label = _a.label, units = _a.units, model = _a.model, hasPopup = _a.hasPopup, value = _a.value, isDetailsPage = _a.isDetailsPage;
        var _b = this.state, formGroupClassName = _b.formGroupClassName, formInputClassName = _b.formInputClassName, parameterClassName = _b.parameterClassName;
        var anchorEl = this.state.anchorEl;
        var open = Boolean(anchorEl);
        var modelName = "vitals." + model;
        return (react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
            react_1.default.createElement("div", { className: classes[formGroupClassName] },
                react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, label),
                react_1.default.createElement("div", { className: classes.valueAndUnits },
                    isDetailsPage
                        ?
                            react_1.default.createElement("div", { className: classes[parameterClassName] },
                                react_1.default.createElement(Typography_1.default, null, value))
                        :
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes[formInputClassName], type: "number", model: modelName, onBlur: function (e) { return _this.changeColor(e); }, defaultValue: value, disabled: isDetailsPage }),
                    units &&
                        react_1.default.createElement("div", { className: classes.units, onMouseOver: function (e) { return _this.handleClick(e); }, onMouseOut: function () { return _this.handleClose(); } },
                            react_1.default.createElement(Typography_1.default, null, units)),
                    hasPopup &&
                        react_1.default.createElement(RangeLinePopover_1.default, { anchorEl: anchorEl, open: open, handleClose: this.handleClose, label: label, model: model })))));
    };
    return ValueWithUnits;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(ValueWithUnits);
