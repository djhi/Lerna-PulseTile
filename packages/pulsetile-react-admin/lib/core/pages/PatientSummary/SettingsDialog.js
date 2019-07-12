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
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Settings_1 = __importDefault(require("@material-ui/icons/Settings"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var DialogWithStyles_1 = __importDefault(require("./DialogWithStyles"));
var styles = {
    settingsIconBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    icon: {
        display: "block",
    },
    iconTitle: {
        marginTop: 15,
    },
};
/**
 * This component returns button which calls settings dropdown
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var SettingsDialog = /** @class */ (function (_super) {
    __extends(SettingsDialog, _super);
    function SettingsDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
        };
        _this.toggleDialog = function () {
            _this.setState({
                open: !_this.state.open,
            });
        };
        return _this;
    }
    SettingsDialog.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var open = this.state.open;
        return (react_1.default.createElement("div", { className: classes.settingsIconBlock },
            react_1.default.createElement(Tooltip_1.default, { className: classes.icon, title: "Settings" },
                react_1.default.createElement(IconButton_1.default, { id: "icon-settings", "aria-haspopup": "true", "aria-label": "Settings", color: "inherit", onClick: function () { return _this.toggleDialog(); } },
                    react_1.default.createElement(Settings_1.default, null))),
            react_1.default.createElement(Typography_1.default, { className: classes.iconTitle, variant: "h1" }, "Home"),
            react_1.default.createElement(DialogWithStyles_1.default, { open: open, onClose: this.toggleDialog })));
    };
    return SettingsDialog;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(SettingsDialog);
