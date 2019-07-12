"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Popover/index"));
var styles = function (theme) { return ({
    paper: {
        display: "block",
        width: 400,
        height: 'auto',
        margin: 0,
        padding: 10,
        borderRadius: 0,
    },
}); };
var ColumnsTogglePopover = function (_a) {
    var classes = _a.classes, open = _a.open, anchorEl = _a.anchorEl, handleClose = _a.handleClose, ColumnsTogglingPopover = _a.ColumnsTogglingPopover, toggleColumn = _a.toggleColumn;
    return (react_1.default.createElement(index_2.default, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
        react_1.default.createElement(ColumnsTogglingPopover, { toggleColumn: toggleColumn })));
};
exports.default = index_1.withStyles(styles)(ColumnsTogglePopover);
