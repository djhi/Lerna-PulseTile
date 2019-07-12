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
var react_router_1 = require("react-router");
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Grid/index"));
var index_3 = __importDefault(require("@material-ui/core/Typography/index"));
var List_1 = __importDefault(require("@material-ui/icons/List"));
var ShowChart_1 = __importDefault(require("@material-ui/icons/ShowChart"));
var Timeline_1 = __importDefault(require("@material-ui/icons/Timeline"));
var index_4 = __importDefault(require("@material-ui/core/Paper/index"));
var index_5 = __importDefault(require("@material-ui/core/IconButton/index"));
var index_6 = __importDefault(require("@material-ui/core/Tooltip/index"));
var index_7 = require("@fortawesome/react-fontawesome/index");
var index_8 = require("@fortawesome/free-solid-svg-icons/index");
var columnsTogglingAction_1 = require("../../../actions/columnsTogglingAction");
var Breadcrumbs_1 = __importDefault(require("../../../common/Breadcrumbs"));
var CustomIcon_1 = __importDefault(require("../../../common/CustomIcon"));
var DetailsTemplate_1 = __importDefault(require("../../../common/ResourseTemplates/DetailsTemplate"));
var constants_1 = require("../../../common/ResourseTemplates/fragments/constants");
var TableContent_1 = __importDefault(require("../../../common/ResourseTemplates/fragments/TableContent"));
var ChartContent_1 = __importDefault(require("../../../common/ResourseTemplates/fragments/ChartContent"));
var TimelineContent_1 = __importDefault(require("../../../common/ResourseTemplates/fragments/TimelineContent"));
var ListModePopover_1 = __importDefault(require("../../../common/ResourseTemplates/popovers/ListModePopover"));
var ColumnsTogglingIcon_1 = __importDefault(require("../../../common/ResourseTemplates/icons/ColumnsTogglingIcon"));
var listStyles = function (theme) { return ({
    container: {
        width: '100vw',
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
        color: theme.palette.fontColor,
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
            listMode: constants_1.MODE_TABLE,
            anchorEl: null,
            isListOpened: true,
            isFilterOpened: false,
            filterText: null,
            userClinicalQuery: null,
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
        _this.filterByUserSearch = function () {
            _this.setState(function (state, props) {
                if (state.filterText !== props.userSearch) {
                    return {
                        filterText: props.userSearch,
                        key: _this.state.key + 1,
                    };
                }
            });
        };
        _this.filterByUserSearchId = function () {
            _this.setState(function (state, props) {
                if (state.filterText !== props.userSearchID) {
                    return {
                        filterText: props.userSearchID,
                        key: _this.state.key + 1,
                    };
                }
            });
        };
        _this.filterByUserSearchType = function () {
            _this.setState(function (state, props) {
                if (state.filterText !== props.userSearchValue) {
                    return {
                        filterText: props.userSearchValue,
                        key: _this.state.key + 1,
                    };
                }
            });
        };
        _this.filterByClinicalQuery = function () {
            _this.setState(function (state, props) {
                if (state.userClinicalQuery !== props.userClinicalQuery) {
                    return {
                        userClinicalQuery: props.userClinicalQuery,
                        key: _this.state.key + 1,
                    };
                }
            });
        };
        _this.hasNewItem = function (resource, newListArray, prevListArray, nextProps, userSearch) {
            var result = false;
            var newDataArray = Object.values(get_1.default(nextProps, 'currentData', {}));
            for (var i = 0, n = newDataArray.length; i < n; i++) {
                var item = newDataArray[i];
                if (resource === 'patients' && get_1.default(item, 'isNew', false) && get_1.default(item, 'lastName', null) === userSearch) {
                    result = true;
                    break;
                }
                if (resource !== 'patients' && get_1.default(item, 'isNew', false)) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        _this.getListModeIcon = function () {
            var listMode = _this.state.listMode;
            var result = List_1.default;
            if (listMode === constants_1.MODE_CHART) {
                result = ShowChart_1.default;
            }
            else if (listMode === constants_1.MODE_TIMELINE) {
                result = Timeline_1.default;
            }
            return result;
        };
        _this.getContentBlock = function () {
            var listMode = _this.state.listMode;
            var result = TableContent_1.default;
            if (listMode === constants_1.MODE_CHART) {
                result = ChartContent_1.default;
            }
            else if (listMode === constants_1.MODE_TIMELINE) {
                result = TimelineContent_1.default;
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
        _this.getTitleForAdvancedSearh = function (userSearchType, userSearchValue) {
            var result = '';
            if (userSearchType === 'by_gender') {
                result = "Patients search by Gender: " + userSearchValue;
            }
            if (userSearchType === 'by_birthdate') {
                result = "Patients search by Birthdate: " + userSearchValue;
            }
            if (userSearchType === 'by_city') {
                result = "Patients search by City: " + userSearchValue;
            }
            if (userSearchType === 'by_age') {
                result = "Patients search by Age: " + userSearchValue[0] + "-" + userSearchValue[1];
            }
            return result;
        };
        _this.getTitleForClinicalSearh = function (userClinicalQuery) {
            var result = 'Patients Clinical Query: ';
            var searchType = get_1.default(userClinicalQuery, 'searchType', null);
            var searchValue = get_1.default(userClinicalQuery, 'searchValue', null);
            var gender = get_1.default(userClinicalQuery, 'gender', null);
            var birthDate = get_1.default(userClinicalQuery, 'birthDate', null);
            var maxAge = get_1.default(userClinicalQuery, 'maxAge', null);
            var minAge = get_1.default(userClinicalQuery, 'minAge', null);
            if (searchType && searchValue) {
                result += " " + searchType + ": " + searchValue + ", ";
            }
            if (gender) {
                result += " gender: " + gender + ", ";
            }
            if (birthDate) {
                result += " birthdate: " + birthDate + ", ";
            }
            if (maxAge && minAge) {
                result += " age: " + minAge + "-" + maxAge + ", ";
            }
            return result;
        };
        return _this;
    }
    ListTemplate.prototype.componentDidMount = function () {
        var _a = this.props, resourceUrl = _a.resourceUrl, toggleColumnStore = _a.toggleColumnStore, defaultHiddenColumns = _a.defaultHiddenColumns;
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
        var newListArray = Object.values(get_1.default(nextProps, 'currentList', {}));
        var prevListArray = Object.values(get_1.default(this.props, 'currentList', {}));
        var userSearch = get_1.default(nextProps, 'userSearch', null);
        var resource = get_1.default(nextProps, 'resource', null);
        var hasNewItem = this.hasNewItem(resource, newListArray, prevListArray, nextProps, userSearch);
        if (newListArray.length === 1 && prevListArray.length === 0 && hasNewItem) {
            this.setState({
                key: this.state.key + 1
            });
        }
    };
    ListTemplate.prototype.render = function () {
        var _this = this;
        var _a = this.props, create = _a.create, resourceUrl = _a.resourceUrl, title = _a.title, classes = _a.classes, history = _a.history, userSearch = _a.userSearch, userSearchID = _a.userSearchID, userSearchType = _a.userSearchType, userSearchValue = _a.userSearchValue, userClinicalQuery = _a.userClinicalQuery, headerFilterAbsent = _a.headerFilterAbsent, currentList = _a.currentList, hasChart = _a.hasChart, hasTimetable = _a.hasTimetable, isCustomDatagrid = _a.isCustomDatagrid;
        var _b = this.state, isFilterOpened = _b.isFilterOpened, isListOpened = _b.isListOpened, anchorEl = _b.anchorEl, hiddenColumns = _b.hiddenColumns, key = _b.key, filterText = _b.filterText;
        var breadcrumbsResource = [
            { url: "/" + resourceUrl, title: title, isActive: false },
        ];
        var CreateBlock = create;
        var createUrl = this.getCreateUrl();
        var titleTable = title;
        if (userSearch) {
            titleTable = "Patients matching '" + userSearch + "'";
            this.filterByUserSearch();
        }
        if (userSearchID) {
            titleTable = "Patients with ID: '" + userSearchID + "'";
            this.filterByUserSearchId();
        }
        if (userSearchType && userSearchValue) {
            titleTable = this.getTitleForAdvancedSearh(userSearchType, userSearchValue);
            this.filterByUserSearchType();
        }
        if (userClinicalQuery) {
            titleTable = this.getTitleForClinicalSearh(userClinicalQuery);
            this.filterByClinicalQuery();
        }
        var currentListArray = Object.values(currentList);
        var idsNumber = currentListArray.length > 0 ? currentListArray.length : 0;
        var ListModeIcon = this.getListModeIcon();
        var ContentBlock = this.getContentBlock();
        var open = Boolean(anchorEl);
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Breadcrumbs_1.default, { resource: breadcrumbsResource }),
            react_1.default.createElement(index_2.default, { container: true, spacing: 16, className: classes.mainBlock },
                isListOpened &&
                    react_1.default.createElement(index_2.default, { className: classes.list, item: true, xs: 12, sm: this.isListPage() ? 12 : 6 },
                        react_1.default.createElement("div", { className: classes.headerBlock },
                            react_1.default.createElement("div", { className: classes.blockTitle },
                                react_1.default.createElement(index_3.default, { className: classes.title }, titleTable),
                                react_1.default.createElement("div", { className: classes.emptyBlock }),
                                !this.isListPage() &&
                                    react_1.default.createElement(index_6.default, { title: "Expand" },
                                        react_1.default.createElement(index_5.default, { onClick: function () { return history.push("/" + resourceUrl); } },
                                            react_1.default.createElement(CustomIcon_1.default, { iconClassName: "fa fa-expand" }))),
                                react_1.default.createElement(ColumnsTogglingIcon_1.default, __assign({ hiddenColumns: hiddenColumns, toggleColumn: this.toggleColumn }, this.props)),
                                (hasChart || hasTimetable) &&
                                    react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement(index_6.default, { title: "Table" },
                                            react_1.default.createElement(index_5.default, { onClick: function (e) { return _this.popoverOpen(e); } },
                                                react_1.default.createElement(ListModeIcon, { className: classes.listModeIcon }))),
                                        react_1.default.createElement(ListModePopover_1.default, { anchorEl: anchorEl, open: open, changeListMode: this.changeListMode, handleClose: this.popoverClose, resourse: title, hasChart: hasChart, hasTimetable: hasTimetable })),
                                !headerFilterAbsent &&
                                    react_1.default.createElement(index_6.default, { title: "Search" },
                                        react_1.default.createElement(index_5.default, { onClick: function () { return _this.toggleFilter(); } },
                                            react_1.default.createElement(index_7.FontAwesomeIcon, { icon: index_8.faFilter, className: classes.filterIcon, size: "1x" })))),
                            isFilterOpened &&
                                react_1.default.createElement("div", { className: classes.filterBlock },
                                    react_1.default.createElement(index_4.default, { className: classes.filterInput, elevation: 1 },
                                        react_1.default.createElement(index_7.FontAwesomeIcon, { icon: index_8.faFilter, className: classes.filterInputIcon, size: "1x" }),
                                        react_1.default.createElement("input", { className: classes.inputBlock, onChange: function (e) { return _this.filterByText(e); }, placeholder: "Filter..." })))),
                        react_1.default.createElement(ContentBlock, __assign({ key: key, filterText: filterText, hiddenColumns: hiddenColumns, createUrl: createUrl, idsNumber: idsNumber, isCustomDatagrid: isCustomDatagrid, history: history }, this.props))),
                (!this.isCreatePage())
                    ?
                        react_1.default.createElement(react_router_1.Route, { path: this.getDetailsUrl(), render: function (_a) {
                                var match = _a.match;
                                return react_1.default.createElement(DetailsTemplate_1.default, __assign({ mode: "show", isListOpened: isListOpened, toggleListBlock: _this.toggleListBlock }, _this.props, { id: match.params.id }));
                            } })
                    :
                        react_1.default.createElement(react_router_1.Route, { path: createUrl, render: function (_a) {
                                var match = _a.match;
                                return react_1.default.createElement(CreateBlock, __assign({ isListOpened: isListOpened, toggleListBlock: _this.toggleListBlock, id: match.params.id }, _this.props));
                            } }))));
    };
    return ListTemplate;
}(react_1.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        userSearch: get_1.default(state, 'custom.userSearch.data', null),
        userSearchID: get_1.default(state, 'custom.userSearch.id', null),
        userSearchType: get_1.default(state, 'custom.userSearch.type', null),
        userSearchValue: get_1.default(state, 'custom.userSearch.value', null),
        userClinicalQuery: get_1.default(state, 'custom.clinicalQuery.data', null),
        currentList: get_1.default(state, 'admin.resources[' + ownProps.resource + '].list.ids', []),
        currentData: get_1.default(state, 'admin.resources[' + ownProps.resource + '].data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        toggleColumnStore: function (resource, columnName, value) {
            dispatch(columnsTogglingAction_1.columnsTogglingAction.toggle(resource, columnName, value));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(index_1.withStyles(listStyles)(ListTemplate));
