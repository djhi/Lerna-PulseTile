import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import respectLogo from "../images/respect-small.png";
var styles = function (theme) { return ({
    tableHeaderBlock: {
        background: theme.palette.mainColor,
        backgroundSize: "cover",
        color: theme.palette.paperColor,
        paddingLeft: 14,
        paddingTop: 25,
        paddingBottom: 14,
    },
    title: {
        marginTop: 0,
        color: theme.palette.paperColor,
        fontSize: 24,
        fontWeight: 800,
    },
    description: {
        marginTop: 10,
        color: theme.palette.paperColor,
    },
    respectLogo: {
        width: "auto",
    }
}); };
/**
 * This component returns header for table
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 */
var RespectPageHeader = function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.tableHeaderBlock },
        React.createElement(CardMedia, { className: classes.respectLogo, component: "img", alt: "ReSPECT", image: respectLogo, title: "ReSPECT" }),
        React.createElement(Typography, { className: classes.description }, "Creating individualised recomendations for a person's clinical care in emergency situation")));
};
export default withStyles(styles)(RespectPageHeader);
