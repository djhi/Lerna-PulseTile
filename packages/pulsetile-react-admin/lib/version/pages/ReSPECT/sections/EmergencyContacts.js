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
var react_redux_1 = require("react-redux");
var react_redux_form_1 = require("react-redux-form");
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var emergencyContactsAction_1 = require("../../../actions/ReSPECT/emergencyContactsAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var AddNewButton_1 = __importDefault(require("../fragments/buttons/AddNewButton"));
var TableOfRows_1 = __importDefault(require("../fragments/TableOfRows"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
var defaultValues = {
    nhsNumber: localStorage.getItem('userId'),
    author: localStorage.getItem('username'),
};
var tableHeadersArray = [
    { id: 'name', label: 'Name', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'role', label: 'Role', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'phone', label: 'Telephone', isNumeric: true, isBinary: false, isDate: false, disablePadding: false },
];
var contactsArray = [
    { id: 'Legal proxy or parent', label: 'Legal proxy or parent' },
    { id: 'Family or friend or other', label: 'Family or friend or other' },
    { id: 'GP', label: 'GP' },
    { id: 'Lead consultant', label: 'Lead consultant' },
];
var EmergencyContacts = /** @class */ (function (_super) {
    __extends(EmergencyContacts, _super);
    function EmergencyContacts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            rowsArray: functions_1.getStateData(_this.props, 'emergencyContacts.contactsArray', []),
        };
        _this.submitForm = function (data) {
            var rowsArray = _this.state.rowsArray;
            var additionalData = {
                contactsArray: rowsArray,
                status: (rowsArray.length > 0) ? statuses_1.STATUS_COMPLETED : statuses_1.STATUS_INCOMPLETE,
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addEmergencyContacts(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.addNewRow = function (values) {
            var rowsArray = _this.state.rowsArray;
            var newRowsArray = rowsArray.concat(values);
            _this.setState({
                rowsArray: newRowsArray,
            });
            _this.formDispatch(react_redux_form_1.actions.reset('emergencyContactsRow'));
            _this.formDispatch(react_redux_form_1.actions.change('emergencyContactsRow.role', ''));
        };
        return _this;
    }
    EmergencyContacts.prototype.attachDispatch = function (dispatch) {
        this.formDispatch = dispatch;
    };
    EmergencyContacts.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sectionsInfo = _a.sectionsInfo, latestVersionInfo = _a.latestVersionInfo, emergencyContacts = _a.emergencyContacts, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, rowsArray = _b.rowsArray;
        var filledValues = functions_1.getFilledValues(sectionsInfo, latestVersionInfo, emergencyContacts, 'emergencyContacts', isVersionInfo, defaultValues);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                (rowsArray && rowsArray.length > 0) &&
                    react_1.default.createElement(TableOfRows_1.default, { headers: tableHeadersArray, rowsArray: rowsArray }),
                !isVersionInfo &&
                    react_1.default.createElement(react_redux_form_1.LocalForm, { model: "emergencyContactsRow", onSubmit: function (values) { return _this.addNewRow(values); }, getDispatch: function (dispatch) { return _this.attachDispatch(dispatch); } },
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Emergency Contact Role"),
                            react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: "emergencyContactsRow.role", required: true },
                                react_1.default.createElement("option", { value: '' }, "(no selected)"),
                                contactsArray.map(function (item, key) {
                                    return (react_1.default.createElement("option", { key: key, value: item.id }, item.label));
                                }))),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Name"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "emergencyContactsRow.name", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Telephone"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "emergencyContactsRow.phone", required: true })),
                        react_1.default.createElement(AddNewButton_1.default, null)),
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "emergencyContacts", onSubmit: function (values) { return _this.submitForm(values); } },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Other details"),
                        react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: "emergencyContacts.details", defaultValue: filledValues.details, disabled: isVersionInfo })),
                    !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return EmergencyContacts;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        emergencyContacts: state.custom.emergencyContacts.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addEmergencyContacts: function (data) {
            dispatch(emergencyContactsAction_1.emergencyContactsAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(EmergencyContacts));
