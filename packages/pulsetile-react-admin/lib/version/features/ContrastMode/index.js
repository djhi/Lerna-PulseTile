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
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tonality_1 = __importDefault(require("@material-ui/icons/Tonality"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var contrastModeAction_1 = require("../../actions/contrastModeAction");
/**
 * Thic component returns Contrast Mode button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ContrastMode = /** @class */ (function (_super) {
    __extends(ContrastMode, _super);
    function ContrastMode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContrastMode: false,
        };
        _this.toggleContrastMode = function () {
            _this.setState(function (state) { return ({ isContrastMode: !_this.state.isContrastMode }); }, function () { return _this.props.contrastModeAction(_this.state.isContrastMode); });
        };
        return _this;
    }
    ContrastMode.prototype.render = function () {
        var _a = this.props, classes = _a.classes, contrastMode = _a.contrastMode;
        return (react_1.default.createElement("div", { className: classes.rightBlockItem },
            react_1.default.createElement(Tooltip_1.default, { title: "Contrast mode" },
                react_1.default.createElement(IconButton_1.default, { className: classes.rightBlockButton, "aria-haspopup": "true", color: "inherit", onClick: this.toggleContrastMode, "aria-label": "Contrast mode" },
                    react_1.default.createElement(Tonality_1.default, null)))));
    };
    return ContrastMode;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        contrastMode: state.custom.contrastMode.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        contrastModeAction: function (mode) {
            dispatch(contrastModeAction_1.contrastModeAction.request(mode));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ContrastMode);
