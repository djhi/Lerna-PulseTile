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
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocalForm, Control } from 'react-redux-form';
import { connect } from 'react-redux';
import { crudUpdate, crudCreate } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import SectionToolbar from "../../../../core/common/Toolbars/CustomFormToolbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomSwitch from "../../Vitals/fragments/CustomSwitch";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
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
    formControlLabel: {
        marginLeft: -10,
    },
    formInput: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
    },
    formSelect: {
        width: '100%',
        height: 30,
        paddingLeft: 10,
        backgroundColor: "#fff",
    },
    formTextarea: {
        width: '98%',
        height: 180,
        padding: 10,
    },
    text: {
        padding: 20,
    },
    checkboxBlock: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
    },
    switcherLabel: {
        marginLeft: 10,
    },
};
var eventTypes = [
    { id: "Appointment", label: "Appointment" },
    { id: "Admission", label: "Admission" },
    { id: "Transfer", label: "Transfer" },
    { id: "Discharge", label: "Discharge" },
];
var connectionTypes = [
    { id: "connection1", label: "Connection 1" },
    { id: "connection2", label: "Connection 2" },
    { id: "connection3", label: "Connection 3" },
    { id: "connection4", label: "Connection 4" },
];
var detailsTypes = [
    { id: "details1", label: "Details 1" },
    { id: "details2", label: "Details 2" },
    { id: "details3", label: "Details 3" },
    { id: "details4", label: "Details 4" },
];
/**
 * This component returns Events creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {string} modelName
 */
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            eventType: null,
            eventDateTime: null,
            toMakeConnection: false,
        };
        _this.changeDate = function (value) {
            _this.setState({
                eventDateTime: value,
            });
        };
        _this.changeEventType = function (e) {
            _this.setState({
                eventType: e.target.value,
            });
        };
        _this.toggleMakeConnection = function () {
            _this.setState({
                toMakeConnection: !_this.state.toMakeConnection,
            });
        };
        _this.submitForm = function (data) {
            var _a = _this.props, isCreate = _a.isCreate, createNewItem = _a.createNewItem, updateItem = _a.updateItem;
            var eventDateTime = _this.state.eventDateTime;
            var additionalData = {
                dateTime: moment(eventDateTime).format('DD-MM-YYYY'),
            };
            var formData = Object.assign({}, data, additionalData);
            if (isCreate) {
                createNewItem(formData);
            }
            else {
                var filledValues = _this.getCurrentItem();
                var id = get(filledValues, 'sourceId', null);
                var source = get(filledValues, 'source', null);
                formData.id = id;
                formData.source = source;
                updateItem(id, formData, filledValues);
            }
        };
        _this.getCurrentItem = function () {
            var _a = _this.props, eventsList = _a.eventsList, location = _a.location;
            var pathname = get(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get(pathnameArray, [2], null);
            var eventsListArray = Object.values(eventsList);
            var result = null;
            for (var i = 0, n = eventsListArray.length; i < n; i++) {
                var item = eventsListArray[i];
                if (item.sourceId === sourceId) {
                    result = item;
                    break;
                }
            }
            return result;
        };
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        var isCreate = this.props.isCreate;
        var filledValues = isCreate ? null : this.getCurrentItem();
        this.setState({
            eventType: get(filledValues, 'type', null),
        });
    };
    Form.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isCreate = _a.isCreate;
        var _b = this.state, eventDateTime = _b.eventDateTime, eventType = _b.eventType, toMakeConnection = _b.toMakeConnection;
        var filledValues = isCreate ? null : this.getCurrentItem();
        var dateTime = get(filledValues, 'dateTime', null);
        var dateCreated = get(filledValues, 'dateCreated', null);
        return (React.createElement(React.Fragment, null,
            React.createElement(LocalForm, { model: "event", onSubmit: function (values) { return _this.submitForm(values); } },
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Event Name"),
                    React.createElement(Control.text, { className: classes.formInput, model: 'event.name', defaultValue: get(filledValues, 'name', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Event Type"),
                    React.createElement(Control.select, { className: classes.formSelect, model: 'event.type', onChange: function (e) { return _this.changeEventType(e); }, required: true },
                        React.createElement("option", { value: '' }, "-- Select from --"),
                        eventTypes.map(function (item, key) {
                            return (React.createElement("option", { key: key, value: item.id, selected: item.id === get(filledValues, 'type', null) }, item.label));
                        }))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Notes"),
                    React.createElement(Control.textarea, { className: classes.formTextarea, model: 'event.description', defaultValue: get(filledValues, 'description', null) })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Event date"),
                    React.createElement(DatePicker, { className: classes.formInput, selected: eventDateTime ? eventDateTime : dateTime, onChange: function (value) { return _this.changeDate(value); }, showTimeSelect: true, dateFormat: "dd-MM-yyyy HH:mm", timeFormat: "HH:mm", timeIntervals: 15 })),
                (eventType === "Discharge") &&
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: classes.checkboxBlock },
                            React.createElement(FormControl, { className: classes.formControl },
                                React.createElement(FormLabel, { className: classes.formLabel }, "To make connection"),
                                React.createElement(FormControlLabel, { className: classes.formControlLabel, control: React.createElement(CustomSwitch, { checked: toMakeConnection, value: toMakeConnection, onChange: function () { return _this.toggleMakeConnection(); } }), label: React.createElement(Typography, { className: classes.switcherLabel }, toMakeConnection ? "Yes" : "No") }))),
                        toMakeConnection &&
                            React.createElement(FormGroup, { className: classes.formGroup },
                                React.createElement(FormLabel, { className: classes.formLabel }, "To make connection with"),
                                React.createElement(Control.select, { className: classes.formSelect, model: 'event.connection', required: true },
                                    React.createElement("option", { value: '' }, "-- Select from --"),
                                    connectionTypes.map(function (item, key) {
                                        return (React.createElement("option", { key: key, value: item.id, selected: item.id === get(filledValues, 'connection', null) }, item.label));
                                    }))),
                        React.createElement(FormGroup, { className: classes.formGroup },
                            React.createElement(FormLabel, { className: classes.formLabel }, "Details"),
                            React.createElement(Control.select, { className: classes.formSelect, model: 'event.details', required: true },
                                React.createElement("option", { value: '' }, "-- Select from --"),
                                detailsTypes.map(function (item, key) {
                                    return (React.createElement("option", { key: key, value: item.id, selected: item.id === get(filledValues, 'details', null) }, item.label));
                                })))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Author"),
                    React.createElement(Control.text, { className: classes.formInput, model: 'event.author', defaultValue: get(filledValues, 'author', localStorage.getItem('username')), disabled: true })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Date"),
                    React.createElement(Control.text, { className: classes.formInput, model: "event.dateCreated", defaultValue: dateCreated ? moment(dateCreated).format('DD-MM-YYYY') : moment().format('DD-MM-YYYY'), disabled: true })),
                React.createElement(SectionToolbar, __assign({}, this.props)))));
    };
    return Form;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        eventsList: get(state, 'admin.resources.events.data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createNewItem: function (formData) {
            dispatch(crudCreate('events', formData, '/events', '/events'));
        },
        updateItem: function (id, formData, filledValues) {
            dispatch(crudUpdate('events', id, formData, filledValues, '/events', '/events'));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form));
