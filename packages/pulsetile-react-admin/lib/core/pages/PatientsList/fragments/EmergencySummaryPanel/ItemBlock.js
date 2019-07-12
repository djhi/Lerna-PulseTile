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
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Typography/index"));
var styles = function (theme) { return ({
    expansionPanel: {
        height: "49px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    currentExpansionPanel: {
        margin: "0px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    expansionPanelSummary: {
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 16,
        '& > div': {
            margin: "0px !important",
            marginTop: "0px",
            marginBottom: "0px",
        }
    },
    emptyBlock: {
        flexGrow: 1,
    },
    expandIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expandBlockIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 35,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expansionTypography: {
        paddingTop: 10,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    expansionPanelDetails: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    itemBlock: {
        margin: 10,
    },
    blockContent: {
        marginTop: 5,
    },
    showAll: {
        color: theme.palette.secondaryMainColor,
        fontWeight: 800,
        cursor: 'pointer',
    }
}); };
var ItemBlock = /** @class */ (function (_super) {
    __extends(ItemBlock, _super);
    function ItemBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isShowAll: false,
        };
        _this.toggleShowAll = function () {
            _this.setState({
                isShowAll: !_this.state.isShowAll,
            });
        };
        _this.getShortRow = function (list) {
            var result = [];
            for (var i = 0; i < 4; i++) {
                var item = list[i];
                result.push(item);
            }
            return result;
        };
        return _this;
    }
    ItemBlock.prototype.componentDidMount = function () {
        var list = this.props.list;
        if (list.length > 4) {
            this.setState({
                isShowAll: true,
            });
        }
    };
    ItemBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, list = _a.list, title = _a.title, isLoading = _a.isLoading;
        var isShowAll = this.state.isShowAll;
        var shortRow = (list.length > 4) ? this.getShortRow(list) : list;
        return (react_1.default.createElement("div", { className: classes.itemBlock },
            react_1.default.createElement(index_2.default, { variant: "h3" }, title),
            isLoading && react_1.default.createElement(index_2.default, { className: classes.blockContent }, "Loading..."),
            isShowAll
                ?
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(index_2.default, { className: classes.blockContent }, list.join(', ')),
                        (list.length > 4) && react_1.default.createElement(index_2.default, { className: classes.showAll, onClick: function () { return _this.toggleShowAll(); } }, "Hide"))
                :
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(index_2.default, { className: classes.blockContent }, shortRow.join(', ')),
                        (list.length > 4) && react_1.default.createElement(index_2.default, { className: classes.showAll, onClick: function () { return _this.toggleShowAll(); } }, "ShowAll"))));
    };
    return ItemBlock;
}(react_1.Component));
exports.default = index_1.withStyles(styles)(ItemBlock);
