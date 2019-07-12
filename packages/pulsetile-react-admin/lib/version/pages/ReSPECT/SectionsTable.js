"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Print_1 = __importDefault(require("@material-ui/icons/Print"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var personalDetailsAction_1 = require("../../actions/ReSPECT/personalDetailsAction");
var summaryInformationAction_1 = require("../../actions/ReSPECT/summaryInformationAction");
var personalPreferencesAction_1 = require("../../actions/ReSPECT/personalPreferencesAction");
var clinicalRecommendationsAction_1 = require("../../actions/ReSPECT/clinicalRecommendationsAction");
var capacityAndRepresentationAction_1 = require("../../actions/ReSPECT/capacityAndRepresentationAction");
var involvenentAction_1 = require("../../actions/ReSPECT/involvenentAction");
var clinicalSignaturesAction_1 = require("../../actions/ReSPECT/clinicalSignaturesAction");
var emergencyViewAction_1 = require("../../actions/ReSPECT/emergencyViewAction");
var confirmationAction_1 = require("../../actions/ReSPECT/confirmationAction");
var emergencyContactsAction_1 = require("../../actions/ReSPECT/emergencyContactsAction");
var versionsServerAction_1 = require("../../actions/ReSPECT/versionsServerAction");
var Breadcrumbs_1 = __importDefault(require("../../../core/common/Breadcrumbs"));
var RespectPageHeader_1 = __importDefault(require("./fragments/RespectPageHeader"));
var TableHeadBlock_1 = __importDefault(require("./fragments/TableHeadBlock"));
var TableBodyBlock_1 = __importDefault(require("./fragments/TableBodyBlock"));
var CurrentSectionBlock_1 = __importDefault(require("./fragments/CurrentSectionBlock"));
var PublishButton_1 = __importDefault(require("./fragments/buttons/PublishButton"));
var sections_1 = __importDefault(require("./sections"));
var pdfTool_1 = __importDefault(require("./fragments/pdfTool"));
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
            sections_1.default.forEach(function (item) {
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
        var latestVersion = get_1.default(versionsList, [0], null);
        if (latestVersion) {
            this.props.getLatestVersion(latestVersion.sourceId, latestVersion.version);
        }
    };
    SectionsTable.prototype.componentWillReceiveProps = function (nextProps) {
        var firstVersionInfo = nextProps.firstVersionInfo, getVersionsFromServer = nextProps.getVersionsFromServer;
        if (get_1.default(firstVersionInfo, 'compositionUid', null) && isFirst) {
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
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Breadcrumbs_1.default, { resource: breadcrumbsResource }),
            react_1.default.createElement(RespectPageHeader_1.default, null),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 16, className: classes.mainBlock },
                react_1.default.createElement(Grid_1.default, { className: classes.list, item: true, xs: 12, sm: currentRow ? 6 : 12 },
                    react_1.default.createElement("div", { className: classes.blockTitle },
                        react_1.default.createElement(Typography_1.default, { className: classes.title }, "ReSPECT Sections"),
                        isVersionInfo &&
                            react_1.default.createElement(Tooltip_1.default, { title: "Print" },
                                react_1.default.createElement(IconButton_1.default, { className: classes.printButton, onClick: function () { return pdfTool_1.default(currentVersionInfo, patientInfo); } },
                                    react_1.default.createElement(Print_1.default, null)))),
                    react_1.default.createElement(Paper_1.default, { className: classes.root },
                        react_1.default.createElement("div", { className: classes.tableWrapper },
                            react_1.default.createElement(Table_1.default, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                                react_1.default.createElement(TableHeadBlock_1.default, null),
                                react_1.default.createElement(TableBodyBlock_1.default, { sections: sections_1.default, currentRow: currentRow, onRowClick: this.onRowClick, sectionsInfo: isVersionInfo ? versionSectionsInfo : sectionsInfo, latestVersionInfo: latestVersionInfo, isVersionInfo: isVersionInfo })),
                            react_1.default.createElement(PublishButton_1.default, { toggleMode: toggleMode, versionsList: versionsList, firstVersionInfo: firstVersionInfo, isVersionInfo: isVersionInfo })))),
                currentRow &&
                    react_1.default.createElement(CurrentSectionBlock_1.default, { currentSection: currentSection, currentRow: currentRow, onRowClick: this.onRowClick, isVersionInfo: isVersionInfo, sectionsInfo: isVersionInfo ? versionSectionsInfo : sectionsInfo, latestVersionInfo: latestVersionInfo, toggleMode: toggleMode }))));
    };
    return SectionsTable;
}(react_1.Component));
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
        currentVersionInfo: get_1.default(state, 'custom.versionsServerInfo.version', null),
        latestVersionInfo: get_1.default(state, 'custom.versionsServerInfo.latest', []),
        firstVersionInfo: get_1.default(state, 'custom.versionsServerInfo.first', null),
        versionsList: get_1.default(state, 'custom.versionsServerInfo.data', []),
        patientInfo: get_1.default(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getSectionsInfo: function (userId) {
            dispatch(personalDetailsAction_1.personalDetailsAction.request(userId));
            dispatch(summaryInformationAction_1.summaryInformationAction.request(userId));
            dispatch(personalPreferencesAction_1.personalPreferencesAction.request(userId));
            dispatch(clinicalRecommendationsAction_1.clinicalRecommendationsAction.request(userId));
            dispatch(capacityAndRepresentationAction_1.capacityAndRepresentationAction.request(userId));
            dispatch(involvenentAction_1.involvementAction.request(userId));
            dispatch(clinicalSignaturesAction_1.clinicalSignaturesAction.request(userId));
            dispatch(emergencyViewAction_1.emergencyViewAction.request(userId));
            dispatch(confirmationAction_1.confirmationAction.request(userId));
            dispatch(emergencyContactsAction_1.emergencyContactsAction.request(userId));
        },
        getVersionsFromServer: function () {
            dispatch(versionsServerAction_1.versionsServerAction.request());
        },
        getLatestVersion: function (sourceId, version) {
            dispatch(versionsServerAction_1.versionsServerAction.requestLatest(sourceId, version));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(SectionsTable));
