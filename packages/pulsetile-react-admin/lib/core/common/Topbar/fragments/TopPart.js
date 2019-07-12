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
var AccountCircle_1 = __importDefault(require("@material-ui/icons/AccountCircle"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var KeyboardBackspace_1 = __importDefault(require("@material-ui/icons/KeyboardBackspace"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var pulsetile_core_logo_png_1 = __importDefault(require("../../../images/pulsetile-core-logo.png"));
var styles = {
    whitePart: {
        backgroundColor: "white",
    },
    backButton: {
        color: "#0D672F",
    },
    userMenuButton: {
        color: "#0D672F",
    },
};
/**
 * This component returns top part of Showcase TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var TopPart = /** @class */ (function (_super) {
    __extends(TopPart, _super);
    function TopPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.handleMenu = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };
        _this.handleClose = function () {
            _this.setState({ anchorEl: null });
        };
        return _this;
    }
    TopPart.prototype.render = function () {
        var _a = this.props, classes = _a.classes, history = _a.history, logout = _a.logout;
        var anchorEl = this.state.anchorEl;
        var isTopbarMenuOpen = Boolean(anchorEl);
        return (react_1.default.createElement(Toolbar_1.default, { className: classes.whitePart },
            react_1.default.createElement(Tooltip_1.default, { title: "Back" },
                react_1.default.createElement(IconButton_1.default, { className: classes.backButton, onClick: function () { return history.goBack(); }, color: "inherit" },
                    react_1.default.createElement(KeyboardBackspace_1.default, null))),
            react_1.default.createElement(CardMedia_1.default, { component: "img", alt: "Pulse Tile", className: classes.logo, height: "38px", image: pulsetile_core_logo_png_1.default, title: "Pulse Tile" }),
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Tooltip_1.default, { title: "User panel" },
                    react_1.default.createElement(IconButton_1.default, { className: classes.userNemuButton, "aria-owns": isTopbarMenuOpen ? 'menu-appbar' : undefined, "aria-haspopup": "true", onClick: this.handleMenu, color: "inherit" },
                        react_1.default.createElement(AccountCircle_1.default, null))),
                react_1.default.createElement(Menu_1.default, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isTopbarMenuOpen, onClose: this.handleClose }, logout))));
    };
    return TopPart;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(TopPart);
