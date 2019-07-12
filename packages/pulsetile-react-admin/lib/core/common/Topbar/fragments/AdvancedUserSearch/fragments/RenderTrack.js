"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_range_1 = require("react-range");
var styles_1 = require("@material-ui/core/styles");
var styles = {
    mainBlock: {
        height: 36,
        display: "flex",
        width: "100%"
    }
};
var RenderTrack = function (_a) {
    var classes = _a.classes, props = _a.props, children = _a.children, value = _a.value, min = _a.min, max = _a.max;
    return (react_1.default.createElement("div", { onMouseDown: props.onMouseDown, onTouchStart: props.onTouchStart, className: classes.mainBlock },
        react_1.default.createElement("div", { ref: props.ref, style: {
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: react_range_1.getTrackBackground({
                    values: value,
                    colors: ["#ccc", "#ff5d00", "#ccc"],
                    min: min,
                    max: max
                }),
                alignSelf: "center"
            } }, children)));
};
exports.default = styles_1.withStyles(styles)(RenderTrack);
