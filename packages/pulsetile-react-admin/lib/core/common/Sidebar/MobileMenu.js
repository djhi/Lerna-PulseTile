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
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var MenuItems_1 = __importDefault(require("./MenuItems"));
var MobileMenu = /** @class */ (function (_super) {
    __extends(MobileMenu, _super);
    function MobileMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMobileMenuClick = function () {
            _this.props.setSidebarVisibility(true);
        };
        return _this;
    }
    MobileMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, menuItems = _a.menuItems, currentList = _a.currentList;
        return (react_1.default.createElement("div", { className: classes.mobileSidebar },
            react_1.default.createElement(MenuItems_1.default, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: function () { return _this.onMobileMenuClick(); } })));
    };
    return MobileMenu;
}(react_1.Component));
;
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
    };
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(MobileMenu);
