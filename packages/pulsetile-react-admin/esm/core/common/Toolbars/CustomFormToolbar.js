import React from "react";
import { Toolbar } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
var styles = function (theme) { return ({
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    saveButton: {
        display: "flex",
        alignItems: "flex-end",
        width: 130,
        height: 40,
        color: theme.palette.paperColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        backgroundColor: theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 20,
        fontSize: 16,
        fontWeight: 800,
        "& svg": {
            marginRight: 5,
        },
        "& span": {
            textTransform: "capitalize",
        },
        "&:hover": {
            color: theme.palette.secondaryMainColor,
            backgroundColor: theme.palette.paperColor,
        }
    },
    cancelButton: {
        display: "flex",
        alignItems: "flex-end",
        width: 110,
        height: 40,
        marginRight: 15,
        backgroundColor: theme.palette.dangerColor,
        color: theme.palette.paperColor,
        borderRadius: theme.isRectangleButtons ? 0 : 20,
        fontSize: 16,
        fontWeight: 800,
        "& svg": {
            marginRight: 5,
        },
        "& span": {
            textTransform: "capitalize",
        },
        "&:hover": {
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.dangerColor,
            border: "1px solid " + theme.palette.dangerColor,
        }
    }
}); };
var SectionToolbar = function (_a) {
    var classes = _a.classes, history = _a.history, resourceUrl = _a.resourceUrl;
    return (React.createElement(Toolbar, { className: classes.toolbar },
        React.createElement(Tooltip, { title: "Cancel", disableHoverListener: true },
            React.createElement(IconButton, { type: "button", className: classes.cancelButton, onClick: function () { return history.push('/' + resourceUrl); } },
                React.createElement(BlockIcon, null),
                "Cancel")),
        React.createElement(Tooltip, { title: "Complete", disableHoverListener: true },
            React.createElement(IconButton, { type: "submit", className: classes.saveButton },
                React.createElement(DoneIcon, null),
                "Complete"))));
};
export default withStyles(styles)(SectionToolbar);
