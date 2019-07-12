import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import PageTitle from "./PageTitle";
var styles = {
    greenPart: {
        backgroundColor: "#0D672F",
    },
    logo: {
        width: "auto",
    },
    menuButton: {
        marginRight: 20,
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
};
/**
 * This component returns low part of Showcase TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var LowPart = function (_a) {
    var classes = _a.classes, setSidebarVisibility = _a.setSidebarVisibility, isSidebarOpen = _a.isSidebarOpen, isMenuVisible = _a.isMenuVisible, location = _a.location, patientInfo = _a.patientInfo;
    return (React.createElement(Toolbar, { className: classes.greenPart },
        isMenuVisible &&
            React.createElement(Tooltip, { title: "Menu" },
                React.createElement(IconButton, { className: classes.menuButton, color: "inherit", "aria-label": "Menu" },
                    React.createElement(MenuIcon, { onClick: function () { return setSidebarVisibility(!isSidebarOpen); } }))),
        React.createElement(PageTitle, { location: location, classes: classes, patientInfo: patientInfo })));
};
export default withStyles(styles)(LowPart);
