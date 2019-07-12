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
import { personalDetailsAction } from "../../actions/ReSPECT/personalDetailsAction";
import { summaryInformationAction } from "../../actions/ReSPECT/summaryInformationAction";
import { personalPreferencesAction } from "../../actions/ReSPECT/personalPreferencesAction";
import { clinicalRecommendationsAction } from "../../actions/ReSPECT/clinicalRecommendationsAction";
import { capacityAndRepresentationAction } from "../../actions/ReSPECT/capacityAndRepresentationAction";
import { involvementAction } from "../../actions/ReSPECT/involvenentAction";
import { clinicalSignaturesAction } from "../../actions/ReSPECT/clinicalSignaturesAction";
import { emergencyViewAction } from "../../actions/ReSPECT/emergencyViewAction";
import { confirmationAction } from "../../actions/ReSPECT/confirmationAction";
import { emergencyContactsAction } from "../../actions/ReSPECT/emergencyContactsAction";
import { versionsServerAction } from "../../actions/ReSPECT/versionsServerAction";
import Breadcrumbs from "../../../core/common/Breadcrumbs";
import RespectPageHeader from "./fragments/RespectPageHeader";
import TableHeadBlock from "./fragments/TableHeadBlock";
import TableBodyBlock from "./fragments/TableBodyBlock";
import CurrentSectionBlock from "./fragments/CurrentSectionBlock";
import PublishButton from "./fragments/buttons/PublishButton";
import sections from "./sections";
import createPDF from "./fragments/pdfTool";
var styles = function (theme) { return ({
    container: {
        width: '100%',
        height: '100%',
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
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
        color: theme.palette.fontColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
    },
    title: {
        color: theme.palette.fontColor,
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
    },
}); };
var isFirst = true;
var SectionsTable = /** @class */ (function (_super) {
    __extends(SectionsTable, _super);
    function SectionsTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentRow: _this.props.sectionForShow ? _this.props.sectionForShow : null,
        };
        _this.onRowClick = function (id) {
            _this.setState({
                currentRow: id,
            });
        };
        _this.getCurrentSection = function (id) {
            var result = null;
            sections.forEach(function (item) {
                if (item.id === id) {
                    result = item;
                }
            });
            return result;
        };
        return _this;
    }
    SectionsTable.prototype.componentDidMount = function () {
        var userId = localStorage.getItem('userId');
        this.props.getSectionsInfo(userId);
        this.props.getVersionsFromServer();
    };
    SectionsTable.prototype.componentWillMount = function () {
        var versionsList = this.props.versionsList;
        var latestVersion = get(versionsList, [0], null);
        if (latestVersion) {
            this.props.getLatestVersion(latestVersion.sourceId, latestVersion.version);
        }
    };
    SectionsTable.prototype.componentWillReceiveProps = function (nextProps) {
        var firstVersionInfo = nextProps.firstVersionInfo, getVersionsFromServer = nextProps.getVersionsFromServer;
        if (get(firstVersionInfo, 'compositionUid', null) && isFirst) {
            isFirst = false;
            setTimeout(function () {
                getVersionsFromServer();
            }, 10000);
        }
    };
    SectionsTable.prototype.render = function () {
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, toggleMode = _a.toggleMode, currentVersionInfo = _a.currentVersionInfo, latestVersionInfo = _a.latestVersionInfo, versionsList = _a.versionsList, firstVersionInfo = _a.firstVersionInfo, currentVersion = _a.currentVersion, sectionForShow = _a.sectionForShow, patientInfo = _a.patientInfo;
        var currentRow = this.state.currentRow;
        var isVersionInfo = false;
        var versionSectionsInfo = null;
        if (currentVersion && sectionForShow) {
            versionSectionsInfo = currentVersionInfo;
            isVersionInfo = true;
        }
        var versionTitle = isVersionInfo ? 'Version ' + currentVersion : 'New version';
        var breadcrumbsResource = [
            { url: null, title: "ReSPECT", isActive: false, onClickAction: toggleMode },
            { url: null, title: versionTitle, isActive: false }
        ];
        var currentSection = this.getCurrentSection(currentRow);
        return (React.createElement("div", { className: classes.container },
            React.createElement(Breadcrumbs, { resource: breadcrumbsResource }),
            React.createElement(RespectPageHeader, null),
            React.createElement(Grid, { container: true, spacing: 16, className: classes.mainBlock },
                React.createElement(Grid, { className: classes.list, item: true, xs: 12, sm: currentRow ? 6 : 12 },
                    React.createElement("div", { className: classes.blockTitle },
                        React.createElement(Typography, { className: classes.title }, "ReSPECT Sections"),
                        isVersionInfo &&
                            React.createElement(Tooltip, { title: "Print" },
                                React.createElement(IconButton, { className: classes.printButton, onClick: function () { return createPDF(currentVersionInfo, patientInfo); } },
                                    React.createElement(PrintIcon, null)))),
                    React.createElement(Paper, { className: classes.root },
                        React.createElement("div", { className: classes.tableWrapper },
                            React.createElement(Table, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                                React.createElement(TableHeadBlock, null),
                                React.createElement(TableBodyBlock, { sections: sections, currentRow: currentRow, onRowClick: this.onRowClick, sectionsInfo: isVersionInfo ? versionSectionsInfo : sectionsInfo, latestVersionInfo: latestVersionInfo, isVersionInfo: isVersionInfo })),
                            React.createElement(PublishButton, { toggleMode: toggleMode, versionsList: versionsList, firstVersionInfo: firstVersionInfo, isVersionInfo: isVersionInfo })))),
                currentRow &&
                    React.createElement(CurrentSectionBlock, { currentSection: currentSection, currentRow: currentRow, onRowClick: this.onRowClick, isVersionInfo: isVersionInfo, sectionsInfo: isVersionInfo ? versionSectionsInfo : sectionsInfo, latestVersionInfo: latestVersionInfo, toggleMode: toggleMode }))));
    };
    return SectionsTable;
}(Component));
var mapStateToProps = function (state) {
    return {
        sectionsInfo: {
            personalDetails: state.custom.personalDetails.data,
            summaryInformation: state.custom.summaryInformation.data,
            personalPreferences: state.custom.personalPreferences.data,
            clinicalRecommendations: state.custom.clinicalRecommendations.data,
            capacityAndRepresentation: state.custom.capacityAndRepresentation.data,
            involvement: state.custom.involvement.data,
            clinicalSignatures: state.custom.clinicalSignatures.data,
            emergencyView: state.custom.emergencyView.data,
            confirmation: state.custom.confirmation.data,
            emergencyContacts: state.custom.emergencyContacts.data,
        },
        currentVersionInfo: get(state, 'custom.versionsServerInfo.version', null),
        latestVersionInfo: get(state, 'custom.versionsServerInfo.latest', []),
        firstVersionInfo: get(state, 'custom.versionsServerInfo.first', null),
        versionsList: get(state, 'custom.versionsServerInfo.data', []),
        patientInfo: get(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getSectionsInfo: function (userId) {
            dispatch(personalDetailsAction.request(userId));
            dispatch(summaryInformationAction.request(userId));
            dispatch(personalPreferencesAction.request(userId));
            dispatch(clinicalRecommendationsAction.request(userId));
            dispatch(capacityAndRepresentationAction.request(userId));
            dispatch(involvementAction.request(userId));
            dispatch(clinicalSignaturesAction.request(userId));
            dispatch(emergencyViewAction.request(userId));
            dispatch(confirmationAction.request(userId));
            dispatch(emergencyContactsAction.request(userId));
        },
        getVersionsFromServer: function () {
            dispatch(versionsServerAction.request());
        },
        getLatestVersion: function (sourceId, version) {
            dispatch(versionsServerAction.requestLatest(sourceId, version));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SectionsTable));
