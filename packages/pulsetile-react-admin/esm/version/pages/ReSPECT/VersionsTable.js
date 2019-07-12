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
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { versionsServerAction } from "../../actions/ReSPECT/versionsServerAction";
import Breadcrumbs from "../../../core/common/Breadcrumbs";
import RespectPageHeader from "./fragments/RespectPageHeader";
import TableHeadBlock from "./fragments/versions/TableHeadBlock";
import TableBodyBlock from "./fragments/versions/TableBodyBlock";
import CurrentVersionBlock from "./fragments/versions/CurrentVersionBlock";
import EmptyRow from "./fragments/versions/EmptyRow";
import VersionUpdateButton from "./fragments/buttons/VersionUpdateButton";
var styles = function (theme) { return ({
    root: {
        width: '100%',
    },
    mainBlock: {
        padding: 10,
    },
    blockTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    tableList: {
        '& thead': {
            backgroundColor: theme.palette.tableHeadColor,
            '& tr th span span': {
                color: "#000",
            },
            '& tr th': {
                paddingLeft: 10,
            },
            '& tr': {
                height: 48,
            },
        },
        '& tbody tr td': {
            paddingLeft: 10,
        },
        '& tbody tr:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
        },
        '& tbody tr:hover td span': {
            color: "#fff"
        }
    },
}); };
var VersionsTable = /** @class */ (function (_super) {
    __extends(VersionsTable, _super);
    function VersionsTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentVersion: null,
        };
        _this.showVersion = function (version, sourceId) {
            _this.setState(function (state) { return ({ currentVersion: version }); }, function () { return _this.props.getOneVersion(sourceId, version); });
        };
        _this.returnToVersions = function () {
            _this.setState({
                currentVersion: null,
            });
        };
        return _this;
    }
    VersionsTable.prototype.componentDidMount = function () {
        this.props.getVersionsFromServer();
    };
    ;
    VersionsTable.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var oldVersion = get(nextContext, 'currentVersionInfo', null);
        var newVersion = get(nextProps, 'currentVersionInfo', null);
        var oldVersionNumber = get(oldVersion, 'version', null);
        var newVersionNumber = get(newVersion, 'version', null);
        if (oldVersionNumber !== newVersionNumber) {
            this.setState({
                currentVersion: newVersionNumber,
            });
        }
    };
    VersionsTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, versionsInfo = _a.versionsInfo, toggleMode = _a.toggleMode, isLoading = _a.isLoading;
        var currentVersion = this.state.currentVersion;
        var breadcrumbsResource = [
            { url: "/summary", title: "Patient Summary", isActive: true },
            { url: null, title: "ReSPECT", isActive: false }
        ];
        if (currentVersion) {
            breadcrumbsResource = [
                { url: "/summary", title: "Patient Summary", isActive: true },
                { url: null, title: "ReSPECT", isActive: false, onClickAction: function () { return _this.returnToVersions(); } },
                { url: null, title: "Version " + currentVersion, isActive: false }
            ];
        }
        var versionsNumber = Array.isArray(versionsInfo) ? versionsInfo.length : 0;
        return (React.createElement(React.Fragment, null,
            React.createElement(Breadcrumbs, { resource: breadcrumbsResource }),
            React.createElement(RespectPageHeader, null),
            React.createElement(Grid, { container: true, spacing: 16, className: classes.mainBlock },
                React.createElement(Grid, { className: classes.list, item: true, xs: 12, sm: currentVersion ? 6 : 12 },
                    React.createElement("div", { className: classes.blockTitle },
                        React.createElement(Typography, { className: classes.title }, "ReSPECT Versions")),
                    versionsNumber === 0
                        ? React.createElement(EmptyRow, { toggleMode: toggleMode, isLoading: isLoading })
                        :
                            React.createElement(React.Fragment, null,
                                React.createElement(Paper, { className: classes.root },
                                    React.createElement("div", { className: classes.tableWrapper },
                                        React.createElement(Table, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                                            React.createElement(TableHeadBlock, null),
                                            React.createElement(TableBodyBlock, { currentVersion: currentVersion, toggleMode: toggleMode, showVersion: this.showVersion, versionsInfo: versionsInfo })))),
                                React.createElement("div", null,
                                    React.createElement(VersionUpdateButton, { toggleMode: toggleMode })))),
                currentVersion &&
                    React.createElement(CurrentVersionBlock, { toggleMode: toggleMode, currentVersion: currentVersion }))));
    };
    return VersionsTable;
}(Component));
var mapStateToProps = function (state) {
    return {
        versionsInfo: state.custom.versionsServerInfo.data,
        isLoading: state.custom.versionsServerInfo.loading,
        currentVersionInfo: get(state, 'custom.versionsServerInfo.version', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getVersionsFromServer: function () {
            dispatch(versionsServerAction.request());
        },
        getOneVersion: function (sourceId, version) {
            dispatch(versionsServerAction.requestOne(sourceId, version));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VersionsTable));
