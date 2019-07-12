"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
/**
 * This component returns list of empty rows if information is loading
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var LoadingItems = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement(List_1.default, { className: classes.list },
        react_1.default.createElement("li", { className: classes.listItem },
            react_1.default.createElement(Typography_1.default, null, "Loading..."))));
};
exports.default = LoadingItems;
