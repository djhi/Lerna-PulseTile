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
import React, { Component } from 'react';
import get from "lodash/get";
import GoogleMapReact from 'google-map-react';
import CircleOnMap from "./CircleOnMap";
import MapLegend from "./MapLegend";
import { dummyCities } from "../dummyCityStatistic";
import { getColorByHealthScore, getAverageHealthScore } from "../functions";
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
            var healthScoreMin = get(businessIntelligence, 'healthScore[0]', 0);
            var healthScoreMax = get(businessIntelligence, 'healthScore[1]', 0);
            return !businessIntelligence || (healthScore >= healthScoreMin && healthScore <= healthScoreMax);
        };
        return _this;
    }
    MapWithStatistics.prototype.render = function () {
        var _this = this;
        var _a = this.props, changeCity = _a.changeCity, patients = _a.patients, patientsNumberArray = _a.patientsNumberArray;
        var _b = this.state, isPoorSelected = _b.isPoorSelected, isGoodSelected = _b.isGoodSelected, isVeryGoodSelected = _b.isVeryGoodSelected;
        return (React.createElement("div", { style: { height: '80vh', width: '100%' } },
            React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: API_KEY, language: 'en', }, defaultCenter: this.props.center, defaultZoom: this.props.zoom }, dummyCities.map(function (item, key) {
                var patientsByCurrentCity = patients ? patients.filter(function (patientItem) { return patientItem.location === item.cityName; }) : [];
                var patientNumberItem = patientsNumberArray.filter(function (cityItem) { return cityItem.city === item.cityName; });
                var averageHealthScore = getAverageHealthScore(patientsByCurrentCity);
                var color = getColorByHealthScore(averageHealthScore);
                if (_this.isItemVisible(averageHealthScore) && _this.filterByHealthScore(averageHealthScore) && get(patientNumberItem, '[0].number', 0) > 0) {
                    return (React.createElement(CircleOnMap, { key: key, id: item.id, lat: item.lat, lng: item.lng, size: item.size, color: color, cityName: item.cityName, healthScore: averageHealthScore, onClick: changeCity }));
                }
            })),
            React.createElement(MapLegend, { isPoorSelected: isPoorSelected, isGoodSelected: isGoodSelected, isVeryGoodSelected: isVeryGoodSelected, togglePoor: this.togglePoor, toggleGood: this.toggleGood, toggleVeryGood: this.toggleVeryGood })));
    };
    MapWithStatistics.defaultProps = {
        center: {
            lat: 53.955413,
            lng: -1.08271
        },
        zoom: 9
    };
    return MapWithStatistics;
}(Component));
;
export default MapWithStatistics;
