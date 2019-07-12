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
/**
 * This component returns synopsis list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {array}  items
 * @param {string} list
 * @param {shape}  history
 * @constructor
 */
var ItemsList = function (_a) {
    var classes = _a.classes, items = _a.items, list = _a.list, history = _a.history;
    var menuHasChevrons = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
    if (items && items.length === 0) {
        return (react_1.default.createElement(List_1.default, { className: classes.list },
            react_1.default.createElement("li", { className: classes.listItemNoData },
                react_1.default.createElement(Typography_1.default, null, "No data"))));
    }
    else {
        return (react_1.default.createElement(List_1.default, { className: classes.list }, items.slice(0).reverse().map(function (item, key) {
            var showRoute = "/" + list + "/" + item.sourceId + "/show";
            return (react_1.default.createElement("li", { key: key, className: classes.listItem, onClick: function () { return history.push(showRoute); } },
                react_1.default.createElement(Typography_1.default, { noWrap: true }, item.text),
                menuHasChevrons && react_1.default.createElement(ChevronRight_1.default, null)));
        })));
    }
};
exports.default = ItemsList;
