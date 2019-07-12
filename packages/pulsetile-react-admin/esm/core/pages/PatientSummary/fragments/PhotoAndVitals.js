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
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import patientPhoto from "../../../images/randomPatient.png";
import PieChartBlock from "./PieChartBlock";
import HorizontalBarChart from "./HorizontalBarChart";
var styles = {
    patientPhoto: {
        height: 110,
        width: 110,
        borderRadius: '50%'
    },
    ageAndHeight: {
        paddingLeft: 20,
    },
    parameter: {
        display: 'flex',
        flexDirection: 'row',
    },
    value: {
        paddingTop: 2,
        paddingLeft: 5,
    },
    diagrams: {
        display: 'flex',
        flexDirection: 'column',
    },
    horizontalBarChart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
    chartBlock: {
        width: '90%',
        height: 80,
        textAlign: 'center',
        paddingTop: 10,
    },
};
var COLOR_AMBER = '#ffac5a';
var COLOR_GREEN = '#2dcd0d';
var COLOR_YELLOW = '#fbf800';
var COLOR_RED = '#ff5d00';
var DIAGNOSIS_AMBER = 'Overweight';
var DIAGNOSIS_GREEN = 'Healthy Weight';
var DIAGNOSIS_YELLOW = 'Underweight';
var DIAGNOSIS_RED = 'Obese';
var OXYGEN_SATURATION_HARDCODE = 91;
var SYSTOLIC_PRESSURE_HARDCODE = 150;
var DIASTOLIC_PRESSURE_HARDCODE = 88;
var PhotoAndVitals = /** @class */ (function (_super) {
    __extends(PhotoAndVitals, _super);
    function PhotoAndVitals() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPatientAge = function () {
            var patientInfo = _this.props.patientInfo;
            var birthDate = get(patientInfo, 'birthDate', null);
            var birthDateArray = birthDate ? birthDate.split('-') : [];
            var year = get(birthDateArray, [0], null);
            var currentYear = new Date().getFullYear();
            return currentYear - year;
        };
        _this.getWeightResult = function (value) {
            var result = {
                color: COLOR_YELLOW,
                diagnosis: DIAGNOSIS_YELLOW,
            };
            if (value > 18.5 && value < 24.9) {
                result = {
                    color: COLOR_GREEN,
                    diagnosis: DIAGNOSIS_GREEN,
                };
            }
            else if (value > 25 && value < 29.9) {
                result = {
                    color: COLOR_AMBER,
                    diagnosis: DIAGNOSIS_AMBER,
                };
            }
            else if (value > 30) {
                result = {
                    color: COLOR_RED,
                    diagnosis: DIAGNOSIS_RED,
                };
            }
            return result;
        };
        _this.getOxygenSaturationResult = function (value) {
            var result = {
                color: COLOR_YELLOW,
                diagnosis: DIAGNOSIS_YELLOW,
            };
            if (value > 92 && value < 95) {
                result = {
                    color: COLOR_GREEN,
                    diagnosis: DIAGNOSIS_GREEN,
                };
            }
            else if (value < 91 || value > 96) {
                result = {
                    color: COLOR_RED,
                    diagnosis: DIAGNOSIS_RED,
                };
            }
            return result;
        };
        _this.getSystolicColor = function (value) {
            var result = COLOR_YELLOW;
            if (value > 101 && value < 219) {
                result = COLOR_GREEN;
            }
            else if (value < 90 || value > 220) {
                result = COLOR_RED;
            }
            return result;
        };
        _this.getDiastolicColor = function (value) {
            var result = COLOR_YELLOW;
            if (value > 101 && value < 219) {
                result = COLOR_GREEN;
            }
            else if (value < 90 || value > 220) {
                result = COLOR_RED;
            }
            return result;
        };
        return _this;
    }
    PhotoAndVitals.prototype.render = function () {
        var _a = this.props, classes = _a.classes, patientInfo = _a.patientInfo, isLoadingPhoto = _a.isLoadingPhoto, isLoading = _a.isLoading;
        var age = this.getPatientAge();
        var weight = 87.5;
        var bmi = 17.92;
        var weightResult = this.getWeightResult(bmi);
        var oxygenSaturationResult = this.getOxygenSaturationResult(OXYGEN_SATURATION_HARDCODE);
        var systolicColor = this.getSystolicColor(SYSTOLIC_PRESSURE_HARDCODE);
        var diastolicColor = this.getDiastolicColor(DIASTOLIC_PRESSURE_HARDCODE);
        var patientName = get(patientInfo, 'firstName', null) + " " + get(patientInfo, 'lastName', null);
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes.blockTitle },
                React.createElement(Typography, { className: classes.title }, patientName)),
            React.createElement(Grid, { container: true, xs: 12, className: classes.content },
                React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 5, className: classes.photoAndVitals },
                    React.createElement(Grid, { container: true, xs: 12, className: classes.insideGridBlock },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 3 },
                            React.createElement(CardMedia, { className: classes.patientPhoto, component: "img", alt: patientName, image: patientPhoto, title: patientName })),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 9, className: classes.ageAndHeight },
                            React.createElement("div", { className: classes.parameter },
                                React.createElement(Typography, { variant: "body2" }, "Age: "),
                                React.createElement(Typography, { className: classes.value }, isLoading ? 'Loading...' : age)),
                            React.createElement("div", { className: classes.parameter },
                                React.createElement(Typography, { variant: "body2" }, "Height: "),
                                React.createElement(Typography, { className: classes.value }, "184 cm")),
                            React.createElement("div", { className: classes.parameter },
                                React.createElement(Typography, { variant: "body2" }, "CPR Status: "),
                                React.createElement(Typography, { className: classes.value }, "For active CPR")),
                            React.createElement("div", { className: classes.parameter },
                                React.createElement(Typography, { variant: "body2" }, "Blood Group: "),
                                React.createElement(Typography, { className: classes.value }, "O+")),
                            React.createElement("div", { className: classes.parameter },
                                React.createElement(Typography, { variant: "body2" }, "Donor status: "),
                                React.createElement(Typography, { className: classes.value }, "Organ Donor"))))),
                React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 7 },
                    React.createElement("div", { className: classes.diagrams },
                        React.createElement(Grid, { container: true, xs: 12 },
                            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                                React.createElement(PieChartBlock, { title: "Weight", value: weight, units: "kg", color: weightResult.color, maximal: 150, diagnosis: weightResult.diagnosis })),
                            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                                React.createElement(PieChartBlock, { title: "BMI", value: bmi, units: "kg/m2", color: weightResult.color, maximal: 50, diagnosis: weightResult.diagnosis })),
                            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                                React.createElement(PieChartBlock, { title: "Oxygen Saturation", value: OXYGEN_SATURATION_HARDCODE, units: "%", color: oxygenSaturationResult.color, maximal: 100, diagnosis: oxygenSaturationResult.diagnosis }))),
                        React.createElement(Grid, { container: true, xs: 12 },
                            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                                React.createElement("div", { className: classes.horizontalBarChart },
                                    React.createElement(Typography, { variant: "body2" }, "Blood pressure: 143 / 89"),
                                    React.createElement(Typography, { variant: "body1", className: classes.value }, "kg/m2"))),
                            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                                React.createElement("div", { className: classes.chartBlock },
                                    React.createElement(HorizontalBarChart, { title: "Systolic", value: SYSTOLIC_PRESSURE_HARDCODE, color: systolicColor, maximal: 220 }))),
                            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                                React.createElement("div", { className: classes.chartBlock },
                                    React.createElement(HorizontalBarChart, { title: "Diastolic", value: DIASTOLIC_PRESSURE_HARDCODE, color: diastolicColor, maximal: 220 })))))))));
    };
    return PhotoAndVitals;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        patientInfo: get(state, 'custom.currentPatient.patientInfo.data', null),
        isLoading: get(state, 'custom.currentPatient.loading', null),
        patientPhoto: get(state, 'custom.currentPatient.patientPhoto', null),
        isLoadingPhoto: get(state, 'custom.currentPatient.loadingPhoto', null),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(PhotoAndVitals));
