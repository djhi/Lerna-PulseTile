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
import moment from "moment";
import { connect } from 'react-redux';
import get from "lodash/get";
import { setSidebarVisibility } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dummyPatients from "../PatientsList/dummyPatients";
import BarChartTitle from "./fragments/BarChartTitle";
import BarChartTemplate from "./fragments/BarChartTemplate";
import { userSearchAction } from "../../actions/userSearchAction";
var styles = function (theme) { return ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    chartsContainer: {
        width: "100%",
        backgroundColor: theme.palette.paperColor,
        padding: 5,
        margin: 0,
    },
    chart: {
        '& .recharts-text.recharts-cartesian-axis-tick-value': {
            fontFamily: '"HK Grotesk SemiBold", Arial, sans-serif',
            fontSize: 14,
        },
    },
    chartBlock: {
        border: "1px solid " + theme.palette.borderColor,
    }
}); };
var Charts = /** @class */ (function (_super) {
    __extends(Charts, _super);
    function Charts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * This function redirects to patients list when user clicks on Bar
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {shape}  history
         * @param {string} searchType
         * @param {shape}  item
         */
        _this.redirectTo = function (history, searchType, item) {
            var valueForSearch = get(item, 'payload.valueForSearch', null);
            if (valueForSearch) {
                _this.props.setSearchType(searchType, valueForSearch);
            }
            var url = "/patients";
            history.push(url);
        };
        return _this;
    }
    Charts.prototype.componentDidMount = function () {
        this.props.setSidebarVisibility(false);
    };
    /**
     * This function calculates percentage of patients by department
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @param {array} patients
     * @return {array}
     */
    Charts.prototype.getDepartmentPercentage = function (patients) {
        var EdinburghCount = 0;
        var SomersetCount = 0;
        var GlasgowCount = 0;
        var HamiltonCount = 0;
        var NorthamptonCount = 0;
        var totalNumber = 0;
        for (var item in patients) {
            totalNumber++;
            switch (get(patients, '[' + item + '].city', null)) {
                case "Edinburgh":
                    EdinburghCount++;
                    break;
                case "Somerset":
                    SomersetCount++;
                    break;
                case "Glasgow":
                    GlasgowCount++;
                    break;
                case "Hamilton":
                    HamiltonCount++;
                    break;
                case "Northampton":
                    NorthamptonCount++;
                    break;
            }
        }
        var EdinburghCarePercentage = (totalNumber > 0) ? Math.round(((100 * EdinburghCount) / totalNumber)) : 0;
        var SomersetPercentage = (totalNumber > 0) ? Math.round(((100 * SomersetCount) / totalNumber)) : 0;
        var GlasgowPercentage = (totalNumber > 0) ? Math.round(((100 * GlasgowCount) / totalNumber)) : 0;
        var HamiltonPercentage = (totalNumber > 0) ? Math.round(((100 * HamiltonCount) / totalNumber)) : 0;
        var NorthamptonPercentage = (totalNumber > 0) ? Math.round(((100 * NorthamptonCount) / totalNumber)) : 0;
        return {
            Edinburgh: EdinburghCarePercentage,
            Somerset: SomersetPercentage,
            Glasgow: GlasgowPercentage,
            Hamilton: HamiltonPercentage,
            Northampton: NorthamptonPercentage
        };
    };
    /**
     * This function calculates percentage of patients by age
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @param {array} patients
     * @return {array}
     */
    Charts.prototype.getAgePercentage = function (patients) {
        var firstCount = 0;
        var secondCount = 0;
        var thirdCount = 0;
        var fourthCount = 0;
        var totalNumber = 0;
        var currentDate = new Date().getTime();
        var endDate = new moment(currentDate);
        for (var item in patients) {
            totalNumber++;
            var birthDate = get(patients, '[' + item + '].dateOfBirth', null);
            var startDate = new moment(birthDate);
            var duration = moment.duration(endDate.diff(startDate)).get('year');
            if (duration >= 19 && duration <= 30) {
                firstCount++;
            }
            else if (duration >= 31 && duration <= 60) {
                secondCount++;
            }
            else if (duration >= 61 && duration <= 80) {
                thirdCount++;
            }
            else if (duration > 80) {
                fourthCount++;
            }
        }
        var firstPercentage = (totalNumber > 0) ? Math.round(((100 * firstCount) / totalNumber)) : 0;
        var secondPercentage = (totalNumber > 0) ? Math.round(((100 * secondCount) / totalNumber)) : 0;
        var thirdPercentage = (totalNumber > 0) ? Math.round(((100 * thirdCount) / totalNumber)) : 0;
        var fourthPercentage = (totalNumber > 0) ? Math.round(((100 * fourthCount) / totalNumber)) : 0;
        return {
            first: firstPercentage,
            second: secondPercentage,
            third: thirdPercentage,
            fourth: fourthPercentage,
        };
    };
    Charts.prototype.render = function () {
        var _a = this.props, classes = _a.classes, userSearch = _a.userSearch, history = _a.history;
        // const patientsInfo = customDataProvider(GET_LIST, 'patients', {});
        // const patientsInfo = [];
        // const patientsData = get(patientsInfo, 'data', []);
        var patientsData = dummyPatients;
        var DepartmentPercentage = this.getDepartmentPercentage(patientsData);
        var dataGreen = [
            { Text: "Edinburgh", sort: "Edinburgh", RespondentPercentage: get(DepartmentPercentage, 'Edinburgh', 0), valueForSearch: "Edinburgh" },
            { Text: "Somerset", sort: "Somerset", RespondentPercentage: get(DepartmentPercentage, 'Somerset', 0), valueForSearch: "Somerset" },
            { Text: "Glasgow", sort: "Glasgow", RespondentPercentage: get(DepartmentPercentage, 'Glasgow', 0), valueForSearch: "Glasgow" },
            { Text: "Hamilton", sort: "Hamilton", RespondentPercentage: get(DepartmentPercentage, 'Hamilton', 0), valueForSearch: "Hamilton" },
            { Text: "Northampton", sort: "Northampton", RespondentPercentage: get(DepartmentPercentage, 'Northampton', 0), valueForSearch: "Northampton" }
        ];
        var AgePercentage = this.getAgePercentage(patientsData);
        var dataViolet = [
            { Text: "<30", sort: "first", RespondentPercentage: get(AgePercentage, 'first', 0), valueForSearch: [0, 30] },
            { Text: "31-60", sort: "second", RespondentPercentage: get(AgePercentage, 'second', 0), valueForSearch: [31, 60] },
            { Text: "61-80", sort: "third", RespondentPercentage: get(AgePercentage, 'third', 0), valueForSearch: [61, 80] },
            { Text: ">80", sort: "fourth", RespondentPercentage: get(AgePercentage, 'fourth', 0), valueForSearch: [81, 100] }
        ];
        return (React.createElement("div", { className: classes.root },
            React.createElement(Grid, { className: classes.chartsContainer, container: true, spacing: 16 },
                React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                    React.createElement("div", { className: classes.chartBlock },
                        React.createElement(BarChartTitle, { mainTitle: "Patients By Setting", secondTitle: "Patients By Setting", description: "This is a brief description of patients by setting." }),
                        React.createElement(BarChartTemplate, { data: dataGreen, onClickAction: this.redirectTo, history: history, searchType: "by_city", barColor: "#c4e4d6", borderColor: "#78cea7" }))),
                React.createElement(Grid, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                    React.createElement("div", { className: classes.chartBlock },
                        React.createElement(BarChartTitle, { mainTitle: "Patients By Age", secondTitle: "Patients By Age", description: "This is a brief description of patients by age." }),
                        React.createElement(BarChartTemplate, { data: dataViolet, onClickAction: this.redirectTo, history: history, searchType: "by_age", barColor: "#d3b2f4", borderColor: "#832edf" }))))));
    };
    return Charts;
}(Component));
var mapStateToProps = function (state) {
    return {
        userSearch: state.custom.userSearch.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
        setSearchType: function (type, value) {
            dispatch(userSearchAction.searchBy(type, value));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Charts));
