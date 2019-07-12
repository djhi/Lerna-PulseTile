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
var styles_1 = require("@material-ui/core/styles");
var DashboardCard_1 = __importDefault(require("../../../common/DashboardCard"));
var theme_config_1 = require("../../../../version/config/theme.config");
var config_1 = require("../config");
var styles = function (theme) { return ({
    card: {
        borderRadius: 0,
        boxShadow: theme.isOldDesign ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : null,
    },
    media: {
        backgroundColor: theme.palette.mainColor,
    },
    topBlock: {
        display: "flex",
        flexDirection: "column",
        height: theme.isOldDesign ? 50 : 100,
        backgroundColor: theme.palette.tableHeadColor,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: theme.palette.mainColor,
        border: theme.isOldDesign ? "1px solid " + theme.palette.borderColor : null,
        '&:hover': {
            cursor: "pointer",
        },
    },
    icon: {
        marginBottom: 10,
        zIndex: 99999999,
    },
    mainHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        zIndex: 99999999,
        '& svg': {
            color: theme.palette.fontColor,
        }
    },
    title: {
        marginBottom: 0,
        color: theme.palette.fontColor,
        fontSize: 18,
        fontWeight: 600,
        zIndex: 99999999,
    },
    list: {
        padding: 0,
        zIndex: 99999999,
    },
    listItemNoData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 48,
        paddingLeft: 15,
        zIndex: 99999999,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "justify",
        height: 48,
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 99999999,
        fontSize: "1rem",
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
        cursor: "pointer",
        color: theme.palette.fontColor,
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            '& p': {
                color: theme.palette.paperColor,
            },
            '& svg': {
                color: theme.palette.paperColor,
            }
        }
    },
    emptyRows: {
        height: 150,
        zIndex: 99999999,
        borderLeft: "1px solid " + theme.palette.borderColor,
        borderRight: "1px solid " + theme.palette.borderColor,
        borderBottom: "1px solid " + theme.palette.borderColor,
    },
}); };
var PatientSummaryTable = /** @class */ (function (_super) {
    __extends(PatientSummaryTable, _super);
    function PatientSummaryTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatientSummaryTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, history = _a.history, loading = _a.loading, showMode = _a.showMode, showHeadings = _a.showHeadings;
        var FeedsPanels = get_1.default(theme_config_1.themeCommonElements, 'feedsPanels', false);
        var RespectPanel = get_1.default(theme_config_1.themeCommonElements, 'respectPanel', false);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            config_1.synopsisData.map(function (item, key) {
                if (get_1.default(item, 'isSynopsis', false)) {
                    return (react_1.default.createElement(DashboardCard_1.default, __assign({ key: key, showMode: showMode, showHeadings: showHeadings, id: item.id, title: item.title, list: item.list, loading: loading, items: get_1.default(_this.props, item.list, []), icon: item.icon }, _this.props)));
                }
            }),
            FeedsPanels && react_1.default.createElement(FeedsPanels, null),
            RespectPanel && react_1.default.createElement(RespectPanel, __assign({ showMode: showMode }, this.props))));
    };
    return PatientSummaryTable;
}(react_1.Component));
var mapStateToProps = function (state) {
    var patientSummaryProps = {
        loading: state.custom.demographics.loading,
        showMode: state.custom.showMode.data,
        showHeadings: state.custom.showHeadings.data,
    };
    var synopsisProps = config_1.getSynopsisProps(state);
    return Object.assign({}, patientSummaryProps, synopsisProps);
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(PatientSummaryTable));
