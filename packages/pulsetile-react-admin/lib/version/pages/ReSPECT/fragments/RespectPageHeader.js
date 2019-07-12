"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var respect_small_png_1 = __importDefault(require("../images/respect-small.png"));
var styles = function (theme) { return ({
    tableHeaderBlock: {
        background: theme.palette.mainColor,
        backgroundSize: "cover",
        color: theme.palette.paperColor,
        paddingLeft: 14,
        paddingTop: 25,
        paddingBottom: 14,
    },
    title: {
        marginTop: 0,
        color: theme.palette.paperColor,
        fontSize: 24,
        fontWeight: 800,
    },
    description: {
        marginTop: 10,
        color: theme.palette.paperColor,
    },
    respectLogo: {
        width: "auto",
    }
}); };
/**
 * This component returns header for table
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 */
var RespectPageHeader = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement("div", { className: classes.tableHeaderBlock },
        react_1.default.createElement(CardMedia_1.default, { className: classes.respectLogo, component: "img", alt: "ReSPECT", image: respect_small_png_1.default, title: "ReSPECT" }),
        react_1.default.createElement(Typography_1.default, { className: classes.description }, "Creating individualised recomendations for a person's clinical care in emergency situation")));
};
exports.default = styles_1.withStyles(styles)(RespectPageHeader);
