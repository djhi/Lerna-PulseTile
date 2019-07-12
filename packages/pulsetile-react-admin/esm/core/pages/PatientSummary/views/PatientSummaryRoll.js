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
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhotoAndVitals from "../fragments/PhotoAndVitals";
import PatientSummaryPanels from "../fragments/PatientSummaryPanels";
import LabResults from "../fragments/LabResults";
import DummyVitalsChart from "../fragments/DummyVitalsChart";
import EventsTimeline from "../fragments/EventsTimeline";
var styles = function (theme) { return ({
    headerBlock: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    blockTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
    },
    blockTitleLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
        borderRight: "0.5px solid " + theme.palette.paperColor
    },
    blockTitleRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
        borderLeft: "0.5px solid " + theme.palette.paperColor
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
    },
    content: {
        width: '100%',
        backgroundColor: theme.palette.paperColor,
    },
    photoAndVitals: {
        padding: 10,
    },
    chartBlock: {
        padding: 10,
    },
    dummyEvents: {
        margin: 20,
    }
}); };
var PatientSummaryTable = /** @class */ (function (_super) {
    __extends(PatientSummaryTable, _super);
    function PatientSummaryTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatientSummaryTable.prototype.render = function () {
        var _a = this.props, classes = _a.classes, emergencySummary = _a.emergencySummary, history = _a.history, location = _a.location, isVitalsLoading = _a.isVitalsLoading;
        return (React.createElement("div", { className: classes.headerBlock },
            React.createElement(PhotoAndVitals, { classes: classes }),
            React.createElement(PatientSummaryPanels, { classes: classes }),
            React.createElement(LabResults, { classes: classes, location: location }),
            React.createElement(Grid, { container: true, xs: 12, className: classes.content },
                React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 6 },
                    React.createElement("div", { className: classes.blockTitleLeft },
                        React.createElement(Typography, { className: classes.title }, "Timeline")),
                    React.createElement(EventsTimeline, null)),
                React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 6 },
                    React.createElement("div", { className: classes.blockTitleRight },
                        React.createElement(Typography, { className: classes.title }, "Vitals")),
                    React.createElement("div", { className: classes.chartBlock }, isVitalsLoading
                        ? React.createElement(Typography, null, "Loading...")
                        // : <VitalsChart vitalsEmergencySummary={get(emergencySummary, 'vitalsigns', [])} history={history} />
                        : React.createElement(DummyVitalsChart, null))))));
    };
    return PatientSummaryTable;
}(Component));
var mapStateToProps = function (state) {
    return {
        emergencySummary: get(state, 'custom.emergencySummary.data', null),
        isVitalsLoading: get(state, 'custom.emergencySummary.loading', null),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(PatientSummaryTable));
