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
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var clinicalSignaturesAction_1 = require("../../../actions/ReSPECT/clinicalSignaturesAction");
var MainFormBlock_1 = __importDefault(require("../fragments/MainFormBlock"));
var SectionToolbar_1 = __importDefault(require("../fragments/SectionToolbar"));
var AddNewButton_1 = __importDefault(require("../fragments/buttons/AddNewButton"));
var TableOfRows_1 = __importDefault(require("../fragments/TableOfRows"));
var statuses_1 = require("../statuses");
var functions_1 = require("../functions");
var formStyles_1 = __importDefault(require("../fragments/formStyles"));
var tableHeadersArray = [
    { id: 'clinicialName', label: 'Clinical Name', isNumeric: false, isBinary: false, isDate: false, disablePadding: true },
    { id: 'isSrc', label: 'SRC', isNumeric: false, isBinary: true, isDate: false, disablePadding: true },
    { id: 'dateSigned', label: 'Date', isNumeric: false, isBinary: false, isDate: true, disablePadding: false },
];
var CliniciansSignatures = /** @class */ (function (_super) {
    __extends(CliniciansSignatures, _super);
    function CliniciansSignatures() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanel: true,
            dateSigned: null,
            rowsArray: functions_1.getStateData(_this.props, 'clinicalSignatures.signaturesArray', []),
            clinicalSignature: localStorage.getItem('username'),
        };
        _this.submitForm = function (data) {
            var rowsArray = _this.state.rowsArray;
            var additionalData = {
                signaturesArray: rowsArray,
                status: (rowsArray.length > 0) ? statuses_1.STATUS_COMPLETED : statuses_1.STATUS_INCOMPLETE,
                dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            };
            var formData = Object.assign({}, data, additionalData);
            _this.props.addCliniciansSignatures(formData);
            var nextStep = (_this.props.currentRow > statuses_1.TOTAL_ROWS_NUMBER) ? null : (_this.props.currentRow + 1);
            _this.props.onRowClick(nextStep);
        };
        _this.togglePanel = function () {
            _this.setState({
                isMainPanel: !_this.state.isMainPanel,
            });
        };
        _this.changeDateAndTime = function (value) {
            _this.setState({
                dateSigned: value,
            });
        };
        _this.addNewRow = function (values) {
            var _a = _this.state, rowsArray = _a.rowsArray, dateSigned = _a.dateSigned;
            var additionalData = {
                dateSigned: functions_1.getDateUnix(moment_1.default(dateSigned).format(statuses_1.DATE_FORMAT)),
            };
            var newRow = Object.assign({}, values, additionalData);
            var newRowsArray = rowsArray.concat(newRow);
            _this.setState({
                rowsArray: newRowsArray,
                dateSigned: null,
            });
            _this.formDispatch(react_redux_form_1.actions.reset('clinicalSignaturesRow'));
            _this.formDispatch(react_redux_form_1.actions.change('clinicalSignaturesRow.gmcNumber', null));
            _this.formDispatch(react_redux_form_1.actions.change('clinicalSignaturesRow.clinicalSignature', localStorage.getItem('username')));
        };
        _this.addSignature = function (name, ref) {
            var _a;
            _this.setState((_a = {},
                _a[name] = ref,
                _a));
        };
        _this.toNumber = function (value) {
            return value ? Number(value) : null;
        };
        return _this;
    }
    CliniciansSignatures.prototype.attachDispatch = function (dispatch) {
        this.formDispatch = dispatch;
    };
    CliniciansSignatures.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, title = _a.title, onRowClick = _a.onRowClick, isVersionInfo = _a.isVersionInfo;
        var _b = this.state, isMainPanel = _b.isMainPanel, rowsArray = _b.rowsArray, dateSigned = _b.dateSigned, clinicalSignature = _b.clinicalSignature;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(MainFormBlock_1.default, { isVersionInfo: isVersionInfo, isMainPanel: isMainPanel, classes: classes, title: title, togglePanel: this.togglePanel },
                (rowsArray && rowsArray.length > 0) &&
                    react_1.default.createElement(TableOfRows_1.default, { headers: tableHeadersArray, rowsArray: rowsArray }),
                !isVersionInfo &&
                    react_1.default.createElement(react_redux_form_1.LocalForm, { model: "clinicalSignaturesRow", onSubmit: function (values) { return _this.addNewRow(values); }, getDispatch: function (dispatch) { return _this.attachDispatch(dispatch); } },
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.mainFormLabel }, "Clinician Signature")),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Designation (grade / speciality)"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "clinicalSignaturesRow.designation", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinician name"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "clinicalSignaturesRow.clinicialName", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "GMC / NMC / HCPC number"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, type: "number", parser: function (value) { return _this.toNumber(value); }, model: "clinicalSignaturesRow.gmcNumber", required: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date & Time"),
                            react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: dateSigned, timeFormat: "HH:mm", timeIntervals: 15, dateFormat: statuses_1.DATE_TIME_PICKER_FORMAT, timeInputLabel: "Time:", showTimeInput: true, onChange: function (value) { return _this.changeDateAndTime(value); } })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinician signature"),
                            react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: "clinicalSignaturesRow.clinicalSignature", defaultValue: clinicalSignature, disabled: true })),
                        react_1.default.createElement(FormGroup_1.default, { className: classes.smallFormGroup },
                            react_1.default.createElement(react_redux_form_1.Control.checkbox, { className: classes.checkbox, model: "clinicalSignaturesRow.isSrc", disabled: isVersionInfo }),
                            react_1.default.createElement(Typography_1.default, null, "Senior responsible clinician")),
                        react_1.default.createElement(AddNewButton_1.default, null)),
                react_1.default.createElement(react_redux_form_1.LocalForm, { model: "clinicalSignatures", onSubmit: function (values) { return _this.submitForm(values); } }, !isVersionInfo && react_1.default.createElement(SectionToolbar_1.default, { onRowClick: onRowClick })))));
    };
    return CliniciansSignatures;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        clinicalSignatures: state.custom.clinicalSignatures.data,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addCliniciansSignatures: function (data) {
            dispatch(clinicalSignaturesAction_1.clinicalSignaturesAction.create(data));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(formStyles_1.default)(CliniciansSignatures));
