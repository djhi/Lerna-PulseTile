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
var react_router_redux_1 = require("react-router-redux");
var styles_1 = require("@material-ui/core/styles");
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var ArrowBack_1 = __importDefault(require("@material-ui/icons/ArrowBack"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var pulsetile_logo_png_1 = __importDefault(require("../../../images/pulsetile-logo.png"));
var AdvancedUserSearch_1 = __importDefault(require("../../../../core/common/Topbar/fragments/AdvancedUserSearch"));
var UserSearch_1 = __importDefault(require("../../../../core/common/Topbar/fragments/UserSearch"));
var ContrastMode_1 = __importDefault(require("../../../features/ContrastMode"));
var UserPanelButton_1 = __importDefault(require("./UserPanelButton"));
var userSearchAction_1 = require("../../../../core/actions/userSearchAction");
var styles = function (theme) {
    var _a, _b, _c;
    return ({
        topPart: {
            display: "flex",
            backgroundColor: "white",
            justifyContent: "space-around",
            minHeight: 52,
            padding: 0,
        },
        backButtonItem: {
            display: "inline-flex",
            position: "relative",
            minHeight: 52,
            minWidth: 52,
            backgroundColor: theme.palette.mainColor,
            justifyContent: "center",
            alignItems: "center",
        },
        homeButton: {
            color: theme.palette.paperColor,
        },
        mainLogoItem: {
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 9,
        },
        image: {
            width: "auto",
            cursor: "pointer",
        },
        nhsLogo: (_a = {},
            _a[theme.breakpoints.only('xs')] = {
                display: "none",
            },
            _a.width = "auto",
            _a.maxWidth = "100%",
            _a.marginRight = 24,
            _a),
        rightBlockItem: {
            display: "inline-flex",
            position: "relative",
            minHeight: 54,
            minWidth: 54,
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "1px solid " + theme.palette.borderColor,
            backgroundColor: theme.palette.paperColor,
            '&:hover': {
                backgroundColor: theme.palette.secondaryMainColor,
            },
            '&:active': {
                backgroundColor: theme.palette.secondaryMainColor,
            },
            '&:hover button': {
                color: theme.palette.paperColor,
            },
            '&:active button': {
                color: theme.palette.paperColor,
            },
            '&:hover a': {
                color: theme.palette.paperColor,
            },
            '&:active a': {
                color: theme.palette.paperColor,
            },
        },
        rightBlockButton: {
            color: theme.palette.topbarButton,
            '&:hover': {
                color: theme.palette.paperColor,
            },
        },
        emptyBlock: {
            flexGrow: 1,
        },
        userSearchBlock: (_b = {},
            _b[theme.breakpoints.down('sm')] = {
                display: "none",
            },
            _b.display = 'flex',
            _b.flexDirection = 'row',
            _b.marginRight = 25,
            _b),
        userSearchBlockMobile: (_c = {},
            _c[theme.breakpoints.up('md')] = {
                display: "none",
            },
            _c.display = 'flex',
            _c.flexDirection = 'row',
            _c.justifyContent = "space-between",
            _c.backgroundColor = theme.palette.paperColor,
            _c.minHeight = 52,
            _c.padding = 10,
            _c)
    });
};
/**
 * This component returns Top part of Helm Topbar
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var TopPart = /** @class */ (function (_super) {
    __extends(TopPart, _super);
    function TopPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goHomePage = function () {
            _this.props.removeUserSearch();
            window.location.replace('/#/');
        };
        return _this;
    }
    TopPart.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, location = _a.location, goBack = _a.goBack, advancedSearchInfo = _a.advancedSearchInfo, clinicalQueryInfo = _a.clinicalQueryInfo;
        var pathname = get_1.default(location, 'pathname', null);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Toolbar_1.default, { className: classes.topPart },
                (pathname !== '/charts' && pathname !== '/') &&
                    react_1.default.createElement("div", { className: classes.backButtonItem },
                        react_1.default.createElement(Tooltip_1.default, { title: "Home" },
                            react_1.default.createElement(IconButton_1.default, { id: "icon-home", "aria-label": "Home", className: classes.homeButton, onClick: function () { return goBack(); } },
                                react_1.default.createElement(ArrowBack_1.default, null)))),
                react_1.default.createElement("div", { className: classes.mainLogoItem },
                    react_1.default.createElement(CardMedia_1.default, { id: "logo-image", className: classes.image, component: "img", alt: "Pulse Tile", height: "38px", image: pulsetile_logo_png_1.default, title: "Pulse Tile", onClick: function () { return _this.goHomePage(); } })),
                react_1.default.createElement("div", { className: classes.emptyBlock }),
                (localStorage.getItem('role') === 'IDCR') &&
                    react_1.default.createElement("div", { className: classes.userSearchBlock },
                        react_1.default.createElement(AdvancedUserSearch_1.default, null),
                        (!advancedSearchInfo && !clinicalQueryInfo) && react_1.default.createElement(UserSearch_1.default, { location: location })),
                react_1.default.createElement(ContrastMode_1.default, { classes: classes }),
                react_1.default.createElement(UserPanelButton_1.default, { classes: classes })),
            react_1.default.createElement(Toolbar_1.default, { className: classes.userSearchBlockMobile },
                react_1.default.createElement(AdvancedUserSearch_1.default, null),
                (!advancedSearchInfo && !clinicalQueryInfo) && react_1.default.createElement(UserSearch_1.default, { location: location }))));
    };
    return TopPart;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        advancedSearchInfo: get_1.default(state, 'custom.advancedSearch.data', null),
        clinicalQueryInfo: get_1.default(state, 'custom.clinicalQuery.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        removeUserSearch: function () {
            dispatch(userSearchAction_1.userSearchAction.remove());
        },
        goBack: function () {
            dispatch(react_router_redux_1.goBack());
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(TopPart));
