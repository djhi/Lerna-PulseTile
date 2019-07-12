var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { withStyles } from '@material-ui/core/styles/index';
var styles = function (theme) { return ({
    mainBlock: {
        height: 16,
        width: 16,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondaryMainColor
    },
    insideBlock: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: theme.palette.secondaryMainColor
    }
}); };
var RenderTrack = function (_a) {
    var classes = _a.classes, props = _a.props, isDragged = _a.isDragged;
    return (React.createElement("div", __assign({}, props, { className: classes.mainBlock })));
};
export default withStyles(styles)(RenderTrack);
