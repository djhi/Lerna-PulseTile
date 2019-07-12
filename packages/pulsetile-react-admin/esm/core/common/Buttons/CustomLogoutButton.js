import React from "react";
import { connect } from 'react-redux';
import { userLogout } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
var styles = function (theme) { return ({
    button: {
        display: "block",
        width: 140,
        height: 40,
        margin: "8px !important",
        color: "white",
        backgroundColor: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            color: theme.palette.secondaryMainColor,
            backgroundColor: "white",
        },
    },
    icon: {
        marginLeft: 10,
    },
}); };
/**
 * This component returns custom Logout button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {func}    userLogout
 * @param {string}  title
 * @param {boolean} hideIcon
 */
var CustomLogoutButton = function (_a) {
    var classes = _a.classes, userLogout = _a.userLogout, _b = _a.title, title = _b === void 0 ? "Sign Out" : _b, hideIcon = _a.hideIcon;
    return (React.createElement(Tooltip, { title: title },
        React.createElement(IconButton, { className: classes.button, onClick: function () { return userLogout(); }, "aria-label": "Sign Out" },
            title,
            !hideIcon && React.createElement(ExitIcon, { className: classes.icon }))));
};
var mapDispatchToProps = {
    userLogout: userLogout,
};
export default connect(null, mapDispatchToProps)(withStyles(styles)(CustomLogoutButton));
