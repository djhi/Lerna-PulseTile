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
import React, { Component } from 'react';
import get from "lodash/get";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MainFormBlock from "../fragments/MainFormBlock";
import formStyles from "../fragments/formStyles";
import { cprVariants } from "../fragments/cprVariants";
var EmergencyView = /** @class */ (function (_super) {
    __extends(EmergencyView, _super);
    function EmergencyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.redirectToSection = function (e, sectionNumber) {
            e.preventDefault();
            _this.props.onRowClick(sectionNumber);
        };
        _this.getCprLabel = function () {
            var _a = _this.props, clinicalRecommendations = _a.clinicalRecommendations, sectionsInfo = _a.sectionsInfo, isVersionInfo = _a.isVersionInfo;
            var cprValue = isVersionInfo
                ? get(sectionsInfo, 'clinicalRecommendations.cprValue', null)
                : get(clinicalRecommendations, 'cprValue', null);
            var result = null;
            cprVariants.forEach(function (item) {
                if (item.id === cprValue) {
                    result = item.mainTitle;
                }
            });
            return result;
        };
        return _this;
    }
    EmergencyView.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, title = _a.title, isVersionInfo = _a.isVersionInfo;
        var isMainPanel = this.state.isMainPanel;
        return (React.createElement(React.Fragment, null,
            React.createElement(MainFormBlock, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                React.createElement("div", { className: classes.titleBlock },
                    React.createElement(Typography, { variant: "h1", className: classes.firstTitle }, "Emergency (CPR) view"),
                    React.createElement(Typography, { className: classes.secondTitle }, this.getCprLabel()),
                    React.createElement(Typography, null,
                        "For more information, see ",
                        React.createElement("a", { className: classes.sectionLink, onClick: function (e) { return _this.redirectToSection(e, 4); } }, "Section 4"),
                        " for the latest clinical recommendations")))));
    };
    return EmergencyView;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalRecommendations: state.custom.clinicalRecommendations.data,
        emergencyView: state.custom.emergencyView.data,
    };
};
export default connect(mapStateToProps, null)(withStyles(formStyles)(EmergencyView));
