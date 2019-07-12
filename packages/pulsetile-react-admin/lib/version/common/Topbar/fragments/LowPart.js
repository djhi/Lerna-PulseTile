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
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var PageTitle_1 = __importDefault(require("../../../../core/common/Topbar/fragments/PageTitle"));
var PatientBanner_1 = __importDefault(require("../../../../core/common/Topbar/fragments/PatientBanner"));
var MobileMenu_1 = __importDefault(require("./MobileMenu"));
var currentPatientAction_1 = require("../../../../core/actions/currentPatientAction");
var styles = function (theme) {
    var _a;
    return ({
        lowPart: {
            display: "flex",
            minHeight: "auto",
            flexDirection: "column",
            padding: 0,
        },
        menuAndBanner: (_a = {},
            _a[theme.breakpoints.down('sm')] = {
                display: "none",
            },
            _a.display = "flex",
            _a.width = "100%",
            _a.minHeight = "auto",
            _a.border = "1px solid " + theme.palette.borderColor,
            _a.padding = 0,
            _a.backgroundColor = theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
            _a.justifyContent = "space-between",
            _a),
        menuButtonBlock: {
            display: "inline-flex",
            position: "relative",
            minWidth: 238,
            minHeight: 90,
            borderRight: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : "1px solid " + theme.palette.borderColor,
            justifyContent: "center",
            alignItems: "center",
        },
        menuButton: {
            borderRadius: theme.isRectangleButtons ? 0 : 25,
            minWidth: 64,
            color: theme.palette.fontColor,
            textTransform: "none",
            backgroundColor: theme.palette.tableHeadColor,
            fontSize: 16,
            fontWeight: 600,
            '&:hover': {
                backgroundColor: theme.isOldDesign ? theme.palette.paperColor : theme.palette.secondaryMainColor,
                color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
            },
            '&:active': {
                backgroundColor: theme.isOldDesign ? theme.palette.paperColor : theme.palette.secondaryMainColor,
                color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
            },
        },
        title: {
            display: "block",
            width: "100%",
            flexGrow: 1,
            color: theme.palette.paperColor,
            backgroundColor: theme.palette.mainColor,
            textAlign: "center",
            paddingTop: 5,
            paddingBottom: 5,
            fontWeight: 800,
        },
        patientInfo: {
            color: theme.isOldDesign ? theme.palette.paperColor : theme.palette.fontColor,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 14,
            paddingRight: 14,
            margin: 0,
        },
        gridBlock: {
            padding: "0px !important",
        },
        patientNameBlock: {
            marginBottom: 5,
        },
        keyName: {
            color: theme.isOldDesign ? theme.palette.paperColor : theme.palette.fontColor,
        }
    });
};
/**
 * This component returns button which toggle sidebar menu
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {func}    setSidebarVisibility
 * @param {boolean} isSidebarOpen
 * @constructor
 */
var MenuButton = function (_a) {
    var classes = _a.classes, setSidebarVisibility = _a.setSidebarVisibility, isSidebarOpen = _a.isSidebarOpen;
    return (react_1.default.createElement("div", { className: classes.menuButtonBlock },
        react_1.default.createElement(Button_1.default, { "aria-label": !isSidebarOpen ? 'Menu' : 'Close', variant: "contained", color: "primary", className: classes.menuButton, onClick: function () { return setSidebarVisibility(!isSidebarOpen); } },
            !isSidebarOpen ? react_1.default.createElement(Menu_1.default, null) : react_1.default.createElement(Close_1.default, null),
            !isSidebarOpen ? 'Menu' : 'Close')));
};
/**
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} location
 * @return {boolean}
 */
function pageHasTitle(location) {
    var pathName = location.pathname;
    var pagesWithTitle = [
        '/charts',
    ];
    return pagesWithTitle.indexOf(pathName) !== -1;
}
exports.pageHasTitle = pageHasTitle;
/**
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} location
 * @return {boolean}
 */
function pageHasPatientBanner(location) {
    var pathName = location.pathname;
    var pathArray = pathName.split('/');
    var currentResource = get_1.default(pathArray, [1], null);
    var pagesWithTitle = [
        'charts',
        'patients',
        'business'
    ];
    return pagesWithTitle.indexOf(currentResource) !== -1 || (pathName === '/' && localStorage.getItem('role') === 'IDCR');
}
exports.pageHasPatientBanner = pageHasPatientBanner;
/**
 * This component returns low part of Showcase TopBar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var LowPart = /** @class */ (function (_super) {
    __extends(LowPart, _super);
    function LowPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPart.prototype.componentDidMount = function () {
        if (localStorage.getItem('patientId')) {
            this.props.getCurrentPatientAction();
        }
    };
    LowPart.prototype.componentWillMount = function () {
        this.props.setSidebarVisibility(true);
    };
    LowPart.prototype.render = function () {
        var _a = this.props, classes = _a.classes, isSidebarOpen = _a.isSidebarOpen, setSidebarVisibility = _a.setSidebarVisibility, location = _a.location, patientInfo = _a.patientInfo;
        var isPageHasTitle = pageHasTitle(location);
        var isPageHasPatientBanner = pageHasPatientBanner(location);
        return (react_1.default.createElement(Toolbar_1.default, { className: classes.lowPart },
            isPageHasTitle &&
                react_1.default.createElement(PageTitle_1.default, { classes: classes, location: location }),
            react_1.default.createElement("div", { className: classes.menuAndBanner },
                react_1.default.createElement(MenuButton, { classes: classes, setSidebarVisibility: setSidebarVisibility, isSidebarOpen: isSidebarOpen }),
                !isPageHasPatientBanner &&
                    react_1.default.createElement(PatientBanner_1.default, { location: location, classes: classes, patientInfo: patientInfo })),
            react_1.default.createElement(MobileMenu_1.default, { isPageHasPatientBanner: isPageHasPatientBanner, setSidebarVisibility: setSidebarVisibility, isSidebarOpen: isSidebarOpen, patientInfo: patientInfo })));
    };
    return LowPart;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        patientInfo: get_1.default(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getCurrentPatientAction: function () {
            dispatch(currentPatientAction_1.currentPatientAction.request());
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(LowPart));
