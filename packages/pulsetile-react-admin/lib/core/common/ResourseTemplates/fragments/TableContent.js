"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var EmptyListBlock_1 = __importDefault(require("../EmptyListBlock"));
var styles_2 = require("../../../config/styles");
var ListToolbar_1 = __importDefault(require("../../Toolbars/ListToolbar"));
var styles = function (theme) { return ({
    tableList: {
        whiteSpace: "nowrap",
        '& thead': {
            '& tr th': {
                backgroundColor: theme.palette.tableHeadColor + '!important',
                paddingLeft: 10,
                borderLeft: theme.isOldDesign ? "0.5px solid " + theme.palette.borderColor : null,
                borderRight: theme.isOldDesign ? "0.5px solid " + theme.palette.borderColor : null,
            },
        },
        '& tbody tr:hover': {
            backgroundColor: theme.palette.secondaryMainColor + '!important',
            '& td div button': {
                backgroundColor: theme.palette.paperColor,
                color: theme.palette.secondaryMainColor
            },
            '& td div svg': {
                backgroundColor: theme.palette.paperColor,
                color: theme.palette.secondaryMainColor
            },
        },
        '& tbody tr td': {
            borderLeft: theme.isOldDesign ? "0.5px solid " + theme.palette.borderColor : null,
            borderRight: theme.isOldDesign ? "0.5px solid " + theme.palette.borderColor : null,
        },
        '& tbody tr:hover td span': {
            color: theme.palette.paperColor
        },
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    rowEven: {
        backgroundColor: theme.isOldDesign ? theme.palette.toolbarColor : theme.palette.paperColor
    },
    rowOdd: {
        backgroundColor: theme.palette.paperColor
    }
}); };
var CustomDatagridBody = function (_a) {
    var CustomRow = _a.CustomRow, location = _a.location, hiddenColumns = _a.hiddenColumns, history = _a.history, rest = __rest(_a, ["CustomRow", "location", "hiddenColumns", "history"]);
    return react_1.default.createElement(react_admin_1.DatagridBody, __assign({}, rest, { row: react_1.default.createElement(CustomRow, { location: location, hiddenColumns: hiddenColumns, history: history, rowClick: "edit" }) }));
};
var CustomDatagrid = function (_a) {
    var classes = _a.classes, history = _a.history, CustomRow = _a.CustomRow, CustomTableHead = _a.CustomTableHead, hiddenColumns = _a.hiddenColumns, location = _a.location, rest = __rest(_a, ["classes", "history", "CustomRow", "CustomTableHead", "hiddenColumns", "location"]);
    return react_1.default.createElement(react_admin_1.Datagrid, __assign({}, rest, { rowClick: "edit", body: react_1.default.createElement(CustomDatagridBody, { location: location, hiddenColumns: hiddenColumns, history: history, CustomRow: CustomRow }) }));
};
var DatagridBlock = function (_a) {
    var classes = _a.classes, location = _a.location, hiddenColumns = _a.hiddenColumns, isCustomDatagrid = _a.isCustomDatagrid, children = _a.children, history = _a.history, CustomRow = _a.CustomRow, CustomTableHead = _a.CustomTableHead, rest = __rest(_a, ["classes", "location", "hiddenColumns", "isCustomDatagrid", "children", "history", "CustomRow", "CustomTableHead"]);
    if (isCustomDatagrid) {
        return (react_1.default.createElement("div", { className: classes.tableWrapper },
            react_1.default.createElement(CustomDatagrid, __assign({ className: classes.tableList, hiddenColumns: hiddenColumns, location: location, CustomRow: CustomRow, CustomTableHead: CustomTableHead, history: history, rowClick: "edit" }, rest), children)));
    }
    return (react_1.default.createElement("div", { className: classes.tableWrapper },
        react_1.default.createElement(react_admin_1.Datagrid, __assign({ className: classes.tableList, classes: { rowEven: classes.rowEven, rowOdd: classes.rowOdd }, rowClick: "edit" }, rest), children)));
};
function getSearch(userSearch, userSearchID) {
    var result = null;
    if (userSearch) {
        result = userSearch;
    }
    if (userSearchID) {
        result = userSearchID;
    }
    return result;
}
function getSearchType(userSearch, userSearchID, userSearchType, userClinicalQuery) {
    var result = null;
    if (userSearch) {
        result = 'name';
    }
    if (userSearchID) {
        result = 'id';
    }
    if (userSearchType) {
        result = userSearchType;
    }
    if (userClinicalQuery) {
        result = 'clinicalQuery';
    }
    return result;
}
var TableContent = function (props) {
    var classes = props.classes, title = props.title, idsNumber = props.idsNumber, resourceUrl = props.resourceUrl, notCreate = props.notCreate, key = props.key, userSearch = props.userSearch, userSearchID = props.userSearchID, userSearchType = props.userSearchType, userClinicalQuery = props.userClinicalQuery, filterText = props.filterText, history = props.history, isCreatePage = props.isCreatePage, createUrl = props.createUrl, children = props.children, defaultSort = props.defaultSort, defaultSortOrder = props.defaultSortOrder;
    var sortField = defaultSort ? defaultSort : 'dateCreated';
    var sortOrder = defaultSortOrder ? defaultSortOrder : 'DESC';
    var search = getSearch(userSearch, userSearchID);
    var searchType = getSearchType(userSearch, userSearchID, userSearchType, userClinicalQuery);
    return (react_1.default.createElement(react_admin_1.List, __assign({ resource: resourceUrl, key: key, sort: { field: sortField, order: sortOrder }, filter: {
            filterText: (search && resourceUrl === 'patients') ? search : filterText,
            filterType: searchType,
            clinicalQuery: userClinicalQuery,
        }, title: title, perPage: styles_2.ITEMS_PER_PAGE, actions: null, bulkActions: false, pagination: react_1.default.createElement(ListToolbar_1.default, { notCreate: notCreate, resourceUrl: resourceUrl, history: history, isCreatePage: isCreatePage, createPath: createUrl }) }, props), (idsNumber > 0) ?
        react_1.default.createElement(DatagridBlock, __assign({ classes: classes, children: children, history: history }, props))
        :
            react_1.default.createElement(EmptyListBlock_1.default, null)));
};
exports.default = styles_1.withStyles(styles)(TableContent);
