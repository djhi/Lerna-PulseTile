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
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var versionsServerAction_1 = require("../../../../actions/ReSPECT/versionsServerAction");
var modalOpenAction_1 = require("../../../../actions/ReSPECT/modalOpenAction");
var ListBlock_1 = __importDefault(require("./ListBlock"));
var config_1 = require("../../../../../core/pages/PatientSummary/config");
var theme_config_1 = require("../../../../config/theme.config");
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
        var isOldDesign = get_1.default(theme_config_1.themeCommonElements, 'isOldDesign', false);
        var menuHasChevrons = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
        if (Object.values(showHeadings).indexOf('respect') === -1) {
            return null;
        }
        return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 6, lg: 3 },
            react_1.default.createElement(Card_1.default, { className: classes.card },
                react_1.default.createElement("div", { className: classes.topBlock, onClick: function () { return history.push('/respect'); } },
                    !isOldDesign && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faNotesMedical, size: "2x", className: classes.icon }),
                    react_1.default.createElement("h1", { className: classes.mainHeading },
                        react_1.default.createElement(Typography_1.default, { gutterBottom: true, className: classes.title }, "ReSPECT"),
                        menuHasChevrons && react_1.default.createElement(ChevronRight_1.default, null))),
                (showMode === config_1.SHOW_ALL || !showMode) &&
                    react_1.default.createElement(ListBlock_1.default, { loading: loading, classes: classes, items: versionsServerInfo, history: history, toggleRespectModal: toggleRespectModal }))));
    };
    return RespectSummaryPanel;
}(react_1.Component));
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
            dispatch(versionsServerAction_1.versionsServerAction.request());
        },
        toggleRespectModal: function () {
            dispatch(modalOpenAction_1.modalOpenAction.request());
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(RespectSummaryPanel));
