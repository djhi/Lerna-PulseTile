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
import IconButton from '@material-ui/core/IconButton';
import PrintIcon from '@material-ui/icons/Print';
import Tooltip from '@material-ui/core/Tooltip';
import TableHeadBlock from "../TableHeadBlock";
import SectionsInfo from "./SectionsInfo";
import sections from "../../sections";
import createPDF from "../pdfTool";
var styles = function (theme) { return ({
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
    blockLoading: {
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
        backgroundColor: theme.palette.paperColor,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 400,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    tableList: {
        '& thead': {
            backgroundColor: theme.palette.tableHeadColor,
            '& tr th span span': {
                color: theme.palette.fontColor,
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
            color: theme.palette.paperColor,
        }
    },
    printButton: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        height: 35,
        borderRadius: 0,
    }
}); };
var CurrentVersionBlock = /** @class */ (function (_super) {
    __extends(CurrentVersionBlock, _super);
    function CurrentVersionBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentVersionBlock.prototype.render = function () {
        var _a = this.props, classes = _a.classes, currentVersion = _a.currentVersion, versionInfo = _a.versionInfo, toggleMode = _a.toggleMode, patientInfo = _a.patientInfo, isLoading = _a.isLoading;
        return (React.createElement(Grid, { className: classes.mainBlock, item: true, xs: 12, sm: 6 },
            React.createElement("div", { className: classes.blockTitle },
                React.createElement(Typography, { className: classes.title },
                    "ReSPECT Sections (Version ",
                    currentVersion,
                    ")"),
                React.createElement(Tooltip, { title: "Print" },
                    React.createElement(IconButton, { className: classes.printButton, onClick: function () { return createPDF(versionInfo, patientInfo); } },
                        React.createElement(PrintIcon, null)))),
            isLoading
                ?
                    React.createElement("div", { className: classes.blockLoading },
                        React.createElement(Typography, null, "Loading..."))
                :
                    React.createElement(Paper, { className: classes.root },
                        React.createElement("div", { className: classes.tableWrapper },
                            React.createElement(Table, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                                React.createElement(TableHeadBlock, null),
                                React.createElement(SectionsInfo, { sections: sections, versionInfo: versionInfo, toggleMode: toggleMode, currentVersion: currentVersion }))))));
    };
    return CurrentVersionBlock;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        patientInfo: get(state, 'custom.currentPatient.patientInfo.data', null),
        versionInfo: get(state, 'custom.versionsServerInfo.version', null),
        isLoading: get(state, 'custom.versionsServerInfo.loading', null),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(CurrentVersionBlock));
