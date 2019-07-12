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
import React, { Component } from "react";
import { connect } from 'react-redux';
import { setSidebarVisibility } from 'react-admin';
import MenuItems from "./MenuItems";
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
        return (React.createElement("div", { className: classes.mobileSidebar },
            React.createElement(MenuItems, { classes: classes, menuItems: menuItems, currentList: currentList, onMenuClick: function () { return _this.onMobileMenuClick(); } })));
    };
    return MobileMenu;
}(Component));
;
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
    };
};
export default connect(null, mapDispatchToProps)(MobileMenu);
