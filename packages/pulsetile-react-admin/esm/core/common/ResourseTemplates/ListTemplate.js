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
import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { Route } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableIcon from '@material-ui/icons/List';
import ChartIcon from '@material-ui/icons/ShowChart';
import TimelineIcon from '@material-ui/icons/AccessTime';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { columnsTogglingAction } from "../../actions/columnsTogglingAction";
import Breadcrumbs from "../../common/Breadcrumbs";
import TableHeader from "../../common/TableHeader";
import CustomIcon from "../../common/CustomIcon";
import DetailsTemplate from "./DetailsTemplate";
import { MODE_TIMELINE, MODE_TABLE, MODE_CHART } from "./fragments/constants";
import TableContent from "./fragments/TableContent";
import ChartContent from "./fragments/ChartContent";
import TimelineContent from "./fragments/TimelineContent";
import ListModePopover from "./popovers/ListModePopover";
import ColumnsTogglingIcon from "./icons/ColumnsTogglingIcon";
var listStyles = function (theme) { return ({
    container: {
        width: '100%',
        height: '100%',
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    mainBlock: {
        width: '100%',
        margin: 0,
        padding: 10,
        border: "1px solid " + theme.palette.borderColor,
    },
    list: {
        paddingLeft: 0,
    },
    blockTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
    },
    emptyBlock: {
        flexGrow: 1,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
    },
    filterIcon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        height: 35,
    },
    listModeIcon: {
        color: theme.isOldDesign ? theme.palette.secondaryMainColor + " !important" : theme.palette.paperColor + " !important",
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        height: 35,
    },
    filterInput: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        backgroundColor: theme.palette.mainColor + " !important",
        borderRadius: 0,
        boxShadow: "none",
        '& button': {
            color: "#fff",
        },
    },
    filterInputIcon: {
        color: theme.palette.paperColor,
        marginLeft: 5,
        marginBottom: 10,
    },
    inputBlock: {
        width: 'calc(100% - 60px)',
        borderRadius: theme.isOldDesign ? 0 : 18,
        height: 36,
        border: theme.isOldDesign ? "1px solid " + theme.palette.disabledColor : 0,
        backgroundColor: theme.isOldDesign ? theme.palette.paperColor : theme.palette.disabledColor,
        paddingLeft: 5,
        marginLeft: 10,
        marginBottom: 10,
    },
}); };
/**
 * This component returns template for List page
 * (it used in List blocks for the plugins Allergies, Contacts, Medications, Problems etc.)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ListTemplate = /** @class */ (function (_super) {
    __extends(ListTemplate, _super);
    function ListTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            listMode: MODE_TABLE,
            anchorEl: null,
            isListOpened: true,
            isFilterOpened: false,
            filterText: null,
            key: 0,
            hiddenColumns: [],
        };
        /**
         * This function returns create page URL
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @return {string}
         */
        _this.getCreateUrl = function () {
            return "/" + _this.props.resourceUrl + "/create";
        };
        /**
         * This function returns details page URL
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @return {string}
         */
        _this.getDetailsUrl = function () {
            return "/" + _this.props.resourceUrl + "/:id";
        };
        /**
         * This function checks is current create page
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @return {string}
         */
        _this.isCreatePage = function () {
            return (_this.props.location.pathname === _this.getCreateUrl());
        };
        /**
         * This function toggle filter input
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         */
        _this.toggleFilter = function () {
            _this.setState({
                isFilterOpened: !_this.state.isFilterOpened,
            });
        };
        _this.toggleListBlock = function (e) {
            e.stopPropagation();
            _this.setState({
                isListOpened: !_this.state.isListOpened,
            });
        };
        /**
         * This function check is current page is list page with table (it also used at create and show pages).
         * Settings of <Grid /> component of <ListTemplate /> depends on result of this function.
         *
         * Second part of condition - for the case when list page is a homepage
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @return {boolean}
         */
        _this.isListPage = function () {
            return (_this.props.location.pathname === "/" + _this.props.resourceUrl) || (_this.props.location.pathname === '/');
        };
        /**
         * This function set filter string to state
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {shape} e
         */
        _this.filterByText = function (e) {
            _this.setState({
                filterText: e.target.value,
                key: _this.state.key + 1,
            });
        };
        _this.hasNewItem = function (resource, newListArray, prevListArray, nextProps, userSearch) {
            var result = false;
            var newDataArray = Object.values(get(nextProps, 'currentData', {}));
            for (var i = 0, n = newDataArray.length; i < n; i++) {
                var item = newDataArray[i];
                if (resource !== 'patients' && get(item, 'isNew', false)) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        _this.getListModeIcon = function () {
            var listMode = _this.state.listMode;
            var result = TableIcon;
            if (listMode === MODE_CHART) {
                result = ChartIcon;
            }
            else if (listMode === MODE_TIMELINE) {
                result = TimelineIcon;
            }
            return result;
        };
        _this.getContentBlock = function () {
            var listMode = _this.state.listMode;
            var result = TableContent;
            if (listMode === MODE_CHART) {
                result = ChartContent;
            }
            else if (listMode === MODE_TIMELINE) {
                result = TimelineContent;
            }
            return result;
        };
        _this.changeListMode = function (mode) {
            _this.setState({
                listMode: mode,
                anchorEl: false,
            });
        };
        _this.popoverOpen = function (event) {
            _this.setState({
                anchorEl: event.currentTarget,
            });
        };
        _this.popoverClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        _this.toggleColumn = function (columnName, value) {
            var _a = _this.props, resourceUrl = _a.resourceUrl, toggleColumnStore = _a.toggleColumnStore, updateTableHead = _a.updateTableHead;
            var hiddenColumnsArray = _this.state.hiddenColumns;
            var key = _this.state.key;
            if (hiddenColumnsArray.indexOf(columnName) !== -1) {
                var index = hiddenColumnsArray.indexOf(columnName);
                hiddenColumnsArray.splice(index, 1);
            }
            else {
                hiddenColumnsArray.push(columnName);
            }
            key++;
            _this.setState({
                hiddenColumns: hiddenColumnsArray,
                key: key,
            }, function () {
                updateTableHead();
                toggleColumnStore(resourceUrl, columnName, value);
            });
        };
        return _this;
    }
    ListTemplate.prototype.componentDidMount = function () {
        var _a = this.props, resourceUrl = _a.resourceUrl, isChartDefault = _a.isChartDefault, toggleColumnStore = _a.toggleColumnStore, defaultHiddenColumns = _a.defaultHiddenColumns;
        if (isChartDefault) {
            this.setState({
                listMode: MODE_CHART,
            });
        }
        if (defaultHiddenColumns) {
            defaultHiddenColumns.map(function (item) {
                toggleColumnStore(resourceUrl, item, false);
            });
        }
        this.setState({
            hiddenColumns: defaultHiddenColumns,
        });
        if (defaultHiddenColumns) {
            this.props.updateTableHead();
        }
    };
    ListTemplate.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var newListArray = Object.values(get(nextProps, 'currentList', {}));
        var prevListArray = Object.values(get(this.props, 'currentList', {}));
        var userSearch = get(nextProps, 'userSearch', null);
        var resource = get(nextProps, 'resource', null);
        var hasNewItem = this.hasNewItem(resource, newListArray, prevListArray, nextProps, userSearch);
        if (newListArray.length === 1 && prevListArray.length === 0 && hasNewItem) {
            this.setState({
                key: this.state.key + 1
            });
        }
    };
    ListTemplate.prototype.render = function () {
        var _this = this;
        var _a = this.props, create = _a.create, resourceUrl = _a.resourceUrl, title = _a.title, classes = _a.classes, history = _a.history, notCreate = _a.notCreate, headerFilterAbsent = _a.headerFilterAbsent, currentList = _a.currentList, isChartDefault = _a.isChartDefault, hasChart = _a.hasChart, hasTimetable = _a.hasTimetable, isCustomDatagrid = _a.isCustomDatagrid;
        var _b = this.state, isFilterOpened = _b.isFilterOpened, isListOpened = _b.isListOpened, anchorEl = _b.anchorEl, hiddenColumns = _b.hiddenColumns, key = _b.key, filterText = _b.filterText;
        var breadcrumbsResource = [
            { url: "/" + resourceUrl, title: title, isActive: false },
        ];
        var CreateBlock = create;
        var createUrl = this.getCreateUrl();
        var titleTable = title;
        var currentListArray = Object.values(currentList);
        var idsNumber = currentListArray.length > 0 ? currentListArray.length : 0;
        var ListModeIcon = this.getListModeIcon();
        var ContentBlock = this.getContentBlock();
        var open = Boolean(anchorEl);
        return (React.createElement("div", { className: classes.container },
            React.createElement(Breadcrumbs, { resource: breadcrumbsResource }),
            React.createElement(TableHeader, { resource: resourceUrl }),
            React.createElement(Grid, { container: true, spacing: 16, className: classes.mainBlock },
                isListOpened &&
                    React.createElement(Grid, { className: classes.list, item: true, xs: 12, sm: this.isListPage() ? 12 : 6 },
                        React.createElement("div", { className: classes.headerBlock },
                            React.createElement("div", { className: classes.blockTitle },
                                React.createElement(Typography, { className: classes.title }, titleTable),
                                React.createElement("div", { className: classes.emptyBlock }),
                                !this.isListPage() &&
                                    React.createElement(Tooltip, { title: "Expand" },
                                        React.createElement(IconButton, { onClick: function () { return history.push("/" + resourceUrl); } },
                                            React.createElement(CustomIcon, { iconClassName: "fa fa-expand" }))),
                                React.createElement(ColumnsTogglingIcon, __assign({ hiddenColumns: hiddenColumns, toggleColumn: this.toggleColumn }, this.props)),
                                (hasChart || hasTimetable) &&
                                    React.createElement(React.Fragment, null,
                                        React.createElement(Tooltip, { title: "Table" },
                                            React.createElement(IconButton, { onClick: function (e) { return _this.popoverOpen(e); } },
                                                React.createElement(ListModeIcon, { className: classes.listModeIcon }))),
                                        React.createElement(ListModePopover, { anchorEl: anchorEl, open: open, changeListMode: this.changeListMode, handleClose: this.popoverClose, resourse: title, hasChart: hasChart, hasTimetable: hasTimetable })),
                                !headerFilterAbsent &&
                                    React.createElement(Tooltip, { title: "Search" },
                                        React.createElement(IconButton, { onClick: function () { return _this.toggleFilter(); } },
                                            React.createElement(FontAwesomeIcon, { icon: faFilter, className: classes.filterIcon, size: "1x" })))),
                            isFilterOpened &&
                                React.createElement("div", { className: classes.filterBlock },
                                    React.createElement(Paper, { className: classes.filterInput, elevation: 1 },
                                        React.createElement(FontAwesomeIcon, { icon: faFilter, className: classes.filterInputIcon, size: "1x" }),
                                        React.createElement("input", { className: classes.inputBlock, onChange: function (e) { return _this.filterByText(e); }, placeholder: "Filter..." })))),
                        React.createElement(ContentBlock, __assign({ key: key, filterText: filterText, hiddenColumns: hiddenColumns, createUrl: createUrl, idsNumber: idsNumber, isCustomDatagrid: isCustomDatagrid, history: history, notCreate: notCreate }, this.props))),
                (!this.isCreatePage())
                    ?
                        React.createElement(Route, { path: this.getDetailsUrl(), render: function (_a) {
                                var match = _a.match;
                                return React.createElement(DetailsTemplate, __assign({ mode: "show", isListOpened: isListOpened, toggleListBlock: _this.toggleListBlock }, _this.props, { id: match.params.id }));
                            } })
                    :
                        React.createElement(Route, { path: createUrl, render: function (_a) {
                                var match = _a.match;
                                return React.createElement(CreateBlock, __assign({ isListOpened: isListOpened, toggleListBlock: _this.toggleListBlock, id: match.params.id }, _this.props));
                            } }))));
    };
    return ListTemplate;
}(Component));
var mapStateToProps = function (state, ownProps) {
    return {
        currentList: get(state, 'admin.resources[' + ownProps.resource + '].list.ids', []),
        currentData: get(state, 'admin.resources[' + ownProps.resource + '].data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        toggleColumnStore: function (resource, columnName, value) {
            dispatch(columnsTogglingAction.toggle(resource, columnName, value));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(listStyles)(ListTemplate));
