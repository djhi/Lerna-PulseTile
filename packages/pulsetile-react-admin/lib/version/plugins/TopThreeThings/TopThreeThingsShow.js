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
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var ShowTemplate_1 = __importDefault(require("../../../core/common/ResourseTemplates/ShowTemplate"));
var styles = {
    labelBlock: {
        '& > div': {
            marginTop: "0px !important",
            marginBottom: "0px !important",
        },
    },
};
/**
 * This component returns block with Allergies details component
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var TopThreeThingsShow = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(ShowTemplate_1.default, __assign({ pageTitle: "Top Three Things" }, rest),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "name1", label: "Issue #1" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "description1", label: "Description #1" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "name2", label: "Issue #2" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "description2", label: "Description #2" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "name3", label: "Issue #3" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "description3", label: "Description #3" })));
};
exports.default = styles_1.withStyles(styles)(TopThreeThingsShow);
