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
import PieChartByGender from "../charts/PieChartByGender";
import { COLOR_MALE, COLOR_FEMALE } from "../constants";
import EmptyListBlock from "../../../../core/common/ResourseTemplates/EmptyListBlock";
import { getNumberByGender } from "../functions";
var styles = function (theme) {
    var _a;
    return ({
        chartsContainer: {
            padding: 5,
        },
        chartsRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        singlePieChart: (_a = {},
            _a[theme.breakpoints.only('xs')] = {
                width: '100%',
            },
            _a),
        legend: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        legendParameter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
        },
        square: {
            width: 16,
            height: 16,
            borderRadius: 8,
            marginRight: 5,
        }
    });
};
var PieCharts = /** @class */ (function (_super) {
    __extends(PieCharts, _super);
    function PieCharts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieCharts.prototype.render = function () {
        var _a = this.props, classes = _a.classes, isDiagnosisVisible = _a.isDiagnosisVisible, isGenderVisible = _a.isGenderVisible, isEmptyResults = _a.isEmptyResults, patientsByCurrentCity = _a.patientsByCurrentCity, businessIntelligence = _a.businessIntelligence;
        var healthScoreMin = get(businessIntelligence, 'healthScore[0]', 0);
        var healthScoreMax = get(businessIntelligence, 'healthScore[1]', 100);
        var ageMin = get(businessIntelligence, 'age[0]', 0);
        var ageMax = get(businessIntelligence, 'age[1]', 100);
        var patientsFilter = patientsByCurrentCity.filter(function (item) { return (item.age >= ageMin &&
            item.age <= ageMax &&
            item.healthScore >= healthScoreMin &&
            item.healthScore <= healthScoreMax); });
        var chartsData = [
            { type: 'measles', label: "Measles", male: getNumberByGender(patientsFilter, "male", "Measles"), female: getNumberByGender(patientsFilter, "female", "Measles") },
            { type: 'asthma', label: "Asthma", male: getNumberByGender(patientsFilter, "male", "Asthma"), female: getNumberByGender(patientsFilter, "female", "Asthma") },
            { type: 'diabetes', label: "Diabetes", male: getNumberByGender(patientsFilter, "male", "Diabetes"), female: getNumberByGender(patientsFilter, "female", "Diabetes") },
            { type: 'dementia', label: "Dementia", male: getNumberByGender(patientsFilter, "male", "Dementia"), female: getNumberByGender(patientsFilter, "female", "Dementia") },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 12, md: 11 },
                React.createElement("div", { className: classes.tableBlock },
                    React.createElement(Typography, { variant: "h1" }, "Diagnosis By Gender")),
                isEmptyResults()
                    ? React.createElement(EmptyListBlock, null)
                    :
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: classes.chartsContainer },
                                React.createElement(Grid, { container: true, sm: 12, spacing: 16 }, chartsData.map(function (item, key) {
                                    if (isDiagnosisVisible(item.type) && (item.male > 0 || item.female > 0)) {
                                        return (React.createElement(Grid, { item: true, key: key, sm: 12, md: 6, lg: 3 },
                                            React.createElement(PieChartByGender, { label: item.label, male: item.male, female: item.female, isGenderVisible: isGenderVisible })));
                                    }
                                }))),
                            React.createElement("div", { className: classes.legend },
                                isGenderVisible('male') &&
                                    React.createElement("div", { className: classes.legendParameter },
                                        React.createElement("div", { className: classes.square, style: { backgroundColor: COLOR_MALE, border: "1px solid " + COLOR_MALE } }),
                                        React.createElement(Typography, null, "Male")),
                                isGenderVisible('female') &&
                                    React.createElement("div", { className: classes.legendParameter },
                                        React.createElement("div", { className: classes.square, style: { backgroundColor: COLOR_FEMALE, border: "1px solid " + COLOR_FEMALE } }),
                                        React.createElement(Typography, null, "Female")))))));
    };
    return PieCharts;
}(Component));
;
export default withStyles(styles)(PieCharts);
