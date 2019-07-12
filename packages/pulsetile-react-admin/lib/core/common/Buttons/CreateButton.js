"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles = function (theme) { return ({
    createButton: {
        display: "block",
        width: 100,
        height: 40,
        margin: 8,
        padding: 0,
        backgroundColor: "white",
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.secondaryMainColor,
            color: "white",
        }
    }
}); };
/**
 * This component returns Edit button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {shape}  history
 * @param {string} redirectPath
 */
var CreateButton = function (_a) {
    var classes = _a.classes, history = _a.history, redirectPath = _a.redirectPath;
    return (react_1.default.createElement(Tooltip_1.default, { title: "Create" },
        react_1.default.createElement(IconButton_1.default, { "aria-label": "Create", className: classes.createButton, onClick: function () { return history.push(redirectPath); } },
            react_1.default.createElement(Add_1.default, null),
            " Create")));
};
exports.default = styles_1.withStyles(styles)(CreateButton);
