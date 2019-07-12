import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Popover from "@material-ui/core/Popover/index";
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
    return (React.createElement(Popover, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
        React.createElement(ColumnsTogglingPopover, { toggleColumn: toggleColumn })));
};
export default withStyles(styles)(ColumnsTogglePopover);
