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
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { LocalForm, Control } from 'react-redux-form';
import { connect } from 'react-redux';
import { crudUpdate, crudCreate } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";
import SectionToolbar from "../../../../core/common/Toolbars/CustomFormToolbar";
import ValueWithUnits from "./ValueWithUnits";
import CustomSwitch from "./CustomSwitch";
import { DANGER_COLOR, SUCCESS_COLOR, WARNING_COLOR } from "./settings";
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
        backgroundColor: SUCCESS_COLOR,
    },
    formInputNewsScoreWarning: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: WARNING_COLOR,
    },
    formInputNewsScoreDanger: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
        backgroundColor: DANGER_COLOR,
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
        backgroundColor: SUCCESS_COLOR,
    },
    parameterNewsScoreWarning: {
        width: '100%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: WARNING_COLOR,
    },
    parameterNewsScoreDanger: {
        width: '100%',
        height: 25,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: DANGER_COLOR,
    },
    newsScoreBlock: {
        paddingLeft: 10,
        borderLeft: "2px solid " + theme.palette.borderColor
    },
    newsScoreBlockDanger: {
        paddingLeft: 10,
        borderLeft: "5px solid " + DANGER_COLOR
    },
    newsScoreBlockWarning: {
        paddingLeft: 10,
        borderLeft: "5px solid " + WARNING_COLOR
    },
    newsScoreBlockSuccess: {
        paddingLeft: 10,
        borderLeft: "5px solid " + SUCCESS_COLOR
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
        borderLeft: "5px solid " + DANGER_COLOR
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
        borderLeft: "5px solid " + WARNING_COLOR
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
                dateCreate: moment().unix(),
                author: localStorage.getItem('username'),
                number: vitalsList.length + 1,
            };
            var formData = Object.assign({}, data, additionalData);
            if (isCreate) {
                createNewVitals(formData);
            }
            else {
                var filledValues = _this.getCurrentItem();
                var id = get(filledValues, 'sourceId', null);
                var source = get(filledValues, 'source', null);
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
            var value = isDetailsPage ? get(filledValues, 'newsScore', null) : newsScoreValue;
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
            var pathname = get(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get(pathnameArray, [2], null);
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
            var levelOfConsciousness = get(filledValues, 'levelOfConsciousness', 'Alert');
            var oxygenSupplemental = get(filledValues, 'oxygenSupplemental', false);
            _this.setState({
                levelOfConsciousnessValue: levelOfConsciousness,
                anySupplementalOxygenValue: oxygenSupplemental ? 'Yes' : 'No',
                levelConsciousnessClassName: (levelOfConsciousness !== 'Alert') ? 'levelConsciousnessBlockDanger' : 'levelConsciousnessBlock',
                anySupplementalOxygenClassName: oxygenSupplemental ? 'anySupplementalOxygenBlockWarning' : 'anySupplementalOxygenBlock'
            });
        };
        _this.getNewScoreDetailsColor = function (filledValues) {
            var newsScore = get(filledValues, 'newsScore', null);
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
        var newItemId = get(nextProps, 'id', null);
        var prevItemId = get(this.props, 'id', null);
        if (newItemId !== prevItemId) {
            this.updateSwitchers();
        }
    };
    VitalsInputs.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isCreate = _a.isCreate, isDetailsPage = _a.isDetailsPage;
        var _b = this.state, levelConsciousnessClassName = _b.levelConsciousnessClassName, levelOfConsciousnessValue = _b.levelOfConsciousnessValue, anySupplementalOxygenClassName = _b.anySupplementalOxygenClassName, anySupplementalOxygenValue = _b.anySupplementalOxygenValue, newsScoreClassName = _b.newsScoreClassName, newsScoreValue = _b.newsScoreValue, formInputNewsScore = _b.formInputNewsScore;
        var filledValues = isCreate ? null : this.getCurrentItem();
        var sourceId = get(this.props, 'id', null);
        var parameterNewsScore = this.getNewScoreDetailsColor(filledValues);
        return (React.createElement(React.Fragment, null,
            React.createElement(LocalForm, { model: "vitals", onSubmit: function (values) { return _this.submitForm(values); } },
                React.createElement("div", null,
                    React.createElement(ValueWithUnits, { label: "Respiration Rate", units: "resps/min", model: "respirationRate", updateInput: this.updateInput, hasPopup: true, value: get(filledValues, 'respirationRate', null), isDetailsPage: isDetailsPage, sourceId: sourceId }),
                    React.createElement(ValueWithUnits, { label: "Oxygen Saturation", units: "%", model: "oxygenSaturation", updateInput: this.updateInput, hasPopup: true, value: get(filledValues, 'oxygenSaturation', null), isDetailsPage: isDetailsPage, sourceId: sourceId })),
                React.createElement(FormControl, { className: classes.formControl },
                    React.createElement("div", { className: classes[anySupplementalOxygenClassName] },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Any Supplemental Oxygen"),
                        React.createElement(FormControlLabel, { control: React.createElement(CustomSwitch, { checked: (anySupplementalOxygenValue === 'Yes'), value: anySupplementalOxygenValue, onChange: function () { return _this.changeAnySupplementalOxygen(); }, disabled: isDetailsPage }), label: React.createElement(Typography, { className: classes.switcherLabel }, anySupplementalOxygenValue) }))),
                React.createElement("div", null,
                    React.createElement(ValueWithUnits, { label: "Heart Rate", units: "bpm", model: "heartRate", updateInput: this.updateInput, hasPopup: true, value: get(filledValues, 'heartRate', null), isDetailsPage: isDetailsPage, sourceId: sourceId }),
                    React.createElement(ValueWithUnits, { label: "Temperature", units: "C", model: "temperature", updateInput: this.updateInput, hasPopup: true, value: get(filledValues, 'temperature', null), isDetailsPage: isDetailsPage, sourceId: sourceId })),
                React.createElement("div", null,
                    React.createElement(ValueWithUnits, { label: "Systolic BP", units: "mmHg", model: "systolicBP", updateInput: this.updateInput, hasPopup: true, value: get(filledValues, 'systolicBP', null), isDetailsPage: isDetailsPage, sourceId: sourceId }),
                    React.createElement(ValueWithUnits, { label: "Diastolic BP", units: "mmHg", model: "diastolicBP", updateInput: this.updateInput, hasPopup: false, value: get(filledValues, 'diastolicBP', null), isDetailsPage: isDetailsPage, sourceId: sourceId })),
                React.createElement(FormControl, { className: classes.formControl },
                    React.createElement("div", { className: classes[levelConsciousnessClassName] },
                        React.createElement(FormLabel, { className: classes.formLabel }, "Level of Consciousness"),
                        React.createElement(FormGroup, { "aria-label": "position", name: "levelOfConsciousness", value: levelOfConsciousnessValue, onChange: function (e) { return _this.changeLevelOfConsciousness(e); }, row: true },
                            React.createElement(FormControlLabel, { value: "Alert", control: React.createElement(CustomSwitch, null), label: React.createElement(Typography, { className: levelOfConsciousnessValue === 'Alert' ? classes.switcherLabelActive : classes.switcherLabel }, "Alert"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Alert', disabled: isDetailsPage }),
                            React.createElement(FormControlLabel, { value: "Voice", control: React.createElement(CustomSwitch, null), label: React.createElement(Typography, { className: levelOfConsciousnessValue === 'Voice' ? classes.switcherLabelActive : classes.switcherLabel }, "Voice"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Voice', disabled: isDetailsPage }),
                            React.createElement(FormControlLabel, { value: "Pain", control: React.createElement(CustomSwitch, null), label: React.createElement(Typography, { className: levelOfConsciousnessValue === 'Pain' ? classes.switcherLabelActive : classes.switcherLabel }, "Pain"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Pain', disabled: isDetailsPage }),
                            React.createElement(FormControlLabel, { value: "Unresponsive", control: React.createElement(CustomSwitch, null), label: React.createElement(Typography, { className: levelOfConsciousnessValue === 'Unresponsive' ? classes.switcherLabelActive : classes.switcherLabel }, "Unresponsive"), labelPlacement: "end", checked: levelOfConsciousnessValue === 'Unresponsive', disabled: isDetailsPage })))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement("div", { className: classes[newsScoreClassName] },
                        React.createElement(FormLabel, { className: classes.formLabel }, "NEWS Score"),
                        isDetailsPage ?
                            React.createElement("div", { className: classes[parameterNewsScore] },
                                React.createElement(Typography, null, get(filledValues, 'newsScore', null)))
                            :
                                React.createElement(Control.text, { className: classes[formInputNewsScore], model: 'vitals.newsScore', value: newsScoreValue, disabled: true }))),
                !isDetailsPage && React.createElement(SectionToolbar, __assign({}, this.props)))));
    };
    return VitalsInputs;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        vitalsList: get(state, 'admin.resources.vitalsigns.data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createNewVitals: function (formData) {
            dispatch(crudCreate('vitalsigns', formData, '/vitalsigns', '/vitalsigns'));
        },
        updateVitals: function (id, formData, filledValues) {
            dispatch(crudUpdate('vitalsigns', id, formData, filledValues, '/vitalsigns', '/vitalsigns'));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VitalsInputs));
