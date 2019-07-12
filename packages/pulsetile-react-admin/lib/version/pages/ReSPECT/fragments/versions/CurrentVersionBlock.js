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
var TableHeadBlock_1 = __importDefault(require("../TableHeadBlock"));
var SectionsInfo_1 = __importDefault(require("./SectionsInfo"));
var sections_1 = __importDefault(require("../../sections"));
var pdfTool_1 = __importDefault(require("../pdfTool"));
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
        return (react_1.default.createElement(Grid_1.default, { className: classes.mainBlock, item: true, xs: 12, sm: 6 },
            react_1.default.createElement("div", { className: classes.blockTitle },
                react_1.default.createElement(Typography_1.default, { className: classes.title },
                    "ReSPECT Sections (Version ",
                    currentVersion,
                    ")"),
                react_1.default.createElement(Tooltip_1.default, { title: "Print" },
                    react_1.default.createElement(IconButton_1.default, { className: classes.printButton, onClick: function () { return pdfTool_1.default(versionInfo, patientInfo); } },
                        react_1.default.createElement(Print_1.default, null)))),
            isLoading
                ?
                    react_1.default.createElement("div", { className: classes.blockLoading },
                        react_1.default.createElement(Typography_1.default, null, "Loading..."))
                :
                    react_1.default.createElement(Paper_1.default, { className: classes.root },
                        react_1.default.createElement("div", { className: classes.tableWrapper },
                            react_1.default.createElement(Table_1.default, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                                react_1.default.createElement(TableHeadBlock_1.default, null),
                                react_1.default.createElement(SectionsInfo_1.default, { sections: sections_1.default, versionInfo: versionInfo, toggleMode: toggleMode, currentVersion: currentVersion }))))));
    };
    return CurrentVersionBlock;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        patientInfo: get_1.default(state, 'custom.currentPatient.patientInfo.data', null),
        versionInfo: get_1.default(state, 'custom.versionsServerInfo.version', null),
        isLoading: get_1.default(state, 'custom.versionsServerInfo.loading', null),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(CurrentVersionBlock));
