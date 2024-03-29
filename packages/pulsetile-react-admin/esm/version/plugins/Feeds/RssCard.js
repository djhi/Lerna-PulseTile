import React from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import RssIcon from '@material-ui/icons/RssFeed';
import Grid from '@material-ui/core/Grid';
import ChevronRight from "@material-ui/icons/ChevronRight";
import ListBlock from "./ListBlock";
import { SHOW_ALL } from "../../../core/pages/PatientSummary/config";
import { themeCommonElements } from "../../config/theme.config";
var styles = function (theme) { return ({
    card: {
        borderRadius: 0,
    },
    media: {
        backgroundColor: theme.palette.mainColor,
    },
    container: {
        width: "100%",
        height: "100%",
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    topBlock: {
        display: "flex",
        flexDirection: "column",
        height: theme.isOldDesign ? 50 : 100,
        backgroundColor: theme.palette.tableHeadColor,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: theme.palette.mainColor,
        border: theme.isOldDesign ? "1px solid " + theme.palette.borderColor : null,
        '&:hover': {
            cursor: "pointer",
        },
    },
    icon: {
        marginBottom: 10,
    },
    mainHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        zIndex: 99999999,
        '& svg': {
            color: theme.palette.fontColor,
        }
    },
    title: {
        marginBottom: 0,
        color: theme.palette.fontColor,
        fontSize: 18,
        fontWeight: 600,
        zIndex: 99999999,
    },
    list: {
        padding: 0,
        "& a": {
            textDecoration: "none",
        }
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "justify",
        height: 48,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            '& p': {
                color: theme.palette.paperColor,
            }
        }
    },
    feedsItem: {
        fontSize: "1rem",
    }
}); };
/**
 * This component returns one single Feeds RSS Card
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param props
 * @constructor
 */
var RssCard = function (props) {
    var classes = props.classes, sourceId = props.sourceId, title = props.title, items = props.items, loading = props.loading, icon = props.icon, link = props.link, history = props.history, showMode = props.showMode, showHeadings = props.showHeadings, selectedFeeds = props.selectedFeeds;
    var isOldDesign = get(themeCommonElements, 'isOldDesign', false);
    var menuHasChevrons = get(themeCommonElements, 'menuHasChevrons', false);
    if (selectedFeeds.indexOf(sourceId) !== -1) {
        return (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 6, lg: 3 },
            React.createElement(Card, { id: sourceId, className: classes.card, onClick: function () { return window.open(link, "_blank"); } },
                React.createElement("div", { className: classes.topBlock },
                    !isOldDesign && React.createElement(RssIcon, { className: classes.icon }),
                    React.createElement("h1", { className: classes.mainHeading },
                        React.createElement(Typography, { gutterBottom: true, className: classes.title }, title),
                        menuHasChevrons && React.createElement(ChevronRight, null))),
                (showMode === SHOW_ALL || !showMode) &&
                    React.createElement(ListBlock, { loading: loading, classes: classes, items: items, history: history }))));
    }
    return null;
};
var mapStateToProps = function (state) {
    return {
        selectedFeeds: state.custom.selectedFeedsList.data,
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(RssCard));
