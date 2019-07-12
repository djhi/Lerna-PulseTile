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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var transferOfCareAction_1 = require("../../../actions/transferOfCareAction");
var CustomFormToolbar_1 = __importDefault(require("../../../../core/common/Toolbars/CustomFormToolbar"));
var RecordsSelector_1 = __importDefault(require("./RecordsSelector"));
var selectors_1 = require("./selectors");
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
    }
};
var patientID = localStorage.getItem('patientId') ? localStorage.getItem('patientId') : localStorage.getItem('userId');
/**
 * This component returns TransferOfCare creation/editing form
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {string} modelName
 */
var TransferOfCareInputs = /** @class */ (function (_super) {
    __extends(TransferOfCareInputs, _super);
    function TransferOfCareInputs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            transferDateTime: null,
            recordType: null,
            recordsArray: [],
        };
        _this.changeDate = function (value) {
            _this.setState({
                transferDateTime: value,
            });
        };
        _this.selectRecord = function (e) {
            _this.setState({ recordType: e.target.value }, function () { return _this.props.getSelectorItems(_this.state.recordType); });
        };
        _this.selectItem = function (e) {
            var recordsList = _this.props.recordsList;
            var _a = _this.state, recordsArray = _a.recordsArray, recordType = _a.recordType;
            var currentItem = null;
            var value = e.target.value;
            for (var i = 0, n = recordsList.length; i < n; i++) {
                var item = recordsList[i];
                if (item.sourceId === value) {
                    currentItem = item;
                    break;
                }
            }
            if (currentItem) {
                recordsArray.push({
                    name: _this.getSelectorValue(currentItem, recordType),
                    type: recordType,
                    typeTitle: recordType,
                    date: _this.getDataValue(currentItem, recordType),
                    source: get_1.default(currentItem, 'source', null),
                    sourceId: value,
                });
                _this.props.getDetails(recordType, value);
            }
            _this.setState({
                recordsArray: recordsArray,
            });
        };
        _this.removeItem = function (sourceId) {
            var recordsArray = _this.state.recordsArray;
            var newRecordsArray = [];
            for (var i = 0, n = recordsArray.length; i < n; i++) {
                var item = recordsArray[i];
                if (item.sourceId !== sourceId) {
                    newRecordsArray.push(item);
                }
            }
            _this.setState({
                recordsArray: newRecordsArray,
            });
        };
        _this.getSelectorValue = function (item, recordType) {
            var result = '';
            if (recordType === 'problems') {
                result = get_1.default(item, 'problem', null);
            }
            else if (recordType === 'medications') {
                result = get_1.default(item, 'name', null) + ' ' + get_1.default(item, 'doseAmount', null);
            }
            else if (recordType === 'referrals') {
                result = get_1.default(item, 'referralFrom', null) + ' ' + get_1.default(item, 'referralTo', null);
            }
            return result;
        };
        _this.getDataValue = function (item, recordType) {
            var result = '';
            if (recordType === 'problems') {
                result = moment_1.default(get_1.default(item, 'dateOfOnset', null)).format('DD-MM-YYYY');
            }
            else if (recordType === 'medications') {
                result = moment_1.default(get_1.default(item, 'dateCreated', null)).format('DD-MM-YYYY');
            }
            else if (recordType === 'referrals') {
                result = moment_1.default(get_1.default(item, 'dateOfReferral', null)).format('DD-MM-YYYY');
            }
            return result;
        };
        _this.submitForm = function (data) {
            var _a = _this.props, history = _a.history, isCreate = _a.isCreate, createNewItem = _a.createNewItem, updateItem = _a.updateItem;
            var _b = _this.state, transferDateTime = _b.transferDateTime, recordsArray = _b.recordsArray;
            var additionalData = {
                transferDateTime: moment_1.default(transferDateTime).unix(),
                records: recordsArray,
                userId: patientID,
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
            var _a = _this.props, transfersOfCareList = _a.transfersOfCareList, location = _a.location;
            var pathname = get_1.default(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get_1.default(pathnameArray, [2], null);
            var transfersOfCareListArray = Object.values(transfersOfCareList);
            var result = null;
            for (var i = 0, n = transfersOfCareListArray.length; i < n; i++) {
                var item = transfersOfCareListArray[i];
                if (item.sourceId === sourceId) {
                    result = item;
                    break;
                }
            }
            return result;
        };
        return _this;
    }
    TransferOfCareInputs.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, recordsList = _a.recordsList;
        var _b = this.state, transferDateTime = _b.transferDateTime, recordType = _b.recordType, recordsArray = _b.recordsArray;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_redux_form_1.LocalForm, { model: "transferOfCare", onSubmit: function (values) { return _this.submitForm(values); } },
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "From (Site / Org)"),
                    react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: 'transferOfCare.from', required: true },
                        react_1.default.createElement("option", { value: '' }, "-- Select from --"),
                        selectors_1.selectors.map(function (item, key) {
                            return (react_1.default.createElement("option", { key: key, value: item.id }, item.label));
                        }))),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "From (Site / Org)"),
                    react_1.default.createElement(react_redux_form_1.Control.select, { className: classes.formSelect, model: 'transferOfCare.to', required: true },
                        react_1.default.createElement("option", { value: '' }, "-- Select to --"),
                        selectors_1.selectors.map(function (item, key) {
                            return (react_1.default.createElement("option", { key: key, value: item.id }, item.label));
                        }))),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Date of Transfer"),
                    react_1.default.createElement(react_datepicker_1.default, { className: classes.formInput, selected: transferDateTime, onChange: function (value) { return _this.changeDate(value); } })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Type"),
                    react_1.default.createElement("select", { className: classes.formSelect, onChange: function (e) { return _this.selectRecord(e); }, required: true },
                        react_1.default.createElement("option", { value: '' }, "-- Select to --"),
                        selectors_1.recordsTypes.map(function (item, key) {
                            return (react_1.default.createElement("option", { key: key, value: item.id }, item.label));
                        }))),
                recordType
                    ? react_1.default.createElement(RecordsSelector_1.default, { classes: classes, recordType: recordType, selectItem: this.selectItem, removeItem: this.removeItem, recordsArray: recordsArray, recordsList: recordsList })
                    : react_1.default.createElement(Typography_1.default, { className: classes.text }, "No records added"),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Reason for contact"),
                    react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: 'transferOfCare.reasonForContact' })),
                react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                    react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Clinical Summary"),
                    react_1.default.createElement(react_redux_form_1.Control.textarea, { className: classes.formTextarea, model: 'transferOfCare.clinicalSummary' })),
                react_1.default.createElement(CustomFormToolbar_1.default, __assign({}, this.props)))));
    };
    return TransferOfCareInputs;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        transfersOfCareList: get_1.default(state, 'admin.resources.toc.data', []),
        recordsList: get_1.default(state, 'custom.transferOfCare.list', [])
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getSelectorItems: function (data) {
            dispatch(transferOfCareAction_1.transferOfCareAction.request(data));
        },
        getDetails: function (type, sourceId) {
            dispatch(transferOfCareAction_1.transferOfCareAction.requestOne(type, sourceId));
        },
        createNewItem: function (formData) {
            dispatch(react_admin_1.crudCreate('toc', formData, '/toc', '/toc'));
        },
        updateItem: function (id, formData, filledValues) {
            dispatch(react_admin_1.crudUpdate('toc', id, formData, filledValues, '/toc', '/toc'));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(TransferOfCareInputs));
