"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
/**
 * This component returns synopsis list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {array} items
 * @constructor
 */
var ItemsList = function (_a) {
    var classes = _a.classes, items = _a.items;
    if (items.length === 0) {
        return (react_1.default.createElement("li", { className: classes.listItem },
            react_1.default.createElement(Typography_1.default, null, "No data")));
    }
    return (react_1.default.createElement(List_1.default, { className: classes.list }, items.slice(0, 4).map(function (item, key) { return (react_1.default.createElement("a", { href: item.link, key: key, target: "_blank" },
        react_1.default.createElement("li", { key: key, className: classes.listItem },
            react_1.default.createElement(Typography_1.default, { noWrap: true }, item.title)))); })));
};
exports.default = ItemsList;
