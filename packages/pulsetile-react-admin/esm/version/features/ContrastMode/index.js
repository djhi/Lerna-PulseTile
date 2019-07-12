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
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ContrastIcon from '@material-ui/icons/Tonality';
import Tooltip from '@material-ui/core/Tooltip';
import { contrastModeAction } from "../../actions/contrastModeAction";
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
        return (React.createElement("div", { className: classes.rightBlockItem },
            React.createElement(Tooltip, { title: "Contrast mode" },
                React.createElement(IconButton, { className: classes.rightBlockButton, "aria-haspopup": "true", color: "inherit", onClick: this.toggleContrastMode, "aria-label": "Contrast mode" },
                    React.createElement(ContrastIcon, null)))));
    };
    return ContrastMode;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        contrastMode: state.custom.contrastMode.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        contrastModeAction: function (mode) {
            dispatch(contrastModeAction.request(mode));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContrastMode);
