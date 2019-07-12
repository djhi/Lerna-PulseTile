"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var CreateButton_1 = __importDefault(require("../../common/Buttons/CreateButton"));
var CustomPaginator_1 = __importDefault(require("../../common/Buttons/CustomPaginator"));
var styles = {
    paginationBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 45,
    },
};
/**
 * This component returns toolbar for List
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {boolean} notCreate
 * @param {boolean} isCreatePage
 * @param {string}  resourceUrl
 * @param {string}  createPath
 * @param {shape}   history
 * @param {number}  total
 */
var ListToolbar = function (_a) {
    var classes = _a.classes, notCreate = _a.notCreate, isCreatePage = _a.isCreatePage, resourceUrl = _a.resourceUrl, createPath = _a.createPath, history = _a.history, total = _a.total;
    return (react_1.default.createElement("div", { className: classes.paginationBlock },
        react_1.default.createElement(CustomPaginator_1.default, { resourceUrl: resourceUrl, history: history, itemsPerPage: 10, total: total }),
        (!isCreatePage && !notCreate) &&
            react_1.default.createElement(CreateButton_1.default, { history: history, redirectPath: createPath })));
};
exports.default = styles_1.withStyles(styles)(ListToolbar);
