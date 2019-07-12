"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Sidebar_1 = __importDefault(require("./Sidebar"));
var Topbar_1 = __importDefault(require("./Topbar"));
var Footer_1 = __importDefault(require("./Footer"));
var styles_2 = __importDefault(require("../config/styles"));
var styles = {
    root: {
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '101vh',
        position: 'relative',
        '& > div': {
            minHeight: '101vh',
        },
        '& main > div': {
            padding: 0,
        },
    },
};
/**
 * This component returns custom layout
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var CustomLayout = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(react_admin_1.Layout, __assign({}, rest, { className: classes.root, appBar: Topbar_1.default, sidebar: Sidebar_1.default, notification: Footer_1.default })));
};
var mapStateToProps = function (state) {
    var isContrastMode = get_1.default(state, 'custom.contrastMode.data', false);
    return {
        theme: styles_2.default(isContrastMode),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(CustomLayout));
