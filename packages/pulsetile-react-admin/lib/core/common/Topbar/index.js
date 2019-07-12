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
var react_admin_1 = require("react-admin");
var react_redux_1 = require("react-redux");
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var TopPart_1 = __importDefault(require("./fragments/TopPart"));
var LowPart_1 = __importDefault(require("./fragments/LowPart"));
var theme_config_1 = require("../../../version/config/theme.config");
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
        var ThemeTopBar = get_1.default(theme_config_1.themeCommonElements, 'topbar', false);
        if (ThemeTopBar) {
            return (react_1.default.createElement(ThemeTopBar, __assign({}, this.props)));
        }
        return (react_1.default.createElement(AppBar_1.default, { position: "static" },
            react_1.default.createElement(TopPart_1.default, __assign({}, this.props)),
            react_1.default.createElement(LowPart_1.default, __assign({}, this.props))));
    };
    return CustomTopbar;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        isLoading: get_1.default(state, 'admin.loading', false),
        location: get_1.default(state, 'router.location', null),
        isSidebarOpen: get_1.default(state, 'admin.ui.sidebarOpen', true),
        patientInfo: get_1.default(state, 'custom.currentPatient.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CustomTopbar);
