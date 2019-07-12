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
import React from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { getSynopsisProps, synopsisData } from "../config";
import DashboardCardRoll from "../../../common/DashboardCard/DashboardCardRoll";
var styles = {};
var PatientSummaryPanels = function (props) {
    var classes = props.classes, loading = props.loading, showMode = props.showMode, showHeadings = props.showHeadings;
    return (React.createElement(Grid, { container: true, xs: 12, className: classes.content }, synopsisData.map(function (item, key) {
        if (item.list === 'problems' || item.list === 'medications' || item.list === 'allergies') {
            return (React.createElement(DashboardCardRoll, __assign({ key: key, showMode: showMode, showHeadings: showHeadings, id: item.id, title: item.title, list: item.list, loading: loading, items: get(props, item.list, []), icon: item.icon }, props)));
        }
        return null;
    })));
};
var mapStateToProps = function (state) {
    var patientSummaryProps = {
        loading: state.custom.demographics.loading,
        showMode: state.custom.showMode.data,
        showHeadings: state.custom.showHeadings.data,
    };
    var synopsisProps = getSynopsisProps(state);
    return Object.assign({}, patientSummaryProps, synopsisProps);
};
export default connect(mapStateToProps, null)(withStyles(styles)(PatientSummaryPanels));
