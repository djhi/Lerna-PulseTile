import React from "react";
import { withStyles } from '@material-ui/core/styles/index';
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
var styles = function (theme) { return ({
    titleBlock: {
        display: "flex",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 15,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    secondTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 24,
        fontWeight: 700,
    },
    chartIcon: {
        paddingRight: 5,
    },
    description: {
        padding: 10,
        fontSize: 16,
    }
}); };
var BarChartTitle = function (_a) {
    var classes = _a.classes, mainTitle = _a.mainTitle, secondTitle = _a.secondTitle, description = _a.description;
    return (React.createElement("div", { className: classes.chartContainer },
        React.createElement("div", { className: classes.titleBlock },
            React.createElement(Tooltip, { title: "Chart" },
                React.createElement(FontAwesomeIcon, { className: classes.chartIcon, icon: faChartBar, size: "1.5x" })),
            React.createElement(Typography, { className: classes.title }, mainTitle)),
        React.createElement(Typography, { variant: "h1", className: classes.secondTitle }, secondTitle),
        React.createElement(Typography, { className: classes.description }, description)));
};
export default withStyles(styles)(BarChartTitle);
