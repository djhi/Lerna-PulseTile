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
import { Range } from "react-range";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import RenderTrack from "./RenderTrack";
import RenderThumb from "./RenderThumb";
import formStyles from "./formStyles";
var RangeLine = /** @class */ (function (_super) {
    __extends(RangeLine, _super);
    function RangeLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeLine.prototype.render = function () {
        var _a = this.props, classes = _a.classes, age = _a.age, onChangeRange = _a.onChangeRange;
        return (React.createElement("div", { className: classes.rangeLine },
            React.createElement(Range, { values: age, step: 1, min: 0, max: 100, onChange: function (values) { return onChangeRange(values); }, renderTrack: function (_a) {
                    var props = _a.props, children = _a.children;
                    return React.createElement(RenderTrack, { props: props, children: children, value: age, min: 0, max: 100 });
                }, renderThumb: function (_a) {
                    var props = _a.props, isDragged = _a.isDragged;
                    return React.createElement(RenderThumb, { props: props, isDragged: isDragged });
                } }),
            React.createElement("div", { className: classes.rangeOutput, id: "output" },
                React.createElement(Typography, null,
                    age[0].toFixed(0),
                    " - ",
                    age[1].toFixed(0)))));
    };
    return RangeLine;
}(Component));
export default withStyles(formStyles)(RangeLine);
