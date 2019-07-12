import React from 'react';
import { Range } from "react-range";
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import RenderTrack from "./RenderTrack";
import RenderThumb from "./RenderThumb";
var STEP = 0.1;
var MIN = 0;
var MAX = 100;
var styles = function (theme) { return ({
    titleBlock: {
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
    },
    mainTitle: {
        color: "#000",
        fontWeight: 800,
    },
    descriptionBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "linear-gradient(160deg, " + theme.palette.mainColor + " 50%, #fff 51%, " + theme.palette.mainColor + " 50%)"
    },
    leftDescriptionBlock: {
        width: "25%",
        textAlign: "left",
        paddingLeft: 25,
    },
    rightDescriptionBlock: {
        width: "25%",
        textAlign: "right",
        paddingRight: 25,
    },
    rangeLine: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "2em",
    },
    leftText: {
        paddingTop: 5,
        paddingBottom: 5,
        color: theme.palette.fontColor,
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
        color: theme.palette.paperColor,
    },
    formHelpText: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
        lineHeight: "1.3em",
    },
}); };
var RangeLine = function (_a) {
    var classes = _a.classes, onChangeRange = _a.onChangeRange, sourceName = _a.sourceName, title = _a.title, helpTitle = _a.helpTitle, leftText = _a.leftText, rightText = _a.rightText;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormControl, { className: classes.titleBlock },
            React.createElement(FormLabel, { className: classes.mainTitle }, title),
            React.createElement(FormHelperText, { className: classes.formHelpText }, helpTitle)),
        React.createElement(FormGroup, null,
            React.createElement("div", { className: classes.descriptionBlock },
                React.createElement("div", { className: classes.leftDescriptionBlock },
                    React.createElement(Typography, { className: classes.leftText }, leftText)),
                React.createElement("div", { className: classes.rightDescriptionBlock },
                    React.createElement(Typography, { className: classes.text }, rightText))),
            React.createElement("div", { className: classes.rangeLine },
                React.createElement(Range, { values: sourceName, step: STEP, min: MIN, max: MAX, onChange: function (values) { return onChangeRange(values); }, renderTrack: function (_a) {
                        var props = _a.props, children = _a.children;
                        return React.createElement(RenderTrack, { props: props, children: children, preferencesValue: sourceName, min: MIN, max: MAX });
                    }, renderThumb: function (_a) {
                        var props = _a.props, isDragged = _a.isDragged;
                        return React.createElement(RenderThumb, { props: props, isDragged: isDragged });
                    } })))));
};
export default withStyles(styles)(RangeLine);
