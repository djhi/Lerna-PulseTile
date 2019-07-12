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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var Person_1 = __importDefault(require("@material-ui/icons/Person"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var CustomLogoutButton_1 = __importDefault(require("../../../../core/common/Buttons/CustomLogoutButton"));
var styles = {
    userPanel: {
        minWidth: 220,
        padding: 12,
    },
    userName: {
        marginBottom: 7,
        fontSize: 18,
        fontWeight: 800,
    },
    userRole: {
        fontSize: 14,
        marginBottom: 7,
    }
};
/**
 * This component returns User panel popover
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var UserPanelButton = /** @class */ (function (_super) {
    __extends(UserPanelButton, _super);
    function UserPanelButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            anchorEl: null,
            isOpen: false,
        };
        _this.handleMenu = function () {
            _this.setState(function (state) { return ({
                anchorEl: _this.button.current,
                isOpen: !state.isOpen,
            }); });
        };
        _this.handleClose = function () {
            _this.setState(function (state) { return ({
                anchorEl: null,
                isOpen: !state.isOpen,
            }); });
        };
        _this.button = react_1.default.createRef();
        return _this;
    }
    UserPanelButton.prototype.render = function () {
        var classes = this.props.classes;
        var _a = this.state, isOpen = _a.isOpen, anchorEl = _a.anchorEl;
        return (react_1.default.createElement("div", { className: classes.rightBlockItem, ref: this.button },
            react_1.default.createElement(Tooltip_1.default, { title: "User panel" },
                react_1.default.createElement(IconButton_1.default, { id: "icon-profile", className: classes.rightBlockButton, "aria-owns": isOpen ? 'menu-appbar' : undefined, "aria-haspopup": "true", onClick: this.handleMenu.bind(this), color: "inherit", "aria-label": "User Panel" },
                    react_1.default.createElement(Person_1.default, null))),
            react_1.default.createElement(Popover_1.default, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isOpen, onClose: this.handleClose },
                react_1.default.createElement(Card_1.default, { className: classes.userPanel },
                    react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.userName }, localStorage.getItem('username')),
                    react_1.default.createElement(Typography_1.default, { className: classes.userRole },
                        react_1.default.createElement("span", null, "User role:"),
                        " ",
                        localStorage.getItem('role')),
                    react_1.default.createElement(CustomLogoutButton_1.default, { classes: classes })))));
    };
    return UserPanelButton;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(UserPanelButton);
