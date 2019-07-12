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
import { withStyles } from "@material-ui/core/styles/index";
import PopoverInfo from "./PopoverInfo";
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
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes.circle, onClick: function () { return onClick(id); }, onMouseOver: function (e) { return _this.handleClick(e); }, onMouseOut: function () { return _this.handleClose(); }, style: {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: color
                } }),
            React.createElement(PopoverInfo, { open: open, anchorEl: anchorEl, handleClose: this.handleClose, cityName: cityName, healthScore: healthScore })));
    };
    return CircleOnMap;
}(Component));
export default withStyles(styles)(CircleOnMap);
