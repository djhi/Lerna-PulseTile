var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Grid from '@material-ui/core/Grid';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { versionsServerAction } from "../../../../actions/ReSPECT/versionsServerAction";
import { modalOpenAction } from "../../../../actions/ReSPECT/modalOpenAction";
import ListBlock from "./ListBlock";
import { SHOW_ALL } from "../../../../../core/pages/PatientSummary/config";
import { themeCommonElements } from "../../../../config/theme.config";
var styles = function (theme) { return ({
    card: {
        borderRadius: 0,
    },
    media: {
        backgroundColor: theme.palette.mainColor,
    },
    container: {
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    topBlock: {
        display: "flex",
        flexDirection: "column",
        height: 100,
        backgroundColor: theme.palette.mainColor,
        background: theme.patientSummaryPanel.topBlock.background,
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
    icon: {
        marginBottom: 10,
    },
    title: {
        marginBottom: 0,
    },
    list: {
        padding: 0,
        "& a": {
            textDecoration: "none",
        }
    },
    feedsItem: {
        fontSize: "1rem",
    },
    respectLogo: {
        width: "auto",
    },
    listItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 48,
        paddingLeft: 15,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
        '& svg': {
            color: theme.palette.fontColor,
        }
    },
    emptyRows: {
        height: 150,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
}); };
/**
 * This component returns ReSPECT plugin card for summary
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param props
 * @constructor
 */
var RespectSummaryPanel = /** @class */ (function (_super) {
    __extends(RespectSummaryPanel, _super);
    function RespectSummaryPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RespectSummaryPanel.prototype.componentDidMount = function () {
        this.props.getVersionsFromServer();
    };
    RespectSummaryPanel.prototype.render = function () {
        var _a = this.props, classes = _a.classes, loading = _a.loading, history = _a.history, showMode = _a.showMode, versionsServerInfo = _a.versionsServerInfo, toggleRespectModal = _a.toggleRespectModal, showHeadings = _a.showHeadings;
        var isOldDesign = get(themeCommonElements, 'isOldDesign', false);
        var menuHasChevrons = get(themeCommonElements, 'menuHasChevrons', false);
        if (Object.values(showHeadings).indexOf('respect') === -1) {
            return null;
        }
        return (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 6, lg: 3 },
            React.createElement(Card, { className: classes.card },
                React.createElement("div", { className: classes.topBlock, onClick: function () { return history.push('/respect'); } },
                    !isOldDesign && React.createElement(FontAwesomeIcon, { icon: faNotesMedical, size: "2x", className: classes.icon }),
                    React.createElement("h1", { className: classes.mainHeading },
                        React.createElement(Typography, { gutterBottom: true, className: classes.title }, "ReSPECT"),
                        menuHasChevrons && React.createElement(ChevronRight, null))),
                (showMode === SHOW_ALL || !showMode) &&
                    React.createElement(ListBlock, { loading: loading, classes: classes, items: versionsServerInfo, history: history, toggleRespectModal: toggleRespectModal }))));
    };
    return RespectSummaryPanel;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        versionsServerInfo: state.custom.versionsServerInfo.data,
        showHeadings: state.custom.showHeadings.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getVersionsFromServer: function () {
            dispatch(versionsServerAction.request());
        },
        toggleRespectModal: function () {
            dispatch(modalOpenAction.request());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RespectSummaryPanel));
