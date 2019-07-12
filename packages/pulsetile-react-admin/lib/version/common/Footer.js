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
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var contrastModeAction_1 = require("../actions/contrastModeAction");
var ripple_foundation_logo_footer_png_1 = __importDefault(require("../../core/images/ripple-foundation-logo-footer.png"));
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
        return (react_1.default.createElement("footer", { className: classes.footerBlock },
            react_1.default.createElement(Typography_1.default, { className: classes.copyright },
                "Copyright ",
                currentYear,
                " Ripple Foundation CIC Ltd. All rights reserved."),
            react_1.default.createElement(Typography_1.default, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: classes.contrastModeLink, onClick: function (e) { return _this.toggleContrastMode(e); } }, linkText)),
            react_1.default.createElement("div", { className: classes.emptyBlock }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement(CardMedia_1.default, { className: classes.footerLogo, component: "img", alt: "Pulse Tile", height: "29px", image: ripple_foundation_logo_footer_png_1.default, title: "Pulse Tile" }))));
    };
    return Footer;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        contrastMode: state.custom.contrastMode.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        contrastModeAction: function (mode) {
            dispatch(contrastModeAction_1.contrastModeAction.request(mode));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(Footer));
