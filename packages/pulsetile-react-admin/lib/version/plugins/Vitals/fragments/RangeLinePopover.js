"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var styles_1 = require("@material-ui/core/styles");
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var range_line_jpeg_1 = __importDefault(require("../../../images/range-line.jpeg"));
var settings_1 = require("./settings");
var styles = function (theme) { return ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        display: "block",
        width: 490,
        padding: 0,
        margin: 0,
        borderRadius: 0,
    },
    blockTitle: {
        display: "flex",
        alignItems: "center",
        height: 49,
        color: theme.palette.paperColor,
        backgroundColor: theme.palette.secondaryMainColor,
        paddingLeft: 15,
    },
    title: {
        color: theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    rangeAxisItemTop: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: 70,
        height: 65,
        float: "left"
    },
    rangeAxisItemBottom: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: 70,
        height: 65,
        float: "left"
    },
    content: {
        margin: 10,
        height: 60,
    },
    axis: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundImage: "url(" + range_line_jpeg_1.default + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: '490px 10px',
    },
}); };
var RangeLinePopover = function (_a) {
    var classes = _a.classes, anchorEl = _a.anchorEl, open = _a.open, handleClose = _a.handleClose, label = _a.label, model = _a.model;
    var rangeLineValues = get_1.default(settings_1.rangeLineSettings, model, null);
    return (react_1.default.createElement(Popover_1.default, { open: open, className: classes.popover, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'center', horizontal: 'center' }, transformOrigin: { vertical: 'center', horizontal: 'left' } },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: classes.blockTitle },
                react_1.default.createElement(Typography_1.default, { className: classes.title }, label)),
            react_1.default.createElement("div", { className: classes.content },
                react_1.default.createElement("div", { className: classes.axis }, rangeLineValues && rangeLineValues.map(function (item) {
                    return (react_1.default.createElement("div", { className: classes[item.position] },
                        react_1.default.createElement(Typography_1.default, { variant: "body2" }, item.label)));
                }))))));
};
exports.default = styles_1.withStyles(styles)(RangeLinePopover);
