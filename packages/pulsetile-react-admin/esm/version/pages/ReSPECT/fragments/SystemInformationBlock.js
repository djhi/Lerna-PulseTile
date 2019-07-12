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
import React, { Component } from "react";
import get from "lodash/get";
import { Control } from 'react-redux-form';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
var styles = {
    textField: {
        display: 'block',
    },
    formGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    mainFormLabel: {
        display: "block",
        fontWeight: 800,
        color: "#000",
        fontSize: 14,
        marginBottom: 5,
    },
};
var SystemInformationBlock = /** @class */ (function (_super) {
    __extends(SystemInformationBlock, _super);
    function SystemInformationBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: true,
        };
        _this.togglePanel = function () {
            _this.setState({
                isOpen: !_this.state.isOpen,
            });
        };
        return _this;
    }
    SystemInformationBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, modelName = _a.modelName, filledValues = _a.filledValues;
        var isOpen = this.state.isOpen;
        return (React.createElement(ExpansionPanel, { className: isOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isOpen, onChange: function () { return _this.togglePanel(); } },
            React.createElement(ExpansionPanelSummary, { className: classes.expansionPanelSummary, expandIcon: React.createElement(ExpandMoreIcon, { className: classes.expandIcon }) },
                React.createElement(Typography, { className: classes.title }, "System Information")),
            isOpen &&
                React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails },
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.mainFormLabel }, "Source"),
                        React.createElement(Control.text, { className: classes.formInput, model: modelName + '.source', defaultValue: get(filledValues, 'source', null), disabled: true })),
                    React.createElement(FormGroup, { className: classes.formGroup },
                        React.createElement(FormLabel, { className: classes.mainFormLabel }, "Author"),
                        React.createElement(Control.text, { className: classes.formInput, model: modelName + '.author', defaultValue: get(filledValues, 'author', null), disabled: true })))));
    };
    return SystemInformationBlock;
}(Component));
;
export default withStyles(styles)(SystemInformationBlock);
