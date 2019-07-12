import React from "react";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BlockIcon from '@material-ui/icons/Block';
import Tooltip from '@material-ui/core/Tooltip';
var styles = function (theme) { return ({
    button: {
        display: "block",
        width: 110,
        height: 40,
        margin: "8px !important",
        padding: 0,
        color: theme.palette.paperColor,
        backgroundColor: theme.palette.dangerColor,
        border: "1px solid " + theme.palette.dangerColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            color: theme.palette.dangerColor,
            backgroundColor: theme.palette.paperColor,
        }
    },
    icon: {
        paddingRight: 5,
    }
}); };
/**
 * This component returns Cancel button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func}  redirectTo
 */
var CancelButton = function (_a) {
    var classes = _a.classes, redirectTo = _a.redirectTo;
    return (React.createElement(Tooltip, { title: "Cancel" },
        React.createElement(IconButton, { "aria-label": "Cancel", className: classes.button, onClick: function () { return redirectTo('show'); } },
            React.createElement(BlockIcon, { className: classes.icon }),
            " Cancel")));
};
export default withStyles(styles)(CancelButton);
