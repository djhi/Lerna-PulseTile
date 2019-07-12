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
var react_redux_form_1 = require("react-redux-form");
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var moment_1 = __importDefault(require("moment"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var CustomFormToolbar_1 = __importDefault(require("../../../../core/common/Toolbars/CustomFormToolbar"));
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
            var datetime = moment_1.default(procedureDate).format('DD-MM-YYYY HH:mm:ss');
            var datetimeArray = datetime.split(' ');
            var dateTimeUnix = moment_1.default(datetime, 'DD-MM-YYYY HH:mm:ss').unix();
            var dateUnix = moment_1.default(datetimeArray[0], 'DD-MM-YYYY').unix();
            var time = dateTimeUnix - dateUnix;
            var additionalData = {
                currentStatus: "",
                date: dateUnix * 1000,
                dateSubmitted: moment_1.default(data.dateCreated, 'DD-MM-YYYY HH:mm').format(),
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
                var id = get_1.default(filledValues, 'sourceId', null);
                var source = get_1.default(filledValues, 'source', "ethercis");
                formData.id = id;
                formData.source = source;
                updateProcedure(id, formData, filledValues);
            }
        };
        _this.getCurrentItem = function () {
            var _a = _this.props, proceduresList = _a.proceduresList, location = _a.location;
            var pathname = get_1.default(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get_1.default(pathnameArray, [2], null);
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
            procedureDate: get_1.default(filledValues, 'date', null),
        });
    };
    ProceduresForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isCreate = _a.isCreate;
        var procedureDate = this.state.procedureDate;
        var filledValues = isCreate ? null : this.getCurrentItem();
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_redux_form_1.LocalForm, { model: "procedures", onSubmit: function (values) { return _this.submitForm(values); } },
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Procedure Name"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "procedures.procedureName", defaultValue: get_1.default(filledValues, 'name', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date of Procedure"),
                    react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: procedureDate, onChange: function (value) { return _this.changeProcedureDate(value); }, todayButton: "Today", dateFormat: 'dd-MM-YYYY HH:mm', showTimeSelect: true, timeFormat: "HH:mm" })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Procedure Performed By"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "procedures.performer", defaultValue: get_1.default(filledValues, 'performer', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Procedure Notes"),
                    react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "procedures.notes", defaultValue: get_1.default(filledValues, 'notes', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Terminology"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "procedures.procedureTerminology", defaultValue: get_1.default(filledValues, 'procedureTerminology', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Code"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "procedures.procedureCode", defaultValue: get_1.default(filledValues, 'procedureCode', null) })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Author"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "procedures.author", defaultValue: get_1.default(filledValues, 'author', localStorage.getItem('username')), disabled: true })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date"),
                    react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "procedures.dateCreated", defaultValue: get_1.default(filledValues, 'dateCreated', moment_1.default().format('DD-MM-YYYY HH:mm')), disabled: true })),
                react_1.default.createElement(CustomFormToolbar_1.default, __assign({}, this.props)))));
    };
    return ProceduresForm;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        proceduresList: get_1.default(state, 'admin.resources.procedures.data', []),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createProcedure: function (formData) {
            dispatch(react_admin_1.crudCreate('procedures', formData, '/procedures', '/procedures'));
        },
        updateProcedure: function (id, formData, filledValues) {
            dispatch(react_admin_1.crudUpdate('procedures', id, formData, filledValues, '/procedures', '/procedures'));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(ProceduresForm));
