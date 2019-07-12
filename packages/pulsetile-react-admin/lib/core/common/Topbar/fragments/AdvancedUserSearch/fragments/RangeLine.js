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
var react_range_1 = require("react-range");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var RenderTrack_1 = __importDefault(require("./RenderTrack"));
var RenderThumb_1 = __importDefault(require("./RenderThumb"));
var formStyles_1 = __importDefault(require("./formStyles"));
var RangeLine = /** @class */ (function (_super) {
    __extends(RangeLine, _super);
    function RangeLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeLine.prototype.render = function () {
        var _a = this.props, classes = _a.classes, age = _a.age, onChangeRange = _a.onChangeRange;
        return (react_1.default.createElement("div", { className: classes.rangeLine },
            react_1.default.createElement(react_range_1.Range, { values: age, step: 1, min: 0, max: 100, onChange: function (values) { return onChangeRange(values); }, renderTrack: function (_a) {
                    var props = _a.props, children = _a.children;
                    return react_1.default.createElement(RenderTrack_1.default, { props: props, children: children, value: age, min: 0, max: 100 });
                }, renderThumb: function (_a) {
                    var props = _a.props, isDragged = _a.isDragged;
                    return react_1.default.createElement(RenderThumb_1.default, { props: props, isDragged: isDragged });
                } }),
            react_1.default.createElement("div", { className: classes.rangeOutput, id: "output" },
                react_1.default.createElement(Typography_1.default, null,
                    age[0].toFixed(0),
                    " - ",
                    age[1].toFixed(0)))));
    };
    return RangeLine;
}(react_1.Component));
exports.default = styles_1.withStyles(formStyles_1.default)(RangeLine);
