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
import get from "lodash/get";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import { themeCommonElements } from "../../../version/config/theme.config";
import Popover from "@material-ui/core/Popover";
var styles = function (theme) { return ({
    paper: {
        display: "block",
        width: 100,
        height: 'auto',
        margin: 0,
        padding: 10,
        borderRadius: 0,
    },
    buttomBlock: {
        display: "flex",
    },
    viewButton: {
        height: 40,
        textTransform: 'capitalize',
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        backgroundColor: theme.isOldDesign ? theme.palette.paperColor : null,
        color: theme.palette.secondaryMainColor + ' !important',
        borderRadius: 0,
        '& span p': {
            fontSize: 16,
            color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.viewButton,
        },
    },
    arrowButton: {
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        borderTop: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderRight: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderBottom: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderRadius: 0,
        color: theme.palette.secondaryMainColor,
    },
    link: {
        height: 25,
        cursor: "pointer",
        paddingTop: 5,
    }
}); };
/**
 * This component returns Show button with custom styles
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func}  viewAction
 * @param {shape} record
 */
var ViewButton = /** @class */ (function (_super) {
    __extends(ViewButton, _super);
    function ViewButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.popoverOpen = function (e) {
            e.stopPropagation();
            _this.setState({
                anchorEl: e.currentTarget,
            });
        };
        _this.popoverClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        return _this;
    }
    ViewButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, viewAction = _a.viewAction, checkRedirectUrl = _a.checkRedirectUrl;
        var anchorEl = this.state.anchorEl;
        var open = Boolean(anchorEl);
        return (React.createElement("div", { className: classes.buttomBlock },
            React.createElement(Button, { "aria-label": "View", onClick: function (e) { return viewAction(e); }, className: classes.viewButton },
                React.createElement(Typography, null, "View")),
            get(themeCommonElements, 'redirectToPlugin', false) &&
                React.createElement(React.Fragment, null,
                    React.createElement(ArrowDownIcon, { className: classes.arrowButton, onClick: function (e) { return _this.popoverOpen(e); } }),
                    React.createElement(Popover, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: function () { return _this.popoverClose(); }, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
                        React.createElement(Typography, { className: classes.link }, "Orders"),
                        React.createElement(Divider, null),
                        React.createElement(Typography, { className: classes.link }, "Results"),
                        React.createElement(Divider, null),
                        React.createElement(Typography, { className: classes.link, onClick: function (e) { return checkRedirectUrl(e, '/vitalsigns'); } }, "Vitals"),
                        React.createElement(Divider, null),
                        React.createElement(Typography, { className: classes.link, onClick: function (e) { return checkRedirectUrl(e, '/problems'); } }, "Problems")))));
    };
    return ViewButton;
}(Component));
export default withStyles(styles)(ViewButton);
