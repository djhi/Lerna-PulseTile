"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_config_1 = require("../../version/config/theme.config");
var config_1 = require("../pages/PatientSummary/config");
var isTableHeaderInverted = get_1.default(theme_config_1.themeCommonElements, 'invertedTableHeaders', false);
var styles = function (theme) { return ({
    tableHeaderBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        background: theme.tableHeader.tableHeaderBlock.background,
        backgroundSize: "cover",
        color: theme.palette.paperColor,
        padding: 15,
    },
    mainHeader: {
        margin: 0,
    },
    title: {
        marginTop: 0,
        color: isTableHeaderInverted ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 24,
        fontWeight: 800,
    },
    description: {
        color: isTableHeaderInverted ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 15,
    },
    icon: {
        color: theme.palette.mainColor,
        marginRight: 15,
    },
}); };
function getCurrentPlugin(resource) {
    var result = null;
    for (var i = 0, n = config_1.totalSynopsisData.length; i < n; i++) {
        var item = config_1.totalSynopsisData[i];
        if (item.list === resource) {
            result = item;
            break;
        }
    }
    return result;
}
/**
 * This component returns header for table
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {string} resource
 * @param {func}   translate
 */
var TableHeader = function (_a) {
    var classes = _a.classes, resource = _a.resource, translate = _a.translate;
    var plugin = getCurrentPlugin(resource);
    var title = get_1.default(plugin, 'title', null);
    var description = get_1.default(plugin, 'description', null);
    var icon = get_1.default(plugin, 'icon', null);
    return (react_1.default.createElement("div", { className: classes.tableHeaderBlock },
        (isTableHeaderInverted && icon) && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, size: "3x", className: classes.icon }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", { className: classes.mainHeader },
                react_1.default.createElement(Typography_1.default, { className: classes.title }, title)),
            react_1.default.createElement(Typography_1.default, { className: classes.description }, description))));
};
exports.default = styles_1.withStyles(styles)(react_admin_1.translate(TableHeader));
