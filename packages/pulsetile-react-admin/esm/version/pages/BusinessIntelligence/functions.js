import { COLOR_AMBER, COLOR_GREEN, COLOR_RED } from "./constants";
export function getAverageHealthScore(patients) {
    var totalScore = 0;
    var patientsNumber = patients.length;
    patients.map(function (item) {
        totalScore += item.healthScore;
    });
    return (totalScore > 0 && patientsNumber > 0) ? Math.ceil(totalScore / patientsNumber) : 0;
}
var namesArray = [
    '0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81+',
];
function getDiagnosisNumber(patients, minAge, maxAge, type) {
    var patientsNumber = patients.length;
    var patientsFilter = patients.filter(function (item) { return (item.age >= minAge && item.age <= maxAge && item.diagnosis === type); });
    return (patientsNumber > 0) ? Math.ceil(100 * patientsFilter.length / patientsNumber) : 0;
}
export function getDiagnosisByAge(patients) {
    var result = [];
    namesArray.map(function (item) {
        var minAge = 0;
        var maxAge = 0;
        if (item === '81+') {
            minAge = 81;
            maxAge = 125;
        }
        else {
            var agesArray = item.split('-');
            minAge = agesArray[0];
            maxAge = agesArray[1];
        }
        result.push({
            name: item,
            diabetes: getDiagnosisNumber(patients, minAge, maxAge, 'Diabetes'),
            measles: getDiagnosisNumber(patients, minAge, maxAge, 'Measles'),
            asthma: getDiagnosisNumber(patients, minAge, maxAge, 'Asthma'),
            dementia: getDiagnosisNumber(patients, minAge, maxAge, 'Dementia'),
        });
    });
    return result;
}
export function getColorByHealthScore(score) {
    var result = COLOR_GREEN;
    if (score >= 26 && score <= 75) {
        result = COLOR_AMBER;
    }
    else if (score <= 25) {
        result = COLOR_RED;
    }
    return result;
}
export function getNumberByGender(patients, gender, diagnosis) {
    var patientsNumber = patients.length;
    var patientsFilter = patients.filter(function (item) { return (item.gender === gender && item.diagnosis === diagnosis); });
    return (patientsNumber > 0) ? Math.ceil(100 * patientsFilter.length / patientsNumber) : 0;
}
