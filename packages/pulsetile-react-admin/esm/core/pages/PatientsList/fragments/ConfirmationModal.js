var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
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
                minWidth: 500,
                marginBottom: 10,
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
        description: {
            padding: 20,
            fontSize: 15,
            textAlign: "justify",
        },
        toolbar: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 15,
        },
        agreeButton: {
            display: "block",
            width: 140,
            height: 40,
            margin: "8px !important",
            color: theme.palette.paperColor,
            backgroundColor: theme.palette.secondaryMainColor,
            borderRadius: theme.isRectangleButtons ? 0 : 25,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 800,
            "&:hover": {
                color: theme.palette.secondaryMainColor,
                backgroundColor: theme.palette.paperColor,
                border: "1px solid " + theme.palette.secondaryMainColor
            },
        },
        declineButton: {
            display: "block",
            width: 140,
            height: 40,
            margin: "8px !important",
            color: theme.palette.paperColor,
            backgroundColor: theme.palette.dangerColor,
            borderRadius: theme.isRectangleButtons ? 0 : 25,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 800,
            "&:hover": {
                color: theme.palette.dangerColor,
                backgroundColor: theme.palette.paperColor,
                border: "1px solid " + theme.palette.dangerColor
            },
        }
    });
};
var HandleErrorModal = /** @class */ (function (_super) {
    __extends(HandleErrorModal, _super);
    function HandleErrorModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandleErrorModal.prototype.render = function () {
        var _a = this.props, classes = _a.classes, open = _a.open, handleClose = _a.handleClose, agreeAction = _a.agreeAction, rest = __rest(_a, ["classes", "open", "handleClose", "agreeAction"]);
        return (React.createElement(React.Fragment, null,
            React.createElement(Dialog, __assign({ open: open }, rest),
                React.createElement("div", { className: classes.dialogBlock },
                    React.createElement(Typography, { className: classes.titleBlock }, "Patient Access Disclaimer"),
                    React.createElement(Typography, { className: classes.description }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lobortis elit. Aenean mi nunc, feugiat ut aliquet non, iaculis vel tellus. Donec semper felis placerat, posuere nisi a, suscipit turpis. Integer sit amet lacus pellentesque, vestibulum libero id, sagittis nisi. Phasellus eleifend, neque eget vulputate semper, enim dui dictum neque, non iaculis felis augue at nunc."),
                    React.createElement("div", { className: classes.toolbar },
                        React.createElement(Button, { "aria-label": "Close", className: classes.declineButton, onClick: function () { return handleClose(); } }, "Decline"),
                        React.createElement(Button, { "aria-label": "Agree", className: classes.agreeButton, onClick: function () { return agreeAction(); } }, "Agree"))))));
    };
    return HandleErrorModal;
}(Component));
;
export default withStyles(styles)(withMobileDialog({ breakpoint: 'xs' })(HandleErrorModal));
