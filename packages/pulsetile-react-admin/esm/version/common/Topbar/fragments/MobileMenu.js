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
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
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
    return (React.createElement("div", { className: classes.menuButtonBlock, onClick: function () { return setSidebarVisibility(!isSidebarOpen); } },
        React.createElement(Tooltip, { title: isSidebarOpen ? 'Menu' : 'Close' },
            React.createElement(IconButton, { className: classes.mobileMenuButton, "aria-haspopup": "true", color: "inherit", "aria-label": isSidebarOpen ? 'Menu' : 'Close' }, isSidebarOpen ? React.createElement(MenuIcon, null) : React.createElement(CloseIcon, null))),
        React.createElement(Typography, { variant: "h1", className: classes.menuButtonTitle }, "Menu")));
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
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes.menuAndBannerMobile },
                React.createElement(MenuButtonMobile, { classes: classes, setSidebarVisibility: setSidebarVisibility, isSidebarOpen: isSidebarOpen }),
                !isPageHasPatientBanner && React.createElement(Typography, { variant: "h6", className: classes.patientName }, get(patientInfo, 'name', null)),
                !isPageHasPatientBanner && React.createElement(FontAwesomeIcon, { icon: faSortDown, size: "1x", className: classes.iconArrowDown, onClick: function () { return _this.toggleMobileBanner(); } })),
            (isMobileBannerOpened && !isPageHasPatientBanner) &&
                React.createElement("div", { className: classes.patientBannerMobile },
                    React.createElement(Typography, { variant: "body2", className: classes.bannerRow },
                        React.createElement("span", null, "Doctor: "),
                        get(patientInfo, 'gpName', null)),
                    React.createElement(Typography, { variant: "body2", className: classes.bannerRow },
                        React.createElement("span", null, "D.O.B.: "),
                        moment(get(patientInfo, 'dateOfBirth', null)).format('DD-MMM-YYYY')),
                    React.createElement(Typography, { variant: "body2", className: classes.bannerRow },
                        React.createElement("span", null, "Phone: "),
                        get(patientInfo, 'phone', null)),
                    React.createElement(Typography, { variant: "body2", className: classes.bannerRow },
                        React.createElement("span", null, "Gender: "),
                        get(patientInfo, 'gender', null)),
                    React.createElement(Typography, { variant: "body2", className: classes.bannerRow },
                        React.createElement("span", null, "NHS No.: "),
                        get(patientInfo, 'nhsNumber', null)),
                    React.createElement(Typography, { variant: "body2", className: classes.bannerRow },
                        React.createElement("span", null, "Address: "),
                        get(patientInfo, 'address', null)))));
    };
    return MobileMenu;
}(Component));
export default withStyles(styles)(MobileMenu);
