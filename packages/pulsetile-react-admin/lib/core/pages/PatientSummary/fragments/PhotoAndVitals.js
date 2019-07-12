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
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var randomPatient_png_1 = __importDefault(require("../../../images/randomPatient.png"));
var PieChartBlock_1 = __importDefault(require("./PieChartBlock"));
var HorizontalBarChart_1 = __importDefault(require("./HorizontalBarChart"));
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
            var birthDate = get_1.default(patientInfo, 'birthDate', null);
            var birthDateArray = birthDate ? birthDate.split('-') : [];
            var year = get_1.default(birthDateArray, [0], null);
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
        var patientName = get_1.default(patientInfo, 'firstName', null) + " " + get_1.default(patientInfo, 'lastName', null);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: classes.blockTitle },
                react_1.default.createElement(Typography_1.default, { className: classes.title }, patientName)),
            react_1.default.createElement(Grid_1.default, { container: true, xs: 12, className: classes.content },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 5, className: classes.photoAndVitals },
                    react_1.default.createElement(Grid_1.default, { container: true, xs: 12, className: classes.insideGridBlock },
                        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 3 },
                            react_1.default.createElement(CardMedia_1.default, { className: classes.patientPhoto, component: "img", alt: patientName, image: randomPatient_png_1.default, title: patientName })),
                        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 9, className: classes.ageAndHeight },
                            react_1.default.createElement("div", { className: classes.parameter },
                                react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Age: "),
                                react_1.default.createElement(Typography_1.default, { className: classes.value }, isLoading ? 'Loading...' : age)),
                            react_1.default.createElement("div", { className: classes.parameter },
                                react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Height: "),
                                react_1.default.createElement(Typography_1.default, { className: classes.value }, "184 cm")),
                            react_1.default.createElement("div", { className: classes.parameter },
                                react_1.default.createElement(Typography_1.default, { variant: "body2" }, "CPR Status: "),
                                react_1.default.createElement(Typography_1.default, { className: classes.value }, "For active CPR")),
                            react_1.default.createElement("div", { className: classes.parameter },
                                react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Blood Group: "),
                                react_1.default.createElement(Typography_1.default, { className: classes.value }, "O+")),
                            react_1.default.createElement("div", { className: classes.parameter },
                                react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Donor status: "),
                                react_1.default.createElement(Typography_1.default, { className: classes.value }, "Organ Donor"))))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 7 },
                    react_1.default.createElement("div", { className: classes.diagrams },
                        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 4 },
                                react_1.default.createElement(PieChartBlock_1.default, { title: "Weight", value: weight, units: "kg", color: weightResult.color, maximal: 150, diagnosis: weightResult.diagnosis })),
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 4 },
                                react_1.default.createElement(PieChartBlock_1.default, { title: "BMI", value: bmi, units: "kg/m2", color: weightResult.color, maximal: 50, diagnosis: weightResult.diagnosis })),
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 4 },
                                react_1.default.createElement(PieChartBlock_1.default, { title: "Oxygen Saturation", value: OXYGEN_SATURATION_HARDCODE, units: "%", color: oxygenSaturationResult.color, maximal: 100, diagnosis: oxygenSaturationResult.diagnosis }))),
                        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 4 },
                                react_1.default.createElement("div", { className: classes.horizontalBarChart },
                                    react_1.default.createElement(Typography_1.default, { variant: "body2" }, "Blood pressure: 143 / 89"),
                                    react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.value }, "kg/m2"))),
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 4 },
                                react_1.default.createElement("div", { className: classes.chartBlock },
                                    react_1.default.createElement(HorizontalBarChart_1.default, { title: "Systolic", value: SYSTOLIC_PRESSURE_HARDCODE, color: systolicColor, maximal: 220 }))),
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 4 },
                                react_1.default.createElement("div", { className: classes.chartBlock },
                                    react_1.default.createElement(HorizontalBarChart_1.default, { title: "Diastolic", value: DIASTOLIC_PRESSURE_HARDCODE, color: diastolicColor, maximal: 220 })))))))));
    };
    return PhotoAndVitals;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        patientInfo: get_1.default(state, 'custom.currentPatient.patientInfo.data', null),
        isLoading: get_1.default(state, 'custom.currentPatient.loading', null),
        patientPhoto: get_1.default(state, 'custom.currentPatient.patientPhoto', null),
        isLoadingPhoto: get_1.default(state, 'custom.currentPatient.loadingPhoto', null),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(PhotoAndVitals));
