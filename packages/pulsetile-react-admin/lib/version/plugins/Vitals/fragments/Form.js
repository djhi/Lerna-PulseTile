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
var moment_1 = __importDefault(require("moment"));
require("react-datepicker/dist/react-datepicker.css");
var react_redux_form_1 = require("react-redux-form");
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CustomFormToolbar_1 = __importDefault(require("../../../../core/common/Toolbars/CustomFormToolbar"));
var ValueWithUnits_1 = __importDefault(require("./ValueWithUnits"));
var CustomSwitch_1 = __importDefault(require("./CustomSwitch"));
var settings_1 = require("./settings");
var styles = function (theme) { return ({
    formGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    formLabel: {
        display: "block",
        fontWeight: 800,
        color: "#000",
        fontSize: 14,
        marginBottom: 15,
    },
    valueAndUnits: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start"
    },
    formInput: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
    },
    formInputNewsScore: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
    },
    formInputNewsScoreSuccess: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: settings_1.SUCCESS_COLOR,
    },
    formInputNewsScoreWarning: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: settings_1.WARNING_COLOR,
    },
    formInputNewsScoreDanger: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: settings_1.DANGER_COLOR,
    },
    parameterNewsScore: {
        width: '100%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
    },
    parameterNewsScoreSuccess: {
        width: '100%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: settings_1.SUCCESS_COLOR,
    },
    parameterNewsScoreWarning: {
        width: '100%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: settings_1.WARNING_COLOR,
    },
    parameterNewsScoreDanger: {
        width: '100%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: settings_1.DANGER_COLOR,
    },
    newsScoreBlock: {
        paddingLeft: 10,
        borderLeft: "2px solid " + theme.palette.borderColor
    },
    newsScoreBlockDanger: {
        paddingLeft: 10,
        borderLeft: "5px solid " + settings_1.DANGER_COLOR
    },
    newsScoreBlockWarning: {
        paddingLeft: 10,
        borderLeft: "5px solid " + settings_1.WARNING_COLOR
    },
    newsScoreBlockSuccess: {
        paddingLeft: 10,
        borderLeft: "5px solid " + settings_1.SUCCESS_COLOR
    },
    formInputUnits: {
        width: '50%',
        height: 25,
        paddingLeft: 10,
    },
    units: {
        width: '50%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        borderTop: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
    text: {
        padding: 20,
    },
    levelConsciousnessBlock: {
        width: '100%',
        paddingLeft: 10,
        margin: 20,
        borderLeft: "2px solid " + theme.palette.borderColor
    },
    levelConsciousnessBlockDanger: {
        width: '100%',
        paddingLeft: 10,
        margin: 20,
        borderLeft: "5px solid " + settings_1.DANGER_COLOR
    },
    anySupplementalOxygenBlock: {
        width: '100%',
        paddingLeft: 10,
        margin: 20,
        borderLeft: "2px solid " + theme.palette.borderColor
    },
    anySupplementalOxygenBlockWarning: {
        width: '100%',
        paddingLeft: 10,
        margin: 20,
        borderLeft: "5px solid " + settings_1.WARNING_COLOR
    },
    switcherLabel: {
        marginLeft: 10,
    },
    switcherLabelActive: {
        marginLeft: 10,
        color: theme.palette.secondaryMainColor,
    }
}); };
/**
 * This component returns TransferOfCare creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {string} modelName
 */
