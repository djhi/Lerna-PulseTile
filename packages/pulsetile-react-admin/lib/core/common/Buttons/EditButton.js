"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles = function (theme) { return ({
    editButton: {
        display: "block",
        width: 85,
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
 * @param {shape} classes
 * @param {func}  redirectTo
 */
var EditButton = function (_a) {
    var classes = _a.classes, redirectTo = _a.redirectTo;
    return (react_1.default.createElement(Tooltip_1.default, { title: "Edit" },
        react_1.default.createElement(IconButton_1.default, { "aria-label": "Edit", className: classes.editButton, onClick: function () { return redirectTo('edit'); } },
            react_1.default.createElement(Edit_1.default, null),
            " Edit")));
};
exports.default = styles_1.withStyles(styles)(EditButton);
