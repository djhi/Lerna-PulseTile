"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Block_1 = __importDefault(require("@material-ui/icons/Block"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles = function (theme) { return ({
    button: {
        display: "block",
        width: 110,
        height: 40,
        margin: "8px !important",
        padding: 0,
        color: theme.palette.paperColor,
        backgroundColor: theme.palette.dangerColor,
        border: "1px solid " + theme.palette.dangerColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            color: theme.palette.dangerColor,
            backgroundColor: theme.palette.paperColor,
        }
    },
    icon: {
        paddingRight: 5,
    }
}); };
/**
 * This component returns Cancel button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func}  redirectTo
 */
var CancelButton = function (_a) {
    var classes = _a.classes, redirectTo = _a.redirectTo;
    return (react_1.default.createElement(Tooltip_1.default, { title: "Cancel" },
        react_1.default.createElement(IconButton_1.default, { "aria-label": "Cancel", className: classes.button, onClick: function () { return redirectTo('show'); } },
            react_1.default.createElement(Block_1.default, { className: classes.icon }),
            " Cancel")));
};
exports.default = styles_1.withStyles(styles)(CancelButton);
