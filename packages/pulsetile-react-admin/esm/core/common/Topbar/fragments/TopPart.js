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
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardMedia from "@material-ui/core/CardMedia";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import logo from "../../../images/pulsetile-core-logo.png";
var styles = {
    whitePart: {
        backgroundColor: "white",
    },
    backButton: {
        color: "#0D672F",
    },
    userMenuButton: {
        color: "#0D672F",
    },
};
/**
 * This component returns top part of Showcase TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var TopPart = /** @class */ (function (_super) {
    __extends(TopPart, _super);
    function TopPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.handleMenu = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };
        _this.handleClose = function () {
            _this.setState({ anchorEl: null });
        };
        return _this;
    }
    TopPart.prototype.render = function () {
        var _a = this.props, classes = _a.classes, history = _a.history, logout = _a.logout;
        var anchorEl = this.state.anchorEl;
        var isTopbarMenuOpen = Boolean(anchorEl);
        return (React.createElement(Toolbar, { className: classes.whitePart },
            React.createElement(Tooltip, { title: "Back" },
                React.createElement(IconButton, { className: classes.backButton, onClick: function () { return history.goBack(); }, color: "inherit" },
                    React.createElement(BackIcon, null))),
            React.createElement(CardMedia, { component: "img", alt: "Pulse Tile", className: classes.logo, height: "38px", image: logo, title: "Pulse Tile" }),
            React.createElement(React.Fragment, null,
                React.createElement(Tooltip, { title: "User panel" },
                    React.createElement(IconButton, { className: classes.userNemuButton, "aria-owns": isTopbarMenuOpen ? 'menu-appbar' : undefined, "aria-haspopup": "true", onClick: this.handleMenu, color: "inherit" },
                        React.createElement(AccountCircle, null))),
                React.createElement(Menu, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isTopbarMenuOpen, onClose: this.handleClose }, logout))));
    };
    return TopPart;
}(Component));
export default withStyles(styles)(TopPart);
