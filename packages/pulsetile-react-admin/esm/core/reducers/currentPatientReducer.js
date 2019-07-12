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
import get from "lodash/get";
import { CURRENT_PATIENT_ACTION } from "../actions/currentPatientAction";
var initialState = {
    data: false,
    loading: false,
    error: null,
};
function getPatientInfo(response) {
    var patientFromResponse = get(response, 'patient', null);
    var id = get(patientFromResponse, ['identifier', [0], 'value'], null);
    var name = get(patientFromResponse, ['name', [0]], null);
    var prefix = get(name, ['prefix'], null);
    var namesArray = get(name, 'given', null);
    var firstName = namesArray.join(' ');
    var lastName = get(name, ['family'], null);
    var addressArray = get(patientFromResponse, 'address', null);
    var city = get(addressArray, [[0], 'city'], null);
    var country = get(addressArray, [[0], 'country'], null);
    var postCode = get(addressArray, [[0], 'postalCode'], null);
    var line = get(addressArray, [[0], 'line', [0]], null);
    var addressSecondLine = get(addressArray, [[0], 'line', [1]], null);
    var district = get(addressArray, [[0], 'district'], null);
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
            birthDate: get(patientFromResponse, 'birthDate', null),
            department: get(patientFromResponse, 'department', null),
            gender: get(patientFromResponse, 'gender', null),
            nhsNumber: id,
            phone: get(patientFromResponse, 'telecom', null),
        }
    };
}
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CURRENT_PATIENT_ACTION.REQUEST:
            return __assign({}, state, { loading: true });
        case CURRENT_PATIENT_ACTION.REQUEST_PHOTO:
            return __assign({}, state, { loadingPhoto: true });
        case CURRENT_PATIENT_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, patientInfo: getPatientInfo(get(action, "data", null)) });
        case CURRENT_PATIENT_ACTION.SUCCESS_PHOTO:
            return __assign({}, state, { loadingPhoto: false, patientPhoto: get(action, 'data.results[0].picture.large', null) });
        case CURRENT_PATIENT_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get(action, "error", null) });
        case CURRENT_PATIENT_ACTION.FAILURE_PHOTO:
            return __assign({}, state, { loadingPhoto: false, error: get(action, "error", null) });
        default:
            return state;
    }
});
