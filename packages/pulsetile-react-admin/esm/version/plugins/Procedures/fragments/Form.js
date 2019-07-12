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
import { LocalForm, Control } from 'react-redux-form';
import { connect } from 'react-redux';
import { crudUpdate, crudCreate } from 'react-admin';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import SectionToolbar from "../../../../core/common/Toolbars/CustomFormToolbar";
var styles = {
    formGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    formLabel: {
        display: "block",
        fontWeight: 800,
        color: "#000",
        fontSize: 14,
        marginBottom: 15,
    },
    formInput: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
    },
    formTextarea: {
        width: '98%',
        height: 180,
        padding: 10,
    },
};
/**
 * This component returns Procedures creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} rest
 */
var ProceduresForm = /** @class */ (function (_super) {
    __extends(ProceduresForm, _super);
    function ProceduresForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            procedureDate: null,
        };
        _this.submitForm = function (data) {
            var _a = _this.props, isCreate = _a.isCreate, createProcedure = _a.createProcedure, updateProcedure = _a.updateProcedure;
            var procedureDate = _this.state.procedureDate;
            var datetime = moment(procedureDate).format('DD-MM-YYYY HH:mm:ss');
            var datetimeArray = datetime.split(' ');
            var dateTimeUnix = moment(datetime, 'DD-MM-YYYY HH:mm:ss').unix();
            var dateUnix = moment(datetimeArray[0], 'DD-MM-YYYY').unix();
            var time = dateTimeUnix - dateUnix;
            var additionalData = {
                currentStatus: "",
                date: dateUnix * 1000,
                dateSubmitted: moment(data.dateCreated, 'DD-MM-YYYY HH:mm').format(),
                name: data.procedureName,
                originalComposition: "",
                originalSource: "",
                source: "ethercis",
                time: time * 1000,
                userId: localStorage.getItem('userId'),
            };
            var formData = Object.assign({}, data, additionalData);
            if (isCreate) {
                createProcedure(formData);
            }
            else {
                var filledValues = _this.getCurrentItem();
                var id = get(filledValues, 'sourceId', null);
                var source = get(filledValues, 'source', "ethercis");
                formData.id = id;
                formData.source = source;
                updateProcedure(id, formData, filledValues);
            }
        };
        _this.getCurrentItem = function () {
            var _a = _this.props, proceduresList = _a.proceduresList, location = _a.location;
            var pathname = get(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get(pathnameArray, [2], null);
            var proceduresListArray = Object.values(proceduresList);
            var result = null;
            for (var i = 0, n = proceduresListArray.length; i < n; i++) {
                var item = proceduresListArray[i];
                if (item.sourceId === sourceId) {
                    result = item;
                    break;
                }
            }
            return result;
        };
        _this.changeProcedureDate = function (value) {
            _this.setState({
                procedureDate: value,
            });
        };
        return _this;
    }
    ProceduresForm.prototype.componentDidMount = function () {
        var filledValues = this.getCurrentItem();
        this.setState({
            procedureDate: get(filledValues, 'date', null),
        });
    };
    ProceduresForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isCreate = _a.isCreate;
        var procedureDate = this.state.procedureDate;
        var filledValues = isCreate ? null : this.getCurrentItem();
        return (React.createElement(React.Fragment, null,
            React.createElement(LocalForm, { model: "procedures", onSubmit: function (values) { return _this.submitForm(values); } },
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Procedure Name"),
                    React.createElement(Control.text, { className: classes.formInput, model: "procedures.procedureName", defaultValue: get(filledValues, 'name', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Date of Procedure"),
                    React.createElement(DatePicker, { className: classes.formInput, selected: procedureDate, onChange: function (value) { return _this.changeProcedureDate(value); }, todayButton: "Today", dateFormat: 'dd-MM-YYYY HH:mm', showTimeSelect: true, timeFormat: "HH:mm" })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Procedure Performed By"),
                    React.createElement(Control.text, { className: classes.formInput, model: "procedures.performer", defaultValue: get(filledValues, 'performer', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Procedure Notes"),
                    React.createElement(Control.textarea, { className: classes.formTextarea, model: "procedures.notes", defaultValue: get(filledValues, 'notes', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Terminology"),
                    React.createElement(Control.text, { className: classes.formInput, model: "procedures.procedureTerminology", defaultValue: get(filledValues, 'procedureTerminology', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Code"),
                    React.createElement(Control.text, { className: classes.formInput, model: "procedures.procedureCode", defaultValue: get(filledValues, 'procedureCode', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Author"),
                    React.createElement(Control.text, { className: classes.formInput, model: "procedures.author", defaultValue: get(filledValues, 'author', localStorage.getItem('username')), disabled: true })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Date"),
                    React.createElement(Control.text, { className: classes.formInput, model: "procedures.dateCreated", defaultValue: get(filledValues, 'dateCreated', moment().format('DD-MM-YYYY HH:mm')), disabled: true })),
                React.createElement(SectionToolbar, __assign({}, this.props)))));
    };
    return ProceduresForm;
}(Component));
var mapStateToProps = function (state) {
    return {
        proceduresList: get(state, 'admin.resources.procedures.data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createProcedure: function (formData) {
            dispatch(crudCreate('procedures', formData, '/procedures', '/procedures'));
        },
        updateProcedure: function (id, formData, filledValues) {
            dispatch(crudUpdate('procedures', id, formData, filledValues, '/procedures', '/procedures'));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProceduresForm));
