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
var map_1 = __importDefault(require("../map"));
var AverageHealthScore_1 = __importDefault(require("../charts/AverageHealthScore"));
var Population_1 = __importDefault(require("../charts/Population"));
var DiagnosisByAge_1 = __importDefault(require("../charts/DiagnosisByAge"));
var functions_1 = require("../functions");
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
        var averageHealthScore = functions_1.getAverageHealthScore(patientsByCurrentCity);
        var color = functions_1.getColorByHealthScore(averageHealthScore);
        var diagnosisByAge = functions_1.getDiagnosisByAge(patientsByCurrentCity);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                react_1.default.createElement("div", { className: classes.tableBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Yorkshire, UK")),
                react_1.default.createElement("div", { className: classes.chartsContainer },
                    react_1.default.createElement(map_1.default, { patients: patients, patientsNumberArray: patientsNumberArray, businessIntelligence: businessIntelligence, changeCity: changeCity, currentCityId: currentCity.id }))),
            react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 8, md: 5 },
                react_1.default.createElement("div", { className: classes.tableBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" },
                        "Statistics: ",
                        get_1.default(currentCity, 'cityName', null))),
                react_1.default.createElement("div", { className: classes.chartsContainer },
                    react_1.default.createElement(AverageHealthScore_1.default, { color: color, healthScore: averageHealthScore }),
                    react_1.default.createElement(Population_1.default, { color: color, population: get_1.default(currentCity, 'population', null) }),
                    react_1.default.createElement(DiagnosisByAge_1.default, { diagnosisByAge: diagnosisByAge, isDiagnosisVisible: isDiagnosisVisible, isAgeRangeVisible: isAgeRangeVisible })))));
    };
    return HeatMap;
}(react_1.Component));
;
exports.default = index_1.withStyles(styles)(HeatMap);
