import React from "react";
import get from "lodash/get";
import { translate } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeCommonElements } from "../../version/config/theme.config";
import { totalSynopsisData } from "../pages/PatientSummary/config";
var isTableHeaderInverted = get(themeCommonElements, 'invertedTableHeaders', false);
var styles = function (theme) { return ({
    tableHeaderBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        background: theme.tableHeader.tableHeaderBlock.background,
        backgroundSize: "cover",
        color: theme.palette.paperColor,
        padding: 15,
    },
    mainHeader: {
        margin: 0,
    },
    title: {
        marginTop: 0,
        color: isTableHeaderInverted ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 24,
        fontWeight: 800,
    },
    description: {
        color: isTableHeaderInverted ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 15,
    },
    icon: {
        color: theme.palette.mainColor,
        marginRight: 15,
    },
}); };
function getCurrentPlugin(resource) {
    var result = null;
    for (var i = 0, n = totalSynopsisData.length; i < n; i++) {
        var item = totalSynopsisData[i];
        if (item.list === resource) {
            result = item;
            break;
        }
    }
    return result;
}
/**
 * This component returns header for table
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {string} resource
 * @param {func}   translate
 */
var TableHeader = function (_a) {
    var classes = _a.classes, resource = _a.resource, translate = _a.translate;
    var plugin = getCurrentPlugin(resource);
    var title = get(plugin, 'title', null);
    var description = get(plugin, 'description', null);
    var icon = get(plugin, 'icon', null);
    return (React.createElement("div", { className: classes.tableHeaderBlock },
        (isTableHeaderInverted && icon) && React.createElement(FontAwesomeIcon, { icon: icon, size: "3x", className: classes.icon }),
        React.createElement("div", null,
            React.createElement("h1", { className: classes.mainHeader },
                React.createElement(Typography, { className: classes.title }, title)),
            React.createElement(Typography, { className: classes.description }, description))));
};
export default withStyles(styles)(translate(TableHeader));
