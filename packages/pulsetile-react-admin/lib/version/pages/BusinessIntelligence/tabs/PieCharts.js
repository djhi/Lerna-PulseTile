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
var index_1 = require("@material-ui/core/styles/index");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var PieChartByGender_1 = __importDefault(require("../charts/PieChartByGender"));
var constants_1 = require("../constants");
var EmptyListBlock_1 = __importDefault(require("../../../../core/common/ResourseTemplates/EmptyListBlock"));
var functions_1 = require("../functions");
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
        var healthScoreMin = get_1.default(businessIntelligence, 'healthScore[0]', 0);
        var healthScoreMax = get_1.default(businessIntelligence, 'healthScore[1]', 100);
        var ageMin = get_1.default(businessIntelligence, 'age[0]', 0);
        var ageMax = get_1.default(businessIntelligence, 'age[1]', 100);
        var patientsFilter = patientsByCurrentCity.filter(function (item) { return (item.age >= ageMin &&
            item.age <= ageMax &&
            item.healthScore >= healthScoreMin &&
            item.healthScore <= healthScoreMax); });
        var chartsData = [
            { type: 'measles', label: "Measles", male: functions_1.getNumberByGender(patientsFilter, "male", "Measles"), female: functions_1.getNumberByGender(patientsFilter, "female", "Measles") },
            { type: 'asthma', label: "Asthma", male: functions_1.getNumberByGender(patientsFilter, "male", "Asthma"), female: functions_1.getNumberByGender(patientsFilter, "female", "Asthma") },
            { type: 'diabetes', label: "Diabetes", male: functions_1.getNumberByGender(patientsFilter, "male", "Diabetes"), female: functions_1.getNumberByGender(patientsFilter, "female", "Diabetes") },
            { type: 'dementia', label: "Dementia", male: functions_1.getNumberByGender(patientsFilter, "male", "Dementia"), female: functions_1.getNumberByGender(patientsFilter, "female", "Dementia") },
        ];
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 12, md: 11 },
                react_1.default.createElement("div", { className: classes.tableBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Diagnosis By Gender")),
                isEmptyResults()
                    ? react_1.default.createElement(EmptyListBlock_1.default, null)
                    :
                        react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: classes.chartsContainer },
                                react_1.default.createElement(Grid_1.default, { container: true, sm: 12, spacing: 16 }, chartsData.map(function (item, key) {
                                    if (isDiagnosisVisible(item.type) && (item.male > 0 || item.female > 0)) {
                                        return (react_1.default.createElement(Grid_1.default, { item: true, key: key, sm: 12, md: 6, lg: 3 },
                                            react_1.default.createElement(PieChartByGender_1.default, { label: item.label, male: item.male, female: item.female, isGenderVisible: isGenderVisible })));
                                    }
                                }))),
                            react_1.default.createElement("div", { className: classes.legend },
                                isGenderVisible('male') &&
                                    react_1.default.createElement("div", { className: classes.legendParameter },
                                        react_1.default.createElement("div", { className: classes.square, style: { backgroundColor: constants_1.COLOR_MALE, border: "1px solid " + constants_1.COLOR_MALE } }),
                                        react_1.default.createElement(Typography_1.default, null, "Male")),
                                isGenderVisible('female') &&
                                    react_1.default.createElement("div", { className: classes.legendParameter },
                                        react_1.default.createElement("div", { className: classes.square, style: { backgroundColor: constants_1.COLOR_FEMALE, border: "1px solid " + constants_1.COLOR_FEMALE } }),
                                        react_1.default.createElement(Typography_1.default, null, "Female")))))));
    };
    return PieCharts;
}(react_1.Component));
;
exports.default = index_1.withStyles(styles)(PieCharts);
