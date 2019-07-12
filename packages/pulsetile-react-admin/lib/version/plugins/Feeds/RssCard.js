"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var RssFeed_1 = __importDefault(require("@material-ui/icons/RssFeed"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var ListBlock_1 = __importDefault(require("./ListBlock"));
var config_1 = require("../../../core/pages/PatientSummary/config");
var theme_config_1 = require("../../config/theme.config");
var styles = function (theme) { return ({
    card: {
        borderRadius: 0,
    },
    media: {
        backgroundColor: theme.palette.mainColor,
    },
    container: {
        width: "100%",
        height: "100%",
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    topBlock: {
        display: "flex",
        flexDirection: "column",
        height: theme.isOldDesign ? 50 : 100,
        backgroundColor: theme.palette.tableHeadColor,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: theme.palette.mainColor,
        border: theme.isOldDesign ? "1px solid " + theme.palette.borderColor : null,
        '&:hover': {
            cursor: "pointer",
        },
    },
    icon: {
        marginBottom: 10,
    },
    mainHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        zIndex: 99999999,
        '& svg': {
            color: theme.palette.fontColor,
        }
    },
    title: {
        marginBottom: 0,
        color: theme.palette.fontColor,
        fontSize: 18,
        fontWeight: 600,
        zIndex: 99999999,
    },
    list: {
        padding: 0,
        "& a": {
            textDecoration: "none",
        }
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
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            '& p': {
                color: theme.palette.paperColor,
            }
        }
    },
    feedsItem: {
        fontSize: "1rem",
    }
}); };
/**
 * This component returns one single Feeds RSS Card
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param props
 * @constructor
 */
var RssCard = function (props) {
    var classes = props.classes, sourceId = props.sourceId, title = props.title, items = props.items, loading = props.loading, icon = props.icon, link = props.link, history = props.history, showMode = props.showMode, showHeadings = props.showHeadings, selectedFeeds = props.selectedFeeds;
    var isOldDesign = get_1.default(theme_config_1.themeCommonElements, 'isOldDesign', false);
    var menuHasChevrons = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
    if (selectedFeeds.indexOf(sourceId) !== -1) {
        return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 6, lg: 3 },
            react_1.default.createElement(Card_1.default, { id: sourceId, className: classes.card, onClick: function () { return window.open(link, "_blank"); } },
                react_1.default.createElement("div", { className: classes.topBlock },
                    !isOldDesign && react_1.default.createElement(RssFeed_1.default, { className: classes.icon }),
                    react_1.default.createElement("h1", { className: classes.mainHeading },
                        react_1.default.createElement(Typography_1.default, { gutterBottom: true, className: classes.title }, title),
                        menuHasChevrons && react_1.default.createElement(ChevronRight_1.default, null))),
                (showMode === config_1.SHOW_ALL || !showMode) &&
                    react_1.default.createElement(ListBlock_1.default, { loading: loading, classes: classes, items: items, history: history }))));
    }
    return null;
};
var mapStateToProps = function (state) {
    return {
        selectedFeeds: state.custom.selectedFeedsList.data,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(RssCard));
