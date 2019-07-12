import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
var styles = function (theme) { return ({
    backgroundBlock: {
        height: 16,
        backgroundColor: theme.palette.disabledColor,
        borderRadius: 8,
    },
    coloredBlock: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        height: '100%',
    },
    title: {
        marginTop: 15,
    }
}); };
var HorizontalBarChart = function (_a) {
    var classes = _a.classes, title = _a.title, color = _a.color, value = _a.value, maximal = _a.maximal;
    var colorBlockWidth = 100 * value / maximal;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.backgroundBlock },
            React.createElement("div", { className: classes.coloredBlock, style: { backgroundColor: color, width: colorBlockWidth + '%' } })),
        React.createElement(Typography, { variant: "caption", className: classes.title }, title)));
};
export default withStyles(styles)(HorizontalBarChart);
