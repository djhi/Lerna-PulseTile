"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var token_1 = require("../../token");
var url = token_1.domainName + "/api/initialise/";
var options = {};
if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
}
options.headers = {
    'X-Requested-With': "XMLHttpRequest",
};
var OLD_PATIENT_DELAY = 1000;
var NEW_PATIENT_DELAY = 5000;
var fetchInitialize = function (resolve, reject) {
    var patientId = localStorage.getItem('patientId');
    var urlInitialize = url + patientId;
    fetch(urlInitialize, options)
        .then(function (res) { return res.json(); })
        .then(function (response) {
        if (get_1.default(response, 'status', null) !== 'loading_data') {
            return resolve(true);
        }
        var isNewPatient = get_1.default(response, 'new_patient', false);
        var delay = isNewPatient ? NEW_PATIENT_DELAY : OLD_PATIENT_DELAY;
        setTimeout(function () { return fetchInitialize(resolve, reject); }, delay);
    });
};
exports.default = fetchInitialize;
