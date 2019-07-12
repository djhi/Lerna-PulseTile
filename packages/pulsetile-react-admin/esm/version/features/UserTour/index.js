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
import { connect } from 'react-redux';
import { setSidebarVisibility } from 'react-admin';
import { PATIENT_SUMMARY } from "../../../core/config/clientUrls";
import { homepage } from './content';
import RunUserTour from "./fragments/RunTourButton";
import LinkToCustomer from "./fragments/LinkToCustomer";
import LinkToHomepage from "./fragments/LinkToHomepage";
var UserTour = /** @class */ (function (_super) {
    __extends(UserTour, _super);
    function UserTour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isTourRun: false,
            isTourMode: true,
        };
        /**
         * This function add info to Cookie that user tour was passed
         *
         * @param tour
         */
        _this.callback = function (tour) {
            var type = tour.type;
            var actions = _this.props.actions;
            if (type === 'tour:end') {
                document.cookie = 'userTour=passed';
                _this.setState({
                    isTourMode: !_this.state.isTourMode,
                });
            }
            if (type === 'tooltip' && window.innerWidth < 768) {
                actions.setSidebarVisibility(false);
            }
        };
        /**
         * This function runs User Tour
         */
        _this.runTour = function () {
            _this.setState(function (state) { return ({ isTourRun: !state.isTourRun }); }, function () { return _this.props.setSidebarVisibility(!_this.props.isSidebarOpen); });
        };
        /**
         * This function toggles User Tour mode
         */
        _this.toggleMode = function () {
            _this.setState({
                isTourMode: true,
            });
        };
        /**
         * This function check that UserTour was passed
         *
         * @return {boolean}
         */
        _this.checkIsPassed = function () {
            var decodedCookie = decodeURIComponent(document.cookie).split(';');
            return !(decodedCookie.indexOf('userTour=passed') !== -1 || decodedCookie.indexOf(' userTour=passed') !== -1);
        };
        return _this;
    }
    UserTour.prototype.render = function () {
        var _a = this.props, classes = _a.classes, location = _a.location;
        var _b = this.state, isTourRun = _b.isTourRun, isTourMode = _b.isTourMode;
        var isPassed = (this.checkIsPassed() || isTourRun);
        var pathName = get(location, 'pathname', null);
        return (React.createElement("div", { className: classes.rightBlockItem }, (pathName === PATIENT_SUMMARY)
            ?
                (isTourMode
                    ? React.createElement(RunUserTour, { classes: classes, runTour: this.runTour, isPassed: isPassed, callback: this.callback })
                    : React.createElement(LinkToCustomer, { classes: classes, homepage: homepage }))
            : React.createElement(LinkToHomepage, { classes: classes, toggleMode: this.toggleMode })));
    };
    return UserTour;
}(Component));
var mapStateToProps = function (state) {
    return {
        isSidebarOpen: state.admin.ui.sidebarOpen,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTour);
