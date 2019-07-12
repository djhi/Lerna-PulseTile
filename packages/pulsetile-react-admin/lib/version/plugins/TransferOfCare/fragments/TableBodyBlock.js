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
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var HighlightOff_1 = __importDefault(require("@material-ui/icons/HighlightOff"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var PopoverWithDetails_1 = __importDefault(require("./PopoverWithDetails"));
var styles = function (theme) { return ({
    icon: {
        color: theme.palette.dangerColor,
    },
}); };
var TableBodyBlock = /** @class */ (function (_super) {
    __extends(TableBodyBlock, _super);
    function TableBodyBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            popoverItem: null,
        };
        _this.handlePopoverOpen = function (event, item) {
            _this.setState({
                anchorEl: event.currentTarget,
                popoverItem: item,
            });
        };
        _this.handlePopoverClose = function () {
            _this.setState({
                anchorEl: null,
                popoverItem: null,
            });
        };
        return _this;
    }
    TableBodyBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, removeItem = _a.removeItem, list = _a.list, details = _a.details, loadingDetails = _a.loadingDetails;
        var _b = this.state, anchorEl = _b.anchorEl, popoverItem = _b.popoverItem;
        return (react_1.default.createElement(TableBody_1.default, null, list.map(function (item, key) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(TableRow_1.default, { key: key, onMouseEnter: function (e) { return _this.handlePopoverOpen(e, item); }, onMouseLeave: _this.handlePopoverClose },
                    react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                        react_1.default.createElement(Typography_1.default, null, item.name)),
                    react_1.default.createElement(TableCell_1.default, { align: "right" },
                        react_1.default.createElement(Typography_1.default, null, item.type)),
                    react_1.default.createElement(TableCell_1.default, { align: "right" },
                        react_1.default.createElement(Typography_1.default, null, item.date)),
                    react_1.default.createElement(TableCell_1.default, { align: "right" },
                        react_1.default.createElement(Typography_1.default, null, item.source)),
                    react_1.default.createElement(TableCell_1.default, { align: "right" },
                        react_1.default.createElement(Tooltip_1.default, { title: "Clean Search", disableHoverListener: true },
                            react_1.default.createElement(IconButton_1.default, { className: classes.icon, "aria-haspopup": "true", color: "inherit", onClick: function () { return removeItem(item.sourceId); } },
                                react_1.default.createElement(HighlightOff_1.default, null))))),
                react_1.default.createElement(PopoverWithDetails_1.default, { anchorEl: anchorEl, handlePopoverClose: _this.handlePopoverClose, popoverItem: popoverItem, details: details, loadingDetails: loadingDetails })));
        })));
    };
    return TableBodyBlock;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        details: get_1.default(state, 'custom.transferOfCare.details', []),
        loadingDetails: get_1.default(state, 'custom.transferOfCare.loadingDetails', false),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(TableBodyBlock));
