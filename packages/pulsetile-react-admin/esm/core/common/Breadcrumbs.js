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
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { userSearchAction } from "../actions/userSearchAction";
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
        return (React.createElement("div", { className: classes.breadcrumbsBlock },
            React.createElement(Typography, { className: classes.link, onClick: function () { return _this.goHomePage(); } }, "Home"),
            resource.map(function (item, key) {
                return (React.createElement("div", { key: key, className: classes.breadcrumbsItem },
                    React.createElement("div", { className: classes.separator }),
                    item.isActive
                        ?
                            React.createElement(Typography, null,
                                React.createElement(Link, { to: item.url, className: classes.link, "aria-label": item.title, color: "inherit" }, item.title))
                        : (item.onClickAction
                            ? React.createElement(Typography, { className: classes.link, onClick: function () { return item.onClickAction(); } }, item.title)
                            : React.createElement(Typography, null, item.title))));
            })));
    };
    return Breadcrumbs;
}(Component));
;
var mapDispatchToProps = function (dispatch) {
    return {
        removeUserSearch: function () {
            dispatch(userSearchAction.remove());
        },
    };
};
export default withStyles(styles)(connect(null, mapDispatchToProps)(Breadcrumbs));
