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
var styles_1 = require("@material-ui/core/styles");
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Done_1 = __importDefault(require("@material-ui/icons/Done"));
var styles = function (theme) { return ({
    dialogBlock: {
        minHeight: 300,
        minWidth: 500,
    },
    titleBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.palette.secondaryMainColor,
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 10,
    },
    sectionTitle: {
        color: "#fff",
        fontWeight: 800,
        fontSize: 18,
    },
    closeIcon: {
        color: "#fff",
        float: "right",
        height: 25,
    },
    modalBody: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainText: {
        paddingBottom: 10,
        textAlign: "center",
        fontWeight: 800,
        fontSize: 16,
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 30,
    },
    proceedButton: {
        display: "block",
        width: 130,
        height: 40,
        margin: "8px !important",
        padding: 0,
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.secondaryMainColor,
            color: "#fff",
        }
    },
    cancelButton: {
        display: "block",
        width: 130,
        height: 40,
        margin: "8px !important",
        padding: 0,
        textTransform: "capitalize",
        backgroundColor: theme.palette.dangerColor,
        border: "1px solid " + theme.palette.dangerColor,
        color: theme.palette.paperColor,
        fontSize: 16,
        borderRadius: 25,
        fontWeight: 800,
        "&:hover": {
            color: theme.palette.dangerColor,
            backgroundColor: theme.palette.paperColor,
        }
    }
}); };
/**
 * This component returns content and functionality of dialog window
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ModalWindow = /** @class */ (function (_super) {
    __extends(ModalWindow, _super);
    function ModalWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onProceedClick = function () {
            _this.props.toggleMode();
        };
        return _this;
    }
    ModalWindow.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, onClose = _a.onClose, rest = __rest(_a, ["classes", "onClose"]);
        return (react_1.default.createElement(Dialog_1.default, __assign({ onBackdropClick: function () { return onClose(); } }, rest),
            react_1.default.createElement("div", { className: classes.dialogBlock },
                react_1.default.createElement("div", { className: classes.titleBlock },
                    react_1.default.createElement(Typography_1.default, { className: classes.sectionTitle }, "Create a New Version"),
                    react_1.default.createElement(Tooltip_1.default, { title: "Close" },
                        react_1.default.createElement(IconButton_1.default, { className: classes.closeIcon, color: "inherit", onClick: function () { return onClose(); } },
                            react_1.default.createElement(Close_1.default, null)))),
                react_1.default.createElement("div", { className: classes.modalBody },
                    react_1.default.createElement(Typography_1.default, { className: classes.mainText }, "Please confirm you would like to create a new version"),
                    react_1.default.createElement(Typography_1.default, { className: classes.mainText }, "While editing you can Save your changes temporarily before you then Publish a new version."),
                    react_1.default.createElement(Typography_1.default, { className: classes.mainText }, "In order to publish a new version, the completion of sections 4 and 6 are mandatory.")),
                react_1.default.createElement("div", { className: classes.toolbar },
                    react_1.default.createElement(Tooltip_1.default, { title: "Proceed" },
                        react_1.default.createElement(IconButton_1.default, { className: classes.proceedButton, onClick: function () { return _this.onProceedClick(); } },
                            "Proceed",
                            react_1.default.createElement(Done_1.default, null))),
                    react_1.default.createElement(Button_1.default, { onClick: function () { return onClose(); }, className: classes.cancelButton }, "Cancel")))));
    };
    return ModalWindow;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(ModalWindow);
