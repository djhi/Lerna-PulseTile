"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var theme_config_1 = require("../../../version/config/theme.config");
var styles = function (theme) { return ({
    menuBlock: {
        border: "1px solid " + theme.palette.borderColor,
    },
    labelWithChevron: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "justify",
        width: "100%",
        '&:hover p': {
            color: theme.palette.paperColor + " !important",
        },
        '&:hover svg': {
            color: theme.palette.paperColor + " !important",
        },
    },
    item: {
        color: theme.palette.menuItemsColor + " !important",
        fontSize: 14,
        fontWeight: 600,
    },
    itemSelected: {
        color: theme.palette.paperColor + " !important",
        fontSize: 14,
        fontWeight: 600,
    }
}); };
var LabelWithChevron = function (_a) {
    var classes = _a.classes, isSelected = _a.isSelected, label = _a.label;
    return (react_1.default.createElement("div", { className: classes.labelWithChevron },
        react_1.default.createElement(Typography_1.default, { className: isSelected ? classes.itemSelected : classes.item }, label),
        react_1.default.createElement(ChevronRight_1.default, null)));
};
var MenuItems = function (_a) {
    var classes = _a.classes, menuItems = _a.menuItems, currentList = _a.currentList, onMenuClick = _a.onMenuClick;
    var menuHasChevrons = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
    return (react_1.default.createElement("div", { className: classes.menuBlock, role: "menubar" }, menuItems.map(function (item, key) {
        var isSelected = (currentList === item.url);
        return (react_1.default.createElement(react_admin_1.MenuItemLink, { key: key, className: isSelected ? classes.menuItemSelected : classes.menuItem, to: item.url, primaryText: menuHasChevrons ? react_1.default.createElement(LabelWithChevron, { isSelected: isSelected, classes: classes, label: item.label }) : item.label, leftIcon: (currentList === item.url) ? react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircle, size: "xs" }) : null, onClick: onMenuClick, selected: currentList === item.url, "aria-label": item.label, role: "menuitem" }));
    })));
};
exports.default = styles_1.withStyles(styles)(MenuItems);
