"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_range_1 = require("react-range");
var styles_1 = require("@material-ui/core/styles");
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var RenderTrack_1 = __importDefault(require("./RenderTrack"));
var RenderThumb_1 = __importDefault(require("./RenderThumb"));
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormControl_1.default, { className: classes.titleBlock },
            react_1.default.createElement(FormLabel_1.default, { className: classes.mainTitle }, title),
            react_1.default.createElement(FormHelperText_1.default, { className: classes.formHelpText }, helpTitle)),
        react_1.default.createElement(FormGroup_1.default, null,
            react_1.default.createElement("div", { className: classes.descriptionBlock },
                react_1.default.createElement("div", { className: classes.leftDescriptionBlock },
                    react_1.default.createElement(Typography_1.default, { className: classes.leftText }, leftText)),
                react_1.default.createElement("div", { className: classes.rightDescriptionBlock },
                    react_1.default.createElement(Typography_1.default, { className: classes.text }, rightText))),
            react_1.default.createElement("div", { className: classes.rangeLine },
                react_1.default.createElement(react_range_1.Range, { values: sourceName, step: STEP, min: MIN, max: MAX, onChange: function (values) { return onChangeRange(values); }, renderTrack: function (_a) {
                        var props = _a.props, children = _a.children;
                        return react_1.default.createElement(RenderTrack_1.default, { props: props, children: children, preferencesValue: sourceName, min: MIN, max: MAX });
                    }, renderThumb: function (_a) {
                        var props = _a.props, isDragged = _a.isDragged;
                        return react_1.default.createElement(RenderThumb_1.default, { props: props, isDragged: isDragged });
                    } })))));
};
exports.default = styles_1.withStyles(styles)(RangeLine);
