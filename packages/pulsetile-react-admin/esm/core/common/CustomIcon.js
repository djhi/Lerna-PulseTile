import React from "react";
import { withStyles } from "@material-ui/core/styles";
var styles = function (theme) { return ({
    fontAwesomeIcon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight: 10,
        height: 37,
        boxSizing: 'border-box',
    },
}); };
var CustomIcon = function (_a) {
    var classes = _a.classes, iconClassName = _a.iconClassName;
    return (React.createElement("div", { className: classes.fontAwesomeIcon },
        React.createElement("i", { className: iconClassName })));
};
export default withStyles(styles)(CustomIcon);
