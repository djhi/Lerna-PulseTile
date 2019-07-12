import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography/index";
import Popover from "@material-ui/core/Popover/index";
import IconButton from "@material-ui/core/IconButton/index";
import Tooltip from "@material-ui/core/Tooltip/index";
import TableIcon from '@material-ui/icons/List';
import ChartIcon from '@material-ui/icons/ShowChart';
import TimelineIcon from '@material-ui/icons/AccessTime';
import Divider from "@material-ui/core/Divider/index";
import { MODE_TIMELINE, MODE_TABLE, MODE_CHART } from "../fragments/constants";
var styles = function (theme) { return ({
    paper: {
        display: "block",
        width: 150,
        height: 'auto',
        margin: 0,
        padding: 10,
        borderRadius: 0,
    },
    label: {
        paddingLeft: 10,
    },
    icon: {
        paddingLeft: 20,
        color: theme.palette.secondaryMainColor,
    },
}); };
var ListModePopover = function (_a) {
    var classes = _a.classes, open = _a.open, anchorEl = _a.anchorEl, handleClose = _a.handleClose, resourse = _a.resourse, changeListMode = _a.changeListMode, hasChart = _a.hasChart, hasTimetable = _a.hasTimetable;
    return (React.createElement(Popover, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
        React.createElement("div", null,
            React.createElement(Typography, null, "TABLES"),
            React.createElement(Divider, null),
            React.createElement(Tooltip, { title: "Table" },
                React.createElement(IconButton, { className: classes.icon, onClick: function () { return changeListMode(MODE_TABLE); } },
                    React.createElement(TableIcon, null),
                    React.createElement(Typography, { className: classes.label }, resourse)))),
        hasChart &&
            React.createElement("div", null,
                React.createElement(Typography, null, "CHARTS"),
                React.createElement(Divider, null),
                React.createElement(Tooltip, { title: "Chart" },
                    React.createElement(IconButton, { className: classes.icon, onClick: function () { return changeListMode(MODE_CHART); } },
                        React.createElement(ChartIcon, null),
                        React.createElement(Typography, { className: classes.label }, resourse)))),
        hasTimetable &&
            React.createElement("div", null,
                React.createElement(Typography, null, "TIMELINES"),
                React.createElement(Divider, null),
                React.createElement(Tooltip, { title: "Timeline" },
                    React.createElement(IconButton, { className: classes.icon, onClick: function () { return changeListMode(MODE_TIMELINE); } },
                        React.createElement(TimelineIcon, null),
                        React.createElement(Typography, { className: classes.label }, resourse))))));
};
export default withStyles(styles)(ListModePopover);
