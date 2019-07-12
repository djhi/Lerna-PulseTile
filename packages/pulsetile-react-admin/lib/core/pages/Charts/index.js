"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var moment_1 = __importDefault(require("moment"));
var react_redux_1 = require("react-redux");
var get_1 = __importDefault(require("lodash/get"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var dummyPatients_1 = __importDefault(require("../PatientsList/dummyPatients"));
var BarChartTitle_1 = __importDefault(require("./fragments/BarChartTitle"));
var BarChartTemplate_1 = __importDefault(require("./fragments/BarChartTemplate"));
var userSearchAction_1 = require("../../actions/userSearchAction");
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
            var valueForSearch = get_1.default(item, 'payload.valueForSearch', null);
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
            switch (get_1.default(patients, '[' + item + '].city', null)) {
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
        var endDate = new moment_1.default(currentDate);
        for (var item in patients) {
            totalNumber++;
            var birthDate = get_1.default(patients, '[' + item + '].dateOfBirth', null);
            var startDate = new moment_1.default(birthDate);
            var duration = moment_1.default.duration(endDate.diff(startDate)).get('year');
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
        var patientsData = dummyPatients_1.default;
        var DepartmentPercentage = this.getDepartmentPercentage(patientsData);
        var dataGreen = [
            { Text: "Edinburgh", sort: "Edinburgh", RespondentPercentage: get_1.default(DepartmentPercentage, 'Edinburgh', 0), valueForSearch: "Edinburgh" },
            { Text: "Somerset", sort: "Somerset", RespondentPercentage: get_1.default(DepartmentPercentage, 'Somerset', 0), valueForSearch: "Somerset" },
            { Text: "Glasgow", sort: "Glasgow", RespondentPercentage: get_1.default(DepartmentPercentage, 'Glasgow', 0), valueForSearch: "Glasgow" },
            { Text: "Hamilton", sort: "Hamilton", RespondentPercentage: get_1.default(DepartmentPercentage, 'Hamilton', 0), valueForSearch: "Hamilton" },
            { Text: "Northampton", sort: "Northampton", RespondentPercentage: get_1.default(DepartmentPercentage, 'Northampton', 0), valueForSearch: "Northampton" }
        ];
        var AgePercentage = this.getAgePercentage(patientsData);
        var dataViolet = [
            { Text: "<30", sort: "first", RespondentPercentage: get_1.default(AgePercentage, 'first', 0), valueForSearch: [0, 30] },
            { Text: "31-60", sort: "second", RespondentPercentage: get_1.default(AgePercentage, 'second', 0), valueForSearch: [31, 60] },
            { Text: "61-80", sort: "third", RespondentPercentage: get_1.default(AgePercentage, 'third', 0), valueForSearch: [61, 80] },
            { Text: ">80", sort: "fourth", RespondentPercentage: get_1.default(AgePercentage, 'fourth', 0), valueForSearch: [81, 100] }
        ];
        return (react_1.default.createElement("div", { className: classes.root },
            react_1.default.createElement(Grid_1.default, { className: classes.chartsContainer, container: true, spacing: 16 },
                react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                    react_1.default.createElement("div", { className: classes.chartBlock },
                        react_1.default.createElement(BarChartTitle_1.default, { mainTitle: "Patients By Setting", secondTitle: "Patients By Setting", description: "This is a brief description of patients by setting." }),
                        react_1.default.createElement(BarChartTemplate_1.default, { data: dataGreen, onClickAction: this.redirectTo, history: history, searchType: "by_city", barColor: "#c4e4d6", borderColor: "#78cea7" }))),
                react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                    react_1.default.createElement("div", { className: classes.chartBlock },
                        react_1.default.createElement(BarChartTitle_1.default, { mainTitle: "Patients By Age", secondTitle: "Patients By Age", description: "This is a brief description of patients by age." }),
                        react_1.default.createElement(BarChartTemplate_1.default, { data: dataViolet, onClickAction: this.redirectTo, history: history, searchType: "by_age", barColor: "#d3b2f4", borderColor: "#832edf" }))))));
    };
    return Charts;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        userSearch: state.custom.userSearch.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
        setSearchType: function (type, value) {
            dispatch(userSearchAction_1.userSearchAction.searchBy(type, value));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(Charts));
