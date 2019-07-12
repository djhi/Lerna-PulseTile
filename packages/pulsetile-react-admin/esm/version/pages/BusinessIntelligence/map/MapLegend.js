import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/Typography";
import { COLOR_GREEN, COLOR_RED, COLOR_AMBER } from "../constants";
var styles = function (theme) { return ({
    legend: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    title: {
        paddingTop: 5,
    },
    legendParameter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        margin: 5,
    },
    square: {
        width: 16,
        height: 16,
        marginRight: 5,
    }
}); };
var MapLegend = function (_a) {
    var classes = _a.classes, isPoorSelected = _a.isPoorSelected, isGoodSelected = _a.isGoodSelected, isVeryGoodSelected = _a.isVeryGoodSelected, togglePoor = _a.togglePoor, toggleGood = _a.toggleGood, toggleVeryGood = _a.toggleVeryGood;
    return (React.createElement("div", { className: classes.legend },
        React.createElement(Typography, { variant: "h1", className: classes.title }, "HealthScore"),
        React.createElement("div", { className: classes.legendParameter, onClick: function () { return togglePoor(); } },
            React.createElement("div", { className: classes.square, style: { opacity: isPoorSelected ? 1 : 0.6, backgroundColor: COLOR_RED, border: "1px solid " + COLOR_RED } }),
            React.createElement(Typography, null, "Poor (0-25)")),
        React.createElement("div", { className: classes.legendParameter, onClick: function () { return toggleGood(); } },
            React.createElement("div", { className: classes.square, style: { opacity: isGoodSelected ? 1 : 0.6, backgroundColor: COLOR_AMBER, border: "1px solid " + COLOR_AMBER } }),
            React.createElement(Typography, null, "Good (26-75)")),
        React.createElement("div", { className: classes.legendParameter, onClick: function () { return toggleVeryGood(); } },
            React.createElement("div", { className: classes.square, style: { opacity: isVeryGoodSelected ? 1 : 0.6, backgroundColor: COLOR_GREEN, border: "1px solid " + COLOR_GREEN } }),
            React.createElement(Typography, null, "Very Good (76-100)"))));
};
export default withStyles(styles)(MapLegend);