var VitalsInputs = /** @class */ (function (_super) {
    __extends(VitalsInputs, _super);
    function VitalsInputs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            levelConsciousnessClassName: 'levelConsciousnessBlock',
            levelOfConsciousnessValue: null,
            anySupplementalOxygenClassName: 'anySupplementalOxygenBlock',
            anySupplementalOxygenValue: 'No',
            newsScoreClassName: 'newsScoreBlock',
            newsScoreValue: null,
            formInputNewsScore: 'formInput',
            parameterNewsScore: 'parameterNewsScore',
            respirationRate: null,
            oxygenSaturation: null,
            heartRate: null,
            systolicBP: null,
            diastolicBP: null,
            temperature: null,
        };
        _this.submitForm = function (data) {
            var _a = _this.props, isCreate = _a.isCreate, vitalsList = _a.vitalsList, createNewVitals = _a.createNewVitals, updateVitals = _a.updateVitals;
            var _b = _this.state, levelOfConsciousnessValue = _b.levelOfConsciousnessValue, anySupplementalOxygenValue = _b.anySupplementalOxygenValue, newsScoreValue = _b.newsScoreValue;
            var additionalData = {
                levelOfConsciousness: levelOfConsciousnessValue,
                oxygenSupplemental: (anySupplementalOxygenValue === 'Yes'),
                newsScore: newsScoreValue.toString(),
                dateCreate: moment_1.default().unix(),
                author: localStorage.getItem('username'),
                number: vitalsList.length + 1,
            };
            var formData = Object.assign({}, data, additionalData);
            if (isCreate) {
                createNewVitals(formData);
            }
            else {
                var filledValues = _this.getCurrentItem();
                var id = get_1.default(filledValues, 'sourceId', null);
                var source = get_1.default(filledValues, 'source', null);
                formData.id = id;
                formData.source = source;
                updateVitals(id, formData, filledValues);
            }
        };
        _this.changeLevelOfConsciousness = function (e) {
            var value = e.target.value;
            var className = (value !== 'Alert') ? 'levelConsciousnessBlockDanger' : 'levelConsciousnessBlock';
            _this.setState({
                levelOfConsciousnessValue: value,
                levelConsciousnessClassName: className,
            }, function () { return _this.updateNewsScore(); });
        };
        _this.changeAnySupplementalOxygen = function () {
            var newValue = (_this.state.anySupplementalOxygenValue === 'Yes') ? 'No' : 'Yes';
            var className = (newValue === 'Yes') ? 'anySupplementalOxygenBlockWarning' : 'anySupplementalOxygenBlock';
            _this.setState({
                anySupplementalOxygenValue: newValue,
                anySupplementalOxygenClassName: className,
            }, function () { return _this.updateNewsScore(); });
        };
        _this.updateNewsScore = function () {
            var _a = _this.props, isCreate = _a.isCreate, isDetailsPage = _a.isDetailsPage;
            var _b = _this.state, anySupplementalOxygenValue = _b.anySupplementalOxygenValue, levelOfConsciousnessValue = _b.levelOfConsciousnessValue, respirationRate = _b.respirationRate, oxygenSaturation = _b.oxygenSaturation, heartRate = _b.heartRate, systolicBP = _b.systolicBP, temperature = _b.temperature;
            var newsScoreValue = 0;
            if (levelOfConsciousnessValue !== 'Alert' && levelOfConsciousnessValue) {
                newsScoreValue += 3;
            }
            if (anySupplementalOxygenValue === 'Yes') {
                newsScoreValue += 2;
            }
            newsScoreValue = newsScoreValue + respirationRate + oxygenSaturation + heartRate + systolicBP + temperature;
            var filledValues = isCreate ? null : _this.getCurrentItem();
            var value = isDetailsPage ? get_1.default(filledValues, 'newsScore', null) : newsScoreValue;
            var newsScoreClassName = 'newsScoreBlock';
            var formInputNewsScore = 'formInputNewsScore';
            if (value > 6) {
                newsScoreClassName = 'newsScoreBlockDanger';
                formInputNewsScore = 'formInputNewsScoreDanger';
            }
            else if (value > 4) {
                newsScoreClassName = 'newsScoreBlockWarning';
                formInputNewsScore = 'formInputNewsScoreWarning';
            }
            else if (value > 0) {
                newsScoreClassName = 'newsScoreBlockSuccess';
                formInputNewsScore = 'formInputNewsScoreSuccess';
            }
            _this.setState({
                newsScoreValue: newsScoreValue,
                newsScoreClassName: newsScoreClassName,
                formInputNewsScore: formInputNewsScore,
            });
        };
        _this.updateInput = function (name, value) {
            var _a;
            _this.setState((_a = {},
                _a[name] = value,
                _a), function () { return _this.updateNewsScore(); });
        };
        _this.getCurrentItem = function () {
            var _a = _this.props, vitalsList = _a.vitalsList, location = _a.location;
            var pathname = get_1.default(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get_1.default(pathnameArray, [2], null);
            var vitalsListArray = Object.values(vitalsList);
            var result = null;
            for (var i = 0, n = vitalsListArray.length; i < n; i++) {
                var item = vitalsListArray[i];
                if (item.sourceId === sourceId || item.id === sourceId) {
                    result = item;
                    break;
                }
            }
            return result;
        };
        _this.updateSwitchers = function () {
            var filledValues = _this.getCurrentItem();
            var levelOfConsciousness = get_1.default(filledValues, 'levelOfConsciousness', 'Alert');
            var oxygenSupplemental = get_1.default(filledValues, 'oxygenSupplemental', false);
            _this.setState({
                levelOfConsciousnessValue: levelOfConsciousness,
                anySupplementalOxygenValue: oxygenSupplemental ? 'Yes' : 'No',
                levelConsciousnessClassName: (levelOfConsciousness !== 'Alert') ? 'levelConsciousnessBlockDanger' : 'levelConsciousnessBlock',
                anySupplementalOxygenClassName: oxygenSupplemental ? 'anySupplementalOxygenBlockWarning' : 'anySupplementalOxygenBlock'
            });
        };
        _this.getNewScoreDetailsColor = function (filledValues) {
            var newsScore = get_1.default(filledValues, 'newsScore', null);
            var result = '';
            if (newsScore > 6) {
                result = 'parameterNewsScoreDanger';
            }
            else if (newsScore > 4) {
                result = 'parameterNewsScoreWarning';
            }
            else if (newsScore > 0) {
                result = 'parameterNewsScoreSuccess';
            }
            return result;
        };
        return _this;
    }
    VitalsInputs.prototype.componentDidMount = function () {
        this.updateSwitchers();
    };
    VitalsInputs.prototype.componentWillReceiveProps = function (nextProps, props) {
        var newItemId = get_1.default(nextProps, 'id', null);
        var prevItemId = get_1.default(this.props, 'id', null);
        if (newItemId !== prevItemId) {
            this.updateSwitchers();
        }
    };
    VitalsInputs.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isCreate = _a.isCreate, isDetailsPage = _a.isDetailsPage;
        var _b = this.state, levelConsciousnessClassName = _b.levelConsciousnessClassName, levelOfConsciousnessValue = _b.levelOfConsciousnessValue, anySupplementalOxygenClassName = _b.anySupplementalOxygenClassName, anySupplementalOxygenValue = _b.anySupplementalOxygenValue, newsScoreClassName = _b.newsScoreClassName, newsScoreValue = _b.newsScoreValue, formInputNewsScore = _b.formInputNewsScore;
        var filledValues = isCreate ? null : this.getCurrentItem();
        var sourceId = get_1.default(this.props, 'id', null);
        var parameterNewsScore = this.getNewScoreDetailsColor(filledValues);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_redux_form_1.LocalForm, { model: "vitals", onSubmit: function (values) { return _this.submitForm(values); } },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(ValueWithUnits_1.default, { label: "Respiration Rate", units: "resps/min", model: "respirationRate", updateInput: this.updateInput, hasPopup: true, value: get_1.default(filledValues, 'respirationRate', null), isDetailsPage: isDetailsPage, sourceId: sourceId }),
                    react_1.default.createElement(ValueWithUnits_1.default, { label: "Oxygen Saturation", units: "%", model: "oxygenSaturation", updateInput: this.updateInput, hasPopup: true, value: get_1.default(filledValues, 'oxygenSaturation', null), isDetailsPage: isDetailsPage, sourceId: sourceId })),
                react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                    react_1.default.createElement("div", { className: classes[anySupplementalOxygenClassName] },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Any Supplemental Oxygen"),
                        react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(CustomSwitch_1.default, { checked: (anySupplementalOxygenValue === 'Yes'), value: anySupplementalOxygenValue, onChange: function () { return _this.changeAnySupplementalOxygen(); }, disabled: isDetailsPage }), label: react_1.default.createElement(Typography_1.default, { className: classes.switcherLabel }, anySupplementalOxygenValue) }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(ValueWithUnits_1.default, { label: "Heart Rate", units: "bpm", model: "heartRate", updateInput: this.updateInput, hasPopup: true, value: get_1.default(filledValues, 'heartRate', null), isDetailsPage: isDetailsPage, sourceId: sourceId }),
                    react_1.default.createElement(ValueWithUnits_1.default, { label: "Temperature", units: "C", model: "temperature", updateInput: this.updateInput, hasPopup: true, value: get_1.default(filledValues, 'temperature', null), isDetailsPage: isDetailsPage, sourceId: sourceId })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(ValueWithUnits_1.default, { label: "Systolic BP", units: "mmHg", model: "systolicBP", updateInput: this.updateInput, hasPopup: true, value: get_1.default(filledValues, 'systolicBP', null), isDetailsPage: isDetailsPage, sourceId: sourceId }),
                    react_1.default.createElement(ValueWithUnits_1.default, { label: "Diastolic BP", units: "mmHg", model: "diastolicBP", updateInput: this.updateInput, hasPopup: false, value: get_1.default(filledValues, 'diastolicBP', null), isDetailsPage: isDetailsPage, sourceId: sourceId })),
                react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                    react_1.default.createElement("div", { className: classes[levelConsciousnessClassName] },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Level of Consciousness"),
                        react_1.default.createElement(FormGroup_1.default, { "aria-label": "position", name: "levelOfConsciousness", value: levelOfConsciousnessValue, onChange: function (e) { return _this.changeLevelOfConsciousness(e); }, row: true },
                            react_1.default.createElement(FormControlLabel_1.default, { value: "Alert", control: react_1.default.createElement(CustomSwitch_1.default, null), label: react_1.default.createElement(Typography_1.default, { className: levelOfConsciousnessValue === 'Alert' ? classes.switcherLabelActive : classes.switcherLabel }, "Alert"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Alert', disabled: isDetailsPage }),
                            react_1.default.createElement(FormControlLabel_1.default, { value: "Voice", control: react_1.default.createElement(CustomSwitch_1.default, null), label: react_1.default.createElement(Typography_1.default, { className: levelOfConsciousnessValue === 'Voice' ? classes.switcherLabelActive : classes.switcherLabel }, "Voice"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Voice', disabled: isDetailsPage }),
                            react_1.default.createElement(FormControlLabel_1.default, { value: "Pain", control: react_1.default.createElement(CustomSwitch_1.default, null), label: react_1.default.createElement(Typography_1.default, { className: levelOfConsciousnessValue === 'Pain' ? classes.switcherLabelActive : classes.switcherLabel }, "Pain"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Pain', disabled: isDetailsPage }),
                            react_1.default.createElement(FormControlLabel_1.default, { value: "Unresponsive", control: react_1.default.createElement(CustomSwitch_1.default, null), label: react_1.default.createElement(Typography_1.default, { className: levelOfConsciousnessValue === 'Unresponsive' ? classes.switcherLabelActive : classes.switcherLabel }, "Unresponsive"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Unresponsive', disabled: isDetailsPage })))),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement("div", { className: classes[newsScoreClassName] },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "NEWS Score"),
                        isDetailsPage ?
                            react_1.default.createElement("div", { className: classes[parameterNewsScore] },
                                react_1.default.createElement(Typography_1.default, null, get_1.default(filledValues, 'newsScore', null)))
                            :
                                react_1.default.createElement(react_redux_form_1.Control.text, { className: classes[formInputNewsScore], model: 'vitals.newsScore', value: newsScoreValue, disabled: true }))),
                !isDetailsPage && react_1.default.createElement(CustomFormToolbar_1.default, __assign({}, this.props)))));
    };
    return VitalsInputs;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        vitalsList: get_1.default(state, 'admin.resources.vitalsigns.data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createNewVitals: function (formData) {
            dispatch(react_admin_1.crudCreate('vitalsigns', formData, '/vitalsigns', '/vitalsigns'));
        },
        updateVitals: function (id, formData, filledValues) {
            dispatch(react_admin_1.crudUpdate('vitalsigns', id, formData, filledValues, '/vitalsigns', '/vitalsigns'));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(VitalsInputs));
