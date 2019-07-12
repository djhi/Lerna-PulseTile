import React from "react";
import get from "lodash/get";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { themeCommonElements } from "../../../version/config/theme.config";
var DummyItemsList = function (_a) {
    var classes = _a.classes, items = _a.items, list = _a.list, history = _a.history;
    var menuHasChevrons = get(themeCommonElements, 'menuHasChevrons', false);
    return (React.createElement(List, { className: classes.list }, items.slice(0).map(function (item, key) {
        return (React.createElement("li", { key: key, className: classes.listItem },
            React.createElement(Typography, { noWrap: true }, item),
            (menuHasChevrons && item) && React.createElement(ChevronRight, null)));
    })));
};
export default DummyItemsList;
