import React from "react";
import get from "lodash/get";
import { withStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import rangeLine from "../../../images/range-line.jpeg";
import { rangeLineSettings } from "./settings";
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
        backgroundImage: "url(" + rangeLine + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: '490px 10px',
    },
}); };
var RangeLinePopover = function (_a) {
    var classes = _a.classes, anchorEl = _a.anchorEl, open = _a.open, handleClose = _a.handleClose, label = _a.label, model = _a.model;
    var rangeLineValues = get(rangeLineSettings, model, null);
    return (React.createElement(Popover, { open: open, className: classes.popover, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'center', horizontal: 'center' }, transformOrigin: { vertical: 'center', horizontal: 'left' } },
        React.createElement("div", null,
            React.createElement("div", { className: classes.blockTitle },
                React.createElement(Typography, { className: classes.title }, label)),
            React.createElement("div", { className: classes.content },
                React.createElement("div", { className: classes.axis }, rangeLineValues && rangeLineValues.map(function (item) {
                    return (React.createElement("div", { className: classes[item.position] },
                        React.createElement(Typography, { variant: "body2" }, item.label)));
                }))))));
};
export default withStyles(styles)(RangeLinePopover);
