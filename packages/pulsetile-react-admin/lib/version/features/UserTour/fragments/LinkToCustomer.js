"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Help_1 = __importDefault(require("@material-ui/icons/Help"));
/**
 * This component returns link to the customer page
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} homepage
 * @constructor
 */
var LinkToCustomer = function (_a) {
    var classes = _a.classes, homepage = _a.homepage;
    return (react_1.default.createElement("a", { href: homepage.link, className: classes.rightBlockButton, target: "_blank", "aria-label": "To Customer" },
        react_1.default.createElement(Help_1.default, null)));
};
exports.default = LinkToCustomer;
