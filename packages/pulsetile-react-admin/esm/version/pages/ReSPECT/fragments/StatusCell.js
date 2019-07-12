import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { STATUS_INCOMPLETE, STATUS_EDITING, STATUS_COMPLETED, STATUS_NONE } from "../statuses";
var styles = {
    tableCellInpogress: {
        color: '#7bb0e5',
        fontSize: 14,
        fontWeight: 800,
    },
    tableCellCompleted: {
        color: '#30ad57',
        fontSize: 14,
        fontWeight: 800,
    },
};
var StatusCell = function (_a) {
    var classes = _a.classes, item = _a.item, currentRow = _a.currentRow, status = _a.status, isVersionInfo = _a.isVersionInfo;
    // For the sections 1 and 10 in version info view mode
    if ((isVersionInfo && item.id === 1) || item.id === 10 || status === STATUS_NONE) {
        return (React.createElement("span", { className: classes.tableCellCompleted }, STATUS_NONE));
    }
    if (!isVersionInfo && item.id === currentRow) {
        return (React.createElement("span", { className: classes.tableCellInpogress }, STATUS_EDITING));
    }
    else if (status === STATUS_COMPLETED) {
        return (React.createElement("span", { className: classes.tableCellCompleted }, STATUS_COMPLETED));
    }
    return (React.createElement("span", null, STATUS_INCOMPLETE));
};
export default withStyles(styles)(StatusCell);
