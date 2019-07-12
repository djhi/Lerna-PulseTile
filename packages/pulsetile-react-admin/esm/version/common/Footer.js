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
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import { contrastModeAction } from "../actions/contrastModeAction";
import footerLogo from "../../core/images/ripple-foundation-logo-footer.png";
var styles = function (theme) {
    var _a;
    return ({
        footerBlock: (_a = {},
            _a[theme.breakpoints.only('xs')] = {
                display: 'none',
            },
            _a.display = "flex",
            _a.flexDirection = "row",
            _a.alignItems = "center",
            _a.justifyContent = "space-between",
            _a.flex = "0 0 auto",
            _a.borderTop = "1px solid " + theme.palette.borderColor,
            _a.height = 54,
            _a.boxSizing = "border-box",
            _a.color = "#5c5c5c",
            _a.backgroundColor = "#fff",
            _a.paddingTop = 12,
            _a.paddingBottom = 13,
            _a.paddingLeft = 14,
            _a.paddingRight = 14,
            _a),
        copyright: {
            fontSize: 12,
        },
        contrastModeLink: {
            marginLeft: 5,
            fontSize: 12,
            color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.mainColor,
            textDecoration: "none",
        },
        footerLogo: {
            width: "auto",
            maxWidth: "100%",
        },
        emptyBlock: {
            flexGrow: 1,
        },
    });
};
/**
 * This component returns custom theme footer
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContrastMode: _this.props.contrastMode,
        };
        _this.toggleContrastMode = function (e) {
            e.preventDefault();
            _this.setState(function (state) { return ({ isContrastMode: !_this.state.isContrastMode }); }, function () { return _this.props.contrastModeAction(_this.state.isContrastMode); });
        };
        return _this;
    }
    Footer.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var isContrastMode = this.state.isContrastMode;
        var linkText = isContrastMode ? "Disable High Contrast Mode" : "Enable High Contrast Mode";
        var currentYear = new Date().getFullYear();
        return (React.createElement("footer", { className: classes.footerBlock },
            React.createElement(Typography, { className: classes.copyright },
                "Copyright ",
                currentYear,
                " Ripple Foundation CIC Ltd. All rights reserved."),
            React.createElement(Typography, null,
                React.createElement(Link, { to: "/", className: classes.contrastModeLink, onClick: function (e) { return _this.toggleContrastMode(e); } }, linkText)),
            React.createElement("div", { className: classes.emptyBlock }),
            React.createElement(Link, { to: "/" },
                React.createElement(CardMedia, { className: classes.footerLogo, component: "img", alt: "Pulse Tile", height: "29px", image: footerLogo, title: "Pulse Tile" }))));
    };
    return Footer;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        contrastMode: state.custom.contrastMode.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        contrastModeAction: function (mode) {
            dispatch(contrastModeAction.request(mode));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Footer));
