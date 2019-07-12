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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpIcon from '@material-ui/icons/ArrowDropUp';
import ColumnsTogglePopover from "../popovers/ColumnsTogglePopover";
var styles = function (theme) { return ({
    icon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderRadius: 0,
        width: 'auto',
        height: 38,
    },
}); };
var ColumnsTogglingIcon = /** @class */ (function (_super) {
    __extends(ColumnsTogglingIcon, _super);
    function ColumnsTogglingIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.popoverOpen = function (event) {
            _this.setState({
                anchorEl: event.currentTarget,
            });
        };
        _this.popoverClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        return _this;
    }
    ColumnsTogglingIcon.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, hasColumnsToggling = _a.hasColumnsToggling, hiddenColumns = _a.hiddenColumns;
        var anchorEl = this.state.anchorEl;
        if (!hasColumnsToggling) {
            return null;
        }
        var open = Boolean(anchorEl);
        return (React.createElement(React.Fragment, null,
            React.createElement(Tooltip, { title: "Table" },
                React.createElement(IconButton, { className: classes.icon, onClick: function (e) { return _this.popoverOpen(e); } },
                    React.createElement(SettingsIcon, null),
                    open ? React.createElement(ArrowDownIcon, null) : React.createElement(ArrowUpIcon, null))),
            React.createElement(ColumnsTogglePopover, __assign({ anchorEl: anchorEl, open: open, handleClose: this.popoverClose, hiddenColumns: hiddenColumns }, this.props))));
    };
    return ColumnsTogglingIcon;
}(Component));
export default withStyles(styles)(ColumnsTogglingIcon);
