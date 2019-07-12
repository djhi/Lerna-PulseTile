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
import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import DashboardCard from "../../../common/DashboardCard";
import { themeCommonElements } from "../../../../version/config/theme.config";
import { getSynopsisProps, synopsisData } from "../config";
var styles = function (theme) { return ({
    card: {
        borderRadius: 0,
        boxShadow: theme.isOldDesign ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : null,
    },
    media: {
        backgroundColor: theme.palette.mainColor,
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
        zIndex: 99999999,
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
        zIndex: 99999999,
    },
    listItemNoData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 48,
        paddingLeft: 15,
        zIndex: 99999999,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
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
        zIndex: 99999999,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
        cursor: "pointer",
        color: theme.palette.fontColor,
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            '& p': {
                color: theme.palette.paperColor,
            },
            '& svg': {
                color: theme.palette.paperColor,
            }
        }
    },
    emptyRows: {
        height: 150,
        zIndex: 99999999,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
}); };
var PatientSummaryTable = /** @class */ (function (_super) {
    __extends(PatientSummaryTable, _super);
    function PatientSummaryTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatientSummaryTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, history = _a.history, loading = _a.loading, showMode = _a.showMode, showHeadings = _a.showHeadings;
        var FeedsPanels = get(themeCommonElements, 'feedsPanels', false);
        var RespectPanel = get(themeCommonElements, 'respectPanel', false);
        return (React.createElement(React.Fragment, null,
            synopsisData.map(function (item, key) {
                if (get(item, 'isSynopsis', false)) {
                    return (React.createElement(DashboardCard, __assign({ key: key, showMode: showMode, showHeadings: showHeadings, id: item.id, title: item.title, list: item.list, loading: loading, items: get(_this.props, item.list, []), icon: item.icon }, _this.props)));
                }
            }),
            FeedsPanels && React.createElement(FeedsPanels, null),
            RespectPanel && React.createElement(RespectPanel, __assign({ showMode: showMode }, this.props))));
    };
    return PatientSummaryTable;
}(Component));
var mapStateToProps = function (state) {
    var patientSummaryProps = {
        loading: state.custom.demographics.loading,
        showMode: state.custom.showMode.data,
        showHeadings: state.custom.showHeadings.data,
    };
    var synopsisProps = getSynopsisProps(state);
    return Object.assign({}, patientSummaryProps, synopsisProps);
};
export default connect(mapStateToProps, null)(withStyles(styles)(PatientSummaryTable));
