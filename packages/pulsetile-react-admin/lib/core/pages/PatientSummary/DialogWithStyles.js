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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var get_1 = __importDefault(require("lodash/get"));
var compose_1 = __importDefault(require("recompose/compose"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var withMobileDialog_1 = __importDefault(require("@material-ui/core/withMobileDialog"));
var showModeAction_1 = require("../../actions/showModeAction");
var showHeadingsAction_1 = require("../../actions/showHeadingsAction");
var config_1 = require("./config");
var theme_config_1 = require("../../../version/config/theme.config");
var styles = function (theme) {
    var _a;
    return ({
        dialogBlock: (_a = {},
            _a[theme.breakpoints.only('xs')] = {
                paddingTop: 0,
                paddingLeft: 20,
                paddingRight: 20,
            },
            _a[theme.breakpoints.up('sm')] = {
                minHeight: 300,
                minWidth: 500,
                marginTop: 5,
                marginLeft: 20,
                marginBottom: 20,
            },
            _a),
        dialogItem: {
            minHeight: 100,
            paddingBottom: 10,
        },
        dialogItemColumn: {
            display: "flex",
            flexDirection: "column",
        },
        dialogLabel: {
            display: "inline-block",
            minWidth: 200,
            marginTop: 10,
        },
        checkbox: {
            display: "inline-block",
            height: 24,
        },
        checkboxLabel: {
            display: "inline-block",
        },
        sectionTitle: {
            marginTop: 10,
        },
        topPanel: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        closeIcon: {
            float: "right",
            height: 25,
        },
        radio: {
            '&$checked': {
                color: theme.palette.mainColor,
            }
        },
        checked: {}
    });
};
/**
 * This component returns content and functionality of dialog window
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var DialogContent = /** @class */ (function (_super) {
    __extends(DialogContent, _super);
    function DialogContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedMode: _this.props.showMode ? _this.props.showMode : config_1.SHOW_ALL,
            selectedHeadings: _this.props.showHeadings ? Object.values(_this.props.showHeadings) : config_1.getHeadingsLists(),
        };
        /**
         * This function checks is current heading was checked
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {string} itemName
         * @return {boolean}
         */
        _this.isHeadingChecked = function (itemName) {
            var selectedHeadings = _this.state.selectedHeadings;
            return Object.values(selectedHeadings).indexOf(itemName) !== -1;
        };
        /**
         * This function saves headings to select
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {string} itemName
         */
        _this.toggleVisibility = function (itemName) {
            _this.setState(function (state) {
                var selectedHeadings = state.selectedHeadings;
                var headingsArray = selectedHeadings;
                if (Object.values(selectedHeadings).indexOf(itemName) !== -1) {
                    var index = headingsArray.indexOf(itemName);
                    headingsArray.splice(index, 1);
                }
                else {
                    headingsArray.push(itemName);
                }
                return {
                    selectedHeadings: headingsArray,
                };
            }, function () { return _this.props.setHeadingsAction(_this.state.selectedHeadings); });
        };
        /**
         * This function toggle shows mode
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {string} mode
         */
        _this.selectShowMode = function (mode) {
            _this.setState({ selectedMode: mode }, function () { return _this.props.setModeAction(mode); });
        };
        return _this;
    }
    DialogContent.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, onClose = _a.onClose, showMode = _a.showMode, rest = __rest(_a, ["classes", "onClose", "showMode"]);
        var _b = this.state, selectedMode = _b.selectedMode, selectedHeadings = _b.selectedHeadings;
        var FeedSelector = get_1.default(theme_config_1.themeCommonElements, 'feedsSelectors', false);
        var hasRespectPlugin = get_1.default(theme_config_1.themeCommonElements, 'respectPanel', false);
        return (react_1.default.createElement(Dialog_1.default, __assign({ onBackdropClick: function () { return onClose(); } }, rest),
            react_1.default.createElement("div", { className: classes.dialogBlock },
                react_1.default.createElement(Tooltip_1.default, { title: "Settings" },
                    react_1.default.createElement(IconButton_1.default, { className: classes.closeIcon, color: "inherit", onClick: function () { return onClose(); } },
                        react_1.default.createElement(Close_1.default, null))),
                react_1.default.createElement(Typography_1.default, { className: classes.sectionTitle }, "SHOW"),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement("div", { className: classes.dialogItem },
                    config_1.synopsisData.map(function (item, key) {
                        if (get_1.default(item, 'isSynopsis', false)) {
                            return (react_1.default.createElement("div", { key: key, className: classes.dialogLabel },
                                react_1.default.createElement(Checkbox_1.default, { className: classes.checkbox, checked: _this.isHeadingChecked(item.list), color: "primary", onChange: function () { return _this.toggleVisibility(item.list); }, classes: { root: classes.radio, checked: classes.checked } }),
                                react_1.default.createElement(Typography_1.default, { className: classes.checkboxLabel }, item.title)));
                        }
                    }),
                    hasRespectPlugin &&
                        react_1.default.createElement("div", { className: classes.dialogLabel },
                            react_1.default.createElement(Checkbox_1.default, { className: classes.checkbox, checked: this.isHeadingChecked('respect'), color: "primary", onChange: function () { return _this.toggleVisibility('respect'); }, classes: { root: classes.radio, checked: classes.checked } }),
                            react_1.default.createElement(Typography_1.default, { className: classes.checkboxLabel }, "ReSPECT"))),
                FeedSelector && react_1.default.createElement(FeedSelector, { classes: classes }),
                react_1.default.createElement(Typography_1.default, null, "VIEW OF BOARDS"),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement("div", { className: classes.dialogItemColumn }, config_1.showModesArray.map(function (item, key) {
                    return (react_1.default.createElement("label", { key: key, className: classes.dialogLabel },
                        react_1.default.createElement(Radio_1.default, { className: classes.checkbox, checked: selectedMode === item.type, color: "primary", onChange: function () { return _this.selectShowMode(item.type); }, classes: { root: classes.radio, checked: classes.checked } }),
                        react_1.default.createElement(Typography_1.default, { className: classes.checkboxLabel }, item.label)));
                })))));
    };
    return DialogContent;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        showMode: get_1.default(state, 'custom.showMode.data', null),
        showHeadings: get_1.default(state, 'custom.showHeadings.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setModeAction: function (mode) {
            dispatch(showModeAction_1.showModeAction.request(mode));
        },
        setHeadingsAction: function (headingsArray) {
            dispatch(showHeadingsAction_1.showHeadingsAction.request(headingsArray));
        }
    };
};
exports.default = compose_1.default(styles_1.withStyles(styles), react_redux_1.connect(mapStateToProps, mapDispatchToProps))(withMobileDialog_1.default({ breakpoint: 'xs' })(DialogContent));
