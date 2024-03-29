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
var react_redux_1 = require("react-redux");
var initializeAction_1 = require("../actions/initializeAction");
var LoadingSlider_1 = __importDefault(require("../common/LoadingSlider"));
var token_1 = require("../token");
var InitializePage = /** @class */ (function (_super) {
    __extends(InitializePage, _super);
    function InitializePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitializePage.prototype.componentDidMount = function () {
        if (!token_1.token) {
            this.props.initializeAction();
        }
    };
    InitializePage.prototype.render = function () {
        return (react_1.default.createElement(LoadingSlider_1.default, null));
    };
    return InitializePage;
}(react_1.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        initializeAction: function () {
            dispatch(initializeAction_1.initializeAction.request());
        }
    };
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(InitializePage);
