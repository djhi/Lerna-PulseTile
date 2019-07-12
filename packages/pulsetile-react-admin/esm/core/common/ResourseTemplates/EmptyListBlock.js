import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
var styles = function (theme) { return ({
    emptyBlock: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 48,
        backgroundColor: theme.palette.paperColor,
        textAlign: "center",
        borderBottom: "1px solid " + theme.palette.borderColor,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
    }
}); };
var EmptyListBlock = function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.emptyBlock },
        React.createElement(Typography, null, "No Records found")));
};
export default withStyles(styles)(EmptyListBlock);
