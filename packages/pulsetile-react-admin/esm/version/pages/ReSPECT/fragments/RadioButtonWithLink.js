import React from "react";
import { withStyles } from '@material-ui/core/styles';
var styles = function (theme) { return ({
    link: {
        color: theme.palette.secondaryMainColor,
    }
}); };
var RadioButtonWithLink = function (_a) {
    var classes = _a.classes, onRowClick = _a.onRowClick;
    return (React.createElement("p", null,
        "Yes (if so, document details in ",
        React.createElement("span", { className: classes.link, onClick: function () { return onRowClick(10); } }, "emergency contact section"),
        ")"));
};
export default withStyles(styles)(RadioButtonWithLink);
