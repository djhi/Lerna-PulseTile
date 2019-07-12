import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CreateButton from "../../common/Buttons/CreateButton";
import CustomPaginator from "../../common/Buttons/CustomPaginator";
var styles = {
    paginationBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 45,
    },
};
/**
 * This component returns toolbar for List
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {boolean} notCreate
 * @param {boolean} isCreatePage
 * @param {string}  resourceUrl
 * @param {string}  createPath
 * @param {shape}   history
 * @param {number}  total
 */
var ListToolbar = function (_a) {
    var classes = _a.classes, notCreate = _a.notCreate, isCreatePage = _a.isCreatePage, resourceUrl = _a.resourceUrl, createPath = _a.createPath, history = _a.history, total = _a.total;
    return (React.createElement("div", { className: classes.paginationBlock },
        React.createElement(CustomPaginator, { resourceUrl: resourceUrl, history: history, itemsPerPage: 10, total: total }),
        (!isCreatePage && !notCreate) &&
            React.createElement(CreateButton, { history: history, redirectPath: createPath })));
};
export default withStyles(styles)(ListToolbar);
