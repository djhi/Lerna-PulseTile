import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography";
var styles = function (theme) { return ({
    mainBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: -25,
    },
    itemBlock: {
        width: '30%',
        height: 30,
        textAlign: 'center',
    },
    itemBlockCenter: {
        width: '40%',
        height: 30,
        textAlign: 'center',
    },
    borderBlock: {
        height: 15,
    },
    borderBlockCenter: {
        height: 15,
        borderLeft: "1px solid " + theme.palette.fontColor,
        borderRight: "1px solid " + theme.palette.fontColor
    }
}); };
var HealthScoreAxis = function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.mainBlock },
        React.createElement("div", { className: classes.itemBlock },
            React.createElement("div", { className: classes.borderBlock }),
            React.createElement(Typography, { variant: "body2" }, "Poor")),
        React.createElement("div", { className: classes.itemBlockCenter },
            React.createElement("div", { className: classes.borderBlockCenter }),
            React.createElement(Typography, { variant: "body2" }, "Good")),
        React.createElement("div", { className: classes.itemBlock },
            React.createElement("div", { className: classes.borderBlock }),
            React.createElement(Typography, { variant: "body2" }, "Very Good"))));
};
export default withStyles(styles)(HealthScoreAxis);
