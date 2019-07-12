import React from "react";
import get from "lodash/get";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemsList from "./ItemsList";
import { SHOW_ALL } from "../../pages/PatientSummary/config";
import { themeCommonElements } from "../../../version/config/theme.config";
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
        return (React.createElement(ItemsList, { classes: classes, items: items, list: list, history: history }));
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
export default (function (props) {
    var id = props.id, classes = props.classes, title = props.title, items = props.items, loading = props.loading, icon = props.icon, list = props.list, history = props.history, showMode = props.showMode, showHeadings = props.showHeadings;
    if (Object.values(showHeadings).indexOf(list) === -1) {
        return null;
    }
    var isOldDesign = get(themeCommonElements, 'isOldDesign', false);
    var menuHasChevrons = get(themeCommonElements, 'menuHasChevrons', false);
    return (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 6, lg: 3 },
        React.createElement(Card, { className: classes.card },
            React.createElement("div", { id: id, className: classes.topBlock, "aria-label": title, onClick: function () { return history.push('/' + list); } },
                !isOldDesign && React.createElement(FontAwesomeIcon, { icon: icon, size: "2x", className: classes.icon }),
                React.createElement("h1", { className: classes.mainHeading },
                    React.createElement(Typography, { className: classes.title }, title),
                    menuHasChevrons && React.createElement(ChevronRight, null))),
            (showMode === SHOW_ALL || !showMode) &&
                React.createElement(ListBlock, { loading: loading, classes: classes, items: items, list: list, history: history }))));
});
