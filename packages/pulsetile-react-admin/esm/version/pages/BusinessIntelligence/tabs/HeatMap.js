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
import { withStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MapWithStatistics from "../map";
import AverageHealthScore from "../charts/AverageHealthScore";
import Population from "../charts/Population";
import DiagnosisByAge from "../charts/DiagnosisByAge";
import { getAverageHealthScore, getDiagnosisByAge, getColorByHealthScore } from "../functions";
var styles = function (theme) { return ({
    chartsContainer: {
        padding: 5,
        border: "1px solid " + theme.palette.borderColor
    }
}); };
var HeatMap = /** @class */ (function (_super) {
    __extends(HeatMap, _super);
    function HeatMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeatMap.prototype.render = function () {
        var _a = this.props, classes = _a.classes, businessIntelligence = _a.businessIntelligence, isDiagnosisVisible = _a.isDiagnosisVisible, isAgeRangeVisible = _a.isAgeRangeVisible, currentCity = _a.currentCity, changeCity = _a.changeCity, patients = _a.patients, patientsByCurrentCity = _a.patientsByCurrentCity, patientsNumberArray = _a.patientsNumberArray;
        var averageHealthScore = getAverageHealthScore(patientsByCurrentCity);
        var color = getColorByHealthScore(averageHealthScore);
        var diagnosisByAge = getDiagnosisByAge(patientsByCurrentCity);
        return (React.createElement(React.Fragment, null,
            React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                React.createElement("div", { className: classes.tableBlock },
                    React.createElement(Typography, { variant: "h1" }, "Yorkshire, UK")),
                React.createElement("div", { className: classes.chartsContainer },
                    React.createElement(MapWithStatistics, { patients: patients, patientsNumberArray: patientsNumberArray, businessIntelligence: businessIntelligence, changeCity: changeCity, currentCityId: currentCity.id }))),
            React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 8, md: 5 },
                React.createElement("div", { className: classes.tableBlock },
                    React.createElement(Typography, { variant: "h1" },
                        "Statistics: ",
                        get(currentCity, 'cityName', null))),
                React.createElement("div", { className: classes.chartsContainer },
                    React.createElement(AverageHealthScore, { color: color, healthScore: averageHealthScore }),
                    React.createElement(Population, { color: color, population: get(currentCity, 'population', null) }),
                    React.createElement(DiagnosisByAge, { diagnosisByAge: diagnosisByAge, isDiagnosisVisible: isDiagnosisVisible, isAgeRangeVisible: isAgeRangeVisible })))));
    };
    return HeatMap;
}(Component));
;
export default withStyles(styles)(HeatMap);
