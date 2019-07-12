import React from "react";
import { getTrackBackground } from "react-range/lib/index";
import { withStyles } from '@material-ui/core/styles/index';
var styles = {
    mainBlock: {
        height: 36,
        display: "flex",
        width: "100%"
    }
};
var RenderTrack = function (_a) {
    var classes = _a.classes, props = _a.props, children = _a.children, value = _a.value, min = _a.min, max = _a.max;
    return (React.createElement("div", { onMouseDown: props.onMouseDown, onTouchStart: props.onTouchStart, className: classes.mainBlock },
        React.createElement("div", { ref: props.ref, style: {
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                    values: value,
                    colors: ["#ccc", "#ff5d00", "#ccc"],
                    min: min,
                    max: max
                }),
                alignSelf: "center"
            } }, children)));
};
export default withStyles(styles)(RenderTrack);
