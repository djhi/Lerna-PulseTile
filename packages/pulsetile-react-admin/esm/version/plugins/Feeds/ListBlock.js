import React from "react";
import ItemsList from "./RssItemsList";
import LoadingItems from "./LoadingItems";
/**
 * This component returns list block
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {boolean} loading
 * @param {shape}   classes
 * @param {array}   items
 * @param {shape}   history
 */
var ListBlock = function (_a) {
    var loading = _a.loading, classes = _a.classes, items = _a.items, history = _a.history;
    if (loading) {
        return (React.createElement(LoadingItems, { classes: classes }));
    }
    return (React.createElement(ItemsList, { classes: classes, items: items, history: history }));
};
export default ListBlock;
