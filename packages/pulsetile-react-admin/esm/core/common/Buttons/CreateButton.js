import React from "react";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
var styles = function (theme) { return ({
    createButton: {
        display: "block",
        width: 100,
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
 * @param {shape}  classes
 * @param {shape}  history
 * @param {string} redirectPath
 */
var CreateButton = function (_a) {
    var classes = _a.classes, history = _a.history, redirectPath = _a.redirectPath;
    return (React.createElement(Tooltip, { title: "Create" },
        React.createElement(IconButton, { "aria-label": "Create", className: classes.createButton, onClick: function () { return history.push(redirectPath); } },
            React.createElement(AddIcon, null),
            " Create")));
};
export default withStyles(styles)(CreateButton);
