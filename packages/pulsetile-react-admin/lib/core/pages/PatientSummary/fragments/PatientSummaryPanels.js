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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var config_1 = require("../config");
var DashboardCardRoll_1 = __importDefault(require("../../../common/DashboardCard/DashboardCardRoll"));
var styles = {};
var PatientSummaryPanels = function (props) {
    var classes = props.classes, loading = props.loading, showMode = props.showMode, showHeadings = props.showHeadings;
    return (react_1.default.createElement(Grid_1.default, { container: true, xs: 12, className: classes.content }, config_1.synopsisData.map(function (item, key) {
        if (item.list === 'problems' || item.list === 'medications' || item.list === 'allergies') {
            return (react_1.default.createElement(DashboardCardRoll_1.default, __assign({ key: key, showMode: showMode, showHeadings: showHeadings, id: item.id, title: item.title, list: item.list, loading: loading, items: get_1.default(props, item.list, []), icon: item.icon }, props)));
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
    var synopsisProps = config_1.getSynopsisProps(state);
    return Object.assign({}, patientSummaryProps, synopsisProps);
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(PatientSummaryPanels));
