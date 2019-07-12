import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
var styles = function (theme) { return ({
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 400,
    },
    expansionPanel: {
        height: "49px !important",
        '& > div': {
            minHeight: "49px !important",
        }
    },
    currentExpansionPanel: {
        border: "1px solid " + theme.palette.borderColor,
        margin: "0px !important",
        '& > div': {
            minHeight: "49px !important",
        }
    },
    expansionPanelSummary: {
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 16,
        '& > div': {
            margin: "0px !important",
            marginTop: "0px",
            marginBottom: "0px",
        }
    },
    expandIcon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        height: 35,
    },
    expansionTypography: {
        color: "white",
        fontSize: 18,
        fontWeight: 700,
    },
    expansionPanelDetails: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
}); };
var CurrentSectionBlock = function (_a) {
    var classes = _a.classes, currentVersion = _a.currentVersion, currentRow = _a.currentRow, currentSection = _a.currentSection, onRowClick = _a.onRowClick, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, toggleMode = _a.toggleMode, isVersionInfo = _a.isVersionInfo;
    var SectionBlock = currentSection ? currentSection.component : null;
    return (React.createElement(Grid, { item: true, xs: 12, sm: currentRow ? 6 : 12 },
        React.createElement(SectionBlock, { currentRow: currentRow, title: currentSection.section, classes: classes, onRowClick: onRowClick, sectionsInfo: sectionsInfo, latestVersionInfo: latestVersionInfo, toggleMode: toggleMode, isVersionInfo: isVersionInfo })));
};
export default withStyles(styles)(CurrentSectionBlock);
