"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var ripple_foundation_logo_footer_png_1 = __importDefault(require("../../images/ripple-foundation-logo-footer.png"));
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
        supportedBy: {
            marginRight: 10,
            fontSize: 12,
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
 * This component returns custom default footer
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var DefaultFooter = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement("footer", { className: classes.footerBlock },
        react_1.default.createElement(Typography_1.default, { className: classes.copyright }, "Transforming Usability"),
        react_1.default.createElement("div", { className: classes.emptyBlock }),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Typography_1.default, { className: classes.supportedBy }, "Supported by"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement(CardMedia_1.default, { className: classes.footerLogo, component: "img", alt: "Pulse Tile", height: "29px", image: ripple_foundation_logo_footer_png_1.default, title: "Pulse Tile" })))));
};
exports.default = styles_1.withStyles(styles)(DefaultFooter);
