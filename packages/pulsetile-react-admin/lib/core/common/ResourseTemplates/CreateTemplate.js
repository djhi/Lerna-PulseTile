"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var CreateFormToolbar_1 = __importDefault(require("../../common/Toolbars/CreateFormToolbar"));
var CustomIcon_1 = __importDefault(require("../CustomIcon"));
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
    return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: isListOpened ? 6 : 12 },
        react_1.default.createElement("div", { className: classes.blockTitle },
            react_1.default.createElement(Typography_1.default, { className: classes.title }, blockTitle),
            react_1.default.createElement("div", { className: classes.emptyBlock }),
            react_1.default.createElement(Tooltip_1.default, { title: isListOpened ? "Expand" : "Compress" },
                react_1.default.createElement(IconButton_1.default, { onClick: function (e) { return toggleListBlock(e); } },
                    react_1.default.createElement(CustomIcon_1.default, { iconClassName: isListOpened ? 'fa fa-expand' : 'fa fa-compress' })))),
        !isCustom
            ?
                react_1.default.createElement(react_admin_1.Create, __assign({}, rest),
                    react_1.default.createElement(react_admin_1.SimpleForm, { className: classes.createForm, toolbar: react_1.default.createElement(CreateFormToolbar_1.default, null) }, children))
            :
                react_1.default.createElement("div", { className: classes.customFormBlock }, children)));
};
exports.default = styles_1.withStyles(styles)(CreateTemplate);
