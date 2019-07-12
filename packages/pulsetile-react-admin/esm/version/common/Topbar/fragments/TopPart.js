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
import get from "lodash/get";
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import BackIcon from "@material-ui/icons/ArrowBack";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import helmLogo from "../../../images/pulsetile-logo.png";
import AdvancedUserSearch from "../../../../core/common/Topbar/fragments/AdvancedUserSearch";
import UserSearch from "../../../../core/common/Topbar/fragments/UserSearch";
import ContrastMode from "../../../features/ContrastMode";
import UserPanelButton from "./UserPanelButton";
import { userSearchAction } from "../../../../core/actions/userSearchAction";
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
        var pathname = get(location, 'pathname', null);
        return (React.createElement(React.Fragment, null,
            React.createElement(Toolbar, { className: classes.topPart },
                (pathname !== '/charts' && pathname !== '/') &&
                    React.createElement("div", { className: classes.backButtonItem },
                        React.createElement(Tooltip, { title: "Home" },
                            React.createElement(IconButton, { id: "icon-home", "aria-label": "Home", className: classes.homeButton, onClick: function () { return goBack(); } },
                                React.createElement(BackIcon, null)))),
                React.createElement("div", { className: classes.mainLogoItem },
                    React.createElement(CardMedia, { id: "logo-image", className: classes.image, component: "img", alt: "Pulse Tile", height: "38px", image: helmLogo, title: "Pulse Tile", onClick: function () { return _this.goHomePage(); } })),
                React.createElement("div", { className: classes.emptyBlock }),
                (localStorage.getItem('role') === 'IDCR') &&
                    React.createElement("div", { className: classes.userSearchBlock },
                        React.createElement(AdvancedUserSearch, null),
                        (!advancedSearchInfo && !clinicalQueryInfo) && React.createElement(UserSearch, { location: location })),
                React.createElement(ContrastMode, { classes: classes }),
                React.createElement(UserPanelButton, { classes: classes })),
            React.createElement(Toolbar, { className: classes.userSearchBlockMobile },
                React.createElement(AdvancedUserSearch, null),
                (!advancedSearchInfo && !clinicalQueryInfo) && React.createElement(UserSearch, { location: location }))));
    };
    return TopPart;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        advancedSearchInfo: get(state, 'custom.advancedSearch.data', null),
        clinicalQueryInfo: get(state, 'custom.clinicalQuery.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        removeUserSearch: function () {
            dispatch(userSearchAction.remove());
        },
        goBack: function () {
            dispatch(goBack());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TopPart));
