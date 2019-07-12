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
var moment_1 = __importDefault(require("moment"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var react_redux_form_1 = require("react-redux-form");
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var CustomFormToolbar_1 = __importDefault(require("../../../../core/common/Toolbars/CustomFormToolbar"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var CustomSwitch_1 = __importDefault(require("../../Vitals/fragments/CustomSwitch"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
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
                dateTime: moment_1.default(eventDateTime).format('DD-MM-YYYY'),
            };
            var formData = Object.assign({}, data, additionalData);
            if (isCreate) {
                createNewItem(formData);
            }
            else {
                var filledValues = _this.getCurrentItem();
                var id = get_1.default(filledValues, 'sourceId', null);
                var source = get_1.default(filledValues, 'source', null);
                formData.id = id;
                formData.source = source;
                updateItem(id, formData, filledValues);
            }
        };
        _this.getCurrentItem = function () {
            var _a = _this.props, eventsList = _a.eventsList, location = _a.location;
            var pathname = get_1.default(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get_1.default(pathnameArray, [2], null);
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
            eventType: get_1.default(filledValues, 'type', null),
        });
    };
    Form.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isCreate = _a.isCreate;
        var _b = this.state, eventDateTime = _b.eventDateTime, eventType = _b.eventType, toMakeConnection = _b.toMakeConnection;
        var filledValues = isCreate ? null : this.getCurrentItem();
        var dateTime = get_1.default(filledValues, 'dateTime', null);
        var dateCreated = get_1.default(filledValues, 'dateCreated', null);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_redux_form_1.LocalForm, { model: "event", onSubmit: function (values) { return _this.submitForm(values); } },
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Event Name"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: 'event.name', defaultValue: get_1.default(filledValues, 'name', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Event Type"),
                    react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: 'event.type', onChange: function (e) { return _this.changeEventType(e); }, required: true },
                        react_1.default.createElement("option", { value: '' }, "-- Select from --"),
                        eventTypes.map(function (item, key) {
                            return (react_1.default.createElement("option", { key: key, value: item.id, selected: item.id === get_1.default(filledValues, 'type', null) }, item.label));
                        }))),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Notes"),
                    react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: 'event.description', defaultValue: get_1.default(filledValues, 'description', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Event date"),
                    react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: eventDateTime ? eventDateTime : dateTime, onChange: function (value) { return _this.changeDate(value); }, showTimeSelect: true, dateFormat: "dd-MM-yyyy HH:mm", timeFormat: "HH:mm", timeIntervals: 15 })),
                (eventType === "Discharge") &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: classes.checkboxBlock },
                            react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                                react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "To make connection"),
                                react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, control: react_1.default.createElement(CustomSwitch_1.default, { checked: toMakeConnection, value: toMakeConnection, onChange: function () { return _this.toggleMakeConnection(); } }), label: react_1.default.createElement(Typography_1.default, { className: classes.switcherLabel }, toMakeConnection ? "Yes" : "No") }))),
                        toMakeConnection &&
                            react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                                react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "To make connection with"),
                                react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: 'event.connection', required: true },
                                    react_1.default.createElement("option", { value: '' }, "-- Select from --"),
                                    connectionTypes.map(function (item, key) {
                                        return (react_1.default.createElement("option", { key: key, value: item.id, selected: item.id === get_1.default(filledValues, 'connection', null) }, item.label));
                                    }))),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Details"),
                            react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: 'event.details', required: true },
                                react_1.default.createElement("option", { value: '' }, "-- Select from --"),
                                detailsTypes.map(function (item, key) {
                                    return (react_1.default.createElement("option", { key: key, value: item.id, selected: item.id === get_1.default(filledValues, 'details', null) }, item.label));
                                })))),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Author"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: 'event.author', defaultValue: get_1.default(filledValues, 'author', localStorage.getItem('username')), disabled: true })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "event.dateCreated", defaultValue: dateCreated ? moment_1.default(dateCreated).format('DD-MM-YYYY') : moment_1.default().format('DD-MM-YYYY'), disabled: true })),
                react_1.default.createElement(CustomFormToolbar_1.default, __assign({}, this.props)))));
    };
    return Form;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        eventsList: get_1.default(state, 'admin.resources.events.data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createNewItem: function (formData) {
            dispatch(react_admin_1.crudCreate('events', formData, '/events', '/events'));
        },
        updateItem: function (id, formData, filledValues) {
            dispatch(react_admin_1.crudUpdate('events', id, formData, filledValues, '/events', '/events'));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(Form));
