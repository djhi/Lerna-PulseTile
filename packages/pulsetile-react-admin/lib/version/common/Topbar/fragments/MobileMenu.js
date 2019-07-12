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
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var styles = function (theme) {
    var _a;
    return ({
        menuAndBannerMobile: (_a = {},
            _a[theme.breakpoints.up('md')] = {
                display: "none",
            },
            _a.display = "flex",
            _a.width = "100%",
            _a.minHeight = "auto",
            _a.flexDirection = "row",
            _a.padding = 0,
            _a.justifyContent = "space-between",
            _a.backgroundColor = theme.palette.secondaryMainColor,
            _a),
        menuButtonBlock: {
            display: 'flex',
            flexDirection: 'row',
            border: "1px solid " + theme.palette.paperColor,
            height: 34,
            margin: 7,
            borderRadius: 0,
            paddingRight: 10,
            boxSizing: 'border-box',
        },
        menuButtonTitle: {
            paddingTop: 7,
            cursor: "pointer",
        },
        mobileMenuButton: {
            color: theme.palette.paperColor,
            height: 'auto',
        },
        iconArrowDown: {
            color: theme.palette.paperColor,
            paddingTop: 15,
            paddingRight: 15,
        },
        patientBannerMobile: {
            paddingLeft: 15,
            backgroundColor: theme.palette.paperColor,
            width: "100%",
            minHeight: "auto",
            '& span': {
                color: theme.palette.paperColor,
            },
        },
        patientName: {
            paddingTop: 15,
            color: theme.palette.paperColor,
        },
        bannerRow: {
            marginBottom: 5,
        },
    });
};
var MenuButtonMobile = function (_a) {
    var classes = _a.classes, setSidebarVisibility = _a.setSidebarVisibility, isSidebarOpen = _a.isSidebarOpen;
    return (react_1.default.createElement("div", { className: classes.menuButtonBlock, onClick: function () { return setSidebarVisibility(!isSidebarOpen); } },
        react_1.default.createElement(Tooltip_1.default, { title: isSidebarOpen ? 'Menu' : 'Close' },
            react_1.default.createElement(IconButton_1.default, { className: classes.mobileMenuButton, "aria-haspopup": "true", color: "inherit", "aria-label": isSidebarOpen ? 'Menu' : 'Close' }, isSidebarOpen ? react_1.default.createElement(Menu_1.default, null) : react_1.default.createElement(Close_1.default, null))),
        react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.menuButtonTitle }, "Menu")));
};
var MobileMenu = /** @class */ (function (_super) {
    __extends(MobileMenu, _super);
    function MobileMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMobileBannerOpened: false,
        };
        _this.toggleMobileBanner = function () {
            _this.setState({
                isMobileBannerOpened: !_this.state.isMobileBannerOpened,
            });
        };
        return _this;
    }
    MobileMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, setSidebarVisibility = _a.setSidebarVisibility, isSidebarOpen = _a.isSidebarOpen, patientInfo = _a.patientInfo, isPageHasPatientBanner = _a.isPageHasPatientBanner;
        var isMobileBannerOpened = this.state.isMobileBannerOpened;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: classes.menuAndBannerMobile },
                react_1.default.createElement(MenuButtonMobile, { classes: classes, setSidebarVisibility: setSidebarVisibility, isSidebarOpen: isSidebarOpen }),
                !isPageHasPatientBanner && react_1.default.createElement(Typography_1.default, { variant: "h6", className: classes.patientName }, get_1.default(patientInfo, 'name', null)),
                !isPageHasPatientBanner && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSortDown, size: "1x", className: classes.iconArrowDown, onClick: function () { return _this.toggleMobileBanner(); } })),
            (isMobileBannerOpened && !isPageHasPatientBanner) &&
                react_1.default.createElement("div", { className: classes.patientBannerMobile },
                    react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.bannerRow },
                        react_1.default.createElement("span", null, "Doctor: "),
                        get_1.default(patientInfo, 'gpName', null)),
                    react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.bannerRow },
                        react_1.default.createElement("span", null, "D.O.B.: "),
                        moment_1.default(get_1.default(patientInfo, 'dateOfBirth', null)).format('DD-MMM-YYYY')),
                    react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.bannerRow },
                        react_1.default.createElement("span", null, "Phone: "),
                        get_1.default(patientInfo, 'phone', null)),
                    react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.bannerRow },
                        react_1.default.createElement("span", null, "Gender: "),
                        get_1.default(patientInfo, 'gender', null)),
                    react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.bannerRow },
                        react_1.default.createElement("span", null, "NHS No.: "),
                        get_1.default(patientInfo, 'nhsNumber', null)),
                    react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.bannerRow },
                        react_1.default.createElement("span", null, "Address: "),
                        get_1.default(patientInfo, 'address', null)))));
    };
    return MobileMenu;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(MobileMenu);
