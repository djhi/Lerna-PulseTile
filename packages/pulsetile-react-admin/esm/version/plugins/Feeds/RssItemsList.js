import React from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
/**
 * This component returns synopsis list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {array} items
 * @constructor
 */
var ItemsList = function (_a) {
    var classes = _a.classes, items = _a.items;
    if (items.length === 0) {
        return (React.createElement("li", { className: classes.listItem },
            React.createElement(Typography, null, "No data")));
    }
    return (React.createElement(List, { className: classes.list }, items.slice(0, 4).map(function (item, key) { return (React.createElement("a", { href: item.link, key: key, target: "_blank" },
        React.createElement("li", { key: key, className: classes.listItem },
            React.createElement(Typography, { noWrap: true }, item.title)))); })));
};
export default ItemsList;
