"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Help_1 = __importDefault(require("@material-ui/icons/Help"));
var clientUrls_1 = require("../../../../core/config/clientUrls");
/**
 * This component returns link to Homepage
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func} toggleMode
 * @constructor
 */
var LinkToHomepage = function (_a) {
    var classes = _a.classes, toggleMode = _a.toggleMode;
    return (react_1.default.createElement(react_router_dom_1.Link, { to: clientUrls_1.PATIENT_SUMMARY, className: classes.rightBlockButton, onClick: function () { return toggleMode(); }, "aria-label": "Home" },
        react_1.default.createElement(Help_1.default, null)));
};
exports.default = LinkToHomepage;
