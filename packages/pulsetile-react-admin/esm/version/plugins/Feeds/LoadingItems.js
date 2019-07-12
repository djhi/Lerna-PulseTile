import React from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
/**
 * This component returns list of empty rows if information is loading
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var LoadingItems = function (_a) {
    var classes = _a.classes;
    return (React.createElement(List, { className: classes.list },
        React.createElement("li", { className: classes.listItem },
            React.createElement(Typography, null, "Loading..."))));
};
export default LoadingItems;
