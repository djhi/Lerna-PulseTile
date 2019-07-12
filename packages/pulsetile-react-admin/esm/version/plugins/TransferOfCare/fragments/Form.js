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
import Typography from '@material-ui/core/Typography';
import { transferOfCareAction } from "../../../actions/transferOfCareAction";
import SectionToolbar from "../../../../core/common/Toolbars/CustomFormToolbar";
import RecordsSelector from "./RecordsSelector";
import { selectors, recordsTypes } from "./selectors";
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
                    source: get(currentItem, 'source', null),
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
                result = get(item, 'problem', null);
            }
            else if (recordType === 'medications') {
                result = get(item, 'name', null) + ' ' + get(item, 'doseAmount', null);
            }
            else if (recordType === 'referrals') {
                result = get(item, 'referralFrom', null) + ' ' + get(item, 'referralTo', null);
            }
            return result;
        };
        _this.getDataValue = function (item, recordType) {
            var result = '';
            if (recordType === 'problems') {
                result = moment(get(item, 'dateOfOnset', null)).format('DD-MM-YYYY');
            }
            else if (recordType === 'medications') {
                result = moment(get(item, 'dateCreated', null)).format('DD-MM-YYYY');
            }
            else if (recordType === 'referrals') {
                result = moment(get(item, 'dateOfReferral', null)).format('DD-MM-YYYY');
            }
            return result;
        };
        _this.submitForm = function (data) {
            var _a = _this.props, history = _a.history, isCreate = _a.isCreate, createNewItem = _a.createNewItem, updateItem = _a.updateItem;
            var _b = _this.state, transferDateTime = _b.transferDateTime, recordsArray = _b.recordsArray;
            var additionalData = {
                transferDateTime: moment(transferDateTime).unix(),
                records: recordsArray,
                userId: patientID,
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
            var _a = _this.props, transfersOfCareList = _a.transfersOfCareList, location = _a.location;
            var pathname = get(location, 'pathname', null);
            var pathnameArray = pathname.split('/');
            var sourceId = get(pathnameArray, [2], null);
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
        return (React.createElement(React.Fragment, null,
            React.createElement(LocalForm, { model: "transferOfCare", onSubmit: function (values) { return _this.submitForm(values); } },
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "From (Site / Org)"),
                    React.createElement(Control.select, { className: classes.formSelect, model: 'transferOfCare.from', required: true },
                        React.createElement("option", { value: '' }, "-- Select from --"),
                        selectors.map(function (item, key) {
                            return (React.createElement("option", { key: key, value: item.id }, item.label));
                        }))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "From (Site / Org)"),
                    React.createElement(Control.select, { className: classes.formSelect, model: 'transferOfCare.to', required: true },
                        React.createElement("option", { value: '' }, "-- Select to --"),
                        selectors.map(function (item, key) {
                            return (React.createElement("option", { key: key, value: item.id }, item.label));
                        }))),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Date of Transfer"),
                    React.createElement(DatePicker, { className: classes.formInput, selected: transferDateTime, onChange: function (value) { return _this.changeDate(value); } })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Type"),
                    React.createElement("select", { className: classes.formSelect, onChange: function (e) { return _this.selectRecord(e); }, required: true },
                        React.createElement("option", { value: '' }, "-- Select to --"),
                        recordsTypes.map(function (item, key) {
                            return (React.createElement("option", { key: key, value: item.id }, item.label));
                        }))),
                recordType
                    ? React.createElement(RecordsSelector, { classes: classes, recordType: recordType, selectItem: this.selectItem, removeItem: this.removeItem, recordsArray: recordsArray, recordsList: recordsList })
                    : React.createElement(Typography, { className: classes.text }, "No records added"),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Reason for contact"),
                    React.createElement(Control.textarea, { className: classes.formTextarea, model: 'transferOfCare.reasonForContact' })),
                React.createElement(FormGroup, { className: classes.formGroup },
                    React.createElement(FormLabel, { className: classes.formLabel }, "Clinical Summary"),
                    React.createElement(Control.textarea, { className: classes.formTextarea, model: 'transferOfCare.clinicalSummary' })),
                React.createElement(SectionToolbar, __assign({}, this.props)))));
    };
    return TransferOfCareInputs;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        transfersOfCareList: get(state, 'admin.resources.toc.data', []),
        recordsList: get(state, 'custom.transferOfCare.list', [])
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getSelectorItems: function (data) {
            dispatch(transferOfCareAction.request(data));
        },
        getDetails: function (type, sourceId) {
            dispatch(transferOfCareAction.requestOne(type, sourceId));
        },
        createNewItem: function (formData) {
            dispatch(crudCreate('toc', formData, '/toc', '/toc'));
        },
        updateItem: function (id, formData, filledValues) {
            dispatch(crudUpdate('toc', id, formData, filledValues, '/toc', '/toc'));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TransferOfCareInputs));
