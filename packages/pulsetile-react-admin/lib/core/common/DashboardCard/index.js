"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var ItemsList_1 = __importDefault(require("./ItemsList"));
var config_1 = require("../../pages/PatientSummary/config");
var theme_config_1 = require("../../../version/config/theme.config");
/**
 * This component returns list of empty rows if information is loading
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 */
var LoadingItems = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement(List_1.default, { className: classes.list },
        react_1.default.createElement("li", { className: classes.listItemNoData },
            react_1.default.createElement(Typography_1.default, null, "Loading...")),
        react_1.default.createElement("div", { className: classes.emptyRows })));
};
/**
 * This component returns list block
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {array}   items
 * @param {shape}   list
 * @param {shape}   history
 */
var ListBlock = function (_a) {
    var classes = _a.classes, items = _a.items, list = _a.list, history = _a.history;
    if (items) {
        return (react_1.default.createElement(ItemsList_1.default, { classes: classes, items: items, list: list, history: history }));
    }
    return (react_1.default.createElement(LoadingItems, { classes: classes }));
};
/**
 * This component returns one single Dashboard Card
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param props
 * @constructor
 */
exports.default = (function (props) {
    var id = props.id, classes = props.classes, title = props.title, items = props.items, loading = props.loading, icon = props.icon, list = props.list, history = props.history, showMode = props.showMode, showHeadings = props.showHeadings;
    if (Object.values(showHeadings).indexOf(list) === -1) {
        return null;
    }
    var isOldDesign = get_1.default(theme_config_1.themeCommonElements, 'isOldDesign', false);
    var menuHasChevrons = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
    return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 6, lg: 3 },
        react_1.default.createElement(Card_1.default, { className: classes.card },
            react_1.default.createElement("div", { id: id, className: classes.topBlock, "aria-label": title, onClick: function () { return history.push('/' + list); } },
                !isOldDesign && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, size: "2x", className: classes.icon }),
                react_1.default.createElement("h1", { className: classes.mainHeading },
                    react_1.default.createElement(Typography_1.default, { className: classes.title }, title),
                    menuHasChevrons && react_1.default.createElement(ChevronRight_1.default, null))),
            (showMode === config_1.SHOW_ALL || !showMode) &&
                react_1.default.createElement(ListBlock, { loading: loading, classes: classes, items: items, list: list, history: history }))));
});
