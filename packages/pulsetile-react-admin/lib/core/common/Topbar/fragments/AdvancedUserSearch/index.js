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
var get_1 = __importDefault(require("lodash/get"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var LineWeight_1 = __importDefault(require("@material-ui/icons/LineWeight"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var ArrowDropDown_1 = __importDefault(require("@material-ui/icons/ArrowDropDown"));
var ArrowDropUp_1 = __importDefault(require("@material-ui/icons/ArrowDropUp"));
var KeyboardArrowDown_1 = __importDefault(require("@material-ui/icons/KeyboardArrowDown"));
var KeyboardArrowUp_1 = __importDefault(require("@material-ui/icons/KeyboardArrowUp"));
var userSearchAction_1 = require("../../../../actions/userSearchAction");
var advancedSearchAction_1 = require("../../../../actions/advancedSearchAction");
var clinicalQueryAction_1 = require("../../../../actions/clinicalQueryAction");
var AdvancedSearchDialog_1 = __importDefault(require("./AdvancedSearchDialog"));
var ClinicalQueryDialog_1 = __importDefault(require("./ClinicalQueryDialog"));
var styles = function (theme) { return ({
    paper: {
        display: "block",
        width: 300,
        height: 'auto',
        margin: 0,
        padding: 10,
        borderRadius: 0,
    },
    advancedSearchBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        marginRight: 10,
        backgroundColor: theme.palette.borderColor,
    },
    advancedSearchIcon: {
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: 0,
        height: 35,
        width: 60,
        marginRight: 10,
    },
    openCloseIcon: {
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: 0,
        height: 35,
        width: 35,
        marginLeft: 10,
    },
    title: {
        padding: 5,
        fontSize: 16,
        fontWeight: 800,
    },
    item: {
        height: 20,
        paddingTop: 10,
        cursor: "pointer",
    }
}); };
var AdvancedUserSearch = /** @class */ (function (_super) {
    __extends(AdvancedUserSearch, _super);
    function AdvancedUserSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            isAdvancedSearchOpen: false,
            isClinicalQueryOpen: false,
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
        _this.openBasicSearch = function () {
            _this.props.removeAdvancedSearch();
            _this.props.removeClinicalQuery();
            _this.popoverClose();
        };
        _this.toggleAdvancedSearch = function () {
            _this.setState({ isAdvancedSearchOpen: !_this.state.isAdvancedSearchOpen }, function () { return _this.popoverClose(); });
        };
        _this.toggleClinicalQuery = function () {
            _this.setState({ isClinicalQueryOpen: !_this.state.isClinicalQueryOpen }, function () { return _this.popoverClose(); });
        };
        return _this;
    }
    AdvancedUserSearch.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, advancedSearchInfo = _a.advancedSearchInfo, clinicalQueryInfo = _a.clinicalQueryInfo;
        var _b = this.state, anchorEl = _b.anchorEl, isAdvancedSearchOpen = _b.isAdvancedSearchOpen, isClinicalQueryOpen = _b.isClinicalQueryOpen;
        var open = Boolean(anchorEl);
        var advancedSearchTitle = get_1.default(advancedSearchInfo, 'title', null);
        var clinicalQueryTitle = get_1.default(clinicalQueryInfo, 'title', null);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: (advancedSearchInfo || clinicalQueryInfo) ? classes.advancedSearchBlock : null },
                react_1.default.createElement(Tooltip_1.default, { title: "Advanced Search" },
                    react_1.default.createElement(IconButton_1.default, { "aria-label": "Advanced Search", className: classes.advancedSearchIcon, onClick: function (e) { return _this.popoverOpen(e); } },
                        react_1.default.createElement(LineWeight_1.default, null),
                        open ? react_1.default.createElement(ArrowDropDown_1.default, null) : react_1.default.createElement(ArrowDropUp_1.default, null))),
                advancedSearchInfo &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.title }, advancedSearchTitle),
                        react_1.default.createElement(Tooltip_1.default, { title: "Open" },
                            react_1.default.createElement(IconButton_1.default, { "aria-label": "Advanced Search", className: classes.openCloseIcon, onClick: function () { return _this.toggleAdvancedSearch(); } }, isAdvancedSearchOpen ? react_1.default.createElement(KeyboardArrowDown_1.default, null) : react_1.default.createElement(KeyboardArrowUp_1.default, null)))),
                clinicalQueryInfo &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.title }, clinicalQueryTitle),
                        react_1.default.createElement(Tooltip_1.default, { title: "Open" },
                            react_1.default.createElement(IconButton_1.default, { "aria-label": "Advanced Search", className: classes.openCloseIcon, onClick: function () { return _this.toggleClinicalQuery(); } }, isClinicalQueryOpen ? react_1.default.createElement(KeyboardArrowDown_1.default, null) : react_1.default.createElement(KeyboardArrowUp_1.default, null))))),
            react_1.default.createElement(Popover_1.default, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: function () { return _this.popoverClose(); }, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
                react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.title }, "SEARCH OPTIONS"),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement(Typography_1.default, { className: classes.item, onClick: function () { return _this.openBasicSearch(); } }, "Patient Search - Basic"),
                react_1.default.createElement(Typography_1.default, { className: classes.item, onClick: function () { return _this.toggleAdvancedSearch(); } }, "Patient Search - Advanced"),
                react_1.default.createElement(Typography_1.default, { className: classes.item, onClick: function () { return _this.toggleClinicalQuery(); } }, "Clinical Query")),
            react_1.default.createElement(AdvancedSearchDialog_1.default, { isOpen: isAdvancedSearchOpen, onClose: this.toggleAdvancedSearch }),
            react_1.default.createElement(ClinicalQueryDialog_1.default, { isOpen: isClinicalQueryOpen, onClose: this.toggleClinicalQuery })));
    };
    return AdvancedUserSearch;
}(react_1.Component));
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
        removeAdvancedSearch: function () {
            dispatch(advancedSearchAction_1.advancedSearchAction.remove());
        },
        removeClinicalQuery: function () {
            dispatch(clinicalQueryAction_1.clinicalQueryAction.remove());
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(AdvancedUserSearch));
