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
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Today_1 = __importDefault(require("@material-ui/icons/Today"));
var Check_1 = __importDefault(require("@material-ui/icons/Check"));
var patientsCountAction_1 = require("../../actions/patientsCountAction");
var pulsetile_logo_png_1 = __importDefault(require("../../../version/images/pulsetile-logo.png"));
var PatientListTemplate_1 = __importDefault(require("./templates/PatientListTemplate"));
var ViewButton_1 = __importDefault(require("../../common/Buttons/ViewButton"));
var PatientCreate_1 = __importDefault(require("./PatientCreate"));
var PatientEdit_1 = __importDefault(require("./PatientEdit"));
var PatientShow_1 = __importDefault(require("./PatientShow"));
var DatagridRow_1 = __importDefault(require("./fragments/DatagridRow"));
var ColumnsTogglingPopover_1 = __importDefault(require("./fragments/ColumnsTogglingPopover"));
var theme_config_1 = require("../../../version/config/theme.config");
var styles = function (theme) { return ({
    content: {
        width: "100%",
        height: "100%",
        backgroundImage: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    imageBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "10%",
    },
    image: {
        width: "30%",
        height: "30%",
    },
    labelWithIcon: {
        marginBottom: 10,
    },
    icon: {
        marginTop: 5,
        marginLeft: 5,
    },
}); };
var LabelWithIcon = function (_a) {
    var classes = _a.classes, title = _a.title, icon = _a.icon;
    return (react_1.default.createElement(Typography_1.default, { className: classes.labelWithIcon, variant: "h1" },
        title,
        icon));
};
var defaultHiddenColumns = [
    'ordersDate', 'resultsDate', 'vitalsDate', 'problemsDate',
    'ordersCount', 'resultsCount', 'vitalsCount', 'problemsCount'
];
/**
 * This component returns block with Patients list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var PatientsList = /** @class */ (function (_super) {
    __extends(PatientsList, _super);
    function PatientsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            key: 0,
        };
        _this.updateTableHead = function () {
            _this.setState({
                key: _this.state.key + 1,
            });
        };
        _this.isColumnHidden = function (columnName) {
            var hiddenColumns = _this.props.hiddenColumns;
            return hiddenColumns.indexOf(columnName) === -1;
        };
        return _this;
    }
    PatientsList.prototype.componentDidMount = function () {
        this.props.setSidebarVisibility(false);
    };
    PatientsList.prototype.componentWillReceiveProps = function (newProps, prevList) {
        var getPatientsCounts = this.props.getPatientsCounts;
        var prevPatientsIds = get_1.default(prevList, 'patientsIds', []);
        var newPatientsIds = get_1.default(newProps, 'patientsIds', []);
        var isPatientListCount = get_1.default(theme_config_1.themeCommonElements, 'isPatientListCount', false);
        if (isPatientListCount && (prevPatientsIds !== newPatientsIds) && newPatientsIds.length > 0) {
            newPatientsIds.map(function (item) {
                getPatientsCounts(item);
            });
        }
    };
    PatientsList.prototype.render = function () {
        var _a = this.props, userSearch = _a.userSearch, userSearchID = _a.userSearchID, userSearchType = _a.userSearchType, userClinicalQuery = _a.userClinicalQuery, userSearchValue = _a.userSearchValue, classes = _a.classes;
        if (!userSearch && !userSearchID && !userSearchType && !userSearchValue && !userClinicalQuery) {
            return (react_1.default.createElement("div", { className: classes.content },
                react_1.default.createElement("div", { className: classes.imageBlock },
                    react_1.default.createElement(CardMedia_1.default, { className: classes.image, component: "img", alt: "NHS Scotland", image: pulsetile_logo_png_1.default }))));
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PatientListTemplate_1.default, __assign({ basePath: "/patients", create: PatientCreate_1.default, edit: PatientEdit_1.default, show: PatientShow_1.default, resourceUrl: "patients", title: "Patients List", headerFilterAbsent: true, CustomRow: DatagridRow_1.default, isCustomDatagrid: true, ColumnsTogglingPopover: ColumnsTogglingPopover_1.default, hasColumnsToggling: get_1.default(theme_config_1.themeCommonElements, 'patientListColumnToggling', false), updateTableHead: this.updateTableHead, defaultHiddenColumns: defaultHiddenColumns }, this.props),
                react_1.default.createElement(react_admin_1.TextField, { source: "name", label: "Name" }),
                this.isColumnHidden('address') && react_1.default.createElement(react_admin_1.TextField, { source: "totalAddress", label: "Address" }),
                react_1.default.createElement(react_admin_1.TextField, { source: "gender", label: "Gender" }),
                react_1.default.createElement(react_admin_1.DateField, { source: "birthDate", label: "Born" }),
                this.isColumnHidden('nhsNumber') && react_1.default.createElement(react_admin_1.TextField, { source: "nhsNumber", label: "NHS No." }),
                this.isColumnHidden('vitalsDate') &&
                    react_1.default.createElement(react_admin_1.DateField, { source: "vitalsDate", label: react_1.default.createElement(LabelWithIcon, { classes: classes, title: "Vitals", icon: react_1.default.createElement(Today_1.default, { className: classes.icon }) }) }),
                this.isColumnHidden('vitalsCount') &&
                    react_1.default.createElement(react_admin_1.DateField, { source: "vitalsCount", label: react_1.default.createElement(LabelWithIcon, { classes: classes, title: "Vitals", icon: react_1.default.createElement(Check_1.default, { className: classes.icon }) }) }),
                this.isColumnHidden('problemsDate') &&
                    react_1.default.createElement(react_admin_1.DateField, { source: "problemsDate", label: react_1.default.createElement(LabelWithIcon, { classes: classes, title: "Problems", icon: react_1.default.createElement(Today_1.default, { className: classes.icon }) }) }),
                this.isColumnHidden('problemsCount') &&
                    react_1.default.createElement(react_admin_1.DateField, { source: "problemsCount", label: react_1.default.createElement(LabelWithIcon, { classes: classes, title: "Problems", icon: react_1.default.createElement(Check_1.default, { className: classes.icon }) }) }),
                react_1.default.createElement(ViewButton_1.default, null))));
    };
    return PatientsList;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        userSearch: get_1.default(state, 'custom.userSearch.data', null),
        userSearchID: get_1.default(state, 'custom.userSearch.id', null),
        userSearchType: get_1.default(state, 'custom.userSearch.type', null),
        userSearchValue: get_1.default(state, 'custom.userSearch.value', null),
        userClinicalQuery: get_1.default(state, 'custom.clinicalQuery.data', null),
        hiddenColumns: get_1.default(state, 'custom.toggleColumns.data.patients', []),
        patientsIds: get_1.default(state, 'admin.resources.patients.list.ids', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
        getPatientsCounts: function (patientId) {
            dispatch(patientsCountAction_1.patientsCountAction.request(patientId));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(PatientsList));
