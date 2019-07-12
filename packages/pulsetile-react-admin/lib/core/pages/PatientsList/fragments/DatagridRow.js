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
var moment_1 = __importDefault(require("moment"));
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var columnsTogglingAction_1 = require("../../../actions/columnsTogglingAction");
var CustomDatagridRow_1 = __importDefault(require("../../../common/ResourseTemplates/fragments/CustomDatagridRow"));
var constants_1 = require("../../../common/ResourseTemplates/fragments/constants");
var ViewButton_1 = __importDefault(require("../../../common/Buttons/ViewButton"));
var ConfirmationModal_1 = __importDefault(require("./ConfirmationModal"));
var get_1 = __importDefault(require("lodash/get"));
var theme_config_1 = require("../../../../version/config/theme.config");
var fetchInitialize_1 = __importDefault(require("../fetchInitialize"));
var currentPatientAction_1 = require("../../../actions/currentPatientAction");
var LoadingSlider_1 = __importDefault(require("../../../common/LoadingSlider"));
// TEMPORARY
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
var PatientDatagridRow = /** @class */ (function (_super) {
    __extends(PatientDatagridRow, _super);
    function PatientDatagridRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            loading: false,
            redirectUrl: '/summary',
        };
        _this.redirectWithoutPermission = function (e, url) {
            if (url === void 0) { url = null; }
            e.stopPropagation();
            _this.redirectToSummary(url);
        };
        /**
         * This function redirects to Patient Summary page
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
    
         */
        _this.redirectToSummary = function () {
            var record = _this.props.record;
            var redirectUrl = _this.state.redirectUrl;
            localStorage.setItem('patientId', record.nhsNumber);
            _this.setState({
                loading: true
            });
            new Promise(fetchInitialize_1.default).then(function () {
                _this.props.updateCurrentPatient(record.nhsNumber);
                _this.props.history.push(redirectUrl);
                _this.props.setSidebarVisibility(true);
                _this.setState({
                    loading: false
                });
            });
        };
        _this.handleClick = function (e) {
            e.stopPropagation();
            _this.setState({
                anchorEl: e.currentTarget,
            });
        };
        _this.handleClose = function () {
            _this.setState({
                anchorEl: false,
            });
        };
        _this.checkRedirectUrl = function (e, value) {
            e.stopPropagation();
            _this.setState({
                redirectUrl: value,
                anchorEl: e.currentTarget,
            });
        };
        _this.isColumnHidden = function (columnName) {
            var hiddenColumns = _this.props.hiddenColumns;
            return hiddenColumns.indexOf(columnName) === -1;
        };
        return _this;
    }
    PatientDatagridRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, record = _a.record, hiddenColumns = _a.hiddenColumns;
        var _b = this.state, loading = _b.loading, anchorEl = _b.anchorEl;
        if (!record) {
            return null;
        }
        if (loading) {
            return (react_1.default.createElement(LoadingSlider_1.default, null));
        }
        var isPermissionRequired = get_1.default(theme_config_1.themeCommonElements, 'patientSummaryPermission', false);
        var open = Boolean(anchorEl);
        console.log('record', record);
        return (react_1.default.createElement(CustomDatagridRow_1.default, __assign({}, this.props),
            react_1.default.createElement(TableCell_1.default, { key: record.id + "-name" }, record.name),
            this.isColumnHidden('address') &&
                react_1.default.createElement(TableCell_1.default, { key: record.id + "-address" }, record.totalAddress),
            react_1.default.createElement(TableCell_1.default, { key: record.id + "-gender" }, record.gender),
            react_1.default.createElement(TableCell_1.default, { key: record.id + "-birthDate" }, moment_1.default(record.birthDate).format(constants_1.DATE_FORMAT)),
            this.isColumnHidden('nhsNumber') &&
                react_1.default.createElement(TableCell_1.default, { key: record.id + "-nhsNumber" }, record.nhsNumber),
            this.isColumnHidden('vitalsDate') &&
                react_1.default.createElement(TableCell_1.default, { key: record.id + "-vitalsDate", onClick: function (e) { return _this.checkRedirectUrl(e, '/vitalsigns'); } }, moment_1.default(randomDate(new Date(2015, 4, 20), new Date())).format(constants_1.DATE_FORMAT)),
            this.isColumnHidden('vitalsCount') &&
                react_1.default.createElement(TableCell_1.default, { key: record.id + "-vitalsCount", onClick: function (e) { return _this.checkRedirectUrl(e, '/vitalsigns'); } }, Math.floor(Math.random() * Math.floor(12))),
            this.isColumnHidden('problemsDate') &&
                react_1.default.createElement(TableCell_1.default, { key: record.id + "-problemsDate", onClick: function (e) { return _this.checkRedirectUrl(e, '/problems'); } }, moment_1.default(randomDate(new Date(2015, 4, 20), new Date())).format(constants_1.DATE_FORMAT)),
            this.isColumnHidden('problemsCount') &&
                react_1.default.createElement(TableCell_1.default, { key: record.id + "-problemsCount", onClick: function (e) { return _this.checkRedirectUrl(e, '/problems'); } }, Math.floor(Math.random() * Math.floor(12))),
            react_1.default.createElement(TableCell_1.default, { className: classes.viewButtonCell },
                react_1.default.createElement(ViewButton_1.default, { viewAction: isPermissionRequired ? this.handleClick : this.redirectWithoutPermission, checkRedirectUrl: this.checkRedirectUrl })),
            react_1.default.createElement(ConfirmationModal_1.default, { anchorEl: anchorEl, open: open, handleClose: this.handleClose, agreeAction: this.redirectToSummary })));
    };
    return PatientDatagridRow;
}(react_1.Component));
;
var mapDispatchToProps = function (dispatch) {
    return {
        updateCurrentPatient: function (data) {
            dispatch(currentPatientAction_1.currentPatientAction.request(data));
        },
        setSidebarVisibility: function (params) {
            dispatch(react_admin_1.setSidebarVisibility(params));
        },
        removeHiddenColumns: function () {
            dispatch(columnsTogglingAction_1.columnsTogglingAction.remove());
        }
    };
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(PatientDatagridRow);
