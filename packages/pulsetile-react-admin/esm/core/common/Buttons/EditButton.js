import React from "react";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
var styles = function (theme) { return ({
    editButton: {
        display: "block",
        width: 85,
        height: 40,
        margin: 8,
        padding: 0,
        backgroundColor: "white",
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.secondaryMainColor,
            color: "white",
        }
    }
}); };
/**
 * This component returns Edit button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func}  redirectTo
 */
var EditButton = function (_a) {
    var classes = _a.classes, redirectTo = _a.redirectTo;
    return (React.createElement(Tooltip, { title: "Edit" },
        React.createElement(IconButton, { "aria-label": "Edit", className: classes.editButton, onClick: function () { return redirectTo('edit'); } },
            React.createElement(EditIcon, null),
            " Edit")));
};
export default withStyles(styles)(EditButton);
