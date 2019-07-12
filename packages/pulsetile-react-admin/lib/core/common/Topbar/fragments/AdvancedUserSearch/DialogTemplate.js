"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles = function (theme) {
    var _a;
    return ({
        dialogBlock: (_a = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.only('xs')] = {
                padding: 0,
            },
            _a[theme.breakpoints.up('sm')] = {
                minHeight: 300,
                minWidth: 600,
            },
            _a),
        titleBlock: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 48,
            paddingLeft: 20,
            backgroundColor: theme.palette.secondaryMainColor,
            color: theme.palette.paperColor,
            fontSize: 18,
            fontWeight: 800,
        },
    });
};
var DialogTemplate = function (_a) {
    var classes = _a.classes, title = _a.title, isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    return (react_1.default.createElement(Dialog_1.default, { open: isOpen, fullWidth: true, maxWidth: 'lg', onBackdropClick: function () { return onClose(); } },
        react_1.default.createElement("div", { className: classes.dialogBlock },
            react_1.default.createElement(Typography_1.default, { className: classes.titleBlock }, title),
            children)));
};
exports.default = styles_1.withStyles(styles)(DialogTemplate);
