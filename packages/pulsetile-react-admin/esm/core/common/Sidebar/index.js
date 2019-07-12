import React from 'react';
import get from "lodash/get";
import { withRouter } from 'react-router-dom';
import { Sidebar, getResources, Responsive } from 'react-admin';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MobileMenu from "./MobileMenu";
import MenuItems from "./MenuItems";
import { getMenuItems, isSinglePatientView } from "./getMenuType";
var styles = function (theme) { return ({
    sidebarBlock: {
        maxWidth: 240,
        backgroundColor: "#fff",
        '& div': {
            marginTop: 0,
        },
    },
    mobileSidebar: {
        width: "100%",
        height: "100%",
        position: "absolute",
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999999999999,
    },
    menuBlock: {
        border: "1px solid " + theme.palette.borderColor,
        maxWidth: 240,
        height: '100%',
        backgroundColor: theme.palette.paperColor,
    },
    menuItem: {
        color: theme.palette.menuItemsColor + " !important",
        fontSize: 14,
        fontWeight: 600,
        borderBottom: "1px solid " + theme.palette.borderColor,
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            color: "#fff !important",
        },
        '&:hover div p': {
            backgroundColor: theme.palette.secondaryMainColor,
            color: "#fff !important",
        },
    },
    menuItemSelected: {
        fontSize: 14,
        fontWeight: 600,
        backgroundColor: theme.palette.secondaryMainColor + '! important',
        color: "#fff !important",
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
}); };
/**
 * This component returns custom menu
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var CustomSidebar = function (_a) {
    var classes = _a.classes, isSidebarOpen = _a.isSidebarOpen, onMenuClick = _a.onMenuClick, location = _a.location;
    var currentPathname = get(location, 'pathname', null);
    var pathNameArray = currentPathname.split('/');
    var currentList = '/' + pathNameArray[1];
    var menuItems = getMenuItems(currentPathname);
    var isSPV = isSinglePatientView(currentPathname);
    if (isSPV) {
        return (React.createElement(Responsive, { small: isSidebarOpen ? null : React.createElement(MobileMenu, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick }), medium: isSidebarOpen ?
                React.createElement(Sidebar, { className: classes.sidebarBlock },
                    React.createElement(MenuItems, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick }))
                : null }));
    }
    return (React.createElement(Responsive, { small: isSidebarOpen ? React.createElement(MobileMenu, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick })
            : null, medium: isSidebarOpen ?
            React.createElement(Sidebar, { className: classes.sidebarBlock },
                React.createElement(MenuItems, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick }))
            : null }));
};
var mapStateToProps = function (state) { return ({
    resources: getResources(state),
    isSidebarOpen: state.admin.ui.sidebarOpen,
}); };
export default withRouter(connect(mapStateToProps, null)(withStyles(styles)(CustomSidebar)));
