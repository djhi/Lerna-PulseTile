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
import React, { Component } from "react";
import get from "lodash/get";
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { showModeAction } from "../../actions/showModeAction";
import { showHeadingsAction } from "../../actions/showHeadingsAction";
import { synopsisData, showModesArray, SHOW_ALL, getHeadingsLists } from "./config";
import { themeCommonElements } from "../../../version/config/theme.config";
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
            selectedMode: _this.props.showMode ? _this.props.showMode : SHOW_ALL,
            selectedHeadings: _this.props.showHeadings ? Object.values(_this.props.showHeadings) : getHeadingsLists(),
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
        var FeedSelector = get(themeCommonElements, 'feedsSelectors', false);
        var hasRespectPlugin = get(themeCommonElements, 'respectPanel', false);
        return (React.createElement(Dialog, __assign({ onBackdropClick: function () { return onClose(); } }, rest),
            React.createElement("div", { className: classes.dialogBlock },
                React.createElement(Tooltip, { title: "Settings" },
                    React.createElement(IconButton, { className: classes.closeIcon, color: "inherit", onClick: function () { return onClose(); } },
                        React.createElement(CloseIcon, null))),
                React.createElement(Typography, { className: classes.sectionTitle }, "SHOW"),
                React.createElement(Divider, null),
                React.createElement("div", { className: classes.dialogItem },
                    synopsisData.map(function (item, key) {
                        if (get(item, 'isSynopsis', false)) {
                            return (React.createElement("div", { key: key, className: classes.dialogLabel },
                                React.createElement(Checkbox, { className: classes.checkbox, checked: _this.isHeadingChecked(item.list), color: "primary", onChange: function () { return _this.toggleVisibility(item.list); }, classes: { root: classes.radio, checked: classes.checked } }),
                                React.createElement(Typography, { className: classes.checkboxLabel }, item.title)));
                        }
                    }),
                    hasRespectPlugin &&
                        React.createElement("div", { className: classes.dialogLabel },
                            React.createElement(Checkbox, { className: classes.checkbox, checked: this.isHeadingChecked('respect'), color: "primary", onChange: function () { return _this.toggleVisibility('respect'); }, classes: { root: classes.radio, checked: classes.checked } }),
                            React.createElement(Typography, { className: classes.checkboxLabel }, "ReSPECT"))),
                FeedSelector && React.createElement(FeedSelector, { classes: classes }),
                React.createElement(Typography, null, "VIEW OF BOARDS"),
                React.createElement(Divider, null),
                React.createElement("div", { className: classes.dialogItemColumn }, showModesArray.map(function (item, key) {
                    return (React.createElement("label", { key: key, className: classes.dialogLabel },
                        React.createElement(Radio, { className: classes.checkbox, checked: selectedMode === item.type, color: "primary", onChange: function () { return _this.selectShowMode(item.type); }, classes: { root: classes.radio, checked: classes.checked } }),
                        React.createElement(Typography, { className: classes.checkboxLabel }, item.label)));
                })))));
    };
    return DialogContent;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        showMode: get(state, 'custom.showMode.data', null),
        showHeadings: get(state, 'custom.showHeadings.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setModeAction: function (mode) {
            dispatch(showModeAction.request(mode));
        },
        setHeadingsAction: function (headingsArray) {
            dispatch(showHeadingsAction.request(headingsArray));
        }
    };
};
export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(withMobileDialog({ breakpoint: 'xs' })(DialogContent));
