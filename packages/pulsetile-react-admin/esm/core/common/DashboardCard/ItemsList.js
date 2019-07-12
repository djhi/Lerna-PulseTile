import React from "react";
import get from "lodash/get";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { themeCommonElements } from "../../../version/config/theme.config";
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
    var menuHasChevrons = get(themeCommonElements, 'menuHasChevrons', false);
    if (items && items.length === 0) {
        return (React.createElement(List, { className: classes.list },
            React.createElement("li", { className: classes.listItemNoData },
                React.createElement(Typography, null, "No data"))));
    }
    else {
        return (React.createElement(List, { className: classes.list }, items.slice(0).reverse().map(function (item, key) {
            var showRoute = "/" + list + "/" + item.sourceId + "/show";
            return (React.createElement("li", { key: key, className: classes.listItem, onClick: function () { return history.push(showRoute); } },
                React.createElement(Typography, { noWrap: true }, item.text),
                menuHasChevrons && React.createElement(ChevronRight, null)));
        })));
    }
};
export default ItemsList;
