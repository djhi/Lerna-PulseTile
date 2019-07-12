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
import _ from "lodash";
import { connect } from 'react-redux';
import { setSidebarVisibility } from "react-admin";
import { withStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid/index";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/index";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/index";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography/index";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/index";
import HeatMap from "./tabs/HeatMap";
import BarCharts from "./tabs/BarCharts";
import PieCharts from "./tabs/PieCharts";
import { businessIntelligenceAction } from "../../actions/BusinessIntelligence/businessIntelligenceAction";
import BusinessIntelligenceForm from "./fragments/BusinessIntelligenceForm";
import ChartsSelector from "./fragments/ChartsSelector";
import { HEAT_MAP, BAR_CHARTS, PIE_CHARTS } from "./constants";
import { getCityById } from "./dummyCityStatistic";
var styles = function (theme) { return ({
    mainBlock: {
        margin: 10,
    },
    expansionPanel: {
        height: "49px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    currentExpansionPanel: {
        margin: "0px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    expansionPanelSummary: {
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 16,
        '& > div': {
            margin: "0px !important",
            marginTop: "0px",
            marginBottom: "0px",
        }
    },
    emptyBlock: {
        flexGrow: 1,
    },
    expandIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expandBlockIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 35,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expansionTypography: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    expansionPanelDetails: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    root: {
        width: '100%',
        height: '100%',
        padding: 5,
    },
    currentTabContainer: {
        width: "100%",
        backgroundColor: theme.palette.paperColor,
        margin: 0,
    },
    tableBlock: {
        backgroundColor: theme.palette.tableHeadColor,
        padding: 10,
        borderLeft: "0.5px solid " + theme.palette.paperColor,
        borderRight: "0.5px solid " + theme.palette.paperColor,
    }
}); };
var BusinessIntelligence = /** @class */ (function (_super) {
    __extends(BusinessIntelligence, _super);
    function BusinessIntelligence() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFromPanelOpen: true,
            isChartsPanelOpen: true,
            currentTab: HEAT_MAP,
            currentCity: getCityById('york'),
        };
        _this.changeCity = function (id) {
            _this.setState({
                currentCity: getCityById(id),
            });
        };
        _this.togglePanel = function (panel) {
            var _a;
            _this.setState((_a = {},
                _a[panel] = !_this.state[panel],
                _a));
        };
        _this.changeCurrentTab = function (tabName) {
            _this.setState({
                currentTab: tabName
            });
        };
        _this.getCurrentTabContent = function () {
            var currentTab = _this.state.currentTab;
            var result = HeatMap;
            if (currentTab === BAR_CHARTS) {
                result = BarCharts;
            }
            if (currentTab === PIE_CHARTS) {
                result = PieCharts;
            }
            return result;
        };
        _this.isDiagnosisVisible = function (type) {
            var businessIntelligence = _this.props.businessIntelligence;
            var diagnosis = get(businessIntelligence, 'diagnosis', []);
            return !businessIntelligence || diagnosis.indexOf(type) !== -1;
        };
        _this.isGenderVisible = function (type) {
            var businessIntelligence = _this.props.businessIntelligence;
            var genders = get(businessIntelligence, 'gender', []);
            return !businessIntelligence || genders.indexOf(type) !== -1;
        };
        _this.isEmptyResults = function () {
            var businessIntelligence = _this.props.businessIntelligence;
            var diagnosis = get(businessIntelligence, 'diagnosis', []);
            var genders = get(businessIntelligence, 'gender', []);
            return businessIntelligence && (diagnosis.length === 0 || genders.length === 0);
        };
        _this.isAgeRangeVisible = function (currentRange) {
            var businessIntelligence = _this.props.businessIntelligence;
            var minCurrentRange = 81;
            var maxCurrentRange = 125;
            if (currentRange !== '81+') {
                var currentRangeArray = currentRange.split('-');
                minCurrentRange = currentRangeArray[0];
                maxCurrentRange = currentRangeArray[1];
            }
            var minAge = get(businessIntelligence, 'age[0]', 0);
            var maxAge = get(businessIntelligence, 'age[1]', 125);
            return !businessIntelligence || (minAge <= minCurrentRange && maxCurrentRange <= maxAge);
        };
        _this.getPatientsByCity = function () {
            var patients = _this.props.patients;
            var patientsByCity = _.mapValues(_.groupBy(patients, 'location'), function (clist) { return clist.map(function (item) { return _.omit(item, 'location'); }); });
            var patientsArray = Object.entries(patientsByCity);
            var result = [];
            patientsArray.map(function (item) {
                result.push({
                    city: item[0],
                    number: item[1].length
                });
            });
            return result;
        };
        return _this;
    }
    BusinessIntelligence.prototype.componentDidMount = function () {
        this.props.setSidebarVisibility(false);
        this.props.getPatientsStatistic();
    };
    BusinessIntelligence.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, history = _a.history, businessIntelligence = _a.businessIntelligence, patients = _a.patients;
        var _b = this.state, isFromPanelOpen = _b.isFromPanelOpen, isChartsPanelOpen = _b.isChartsPanelOpen, currentTab = _b.currentTab, currentCity = _b.currentCity;
        var patientsNumberArray = this.getPatientsByCity();
        var patientsByCurrentCity = patients ? patients.filter(function (item) { return item.location === currentCity.cityName; }) : [];
        var CurrentTabContent = this.getCurrentTabContent();
        return (React.createElement(Grid, { item: true, xs: 12, className: classes.mainBlock },
            React.createElement(ExpansionPanel, { className: isFromPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isFromPanelOpen, onChange: function () { return _this.togglePanel('isFromPanelOpen'); } },
                React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
                    React.createElement(Typography, { className: classes.expansionTypography }, "Business Intelligence")),
                isFromPanelOpen &&
                    React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails },
                        React.createElement(BusinessIntelligenceForm, null))),
            React.createElement(ExpansionPanel, { className: isChartsPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isChartsPanelOpen, onChange: function () { return _this.togglePanel('isChartsPanelOpen'); } },
                React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
                    React.createElement(Typography, { className: classes.expansionTypography }, currentTab)),
                isChartsPanelOpen &&
                    React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails },
                        React.createElement(Grid, { className: classes.currentTabContainer, container: true },
                            React.createElement(CurrentTabContent, { classes: classes, patients: patients, currentCity: currentCity, changeCity: this.changeCity, patientsNumberArray: patientsNumberArray, businessIntelligence: businessIntelligence, patientsByCurrentCity: patientsByCurrentCity, isAgeRangeVisible: this.isAgeRangeVisible, isDiagnosisVisible: this.isDiagnosisVisible, isGenderVisible: this.isGenderVisible, isEmptyResults: this.isEmptyResults }),
                            React.createElement(ChartsSelector, { classes: classes, currentTab: currentTab, changeCurrentTab: this.changeCurrentTab, history: history }))))));
    };
    return BusinessIntelligence;
}(Component));
var mapStateToProps = function (state) {
    return {
        businessIntelligence: get(state, 'custom.businessIntelligence.data', null),
        patients: get(state, 'custom.businessIntelligence.patients', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
        getPatientsStatistic: function () {
            dispatch(businessIntelligenceAction.request());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BusinessIntelligence));
