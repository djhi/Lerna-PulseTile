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
import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormGroup from "@material-ui/core/FormGroup";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { synopsisAllergiesAction, synopsisContactsAction, synopsisMedicationsAction, synopsisProblemsAction } from "../../actions/synopsisActions";
import { nonCoreSynopsisActions } from "../../../version/config/nonCoreSynopsis";
import { emergencySummaryAction } from "../../actions/emergencySummaryAction";
import { currentPatientAction } from "../../actions/currentPatientAction";
import PatientSummaryTable from "./views/PatientSummaryTable";
import PatientSummaryRoll from "./views/PatientSummaryRoll";
import { synopsisData } from "./config";
import SettingsDialog from "./SettingsDialog";
import Breadcrumbs from "../../common/Breadcrumbs";
import { themeCommonElements } from "../../../version/config/theme.config";
import { getSummaryContainerStyles } from "./functions";
var styles = function (theme) { return ({
    summaryContainer: getSummaryContainerStyles(synopsisData),
    container: {
        width: "100%",
        height: "100%",
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    toggleViewBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formGroup: {
        width: "98%",
        paddingTop: 5,
        boxSizing: "border-box",
    },
    formGroupLabel: {
        marginTop: 18,
    },
    formControlLabel: {
        marginBottom: 10,
    },
    radioGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 15,
        marginRight: 10,
    },
    radio: {
        '&$checked': {
            color: theme.palette.mainColor,
        }
    },
    checked: {}
}); };
var TABLE_VIEW = 'table';
var ROLL_VIEW = 'roll';
var PatientSummaryInfo = /** @class */ (function (_super) {
    __extends(PatientSummaryInfo, _super);
    function PatientSummaryInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isRollView: get(themeCommonElements, 'hasPatientSummaryRoll', false),
        };
        _this.toggleView = function () {
            _this.setState({
                isRollView: !_this.state.isRollView,
            });
        };
        return _this;
    }
    PatientSummaryInfo.prototype.componentDidMount = function () {
        if (localStorage.getItem('role') === 'PHR') {
            this.props.updateCurrentPatient(localStorage.getItem('patientId'));
        }
        if (localStorage.getItem('userId') && localStorage.getItem('username')) {
            this.props.getPatientSynopsis();
            // this.props.getEmergencySummary(localStorage.getItem('patientId'));
        }
    };
    PatientSummaryInfo.prototype.componentWillReceiveProps = function (nextProps, nextContent) {
        var patientInfo = this.props.patientInfo;
        if (patientInfo !== nextProps.patientInfo) {
            // this.props.getRandomPhoto(get(nextProps, 'patientInfo.gender', 'male'));
        }
    };
    PatientSummaryInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, location = _a.location, history = _a.history;
        var isRollView = this.state.isRollView;
        var breadcrumbsResource = [
            { url: location.pathname, title: "Patient Summary", isActive: false }
        ];
        var viewType = isRollView ? ROLL_VIEW : TABLE_VIEW;
        return (React.createElement(Grid, { className: classes.container },
            React.createElement(Breadcrumbs, { resource: breadcrumbsResource }),
            React.createElement("div", { className: classes.toggleViewBlock },
                React.createElement(SettingsDialog, { className: classes.settingsIcon }),
                React.createElement("div", { className: classes.toggleViewBlock },
                    React.createElement(Typography, { variant: "h1", className: classes.formGroupLabel }, "View"),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(RadioGroup, { name: "viewType", className: classes.radioGroup, value: viewType, onChange: function () { return _this.toggleView(); }, row: true },
                            React.createElement(FormControlLabel, { className: classes.formControlLabel, value: ROLL_VIEW, control: React.createElement(Radio, { classes: { root: classes.radio, checked: classes.checked } }), label: "Roll" }),
                            React.createElement(FormControlLabel, { className: classes.formControlLabel, value: TABLE_VIEW, control: React.createElement(Radio, { classes: { root: classes.radio, checked: classes.checked } }), label: "Table" }))))),
            React.createElement(Grid, { className: classes.summaryContainer, spacing: 16, container: true }, isRollView ? React.createElement(PatientSummaryRoll, { history: history }) : React.createElement(PatientSummaryTable, { history: history }))));
    };
    return PatientSummaryInfo;
}(Component));
var mapStateToProps = function (state) {
    return {
        patientInfo: get(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    var coreSynopsisActions = [
        synopsisAllergiesAction,
        synopsisContactsAction,
        synopsisProblemsAction,
        synopsisMedicationsAction,
    ];
    var synopsisActions = coreSynopsisActions.concat(nonCoreSynopsisActions);
    return {
        getPatientSynopsis: function () {
            synopsisActions.map(function (item) {
                return dispatch(item.request());
            });
        },
        getEmergencySummary: function (patientId) {
            dispatch(emergencySummaryAction.request('vitalsigns', patientId));
        },
        getRandomPhoto: function (gender) {
            dispatch(currentPatientAction.requestPhoto(gender));
        },
        updateCurrentPatient: function (data) {
            dispatch(currentPatientAction.request(data));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PatientSummaryInfo));
