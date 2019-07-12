import React from "react";
import get from "lodash/get";
import { MenuItemLink } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { themeCommonElements } from "../../../version/config/theme.config";
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
    return (React.createElement("div", { className: classes.labelWithChevron },
        React.createElement(Typography, { className: isSelected ? classes.itemSelected : classes.item }, label),
        React.createElement(ChevronRight, null)));
};
var MenuItems = function (_a) {
    var classes = _a.classes, menuItems = _a.menuItems, currentList = _a.currentList, onMenuClick = _a.onMenuClick;
    var menuHasChevrons = get(themeCommonElements, 'menuHasChevrons', false);
    return (React.createElement("div", { className: classes.menuBlock, role: "menubar" }, menuItems.map(function (item, key) {
        var isSelected = (currentList === item.url);
        return (React.createElement(MenuItemLink, { key: key, className: isSelected ? classes.menuItemSelected : classes.menuItem, to: item.url, primaryText: menuHasChevrons ? React.createElement(LabelWithChevron, { isSelected: isSelected, classes: classes, label: item.label }) : item.label, leftIcon: (currentList === item.url) ? React.createElement(FontAwesomeIcon, { icon: faCircle, size: "xs" }) : null, onClick: onMenuClick, selected: currentList === item.url, "aria-label": item.label, role: "menuitem" }));
    })));
};
export default withStyles(styles)(MenuItems);
