"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var theme_config_1 = require("../../../version/config/theme.config");
var DummyItemsList = function (_a) {
    var classes = _a.classes, items = _a.items, list = _a.list, history = _a.history;
    var menuHasChevrons = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
    return (react_1.default.createElement(List_1.default, { className: classes.list }, items.slice(0).map(function (item, key) {
        return (react_1.default.createElement("li", { key: key, className: classes.listItem },
            react_1.default.createElement(Typography_1.default, { noWrap: true }, item),
            (menuHasChevrons && item) && react_1.default.createElement(ChevronRight_1.default, null)));
    })));
};
exports.default = DummyItemsList;
