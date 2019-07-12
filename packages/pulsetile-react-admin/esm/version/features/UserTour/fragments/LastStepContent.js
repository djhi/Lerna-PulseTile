import React from "react";
import { withStyles } from "@material-ui/core/styles";
var styles = function (theme) { return ({
    link: {
        color: theme.palette.mainColor,
        textDecoration: "none",
    },
}); };
var LastStepContent = function (_a) {
    var classes = _a.classes, title = _a.title, link = _a.link;
    return (React.createElement("p", { className: "tour-body-content" },
        "For more information and a guide on how to use ",
        title,
        ", please go to ",
        React.createElement("a", { className: classes.link, href: link, title: title, target: "_blank" }, link)));
};
export default withStyles(styles)(LastStepContent);
