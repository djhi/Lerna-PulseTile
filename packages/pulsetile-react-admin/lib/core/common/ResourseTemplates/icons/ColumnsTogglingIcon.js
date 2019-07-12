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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var styles_1 = require("@material-ui/core/styles");
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Settings_1 = __importDefault(require("@material-ui/icons/Settings"));
var ArrowDropDown_1 = __importDefault(require("@material-ui/icons/ArrowDropDown"));
var ArrowDropUp_1 = __importDefault(require("@material-ui/icons/ArrowDropUp"));
var ColumnsTogglePopover_1 = __importDefault(require("../popovers/ColumnsTogglePopover"));
var styles = function (theme) { return ({
    icon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        borderRadius: 0,
        width: 'auto',
        height: 38,
    },
}); };
var ColumnsTogglingIcon = /** @class */ (function (_super) {
    __extends(ColumnsTogglingIcon, _super);
    function ColumnsTogglingIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.popoverOpen = function (event) {
            _this.setState({
                anchorEl: event.currentTarget,
            });
        };
        _this.popoverClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        return _this;
    }
    ColumnsTogglingIcon.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, hasColumnsToggling = _a.hasColumnsToggling, hiddenColumns = _a.hiddenColumns;
        var anchorEl = this.state.anchorEl;
        if (!hasColumnsToggling) {
            return null;
        }
        var open = Boolean(anchorEl);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Tooltip_1.default, { title: "Table" },
                react_1.default.createElement(IconButton_1.default, { className: classes.icon, onClick: function (e) { return _this.popoverOpen(e); } },
                    react_1.default.createElement(Settings_1.default, null),
                    open ? react_1.default.createElement(ArrowDropDown_1.default, null) : react_1.default.createElement(ArrowDropUp_1.default, null))),
            react_1.default.createElement(ColumnsTogglePopover_1.default, __assign({ anchorEl: anchorEl, open: open, handleClose: this.popoverClose, hiddenColumns: hiddenColumns }, this.props))));
    };
    return ColumnsTogglingIcon;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(ColumnsTogglingIcon);
