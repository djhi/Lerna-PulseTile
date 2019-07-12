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
import { TextField, DateField, setSidebarVisibility } from "react-admin";
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TodayIcon from "@material-ui/icons/Today";
import CheckIcon from "@material-ui/icons/Check";
import { patientsCountAction } from "../../actions/patientsCountAction";
import image from "../../../version/images/pulsetile-logo.png";
import PatientListTemplate from "./templates/PatientListTemplate";
import ViewButton from "../../common/Buttons/ViewButton";
import PatientCreate from "./PatientCreate";
import PatientEdit from "./PatientEdit";
import PatientShow from "./PatientShow";
import DatagridRow from "./fragments/DatagridRow";
import ColumnsTogglingPopover from "./fragments/ColumnsTogglingPopover";
import { themeCommonElements } from "../../../version/config/theme.config";
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
    return (React.createElement(Typography, { className: classes.labelWithIcon, variant: "h1" },
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
        var prevPatientsIds = get(prevList, 'patientsIds', []);
        var newPatientsIds = get(newProps, 'patientsIds', []);
        var isPatientListCount = get(themeCommonElements, 'isPatientListCount', false);
        if (isPatientListCount && (prevPatientsIds !== newPatientsIds) && newPatientsIds.length > 0) {
            newPatientsIds.map(function (item) {
                getPatientsCounts(item);
            });
        }
    };
    PatientsList.prototype.render = function () {
        var _a = this.props, userSearch = _a.userSearch, userSearchID = _a.userSearchID, userSearchType = _a.userSearchType, userClinicalQuery = _a.userClinicalQuery, userSearchValue = _a.userSearchValue, classes = _a.classes;
        if (!userSearch && !userSearchID && !userSearchType && !userSearchValue && !userClinicalQuery) {
            return (React.createElement("div", { className: classes.content },
                React.createElement("div", { className: classes.imageBlock },
                    React.createElement(CardMedia, { className: classes.image, component: "img", alt: "NHS Scotland", image: image }))));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(PatientListTemplate, __assign({ basePath: "/patients", create: PatientCreate, edit: PatientEdit, show: PatientShow, resourceUrl: "patients", title: "Patients List", headerFilterAbsent: true, CustomRow: DatagridRow, isCustomDatagrid: true, ColumnsTogglingPopover: ColumnsTogglingPopover, hasColumnsToggling: get(themeCommonElements, 'patientListColumnToggling', false), updateTableHead: this.updateTableHead, defaultHiddenColumns: defaultHiddenColumns }, this.props),
                React.createElement(TextField, { source: "name", label: "Name" }),
                this.isColumnHidden('address') && React.createElement(TextField, { source: "totalAddress", label: "Address" }),
                React.createElement(TextField, { source: "gender", label: "Gender" }),
                React.createElement(DateField, { source: "birthDate", label: "Born" }),
                this.isColumnHidden('nhsNumber') && React.createElement(TextField, { source: "nhsNumber", label: "NHS No." }),
                this.isColumnHidden('vitalsDate') &&
                    React.createElement(DateField, { source: "vitalsDate", label: React.createElement(LabelWithIcon, { classes: classes, title: "Vitals", icon: React.createElement(TodayIcon, { className: classes.icon }) }) }),
                this.isColumnHidden('vitalsCount') &&
                    React.createElement(DateField, { source: "vitalsCount", label: React.createElement(LabelWithIcon, { classes: classes, title: "Vitals", icon: React.createElement(CheckIcon, { className: classes.icon }) }) }),
                this.isColumnHidden('problemsDate') &&
                    React.createElement(DateField, { source: "problemsDate", label: React.createElement(LabelWithIcon, { classes: classes, title: "Problems", icon: React.createElement(TodayIcon, { className: classes.icon }) }) }),
                this.isColumnHidden('problemsCount') &&
                    React.createElement(DateField, { source: "problemsCount", label: React.createElement(LabelWithIcon, { classes: classes, title: "Problems", icon: React.createElement(CheckIcon, { className: classes.icon }) }) }),
                React.createElement(ViewButton, null))));
    };
    return PatientsList;
}(Component));
var mapStateToProps = function (state) {
    return {
        userSearch: get(state, 'custom.userSearch.data', null),
        userSearchID: get(state, 'custom.userSearch.id', null),
        userSearchType: get(state, 'custom.userSearch.type', null),
        userSearchValue: get(state, 'custom.userSearch.value', null),
        userClinicalQuery: get(state, 'custom.clinicalQuery.data', null),
        hiddenColumns: get(state, 'custom.toggleColumns.data.patients', []),
        patientsIds: get(state, 'admin.resources.patients.list.ids', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        setSidebarVisibility: function (params) {
            dispatch(setSidebarVisibility(params));
        },
        getPatientsCounts: function (patientId) {
            dispatch(patientsCountAction.request(patientId));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PatientsList));
