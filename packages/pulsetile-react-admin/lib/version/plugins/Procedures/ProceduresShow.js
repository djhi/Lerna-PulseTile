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
 * This component returns block with Procedure details component
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ProceduresShow = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (react_1.default.createElement(ShowTemplate_1.default, __assign({ pageTitle: "Procedure" }, rest),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "procedureName", label: "Procedure name" }),
        react_1.default.createElement(react_admin_1.DateField, { className: classes.labelBlock, source: "date", label: "Date of Procedure" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "performer", label: "Procedure Performed By" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "notes", label: "Procedure Notes" }),
        react_1.default.createElement(react_admin_1.TextField, { className: classes.labelBlock, source: "author", label: "Author" })));
};
exports.default = styles_1.withStyles(styles)(ProceduresShow);
