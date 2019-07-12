import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
var styles = function (theme) { return ({
    addNewButton: {
        display: "block",
        width: 150,
        height: 40,
        paddingTop: "6px !important",
        paddingLeft: "8px !important",
        backgroundColor: theme.palette.secondaryMainColor,
        color: theme.palette.paperColor,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 800,
        "& svg": {
            marginRight: 2,
        },
        "& span": {
            textTransform: "capitalize",
        },
        "&:hover": {
            border: "1px solid " + theme.palette.secondaryMainColor,
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.secondaryMainColor,
        }
    },
}); };
var AddNewButton = function (_a) {
    var classes = _a.classes;
    return (React.createElement(Toolbar, null,
        React.createElement(Tooltip, { title: "Add new", disableHoverListener: true },
            React.createElement(IconButton, { type: "submit", className: classes.addNewButton },
                "Add new",
                React.createElement(AddIcon, null)))));
};
export default withStyles(styles)(AddNewButton);
