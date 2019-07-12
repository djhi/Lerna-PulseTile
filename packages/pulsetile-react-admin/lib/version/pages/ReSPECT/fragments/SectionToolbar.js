"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Done_1 = __importDefault(require("@material-ui/icons/Done"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Block_1 = __importDefault(require("@material-ui/icons/Block"));
var styles = function (theme) { return ({
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    saveButton: {
        display: "flex",
        alignItems: "flex-end",
        width: 130,
        height: 40,
        color: theme.palette.paperColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        backgroundColor: theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 20,
        fontSize: 16,
        fontWeight: 800,
        "& svg": {
            marginRight: 5,
        },
        "& span": {
            textTransform: "capitalize",
        },
        "&:hover": {
            color: theme.palette.secondaryMainColor,
            backgroundColor: theme.palette.paperColor,
        }
    },
    cancelButton: {
        display: "flex",
        alignItems: "flex-end",
        width: 110,
        height: 40,
        marginRight: 15,
        backgroundColor: theme.palette.dangerColor,
        color: theme.palette.paperColor,
        borderRadius: theme.isRectangleButtons ? 0 : 20,
        fontSize: 16,
        fontWeight: 800,
        "& svg": {
            marginRight: 5,
        },
        "& span": {
            textTransform: "capitalize",
        },
        "&:hover": {
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.dangerColor,
            border: "1px solid " + theme.palette.dangerColor,
        }
    }
}); };
var SectionToolbar = function (_a) {
    var classes = _a.classes, onRowClick = _a.onRowClick;
    return (react_1.default.createElement(react_admin_1.Toolbar, { className: classes.toolbar },
        react_1.default.createElement(Tooltip_1.default, { title: "Cancel", disableHoverListener: true },
            react_1.default.createElement(IconButton_1.default, { type: "button", className: classes.cancelButton, onClick: function () { return onRowClick(null); } },
                react_1.default.createElement(Block_1.default, null),
                "Cancel")),
        react_1.default.createElement(Tooltip_1.default, { title: "Complete", disableHoverListener: true },
            react_1.default.createElement(IconButton_1.default, { type: "submit", className: classes.saveButton },
                react_1.default.createElement(Done_1.default, null),
                "Complete"))));
};
exports.default = styles_1.withStyles(styles)(SectionToolbar);
