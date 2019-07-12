"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var currentPatientAction_1 = require("../actions/currentPatientAction");
var initialState = {
    data: false,
    loading: false,
    error: null,
};
function getPatientInfo(response) {
    var patientFromResponse = get_1.default(response, 'patient', null);
    var id = get_1.default(patientFromResponse, ['identifier', [0], 'value'], null);
    var name = get_1.default(patientFromResponse, ['name', [0]], null);
    var prefix = get_1.default(name, ['prefix'], null);
    var namesArray = get_1.default(name, 'given', null);
    var firstName = namesArray.join(' ');
    var lastName = get_1.default(name, ['family'], null);
    var addressArray = get_1.default(patientFromResponse, 'address', null);
    var city = get_1.default(addressArray, [[0], 'city'], null);
    var country = get_1.default(addressArray, [[0], 'country'], null);
    var postCode = get_1.default(addressArray, [[0], 'postalCode'], null);
    var line = get_1.default(addressArray, [[0], 'line', [0]], null);
    var addressSecondLine = get_1.default(addressArray, [[0], 'line', [1]], null);
    var district = get_1.default(addressArray, [[0], 'district'], null);
    return {
        data: {
            id: id,
            prefix: prefix,
            firstName: firstName,
            lastName: lastName,
            name: [prefix, firstName, lastName].join(' '),
            address: line,
            addressSecondLine: addressSecondLine,
            city: city,
            country: country,
            district: district,
            postCode: postCode,
            birthDate: get_1.default(patientFromResponse, 'birthDate', null),
            department: get_1.default(patientFromResponse, 'department', null),
            gender: get_1.default(patientFromResponse, 'gender', null),
            nhsNumber: id,
            phone: get_1.default(patientFromResponse, 'telecom', null),
        }
    };
}
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case currentPatientAction_1.CURRENT_PATIENT_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case currentPatientAction_1.CURRENT_PATIENT_ACTION.REQUEST_PHOTO:
            return __assign({}, state, { loadingPhoto: true });
        case currentPatientAction_1.CURRENT_PATIENT_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, patientInfo: getPatientInfo(get_1.default(action, "data", null)) });
        case currentPatientAction_1.CURRENT_PATIENT_ACTION.SUCCESS_PHOTO:
            return __assign({}, state, { loadingPhoto: false, patientPhoto: get_1.default(action, 'data.results[0].picture.large', null) });
        case currentPatientAction_1.CURRENT_PATIENT_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get_1.default(action, "error", null) });
        case currentPatientAction_1.CURRENT_PATIENT_ACTION.FAILURE_PHOTO:
            return __assign({}, state, { loadingPhoto: false, error: get_1.default(action, "error", null) });
        default:
            return state;
    }
});
