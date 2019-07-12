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
var react_admin_1 = require("react-admin");
var clientUrls_1 = require("../../../core/config/clientUrls");
var content_1 = require("./content");
var RunTourButton_1 = __importDefault(require("./fragments/RunTourButton"));
var LinkToCustomer_1 = __importDefault(require("./fragments/LinkToCustomer"));
var LinkToHomepage_1 = __importDefault(require("./fragments/LinkToHomepage"));
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
        var pathName = get_1.default(location, 'pathname', null);
        return (react_1.default.createElement("div", { className: classes.rightBlockItem }, (pathName === clientUrls_1.PATIENT_SUMMARY)
            ?
                (isTourMode
                    ? react_1.default.createElement(RunTourButton_1.default, { classes: classes, runTour: this.runTour, isPassed: isPassed, callback: this.callback })
                    : react_1.default.createElement(LinkToCustomer_1.default, { classes: classes, homepage: content_1.homepage }))
            : react_1.default.createElement(LinkToHomepage_1.default, { classes: classes, toggleMode: this.toggleMode })));
    };
    return UserTour;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        isSidebarOpen: state.admin.ui.sidebarOpen,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UserTour);
