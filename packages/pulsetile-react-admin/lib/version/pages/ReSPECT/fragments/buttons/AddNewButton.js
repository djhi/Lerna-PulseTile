"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var styles = function (theme) { return ({
    addNewButton: {
        display: "block",
        width: 150,
        height: 40,
        paddingTop: "6px !important",
        paddingLeft: "8px !important",
        backgroundColor: theme.palette.secondaryMainColor,
        color: theme.palette.paperColor,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 800,
        "& svg": {
            marginRight: 2,
        },
        "& span": {
            textTransform: "capitalize",
        },
        "&:hover": {
            border: "1px solid " + theme.palette.secondaryMainColor,
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.secondaryMainColor,
        }
    },
}); };
var AddNewButton = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement(Toolbar_1.default, null,
        react_1.default.createElement(Tooltip_1.default, { title: "Add new", disableHoverListener: true },
            react_1.default.createElement(IconButton_1.default, { type: "submit", className: classes.addNewButton },
                "Add new",
                react_1.default.createElement(Add_1.default, null)))));
};
exports.default = styles_1.withStyles(styles)(AddNewButton);
