"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_router_dom_1 = require("react-router-dom");
var react_admin_1 = require("react-admin");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var MobileMenu_1 = __importDefault(require("./MobileMenu"));
var MenuItems_1 = __importDefault(require("./MenuItems"));
var getMenuType_1 = require("./getMenuType");
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
    var currentPathname = get_1.default(location, 'pathname', null);
    var pathNameArray = currentPathname.split('/');
    var currentList = '/' + pathNameArray[1];
    var menuItems = getMenuType_1.getMenuItems(currentPathname);
    var isSPV = getMenuType_1.isSinglePatientView(currentPathname);
    if (isSPV) {
        return (react_1.default.createElement(react_admin_1.Responsive, { small: isSidebarOpen ? null : react_1.default.createElement(MobileMenu_1.default, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick }), medium: isSidebarOpen ?
                react_1.default.createElement(react_admin_1.Sidebar, { className: classes.sidebarBlock },
                    react_1.default.createElement(MenuItems_1.default, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick }))
                : null }));
    }
    return (react_1.default.createElement(react_admin_1.Responsive, { small: isSidebarOpen ? react_1.default.createElement(MobileMenu_1.default, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick })
            : null, medium: isSidebarOpen ?
            react_1.default.createElement(react_admin_1.Sidebar, { className: classes.sidebarBlock },
                react_1.default.createElement(MenuItems_1.default, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: onMenuClick }))
            : null }));
};
var mapStateToProps = function (state) { return ({
    resources: react_admin_1.getResources(state),
    isSidebarOpen: state.admin.ui.sidebarOpen,
}); };
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(CustomSidebar)));
