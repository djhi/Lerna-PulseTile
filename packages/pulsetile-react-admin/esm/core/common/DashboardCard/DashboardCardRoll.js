import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import DummyItemsList from "./DummyItemsList";
import { SHOW_ALL } from "../../pages/PatientSummary/config";
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
    return (React.createElement(List, { className: classes.list },
        React.createElement("li", { className: classes.listItemNoData },
            React.createElement(Typography, null, "Loading...")),
        React.createElement("div", { className: classes.emptyRows })));
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
        return (React.createElement(DummyItemsList, { classes: classes, items: dummyItems[list], list: list, history: history }));
    }
    return (React.createElement(LoadingItems, { classes: classes }));
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
    return (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 6, lg: 4 },
        React.createElement(Card, { className: classes.card },
            React.createElement("div", { className: classes.topBlock, "aria-label": title, onClick: function () { return history.push('/' + list); } },
                React.createElement(Typography, { className: classes.synopsisTitle }, title)),
            (showMode === SHOW_ALL || !showMode) &&
                React.createElement(ListBlock, { loading: loading, classes: classes, items: items, list: list, history: history }))));
};
export default withStyles(styles)(DashboardCardRoll);
