var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Create, SimpleForm } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CreateFormToolbar from "../../common/Toolbars/CreateFormToolbar";
import CustomIcon from "../CustomIcon";
var styles = function (theme) { return ({
    blockTitle: {
        display: "flex",
        alignItems: "center",
        height: 49,
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 15,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    emptyBlock: {
        flexGrow: 1,
    },
    expandBlockIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    createForm: {
        '& > div': {
            paddingTop: '0px !important',
            paddingLeft: 10,
            paddingRight: 10,
            border: "1px solid " + theme.palette.borderColor
        },
    },
    customFormBlock: {
        backgroundColor: theme.palette.paperColor,
        border: "1px solid " + theme.palette.borderColor
    },
}); };
/**
 * This component returns common template for plugin Create form
 * (it used in Create blocks for the plugins Allergies, Contacts, Medications, Problems etc.)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {boolean} isCustom
 * @param {boolean} isListOpened
 * @param {func}    toggleListBlock
 * @param {string}  blockTitle
 * @param {shape}   children
 * @param {shape}   rest
 */
var CreateTemplate = function (_a) {
    var classes = _a.classes, isCustom = _a.isCustom, isListOpened = _a.isListOpened, toggleListBlock = _a.toggleListBlock, blockTitle = _a.blockTitle, children = _a.children, rest = __rest(_a, ["classes", "isCustom", "isListOpened", "toggleListBlock", "blockTitle", "children"]);
    return (React.createElement(Grid, { item: true, xs: 12, sm: isListOpened ? 6 : 12 },
        React.createElement("div", { className: classes.blockTitle },
            React.createElement(Typography, { className: classes.title }, blockTitle),
            React.createElement("div", { className: classes.emptyBlock }),
            React.createElement(Tooltip, { title: isListOpened ? "Expand" : "Compress" },
                React.createElement(IconButton, { onClick: function (e) { return toggleListBlock(e); } },
                    React.createElement(CustomIcon, { iconClassName: isListOpened ? 'fa fa-expand' : 'fa fa-compress' })))),
        !isCustom
            ?
                React.createElement(Create, __assign({}, rest),
                    React.createElement(SimpleForm, { className: classes.createForm, toolbar: React.createElement(CreateFormToolbar, null) }, children))
            :
                React.createElement("div", { className: classes.customFormBlock }, children)));
};
export default withStyles(styles)(CreateTemplate);
