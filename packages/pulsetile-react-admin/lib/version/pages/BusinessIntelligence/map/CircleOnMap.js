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
var PopoverInfo_1 = __importDefault(require("./PopoverInfo"));
var styles = function (theme) { return ({
    circle: {
        opacity: 0.5,
        cursor: 'pointer',
    },
}); };
var CircleOnMap = /** @class */ (function (_super) {
    __extends(CircleOnMap, _super);
    function CircleOnMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.handleClick = function (event) {
            _this.setState({
                anchorEl: event.currentTarget,
            });
        };
        _this.handleClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        return _this;
    }
    CircleOnMap.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, id = _a.id, size = _a.size, color = _a.color, cityName = _a.cityName, healthScore = _a.healthScore, onClick = _a.onClick;
        var anchorEl = this.state.anchorEl;
        var open = Boolean(anchorEl);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: classes.circle, onClick: function () { return onClick(id); }, onMouseOver: function (e) { return _this.handleClick(e); }, onMouseOut: function () { return _this.handleClose(); }, style: {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: color
                } }),
            react_1.default.createElement(PopoverInfo_1.default, { open: open, anchorEl: anchorEl, handleClose: this.handleClose, cityName: cityName, healthScore: healthScore })));
    };
    return CircleOnMap;
}(react_1.Component));
exports.default = index_1.withStyles(styles)(CircleOnMap);
