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
import React, { Component } from 'react';
import get from "lodash/get";
import { setSidebarVisibility } from 'react-admin';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import TopPart from "./fragments/TopPart";
import LowPart from "./fragments/LowPart";
import { themeCommonElements } from "../../../version/config/theme.config";
/**
 * This is common component for custom core TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var CustomTopbar = /** @class */ (function (_super) {
    __extends(CustomTopbar, _super);
    function CustomTopbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomTopbar.prototype.render = function () {
        var ThemeTopBar = get(themeCommonElements, 'topbar', false);
        if (ThemeTopBar) {
            return (React.createElement(ThemeTopBar, __assign({}, this.props)));
        }
        return (React.createElement(AppBar, { position: "static" },
            React.createElement(TopPart, __assign({}, this.props)),
            React.createElement(LowPart, __assign({}, this.props))));
    };
    return CustomTopbar;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        isLoading: get(state, 'admin.loading', false),
        location: get(state, 'router.location', null),
        isSidebarOpen: get(state, 'admin.ui.sidebarOpen', true),
        patientInfo: get(state, 'custom.currentPatient.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomTopbar);
