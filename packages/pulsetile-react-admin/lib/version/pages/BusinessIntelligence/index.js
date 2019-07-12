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
var get_1 = __importDefault(require("lodash/get"));
var lodash_1 = __importDefault(require("lodash"));
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Grid/index"));
var index_3 = __importDefault(require("@material-ui/core/ExpansionPanel/index"));
var index_4 = __importDefault(require("@material-ui/core/ExpansionPanelSummary/index"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var index_5 = __importDefault(require("@material-ui/core/Typography/index"));
var index_6 = __importDefault(require("@material-ui/core/ExpansionPanelDetails/index"));
var HeatMap_1 = __importDefault(require("./tabs/HeatMap"));
var BarCharts_1 = __importDefault(require("./tabs/BarCharts"));
var PieCharts_1 = __importDefault(require("./tabs/PieCharts"));
var businessIntelligenceAction_1 = require("../../actions/BusinessIntelligence/businessIntelligenceAction");
var BusinessIntelligenceForm_1 = __importDefault(require("./fragments/BusinessIntelligenceForm"));
var ChartsSelector_1 = __importDefault(require("./fragments/ChartsSelector"));
var constants_1 = require("./constants");
var dummyCityStatistic_1 = require("./dummyCityStatistic");
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
            currentTab: constants_1.HEAT_MAP,
            currentCity: dummyCityStatistic_1.getCityById('york'),
        };
        _this.changeCity = function (id) {
            _this.setState({
                currentCity: dummyCityStatistic_1.getCityById(id),
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
            var result = HeatMap_1.default;
            if (currentTab === constants_1.BAR_CHARTS) {
                result = BarCharts_1.default;
            }
            if (currentTab === constants_1.PIE_CHARTS) {
                result = PieCharts_1.default;
            }
            return result;
        };
        _this.isDiagnosisVisible = function (type) {
            var businessIntelligence = _this.props.businessIntelligence;
            var diagnosis = get_1.default(businessIntelligence, 'diagnosis', []);
            return !businessIntelligence || diagnosis.indexOf(type) !== -1;
        };
        _this.isGenderVisible = function (type) {
            var businessIntelligence = _this.props.businessIntelligence;
            var genders = get_1.default(businessIntelligence, 'gender', []);
            return !businessIntelligence || genders.indexOf(type) !== -1;
        };
        _this.isEmptyResults = function () {
            var businessIntelligence = _this.props.businessIntelligence;
            var diagnosis = get_1.default(businessIntelligence, 'diagnosis', []);
            var genders = get_1.default(businessIntelligence, 'gender', []);
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
            var minAge = get_1.default(businessIntelligence, 'age[0]', 0);
            var maxAge = get_1.default(businessIntelligence, 'age[1]', 125);
            return !businessIntelligence || (minAge <= minCurrentRange && maxCurrentRange <= maxAge);
        };
        _this.getPatientsByCity = function () {
            var patients = _this.props.patients;
            var patientsByCity = lodash_1.default.mapValues(lodash_1.default.groupBy(patients, 'location'), function (clist) { return clist.map(function (item) { return lodash_1.default.omit(item, 'location'); }); });
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
        return (react_1.default.createElement(index_2.default, { item: true, xs: 12, className: classes.mainBlock },
            react_1.default.createElement(index_3.default, { className: isFromPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isFromPanelOpen, onChange: function () { return _this.togglePanel('isFromPanelOpen'); } },
                react_1.default.createElement(index_4.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
                    react_1.default.createElement(index_5.default, { className: classes.expansionTypography }, "Business Intelligence")),
                isFromPanelOpen &&
                    react_1.default.createElement(index_6.default, { className: classes.expansionPanelDetails },
                        react_1.default.createElement(BusinessIntelligenceForm_1.default, null))),
            react_1.default.createElement(index_3.default, { className: isChartsPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isChartsPanelOpen, onChange: function () { return _this.togglePanel('isChartsPanelOpen'); } },
                react_1.default.createElement(index_4.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
                    react_1.default.createElement(index_5.default, { className: classes.expansionTypography }, currentTab)),
                isChartsPanelOpen &&
                    react_1.default.createElement(index_6.default, { className: classes.expansionPanelDetails },
                        react_1.default.createElement(index_2.default, { className: classes.currentTabContainer, container: true },
                            react_1.default.createElement(CurrentTabContent, { classes: classes, patients: patients, currentCity: currentCity, changeCity: this.changeCity, patientsNumberArray: patientsNumberArray, businessIntelligence: businessIntelligence, patientsByCurrentCity: patientsByCurrentCity, isAgeRangeVisible: this.isAgeRangeVisible, isDiagnosisVisible: this.isDiagnosisVisible, isGenderVisible: this.isGenderVisible, isEmptyResults: this.isEmptyResults }),
                            react_1.default.createElement(ChartsSelector_1.default, { classes: classes, currentTab: currentTab, changeCurrentTab: this.changeCurrentTab, history: history }))))));
    };
    return BusinessIntelligence;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        businessIntelligence: get_1.default(state, 'custom.businessIntelligence.data', null),
        patients: get_1.default(state, 'custom.businessIntelligence.patients', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
        getPatientsStatistic: function () {
            dispatch(businessIntelligenceAction_1.businessIntelligenceAction.request());
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(index_1.withStyles(styles)(BusinessIntelligence));
