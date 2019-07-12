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
import moment from "moment";
import { connect } from 'react-redux';
import { setSidebarVisibility } from "react-admin";
import TableCell from '@material-ui/core/TableCell';
import { columnsTogglingAction } from "../../../actions/columnsTogglingAction";
import CustomDatagridRow from "../../../common/ResourseTemplates/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../common/ResourseTemplates/fragments/constants";
import ViewButton from "../../../common/Buttons/ViewButton";
import ConfirmationModal from "./ConfirmationModal";
import get from "lodash/get";
import { themeCommonElements } from "../../../../version/config/theme.config";
import fetchInitialize from "../fetchInitialize";
import { currentPatientAction } from "../../../actions/currentPatientAction";
import LoadingSlider from "../../../common/LoadingSlider";
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
            new Promise(fetchInitialize).then(function () {
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
            return (React.createElement(LoadingSlider, null));
        }
        var isPermissionRequired = get(themeCommonElements, 'patientSummaryPermission', false);
        var open = Boolean(anchorEl);
        console.log('record', record);
        return (React.createElement(CustomDatagridRow, __assign({}, this.props),
            React.createElement(TableCell, { key: record.id + "-name" }, record.name),
            this.isColumnHidden('address') &&
                React.createElement(TableCell, { key: record.id + "-address" }, record.totalAddress),
            React.createElement(TableCell, { key: record.id + "-gender" }, record.gender),
            React.createElement(TableCell, { key: record.id + "-birthDate" }, moment(record.birthDate).format(DATE_FORMAT)),
            this.isColumnHidden('nhsNumber') &&
                React.createElement(TableCell, { key: record.id + "-nhsNumber" }, record.nhsNumber),
            this.isColumnHidden('vitalsDate') &&
                React.createElement(TableCell, { key: record.id + "-vitalsDate", onClick: function (e) { return _this.checkRedirectUrl(e, '/vitalsigns'); } }, moment(randomDate(new Date(2015, 4, 20), new Date())).format(DATE_FORMAT)),
            this.isColumnHidden('vitalsCount') &&
                React.createElement(TableCell, { key: record.id + "-vitalsCount", onClick: function (e) { return _this.checkRedirectUrl(e, '/vitalsigns'); } }, Math.floor(Math.random() * Math.floor(12))),
            this.isColumnHidden('problemsDate') &&
                React.createElement(TableCell, { key: record.id + "-problemsDate", onClick: function (e) { return _this.checkRedirectUrl(e, '/problems'); } }, moment(randomDate(new Date(2015, 4, 20), new Date())).format(DATE_FORMAT)),
            this.isColumnHidden('problemsCount') &&
                React.createElement(TableCell, { key: record.id + "-problemsCount", onClick: function (e) { return _this.checkRedirectUrl(e, '/problems'); } }, Math.floor(Math.random() * Math.floor(12))),
            React.createElement(TableCell, { className: classes.viewButtonCell },
                React.createElement(ViewButton, { viewAction: isPermissionRequired ? this.handleClick : this.redirectWithoutPermission, checkRedirectUrl: this.checkRedirectUrl })),
            React.createElement(ConfirmationModal, { anchorEl: anchorEl, open: open, handleClose: this.handleClose, agreeAction: this.redirectToSummary })));
    };
    return PatientDatagridRow;
}(Component));
;
var mapDispatchToProps = function (dispatch) {
    return {
        updateCurrentPatient: function (data) {
            dispatch(currentPatientAction.request(data));
        },
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
        removeHiddenColumns: function () {
            dispatch(columnsTogglingAction.remove());
        }
    };
};
export default connect(null, mapDispatchToProps)(PatientDatagridRow);
