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
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { httpErrorAction } from '../../actions/httpErrorAction';
import CustomLogoutButton from "../Buttons/CustomLogoutButton";
var styles = function (theme) {
    var _a;
    return ({
        dialogBlock: (_a = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.only('xs')] = {
                paddingTop: 0,
                paddingLeft: 20,
                paddingRight: 20,
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
            textAlign: "center",
        },
        toolbar: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 15,
        },
        reloadButton: {
            display: "block",
            width: 140,
            height: 40,
            margin: "8px !important",
            color: "white",
            backgroundColor: theme.palette.dangerColor,
            borderRadius: theme.isRectangleButtons ? 0 : 25,
            fontSize: 16,
            fontWeight: 800,
            "&:hover": {
                color: theme.palette.dangerColor,
                backgroundColor: "white",
            },
        }
    });
};
var HandleErrorModal = /** @class */ (function (_super) {
    __extends(HandleErrorModal, _super);
    function HandleErrorModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isErrorModalOpen: false,
        };
        _this.isSessionExpired = function (status, message) {
            return (Number(status) === 400 && message.includes('JWT')) || Number(status) === 403;
        };
        _this.getErrorDescription = function (status, isJwtOld) {
            var result = 'Something is wrong';
            if (Number(status) === 404) {
                result = 'API is currently unavailable';
            }
            else if (Number(status) > 499) {
                result = 'Something is wrong with the server. Please try again later.';
            }
            else if (isJwtOld) {
                result = 'Your session has expired. Click the button to log in again.';
            }
            return result;
        };
        _this.closeModal = function () {
            _this.setState({ isErrorModalOpen: false }, function () { return _this.props.removeErrorNotification(); });
        };
        return _this;
    }
    HandleErrorModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, status = _a.status, message = _a.message, httpErrors = _a.httpErrors, rest = __rest(_a, ["classes", "status", "message", "httpErrors"]);
        var isErrorModalOpen = this.state.isErrorModalOpen;
        var errorStatus = get(httpErrors, 'status', null);
        var errorMessage = get(httpErrors, 'message', null);
        var isOpen = isErrorModalOpen || (errorStatus && errorMessage);
        var isJwtOld = this.isSessionExpired(errorStatus, errorMessage);
        var errorDescription = this.getErrorDescription(errorStatus, isJwtOld);
        return (React.createElement(React.Fragment, null,
            React.createElement(Dialog, __assign({ open: isOpen }, rest),
                React.createElement("div", { className: classes.dialogBlock },
                    React.createElement(Typography, { className: classes.titleBlock }, "Connection Error"),
                    React.createElement(Typography, { className: classes.description }, errorDescription),
                    React.createElement("div", { className: classes.toolbar },
                        React.createElement(Button, { "aria-label": "Close", onClick: function () { return _this.closeModal(); } }, "Close"),
                        isJwtOld
                            ? React.createElement(CustomLogoutButton, { title: "Login again", hideIcon: true })
                            : React.createElement(Button, { "aria-label": "Reload page", className: classes.reloadButton, onClick: function () { return window.location.reload(); } }, "Reload page"))))));
    };
    return HandleErrorModal;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        httpErrors: state.custom.httpErrors.data
    };
};
var mapDispatchToProps = function (dispatch) { return ({
    removeErrorNotification: function () {
        dispatch(httpErrorAction.remove());
    }
}); };
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withMobileDialog({ breakpoint: 'xs' })(HandleErrorModal)));
