import React from "react";
import { withStyles } from '@material-ui/core/styles';
var styles = {
    radioMainTitle: {
        marginBottom: 0,
        fontSize: 18,
        fontWeight: 800,
    },
    radioHelpTitle: {
        marginTop: 0,
    },
};
var RadioButtonName = function (_a) {
    var classes = _a.classes, mainTitle = _a.mainTitle, helpTitle = _a.helpTitle;
    return (React.createElement(React.Fragment, null,
        React.createElement("p", { className: classes.radioMainTitle }, mainTitle),
        React.createElement("p", { className: classes.radioHelpTitle }, helpTitle)));
};
export default withStyles(styles)(RadioButtonName);
