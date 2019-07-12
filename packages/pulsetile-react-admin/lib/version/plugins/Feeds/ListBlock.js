"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RssItemsList_1 = __importDefault(require("./RssItemsList"));
var LoadingItems_1 = __importDefault(require("./LoadingItems"));
/**
 * This component returns list block
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {boolean} loading
 * @param {shape}   classes
 * @param {array}   items
 * @param {shape}   history
 */
var ListBlock = function (_a) {
    var loading = _a.loading, classes = _a.classes, items = _a.items, history = _a.history;
    if (loading) {
        return (react_1.default.createElement(LoadingItems_1.default, { classes: classes }));
    }
    return (react_1.default.createElement(RssItemsList_1.default, { classes: classes, items: items, history: history }));
};
exports.default = ListBlock;
