import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import VersionCreateButton from "../buttons/VersionCreateButton";
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
    },
}); };
var EmptyRow = function (_a) {
    var classes = _a.classes, versionsInfo = _a.versionsInfo, toggleMode = _a.toggleMode, isLoading = _a.isLoading;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.emptyBlock },
            React.createElement(Typography, null, isLoading ? 'Loading...' : 'No Records found')),
        React.createElement("div", null, !isLoading && React.createElement(VersionCreateButton, { toggleMode: toggleMode }))));
};
export default withStyles(styles)(EmptyRow);
