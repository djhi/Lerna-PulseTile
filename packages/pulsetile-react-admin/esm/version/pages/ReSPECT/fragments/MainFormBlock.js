import React from "react";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
var MainFormBlock = function (_a) {
    var classes = _a.classes, isMainPanel = _a.isMainPanel, togglePanel = _a.togglePanel, children = _a.children, title = _a.title;
    return (React.createElement(ExpansionPanel, { className: isMainPanel ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isMainPanel, onChange: function () { return togglePanel(); } },
        React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
            React.createElement(Typography, { className: classes.title }, title)),
        isMainPanel &&
            React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails }, children)));
};
export default MainFormBlock;
