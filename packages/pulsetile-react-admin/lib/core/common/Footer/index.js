"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var DefaultFooter_1 = __importDefault(require("./DefaultFooter"));
var HandleErrorModal_1 = __importDefault(require("../HandleErrorModal"));
var theme_config_1 = require("../../../version/config/theme.config");
var Footer = function () {
    var ThemeFooter = get_1.default(theme_config_1.themeCommonElements, 'footer', false);
    var isFooterAbsent = get_1.default(theme_config_1.themeCommonElements, 'isFooterAbsent', false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(HandleErrorModal_1.default, null),
        isFooterAbsent ? null :
            (ThemeFooter ? react_1.default.createElement(ThemeFooter, null) : react_1.default.createElement(DefaultFooter_1.default, null))));
};
exports.default = Footer;
