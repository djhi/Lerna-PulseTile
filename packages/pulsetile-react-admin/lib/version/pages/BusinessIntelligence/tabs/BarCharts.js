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
var index_1 = require("@material-ui/core/styles/index");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var DiagnosisByAgeBars_1 = __importDefault(require("../charts/DiagnosisByAgeBars"));
var HealthScoreByAge_1 = __importDefault(require("../charts/HealthScoreByAge"));
var EmptyListBlock_1 = __importDefault(require("../../../../core/common/ResourseTemplates/EmptyListBlock"));
var functions_1 = require("../functions");
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
        var diagnosisByAge = functions_1.getDiagnosisByAge(patientsByCurrentCity);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 12, md: 6 },
                react_1.default.createElement("div", { className: classes.tableBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Diagnosis By Age")),
                isEmptyResults() ? react_1.default.createElement(EmptyListBlock_1.default, null) :
                    react_1.default.createElement("div", { className: classes.chartsContainer },
                        react_1.default.createElement(DiagnosisByAgeBars_1.default, { diagnosisByAge: diagnosisByAge, isDiagnosisVisible: isDiagnosisVisible, isAgeRangeVisible: isAgeRangeVisible }))),
            react_1.default.createElement(Grid_1.default, { className: classes.chart, item: true, xs: 12, sm: 8, md: 5 },
                react_1.default.createElement("div", { className: classes.tableBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Health Score By Age")),
                isEmptyResults() ? react_1.default.createElement(EmptyListBlock_1.default, null) :
                    react_1.default.createElement("div", { className: classes.chartsContainer },
                        react_1.default.createElement(HealthScoreByAge_1.default, { diagnosisByAge: diagnosisByAge, isDiagnosisVisible: isDiagnosisVisible, isAgeRangeVisible: isAgeRangeVisible })))));
    };
    return BarCharts;
}(react_1.Component));
exports.default = index_1.withStyles(styles)(BarCharts);
