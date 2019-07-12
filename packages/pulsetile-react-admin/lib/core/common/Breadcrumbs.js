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
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var userSearchAction_1 = require("../actions/userSearchAction");
var styles = function (theme) { return ({
    breadcrumbsBlock: {
        display: "flex",
        height: 48,
        alignItems: "center",
        border: "1px solid " + theme.palette.borderColor,
        paddingLeft: 10,
        backgroundColor: "#fff",
    },
    separator: {
        width: 0,
        height: 0,
        borderTop: "5px solid transparent",
        borderBottom: "5px solid transparent",
        borderLeft: "5px solid black",
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
    },
    link: {
        textDecoration: "none",
        color: theme.palette.secondaryMainColor,
        cursor: "pointer",
    },
    breadcrumbsItem: {
        display: "flex",
    }
}); };
/**
 * This component returns breadcrumbs block
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var Breadcrumbs = /** @class */ (function (_super) {
    __extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goHomePage = function () {
            _this.props.removeUserSearch();
            window.location.replace('/#/');
        };
        return _this;
    }
    Breadcrumbs.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, resource = _a.resource;
        return (react_1.default.createElement("div", { className: classes.breadcrumbsBlock },
            react_1.default.createElement(Typography_1.default, { className: classes.link, onClick: function () { return _this.goHomePage(); } }, "Home"),
            resource.map(function (item, key) {
                return (react_1.default.createElement("div", { key: key, className: classes.breadcrumbsItem },
                    react_1.default.createElement("div", { className: classes.separator }),
                    item.isActive
                        ?
                            react_1.default.createElement(Typography_1.default, null,
                                react_1.default.createElement(react_router_dom_1.Link, { to: item.url, className: classes.link, "aria-label": item.title, color: "inherit" }, item.title))
                        : (item.onClickAction
                            ? react_1.default.createElement(Typography_1.default, { className: classes.link, onClick: function () { return item.onClickAction(); } }, item.title)
                            : react_1.default.createElement(Typography_1.default, null, item.title))));
            })));
    };
    return Breadcrumbs;
}(react_1.Component));
;
var mapDispatchToProps = function (dispatch) {
    return {
        removeUserSearch: function () {
            dispatch(userSearchAction_1.userSearchAction.remove());
        },
    };
};
exports.default = styles_1.withStyles(styles)(react_redux_1.connect(null, mapDispatchToProps)(Breadcrumbs));
