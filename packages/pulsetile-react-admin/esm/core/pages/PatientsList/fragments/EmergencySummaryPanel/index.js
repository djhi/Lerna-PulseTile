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
import { withStyles } from '@material-ui/core/styles/index';
import Typography from '@material-ui/core/Typography/index';
import ExpansionPanel from '@material-ui/core/ExpansionPanel/index';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails/index';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { emergencySummaryAction } from "../../../../actions/emergencySummaryAction";
import VitalsChart from "../../../../../version/plugins/Vitals/VitalsChart";
import ItemBlock from "./ItemBlock";
var styles = function (theme) { return ({
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
        paddingTop: 10,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    expansionPanelDetails: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    itemBlock: {
        margin: 10,
    },
    blockContent: {
        marginTop: 5,
    },
    showAll: {
        color: theme.palette.secondaryMainColor,
        fontWeight: 800,
        cursor: 'pointer',
    }
}); };
var EmergencySummaryPanel = /** @class */ (function (_super) {
    __extends(EmergencySummaryPanel, _super);
    function EmergencySummaryPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isPanelOpen: true,
        };
        _this.togglePanel = function () {
            _this.setState({
                isPanelOpen: !_this.state.isPanelOpen,
            });
        };
        _this.getResourceList = function (resourse, name) {
            var emergencySummary = _this.props.emergencySummary;
            var listArray = get(emergencySummary, resourse, []);
            var result = [];
            listArray.map(function (item) {
                result.push(item[name]);
            });
            return result;
        };
        return _this;
    }
    EmergencySummaryPanel.prototype.componentDidMount = function () {
        var id = this.props.id;
        if (id) {
            this.props.getEmergencySummary(id);
        }
    };
    EmergencySummaryPanel.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var id = this.props.id;
        if (nextProps.id !== id) {
            this.props.getEmergencySummary(id);
        }
    };
    EmergencySummaryPanel.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentData = _a.currentData, id = _a.id, emergencySummary = _a.emergencySummary, history = _a.history, isLoading = _a.isLoading;
        var isPanelOpen = this.state.isPanelOpen;
        var currentPatient = get(currentData, id, null);
        var allergiesList = this.getResourceList('allergies', 'cause');
        var medicationsList = this.getResourceList('medications', 'name');
        var problemsList = this.getResourceList('problems', 'problem');
        return (React.createElement(ExpansionPanel, { className: isPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isPanelOpen, onChange: function () { return _this.togglePanel(); } },
            React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
                React.createElement(Typography, { className: classes.expansionTypography }, "Emergency Summary")),
            isPanelOpen &&
                React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails },
                    React.createElement("div", { className: classes.itemBlock },
                        React.createElement(Typography, { variant: "h3" }, "Name"),
                        React.createElement(Typography, { className: classes.blockContent },
                            get(currentPatient, 'firstName', null),
                            " ",
                            get(currentPatient, 'lastName', null))),
                    React.createElement(ItemBlock, { isLoading: isLoading, list: problemsList, title: "Diagnosis" }),
                    React.createElement(ItemBlock, { isLoading: isLoading, list: medicationsList, title: "Medications" }),
                    React.createElement(ItemBlock, { isLoading: isLoading, list: allergiesList, title: "Allergies" }),
                    React.createElement("div", { className: classes.itemBlock },
                        React.createElement(Typography, { variant: "h3" }, "Vitals"),
                        React.createElement(VitalsChart, { vitalsEmergencySummary: get(emergencySummary, 'vitalsigns', []), history: history })))));
    };
    return EmergencySummaryPanel;
}(Component));
var mapStateToProps = function (state) {
    return {
        emergencySummary: get(state, 'custom.emergencySummary.data', null),
        isLoading: get(state, 'custom.emergencySummary.loading', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getEmergencySummary: function (patientId) {
            dispatch(emergencySummaryAction.request('allergies', patientId));
            dispatch(emergencySummaryAction.request('medications', patientId));
            dispatch(emergencySummaryAction.request('problems', patientId));
            dispatch(emergencySummaryAction.request('vitalsigns', patientId));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EmergencySummaryPanel));
