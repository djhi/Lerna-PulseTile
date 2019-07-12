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
var google_map_react_1 = __importDefault(require("google-map-react"));
var CircleOnMap_1 = __importDefault(require("./CircleOnMap"));
var MapLegend_1 = __importDefault(require("./MapLegend"));
var dummyCityStatistic_1 = require("../dummyCityStatistic");
var functions_1 = require("../functions");
var API_KEY = 'AIzaSyCskY6-WDa0tfSayzD2gzu-EAKIfJUoUGA';
var MapWithStatistics = /** @class */ (function (_super) {
    __extends(MapWithStatistics, _super);
    function MapWithStatistics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isPoorSelected: true,
            isGoodSelected: true,
            isVeryGoodSelected: true,
        };
        _this.isItemVisible = function (averageHealthScore) {
            var _a = _this.state, isPoorSelected = _a.isPoorSelected, isGoodSelected = _a.isGoodSelected, isVeryGoodSelected = _a.isVeryGoodSelected;
            return (isPoorSelected && averageHealthScore <= 25) ||
                (isGoodSelected && averageHealthScore >= 26 && averageHealthScore <= 75) ||
                (isVeryGoodSelected && averageHealthScore >= 76 && averageHealthScore < 100);
        };
        _this.togglePoor = function () {
            _this.setState({
                isPoorSelected: !_this.state.isPoorSelected,
            });
        };
        _this.toggleGood = function () {
            _this.setState({
                isGoodSelected: !_this.state.isGoodSelected,
            });
        };
        _this.toggleVeryGood = function () {
            _this.setState({
                isVeryGoodSelected: !_this.state.isVeryGoodSelected,
            });
        };
        _this.filterByHealthScore = function (healthScore) {
            var businessIntelligence = _this.props.businessIntelligence;
            var healthScoreMin = get_1.default(businessIntelligence, 'healthScore[0]', 0);
            var healthScoreMax = get_1.default(businessIntelligence, 'healthScore[1]', 0);
            return !businessIntelligence || (healthScore >= healthScoreMin && healthScore <= healthScoreMax);
        };
        return _this;
    }
    MapWithStatistics.prototype.render = function () {
        var _this = this;
        var _a = this.props, changeCity = _a.changeCity, patients = _a.patients, patientsNumberArray = _a.patientsNumberArray;
        var _b = this.state, isPoorSelected = _b.isPoorSelected, isGoodSelected = _b.isGoodSelected, isVeryGoodSelected = _b.isVeryGoodSelected;
        return (react_1.default.createElement("div", { style: { height: '80vh', width: '100%' } },
            react_1.default.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: API_KEY, language: 'en', }, defaultCenter: this.props.center, defaultZoom: this.props.zoom }, dummyCityStatistic_1.dummyCities.map(function (item, key) {
                var patientsByCurrentCity = patients ? patients.filter(function (patientItem) { return patientItem.location === item.cityName; }) : [];
                var patientNumberItem = patientsNumberArray.filter(function (cityItem) { return cityItem.city === item.cityName; });
                var averageHealthScore = functions_1.getAverageHealthScore(patientsByCurrentCity);
                var color = functions_1.getColorByHealthScore(averageHealthScore);
                if (_this.isItemVisible(averageHealthScore) && _this.filterByHealthScore(averageHealthScore) && get_1.default(patientNumberItem, '[0].number', 0) > 0) {
                    return (react_1.default.createElement(CircleOnMap_1.default, { key: key, id: item.id, lat: item.lat, lng: item.lng, size: item.size, color: color, cityName: item.cityName, healthScore: averageHealthScore, onClick: changeCity }));
                }
            })),
            react_1.default.createElement(MapLegend_1.default, { isPoorSelected: isPoorSelected, isGoodSelected: isGoodSelected, isVeryGoodSelected: isVeryGoodSelected, togglePoor: this.togglePoor, toggleGood: this.toggleGood, toggleVeryGood: this.toggleVeryGood })));
    };
    MapWithStatistics.defaultProps = {
        center: {
            lat: 53.955413,
            lng: -1.08271
        },
        zoom: 9
    };
    return MapWithStatistics;
}(react_1.Component));
;
exports.default = MapWithStatistics;
