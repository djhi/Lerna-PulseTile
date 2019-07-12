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
var styles_1 = require("@material-ui/core/styles");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var ArrowDropDown_1 = __importDefault(require("@material-ui/icons/ArrowDropDown"));
var theme_config_1 = require("../../../version/config/theme.config");
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles = function (theme) { return ({
    paper: {
        display: "block",
        width: 100,
        height: 'auto',
        margin: 0,
        padding: 10,
        borderRadius: 0,
    },
    buttomBlock: {
        display: "flex",
    },
    viewButton: {
        height: 40,
        textTransform: 'capitalize',
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        backgroundColor: theme.isOldDesign ? theme.palette.paperColor : null,
        color: theme.palette.secondaryMainColor + ' !important',
        borderRadius: 0,
        '& span p': {
            fontSize: 16,
            color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.viewButton,
        },
    },
    arrowButton: {
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        borderTop: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderRight: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderBottom: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderRadius: 0,
        color: theme.palette.secondaryMainColor,
    },
    link: {
        height: 25,
        cursor: "pointer",
        paddingTop: 5,
    }
}); };
/**
 * This component returns Show button with custom styles
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func}  viewAction
 * @param {shape} record
 */
var ViewButton = /** @class */ (function (_super) {
    __extends(ViewButton, _super);
    function ViewButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.popoverOpen = function (e) {
            e.stopPropagation();
            _this.setState({
                anchorEl: e.currentTarget,
            });
        };
        _this.popoverClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        return _this;
    }
    ViewButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, viewAction = _a.viewAction, checkRedirectUrl = _a.checkRedirectUrl;
        var anchorEl = this.state.anchorEl;
        var open = Boolean(anchorEl);
        return (react_1.default.createElement("div", { className: classes.buttomBlock },
            react_1.default.createElement(Button_1.default, { "aria-label": "View", onClick: function (e) { return viewAction(e); }, className: classes.viewButton },
                react_1.default.createElement(Typography_1.default, null, "View")),
            get_1.default(theme_config_1.themeCommonElements, 'redirectToPlugin', false) &&
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ArrowDropDown_1.default, { className: classes.arrowButton, onClick: function (e) { return _this.popoverOpen(e); } }),
                    react_1.default.createElement(Popover_1.default, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: function () { return _this.popoverClose(); }, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
                        react_1.default.createElement(Typography_1.default, { className: classes.link }, "Orders"),
                        react_1.default.createElement(Divider_1.default, null),
                        react_1.default.createElement(Typography_1.default, { className: classes.link }, "Results"),
                        react_1.default.createElement(Divider_1.default, null),
                        react_1.default.createElement(Typography_1.default, { className: classes.link, onClick: function (e) { return checkRedirectUrl(e, '/vitalsigns'); } }, "Vitals"),
                        react_1.default.createElement(Divider_1.default, null),
                        react_1.default.createElement(Typography_1.default, { className: classes.link, onClick: function (e) { return checkRedirectUrl(e, '/problems'); } }, "Problems")))));
    };
    return ViewButton;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(ViewButton);
