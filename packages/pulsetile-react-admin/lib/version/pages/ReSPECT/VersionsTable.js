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
var versionsServerAction_1 = require("../../actions/ReSPECT/versionsServerAction");
var Breadcrumbs_1 = __importDefault(require("../../../core/common/Breadcrumbs"));
var RespectPageHeader_1 = __importDefault(require("./fragments/RespectPageHeader"));
var TableHeadBlock_1 = __importDefault(require("./fragments/versions/TableHeadBlock"));
var TableBodyBlock_1 = __importDefault(require("./fragments/versions/TableBodyBlock"));
var CurrentVersionBlock_1 = __importDefault(require("./fragments/versions/CurrentVersionBlock"));
var EmptyRow_1 = __importDefault(require("./fragments/versions/EmptyRow"));
var VersionUpdateButton_1 = __importDefault(require("./fragments/buttons/VersionUpdateButton"));
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
        var oldVersion = get_1.default(nextContext, 'currentVersionInfo', null);
        var newVersion = get_1.default(nextProps, 'currentVersionInfo', null);
        var oldVersionNumber = get_1.default(oldVersion, 'version', null);
        var newVersionNumber = get_1.default(newVersion, 'version', null);
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
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Breadcrumbs_1.default, { resource: breadcrumbsResource }),
            react_1.default.createElement(RespectPageHeader_1.default, null),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 16, className: classes.mainBlock },
                react_1.default.createElement(Grid_1.default, { className: classes.list, item: true, xs: 12, sm: currentVersion ? 6 : 12 },
                    react_1.default.createElement("div", { className: classes.blockTitle },
                        react_1.default.createElement(Typography_1.default, { className: classes.title }, "ReSPECT Versions")),
                    versionsNumber === 0
                        ? react_1.default.createElement(EmptyRow_1.default, { toggleMode: toggleMode, isLoading: isLoading })
                        :
                            react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(Paper_1.default, { className: classes.root },
                                    react_1.default.createElement("div", { className: classes.tableWrapper },
                                        react_1.default.createElement(Table_1.default, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                                            react_1.default.createElement(TableHeadBlock_1.default, null),
                                            react_1.default.createElement(TableBodyBlock_1.default, { currentVersion: currentVersion, toggleMode: toggleMode, showVersion: this.showVersion, versionsInfo: versionsInfo })))),
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(VersionUpdateButton_1.default, { toggleMode: toggleMode })))),
                currentVersion &&
                    react_1.default.createElement(CurrentVersionBlock_1.default, { toggleMode: toggleMode, currentVersion: currentVersion }))));
    };
    return VersionsTable;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        versionsInfo: state.custom.versionsServerInfo.data,
        isLoading: state.custom.versionsServerInfo.loading,
        currentVersionInfo: get_1.default(state, 'custom.versionsServerInfo.version', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getVersionsFromServer: function () {
            dispatch(versionsServerAction_1.versionsServerAction.request());
        },
        getOneVersion: function (sourceId, version) {
            dispatch(versionsServerAction_1.versionsServerAction.requestOne(sourceId, version));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(VersionsTable));
