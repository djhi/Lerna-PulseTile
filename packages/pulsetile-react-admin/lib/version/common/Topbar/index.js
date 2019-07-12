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
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var styles_1 = require("@material-ui/core/styles");
var TopPart_1 = __importDefault(require("./fragments/TopPart"));
var LowPart_1 = __importDefault(require("./fragments/LowPart"));
var styles = {
    appBar: {
        boxShadow: "none",
    }
};
/**
 * This is common component for theme TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ThemeTopBar = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(AppBar_1.default, { position: "static", className: classes.appBar },
        react_1.default.createElement(TopPart_1.default, __assign({}, rest)),
        react_1.default.createElement(LowPart_1.default, __assign({}, rest))));
};
exports.default = styles_1.withStyles(styles)(ThemeTopBar);
