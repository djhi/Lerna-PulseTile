import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
var styles = function (theme) {
    var _a;
    return ({
        dialogBlock: (_a = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.only('xs')] = {
                padding: 0,
            },
            _a[theme.breakpoints.up('sm')] = {
                minHeight: 300,
                minWidth: 600,
            },
            _a),
        titleBlock: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 48,
            paddingLeft: 20,
            backgroundColor: theme.palette.secondaryMainColor,
            color: theme.palette.paperColor,
            fontSize: 18,
            fontWeight: 800,
        },
    });
};
var DialogTemplate = function (_a) {
    var classes = _a.classes, title = _a.title, isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    return (React.createElement(Dialog, { open: isOpen, fullWidth: true, maxWidth: 'lg', onBackdropClick: function () { return onClose(); } },
        React.createElement("div", { className: classes.dialogBlock },
            React.createElement(Typography, { className: classes.titleBlock }, title),
            children)));
};
export default withStyles(styles)(DialogTemplate);
