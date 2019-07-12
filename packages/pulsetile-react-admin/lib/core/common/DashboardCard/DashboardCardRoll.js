"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var DummyItemsList_1 = __importDefault(require("./DummyItemsList"));
var config_1 = require("../../pages/PatientSummary/config");
var styles = function (theme) { return ({
    card: {
        borderRadius: 0,
    },
    topBlock: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderLeft: "0.5px solid " + theme.palette.paperColor,
        borderRight: "0.5px solid " + theme.palette.paperColor,
        backgroundColor: theme.palette.tableHeadColor,
        position: "relative",
        color: theme.palette.fontColor,
        '&:hover': {
            cursor: "pointer",
        },
    },
    synopsisTitle: {
        marginBottom: 0,
        backgroundColor: theme.palette.tableHeadColor,
        color: theme.palette.fontColor,
        fontSize: 18,
        fontWeight: 600,
        zIndex: 99999999,
    },
    icon: {
        marginBottom: 10,
        zIndex: 99999999,
    },
    mainHeading: {
        margin: 0,
        zIndex: 99999999,
    },
    list: {
        padding: 0,
        zIndex: 99999999,
    },
    listItemNoData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 48,
        paddingLeft: 15,
        zIndex: 99999999,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "justify",
        height: 48,
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 99999999,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
        cursor: "pointer",
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            '& p': {
                color: theme.palette.paperColor,
            }
        }
    },
    emptyRows: {
        height: 150,
        zIndex: 99999999,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
}); };
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
var dummyItems = {
    problems: ['Overweight', 'Type 2 diabetic', 'Hypertensive'],
    medications: ['Metformin', 'Gloposode', 'Statins'],
    allergies: ['Latex', '', ''],
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
        // return (
        //     <ItemsList classes={classes} items={items} list={list} history={history} />
        // );
        return (react_1.default.createElement(DummyItemsList_1.default, { classes: classes, items: dummyItems[list], list: list, history: history }));
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
var DashboardCardRoll = function (props) {
    var id = props.id, classes = props.classes, title = props.title, items = props.items, loading = props.loading, icon = props.icon, list = props.list, history = props.history, showMode = props.showMode, showHeadings = props.showHeadings;
    if (Object.values(showHeadings).indexOf(list) === -1) {
        return null;
    }
    return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 6, lg: 4 },
        react_1.default.createElement(Card_1.default, { className: classes.card },
            react_1.default.createElement("div", { className: classes.topBlock, "aria-label": title, onClick: function () { return history.push('/' + list); } },
                react_1.default.createElement(Typography_1.default, { className: classes.synopsisTitle }, title)),
            (showMode === config_1.SHOW_ALL || !showMode) &&
                react_1.default.createElement(ListBlock, { loading: loading, classes: classes, items: items, list: list, history: history }))));
};
exports.default = styles_1.withStyles(styles)(DashboardCardRoll);
