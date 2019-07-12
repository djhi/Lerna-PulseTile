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
import { withStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import ChevronRight from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import barCharts from "../images/barCharts.png";
import barChartsSelected from "../images/barChartsSelected.png";
import pieCharts from "../images/pieCharts.png";
import pieChartsSelected from "../images/pieChartsSelected.png";
import heatMap from "../images/heatMap.png";
import heatMapSelected from "../images/heatMapSelected.png";
import { HEAT_MAP, BAR_CHARTS, PIE_CHARTS } from "../constants";
var styles = function (theme) { return ({
    chartSwitcher: {
        backgroundColor: theme.palette.tableHeadColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    content: {
        padding: 10,
    },
    chartButtons: {},
    imageBackgroundActive: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: "10px 5px",
        backgroundColor: theme.palette.mainColor,
        textAlign: 'center',
        marginBottom: 10,
        cursor: 'pointer',
    },
    imageBackground: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: "10px 5px",
        backgroundColor: theme.palette.paperColor,
        textAlign: 'center',
        marginBottom: 10,
        cursor: 'pointer',
    },
    chartTextActive: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.paperColor,
    },
    chartText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.fontColor,
    },
    buttonBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    patientsButton: {
        display: "block",
        width: 130,
        height: 40,
        marginBottom: 10,
        backgroundColor: theme.palette.secondaryMainColor,
        color: theme.palette.paperColor,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.secondaryMainColor,
            border: "1px solid " + theme.palette.secondaryMainColor,
        },
    },
}); };
var ChartsSelector = /** @class */ (function (_super) {
    __extends(ChartsSelector, _super);
    function ChartsSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redirectToPatients = function () {
            var history = _this.props.history;
            history.push('/patients');
        };
        return _this;
    }
    ChartsSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentTab = _a.currentTab, changeCurrentTab = _a.changeCurrentTab;
        return (React.createElement(Grid, { className: classes.chartSwitcher, item: true, xs: 12, sm: 4, md: 1 },
            React.createElement("div", null,
                React.createElement("div", { className: classes.tableBlock },
                    React.createElement(Typography, { variant: "h1" }, "Charts")),
                React.createElement("div", { className: classes.content },
                    React.createElement("div", { className: classes.chartButtons },
                        React.createElement("div", { className: currentTab === HEAT_MAP ? classes.imageBackgroundActive : classes.imageBackground, onClick: function () { return changeCurrentTab(HEAT_MAP); } },
                            React.createElement(CardMedia, { className: classes.patientPhoto, component: "img", alt: "Heat Map", image: currentTab === HEAT_MAP ? heatMapSelected : heatMap, title: "Heat Map" }),
                            React.createElement(Typography, { variant: "body1", className: currentTab === HEAT_MAP ? classes.chartTextActive : classes.chartText }, "Heat Map")),
                        React.createElement("div", { className: currentTab === BAR_CHARTS ? classes.imageBackgroundActive : classes.imageBackground, onClick: function () { return changeCurrentTab(BAR_CHARTS); } },
                            React.createElement(CardMedia, { className: classes.patientPhoto, component: "img", alt: "Bar Charts", image: currentTab === BAR_CHARTS ? barChartsSelected : barCharts, title: "Bar Charts" }),
                            React.createElement(Typography, { variant: "body1", className: currentTab === BAR_CHARTS ? classes.chartTextActive : classes.chartText }, "Bar Charts")),
                        React.createElement("div", { className: currentTab === PIE_CHARTS ? classes.imageBackgroundActive : classes.imageBackground, onClick: function () { return changeCurrentTab(PIE_CHARTS); } },
                            React.createElement(CardMedia, { className: classes.patientPhoto, component: "img", alt: "Pie Charts", image: currentTab === PIE_CHARTS ? pieChartsSelected : pieCharts, title: "Pie Charts" }),
                            React.createElement(Typography, { variant: "body1", className: currentTab === PIE_CHARTS ? classes.chartTextActive : classes.chartText }, "Pie Charts"))))),
            React.createElement("div", { className: classes.buttonBlock },
                React.createElement(IconButton, { "aria-label": "Patients", className: classes.patientsButton, onClick: function () { return _this.redirectToPatients(); } },
                    "Patients",
                    React.createElement(ChevronRight, null)))));
    };
    return ChartsSelector;
}(Component));
export default withStyles(styles)(ChartsSelector);
