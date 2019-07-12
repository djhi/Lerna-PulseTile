import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
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
    return (React.createElement(Popover, { open: open, className: classes.popover, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'center', horizontal: 'center' }, transformOrigin: { vertical: 'center', horizontal: 'left' } },
        React.createElement(Typography, { variant: "h1" }, cityName),
        React.createElement(Typography, { variant: "body1" },
            "Health score: ",
            healthScore,
            "%")));
};
export default withStyles(styles)(PopoverInfo);
