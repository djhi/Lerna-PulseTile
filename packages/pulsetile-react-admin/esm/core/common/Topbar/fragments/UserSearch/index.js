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
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CleanIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import { userSearchAction } from "../../../../actions/userSearchAction";
var styles = function (theme) { return ({
    mainBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 36,
        minWidth: 350,
        borderRadius: 18,
        backgroundColor: theme.isOldDesign ? null : theme.palette.disabledColor,
    },
    input: {
        display: "block",
        width: "100%",
        height: "95%",
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        marginRight: theme.isOldDesign ? null : 10,
        borderRadius: theme.isOldDesign ? 0 : 18,
        border: theme.isOldDesign ? "1px solid " + theme.palette.disabledColor : 0,
        backgroundColor: theme.isOldDesign ? theme.palette.paperColor : theme.palette.disabledColor,
    },
    icon: {
        color: theme.isOldDesign ? theme.palette.paperColor : theme.palette.fontColor,
        backgroundColor: theme.isOldDesign ? theme.palette.secondaryMainColor : null,
        borderRadius: 0,
        height: 35,
        '&:hover': {
            color: theme.isOldDesign ? theme.palette.secondaryMainColor : null,
            border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
            backgroundColor: theme.isOldDesign ? theme.palette.paperColor : null,
        }
    },
}); };
var UserSearch = /** @class */ (function (_super) {
    __extends(UserSearch, _super);
    function UserSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchText: _this.props.userSearch ? _this.props.userSearch : null,
        };
        _this.handleChange = function (e) {
            _this.setState({
                searchText: e.target.value,
            });
        };
        _this.onRemoveClick = function () {
            _this.setState(function () {
                return {
                    searchText: '',
                };
            }, function () { return _this.props.removeUserSearch(); });
        };
        _this.onSearchClick = function (searchText) {
            _this.props.removeUserSearch();
            _this.props.setUserSearch(searchText);
            window.location.replace('/#/patients');
        };
        _this.onKeyDown = function (e) {
            var searchText = _this.state.searchText;
            if (e.key === 'Enter') {
                _this.props.setUserSearch(searchText);
                window.location.replace('/#/patients');
            }
        };
        return _this;
    }
    UserSearch.prototype.componentWillReceiveProps = function (nextProps) {
        var userSearch = nextProps.userSearch;
        if (!userSearch) {
            this.setState({
                searchText: '',
            });
        }
        else if (userSearch) {
            this.setState({
                searchText: userSearch,
            });
        }
    };
    UserSearch.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, userSearch = _a.userSearch, rest = __rest(_a, ["classes", "userSearch"]);
        var searchText = this.state.searchText;
        return (React.createElement("div", { className: classes.mainBlock },
            React.createElement("input", { className: classes.input, type: "text", name: "userSearch", value: searchText, placeholder: "Search", onChange: function (e) { return _this.handleChange(e); }, onKeyDown: function (e) { return _this.onKeyDown(e); } }),
            userSearch &&
                React.createElement(Tooltip, { title: "Clean Search", disableHoverListener: true },
                    React.createElement(IconButton, { className: classes.icon, "aria-haspopup": "true", color: "inherit", onClick: function () { return _this.onRemoveClick(); } },
                        React.createElement(CleanIcon, null))),
            React.createElement(Tooltip, { title: "Patients Search", disableHoverListener: true },
                React.createElement(IconButton, { className: classes.icon, "aria-haspopup": "true", color: "inherit", onClick: function () { return _this.onSearchClick(searchText); } },
                    React.createElement(SearchIcon, null)))));
    };
    return UserSearch;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        userSearch: get(state, 'custom.userSearch.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setUserSearch: function (data) {
            dispatch(userSearchAction.request(data));
        },
        removeUserSearch: function () {
            dispatch(userSearchAction.remove());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserSearch));
