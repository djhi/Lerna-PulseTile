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
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
var cprVariants_1 = require("../fragments/cprVariants");
var EmergencyView = /** @class */ (function (_super) {
    __extends(EmergencyView, _super);
    function EmergencyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.redirectToSection = function (e, sectionNumber) {
            e.preventDefault();
            _this.props.onRowClick(sectionNumber);
        };
        _this.getCprLabel = function () {
            var _a = _this.props, clinicalRecommendations = _a.clinicalRecommendations, sectionsInfo = _a.sectionsInfo, isVersionInfo = _a.isVersionInfo;
            var cprValue = isVersionInfo
                ? get_1.default(sectionsInfo, 'clinicalRecommendations.cprValue', null)
                : get_1.default(clinicalRecommendations, 'cprValue', null);
            var result = null;
            cprVariants_1.cprVariants.forEach(function (item) {
                if (item.id === cprValue) {
                    result = item.mainTitle;
                }
            });
            return result;
        };
        return _this;
    }
    EmergencyView.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, title = _a.title, isVersionInfo = _a.isVersionInfo;
        var isMainPanel = this.state.isMainPanel;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                react_1.default.createElement("div", { className: classes.titleBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.firstTitle }, "Emergency (CPR) view"),
                    react_1.default.createElement(Typography_1.default, { className: classes.secondTitle }, this.getCprLabel()),
                    react_1.default.createElement(Typography_1.default, null,
                        "For more information, see ",
                        react_1.default.createElement("a", { className: classes.sectionLink, onClick: function (e) { return _this.redirectToSection(e, 4); } }, "Section 4"),
                        " for the latest clinical recommendations")))));
    };
    return EmergencyView;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalRecommendations: state.custom.clinicalRecommendations.data,
        emergencyView: state.custom.emergencyView.data,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(formStyles_1.default)(EmergencyView));
