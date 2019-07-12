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
import DiagnosisByAgeBars from "../charts/DiagnosisByAgeBars";
import HealthScoreByAge from "../charts/HealthScoreByAge";
import EmptyListBlock from "../../../../core/common/ResourseTemplates/EmptyListBlock";
import { getDiagnosisByAge } from "../functions";
var styles = function (theme) { return ({
    chartsContainer: {
        padding: 5,
        border: "1px solid " + theme.palette.borderColor
    }
}); };
var BarCharts = /** @class */ (function (_super) {
    __extends(BarCharts, _super);
    function BarCharts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarCharts.prototype.render = function () {
        var _a = this.props, classes = _a.classes, isAgeRangeVisible = _a.isAgeRangeVisible, isDiagnosisVisible = _a.isDiagnosisVisible, isEmptyResults = _a.isEmptyResults, patientsByCurrentCity = _a.patientsByCurrentCity;
        var diagnosisByAge = getDiagnosisByAge(patientsByCurrentCity);
        return (React.createElement(React.Fragment, null,
            React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                React.createElement("div", { className: classes.tableBlock },
                    React.createElement(Typography, { variant: "h1" }, "Diagnosis By Age")),
                isEmptyResults() ? React.createElement(EmptyListBlock, null) :
                    React.createElement("div", { className: classes.chartsContainer },
                        React.createElement(DiagnosisByAgeBars, { diagnosisByAge: diagnosisByAge, isDiagnosisVisible: isDiagnosisVisible, isAgeRangeVisible: isAgeRangeVisible }))),
            React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 8, md: 5 },
                React.createElement("div", { className: classes.tableBlock },
                    React.createElement(Typography, { variant: "h1" }, "Health Score By Age")),
                isEmptyResults() ? React.createElement(EmptyListBlock, null) :
                    React.createElement("div", { className: classes.chartsContainer },
                        React.createElement(HealthScoreByAge, { diagnosisByAge: diagnosisByAge, isDiagnosisVisible: isDiagnosisVisible, isAgeRangeVisible: isAgeRangeVisible })))));
    };
    return BarCharts;
}(Component));
export default withStyles(styles)(BarCharts);
