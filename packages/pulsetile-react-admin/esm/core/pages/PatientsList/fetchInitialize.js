import get from "lodash/get";
import { domainName } from "../../token";
var url = domainName + "/api/initialise/";
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
        if (get(response, 'status', null) !== 'loading_data') {
            return resolve(true);
        }
        var isNewPatient = get(response, 'new_patient', false);
        var delay = isNewPatient ? NEW_PATIENT_DELAY : OLD_PATIENT_DELAY;
        setTimeout(function () { return fetchInitialize(resolve, reject); }, delay);
    });
};
export default fetchInitialize;
