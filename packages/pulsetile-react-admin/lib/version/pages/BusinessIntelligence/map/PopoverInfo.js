"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("@material-ui/core/styles/index");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles = function (theme) { return ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        display: "block",
        padding: "5px 10px",
        margin: 0,
        borderRadius: 0,
    },
}); };
var PopoverInfo = function (_a) {
    var classes = _a.classes, open = _a.open, anchorEl = _a.anchorEl, handleClose = _a.handleClose, cityName = _a.cityName, healthScore = _a.healthScore;
    return (react_1.default.createElement(Popover_1.default, { open: open, className: classes.popover, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'center', horizontal: 'center' }, transformOrigin: { vertical: 'center', horizontal: 'left' } },
        react_1.default.createElement(Typography_1.default, { variant: "h1" }, cityName),
        react_1.default.createElement(Typography_1.default, { variant: "body1" },
            "Health score: ",
            healthScore,
            "%")));
};
exports.default = index_1.withStyles(styles)(PopoverInfo);
