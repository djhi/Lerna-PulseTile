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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from "lodash/get";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import AdvancedSearchIcon from '@material-ui/icons/LineWeight';
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpIcon from '@material-ui/icons/ArrowDropUp';
import OpenIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/KeyboardArrowUp';
import { userSearchAction } from "../../../../actions/userSearchAction";
import { advancedSearchAction } from "../../../../actions/advancedSearchAction";
import { clinicalQueryAction } from "../../../../actions/clinicalQueryAction";
import AdvancedSearchDialog from "./AdvancedSearchDialog";
import ClinicalQueryDialog from "./ClinicalQueryDialog";
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
        var advancedSearchTitle = get(advancedSearchInfo, 'title', null);
        var clinicalQueryTitle = get(clinicalQueryInfo, 'title', null);
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: (advancedSearchInfo || clinicalQueryInfo) ? classes.advancedSearchBlock : null },
                React.createElement(Tooltip, { title: "Advanced Search" },
                    React.createElement(IconButton, { "aria-label": "Advanced Search", className: classes.advancedSearchIcon, onClick: function (e) { return _this.popoverOpen(e); } },
                        React.createElement(AdvancedSearchIcon, null),
                        open ? React.createElement(ArrowDownIcon, null) : React.createElement(ArrowUpIcon, null))),
                advancedSearchInfo &&
                    React.createElement(React.Fragment, null,
                        React.createElement(Typography, { variant: "body1", className: classes.title }, advancedSearchTitle),
                        React.createElement(Tooltip, { title: "Open" },
                            React.createElement(IconButton, { "aria-label": "Advanced Search", className: classes.openCloseIcon, onClick: function () { return _this.toggleAdvancedSearch(); } }, isAdvancedSearchOpen ? React.createElement(OpenIcon, null) : React.createElement(CloseIcon, null)))),
                clinicalQueryInfo &&
                    React.createElement(React.Fragment, null,
                        React.createElement(Typography, { variant: "body1", className: classes.title }, clinicalQueryTitle),
                        React.createElement(Tooltip, { title: "Open" },
                            React.createElement(IconButton, { "aria-label": "Advanced Search", className: classes.openCloseIcon, onClick: function () { return _this.toggleClinicalQuery(); } }, isClinicalQueryOpen ? React.createElement(OpenIcon, null) : React.createElement(CloseIcon, null))))),
            React.createElement(Popover, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: function () { return _this.popoverClose(); }, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
                React.createElement(Typography, { variant: "body1", className: classes.title }, "SEARCH OPTIONS"),
                React.createElement(Divider, null),
                React.createElement(Typography, { className: classes.item, onClick: function () { return _this.openBasicSearch(); } }, "Patient Search - Basic"),
                React.createElement(Typography, { className: classes.item, onClick: function () { return _this.toggleAdvancedSearch(); } }, "Patient Search - Advanced"),
                React.createElement(Typography, { className: classes.item, onClick: function () { return _this.toggleClinicalQuery(); } }, "Clinical Query")),
            React.createElement(AdvancedSearchDialog, { isOpen: isAdvancedSearchOpen, onClose: this.toggleAdvancedSearch }),
            React.createElement(ClinicalQueryDialog, { isOpen: isClinicalQueryOpen, onClose: this.toggleClinicalQuery })));
    };
    return AdvancedUserSearch;
}(Component));
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
        removeAdvancedSearch: function () {
            dispatch(advancedSearchAction.remove());
        },
        removeClinicalQuery: function () {
            dispatch(clinicalQueryAction.remove());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdvancedUserSearch));
