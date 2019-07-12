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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from "react";
import get from "lodash/get";
import { Show, SimpleShowLayout, TextField } from "react-admin";
import { withStyles } from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography/index';
import ExpansionPanel from '@material-ui/core/ExpansionPanel/index';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails/index';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton/index';
import EditButton from "../../../common/Buttons/EditButton";
import CustomIcon from "../../../common/CustomIcon";
import EmergencySummaryPanel from "../fragments/EmergencySummaryPanel";
import { themeCommonElements } from "../../../../version/config/theme.config";
var styles = function (theme) { return ({
    expansionPanel: {
        height: "49px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    currentExpansionPanel: {
        margin: "0px !important",
        border: "1px solid " + theme.palette.borderColor,
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
    emptyBlock: {
        flexGrow: 1,
    },
    expandIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expandBlockIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 35,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expansionTypography: {
        paddingTop: 10,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    expansionPanelDetails: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    showDetails: {
        padding: '10px 0',
        '& > div': {
            boxShadow: "none",
        }
    },
    showLayoutDetails: {
        paddingTop: '0px !important',
        paddingLeft: 10,
    },
    labelBlock: {
        '& > div': {
            marginTop: 0,
            marginBottom: 0,
        },
    },
}); };
/**
 * This component returns template for details block
 * (it used in Show details blocks for the plugins Allergies, Contacts, Medications, Problems etc.)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ShowTemplate = /** @class */ (function (_super) {
    __extends(ShowTemplate, _super);
    function ShowTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanelOpen: true,
            isSystemInfoPanelOpen: true,
        };
        _this.toggleMainPanel = function () {
            _this.setState({
                isMainPanelOpen: !_this.state.isMainPanelOpen,
            });
        };
        _this.toggleSystemInfoPanel = function () {
            _this.setState({
                isSystemInfoPanelOpen: !_this.state.isSystemInfoPanelOpen,
            });
        };
        return _this;
    }
    ShowTemplate.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, children = _a.children, isListOpened = _a.isListOpened, pageTitle = _a.pageTitle, toggleListBlock = _a.toggleListBlock, changeViewType = _a.changeViewType, isDateCreatedAbsent = _a.isDateCreatedAbsent, isSystemInfoAbsent = _a.isSystemInfoAbsent, rest = __rest(_a, ["classes", "children", "isListOpened", "pageTitle", "toggleListBlock", "changeViewType", "isDateCreatedAbsent", "isSystemInfoAbsent"]);
        var _b = this.state, isMainPanelOpen = _b.isMainPanelOpen, isSystemInfoPanelOpen = _b.isSystemInfoPanelOpen;
        var hasEmergencySummaryPanel = get(themeCommonElements, 'emergencySummaryPanel', false);
        return (React.createElement(Grid, { item: true, xs: 12, sm: isListOpened ? 6 : 12 },
            React.createElement(ExpansionPanel, { className: isMainPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isMainPanelOpen, onChange: function () { return _this.toggleMainPanel(); } },
                React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
                    React.createElement(Typography, { className: classes.expansionTypography }, pageTitle),
                    React.createElement("div", { className: classes.emptyBlock }),
                    React.createElement("div", { title: isListOpened ? "Expand" : "Compress" },
                        React.createElement(IconButton, { onClick: function (e) { return toggleListBlock(e); } },
                            React.createElement(CustomIcon, { iconClassName: isListOpened ? 'fa fa-expand' : 'fa fa-compress' })))),
                isMainPanelOpen &&
                    React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails },
                        React.createElement(Show, __assign({ className: classes.showDetails, title: pageTitle }, rest),
                            React.createElement(SimpleShowLayout, { className: classes.showLayoutDetails }, children)),
                        React.createElement(EditButton, { redirectTo: changeViewType }))),
            React.createElement(ExpansionPanel, { className: isSystemInfoPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isSystemInfoPanelOpen, onChange: function () { return _this.toggleSystemInfoPanel(); } },
                React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
                    React.createElement(Typography, { className: classes.expansionTypography }, "System Information")),
                isSystemInfoPanelOpen &&
                    React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails },
                        React.createElement(Show, __assign({ className: classes.showDetails, title: pageTitle }, rest),
                            React.createElement(SimpleShowLayout, { className: classes.showLayoutDetails },
                                React.createElement(TextField, { className: classes.labelBlock, label: "Source", source: "source" }))))),
            hasEmergencySummaryPanel && React.createElement(EmergencySummaryPanel, __assign({}, this.props))));
    };
    return ShowTemplate;
}(Component));
export default withStyles(styles)(ShowTemplate);
