"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var withMobileDialog_1 = __importDefault(require("@material-ui/core/withMobileDialog"));
var httpErrorAction_1 = require("../../actions/httpErrorAction");
var CustomLogoutButton_1 = __importDefault(require("../Buttons/CustomLogoutButton"));
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
        var errorStatus = get_1.default(httpErrors, 'status', null);
        var errorMessage = get_1.default(httpErrors, 'message', null);
        var isOpen = isErrorModalOpen || (errorStatus && errorMessage);
        var isJwtOld = this.isSessionExpired(errorStatus, errorMessage);
        var errorDescription = this.getErrorDescription(errorStatus, isJwtOld);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Dialog_1.default, __assign({ open: isOpen }, rest),
                react_1.default.createElement("div", { className: classes.dialogBlock },
                    react_1.default.createElement(Typography_1.default, { className: classes.titleBlock }, "Connection Error"),
                    react_1.default.createElement(Typography_1.default, { className: classes.description }, errorDescription),
                    react_1.default.createElement("div", { className: classes.toolbar },
                        react_1.default.createElement(Button_1.default, { "aria-label": "Close", onClick: function () { return _this.closeModal(); } }, "Close"),
                        isJwtOld
                            ? react_1.default.createElement(CustomLogoutButton_1.default, { title: "Login again", hideIcon: true })
                            : react_1.default.createElement(Button_1.default, { "aria-label": "Reload page", className: classes.reloadButton, onClick: function () { return window.location.reload(); } }, "Reload page"))))));
    };
    return HandleErrorModal;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        httpErrors: state.custom.httpErrors.data
    };
};
var mapDispatchToProps = function (dispatch) { return ({
    removeErrorNotification: function () {
        dispatch(httpErrorAction_1.httpErrorAction.remove());
    }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(withMobileDialog_1.default({ breakpoint: 'xs' })(HandleErrorModal)));
