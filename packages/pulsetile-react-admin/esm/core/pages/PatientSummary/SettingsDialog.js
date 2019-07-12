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
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DialogWithStyles from "./DialogWithStyles";
var styles = {
    settingsIconBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    icon: {
        display: "block",
    },
    iconTitle: {
        marginTop: 15,
    },
};
/**
 * This component returns button which calls settings dropdown
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var SettingsDialog = /** @class */ (function (_super) {
    __extends(SettingsDialog, _super);
    function SettingsDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
        };
        _this.toggleDialog = function () {
            _this.setState({
                open: !_this.state.open,
            });
        };
        return _this;
    }
    SettingsDialog.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var open = this.state.open;
        return (React.createElement("div", { className: classes.settingsIconBlock },
            React.createElement(Tooltip, { className: classes.icon, title: "Settings" },
                React.createElement(IconButton, { id: "icon-settings", "aria-haspopup": "true", "aria-label": "Settings", color: "inherit", onClick: function () { return _this.toggleDialog(); } },
                    React.createElement(SettingsIcon, null))),
            React.createElement(Typography, { className: classes.iconTitle, variant: "h1" }, "Home"),
            React.createElement(DialogWithStyles, { open: open, onClose: this.toggleDialog })));
    };
    return SettingsDialog;
}(Component));
export default withStyles(styles)(SettingsDialog);
