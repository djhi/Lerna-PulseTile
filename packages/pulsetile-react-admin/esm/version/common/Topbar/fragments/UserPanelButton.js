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
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import CustomLogoutButton from "../../../../core/common/Buttons/CustomLogoutButton";
var styles = {
    userPanel: {
        minWidth: 220,
        padding: 12,
    },
    userName: {
        marginBottom: 7,
        fontSize: 18,
        fontWeight: 800,
    },
    userRole: {
        fontSize: 14,
        marginBottom: 7,
    }
};
/**
 * This component returns User panel popover
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var UserPanelButton = /** @class */ (function (_super) {
    __extends(UserPanelButton, _super);
    function UserPanelButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            anchorEl: null,
            isOpen: false,
        };
        _this.handleMenu = function () {
            _this.setState(function (state) { return ({
                anchorEl: _this.button.current,
                isOpen: !state.isOpen,
            }); });
        };
        _this.handleClose = function () {
            _this.setState(function (state) { return ({
                anchorEl: null,
                isOpen: !state.isOpen,
            }); });
        };
        _this.button = React.createRef();
        return _this;
    }
    UserPanelButton.prototype.render = function () {
        var classes = this.props.classes;
        var _a = this.state, isOpen = _a.isOpen, anchorEl = _a.anchorEl;
        return (React.createElement("div", { className: classes.rightBlockItem, ref: this.button },
            React.createElement(Tooltip, { title: "User panel" },
                React.createElement(IconButton, { id: "icon-profile", className: classes.rightBlockButton, "aria-owns": isOpen ? 'menu-appbar' : undefined, "aria-haspopup": "true", onClick: this.handleMenu.bind(this), color: "inherit", "aria-label": "User Panel" },
                    React.createElement(PersonIcon, null))),
            React.createElement(Popover, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isOpen, onClose: this.handleClose },
                React.createElement(Card, { className: classes.userPanel },
                    React.createElement(Typography, { variant: "h1", className: classes.userName }, localStorage.getItem('username')),
                    React.createElement(Typography, { className: classes.userRole },
                        React.createElement("span", null, "User role:"),
                        " ",
                        localStorage.getItem('role')),
                    React.createElement(CustomLogoutButton, { classes: classes })))));
    };
    return UserPanelButton;
}(Component));
export default withStyles(styles)(UserPanelButton);
