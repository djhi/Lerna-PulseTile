import get from "lodash/get";
import { GET_LIST, GET_ONE, CREATE, UPDATE, HttpError } from "react-admin";
import sort, { ASC, DESC } from 'sort-array-objects';
import { token, domainName } from "../token";
function checkFormData(params) {
    var paramsArray = [
        { param: 'data.firstName', label: 'Name' },
        { param: 'data.lastName', label: 'Surname' },
        { param: 'data.birthDate', label: 'Date of Birth' },
        { param: 'data.address', label: 'Address' },
        { param: 'data.city', label: 'City' },
        { param: 'data.district', label: 'District' },
        { param: 'data.postCode', label: 'Post Code' },
        { param: 'data.country', label: 'Country' },
        { param: 'data.phone', label: 'Telephone Number' },
        { param: 'data.nhsNumber', label: 'CHI Number' },
    ];
    var missedParamsArray = [];
    for (var i = 0, n = paramsArray.length; i < n; i++) {
        var item = paramsArray[i];
        var value = get(params, item.param, null);
        if (!value) {
            missedParamsArray.push(item.label);
        }
    }
    if (missedParamsArray.length > 0) {
        var string = missedParamsArray.join(', ');
        throw new HttpError('777|Please add ' + string);
    }
    return true;
}
function getRequestUrl(params) {
    var search = get(params, 'filter.filterText', null);
    var searchType = get(params, 'filter.filterType', null);
    var clinicalSearchType = get(params, 'filter.clinicalQuery.searchType', null);
    var result = null;
    if (searchType === 'id') {
        result = domainName + "/mpi/Patient/" + search;
    }
    else if (searchType === 'clinicalQuery' && clinicalSearchType) {
        result = domainName + "/api/patient/clinicalSearch/" + clinicalSearchType;
    }
    else if (searchType === 'by_age' && search) {
        result = domainName + "/mpi/Patient/search/advanced?type=by_age&from=" + search[0] + "&to=" + search[1];
    }
    else if (searchType !== 'name' && search) {
        result = domainName + "/mpi/Patient/search/advanced?type=" + searchType + "&value=" + search.toLowerCase();
    }
    else if (search) {
        result = domainName + "/mpi/Patient?name=" + search;
    }
    return result;
}
function getRequestMethod(params) {
    var isClinicalQuery = get(params, 'filter.clinicalQuery', null);
    return isClinicalQuery ? 'POST' : 'GET';
}
function getRequestBody(params) {
    var isClinicalQuery = get(params, 'filter.clinicalQuery', null);
    if (!isClinicalQuery) {
        return null;
    }
    var requestBody = {
        query: get(params, 'filter.clinicalQuery.searchValue', null),
        gender: get(params, 'filter.clinicalQuery.gender', null),
    };
    var dateOfBirth = get(params, 'filter.clinicalQuery.dateOfBirth', null);
    var from = get(params, 'filter.clinicalQuery.minAge', null);
    var to = get(params, 'filter.clinicalQuery.maxAge', null);
    if (dateOfBirth) {
        requestBody.dateOfBirth = dateOfBirth;
    }
    else if (from && to) {
        requestBody.from = from;
        requestBody.to = to;
    }
    return JSON.stringify(requestBody);
}
function getUserSearchResultsById(response) {
    var patientInfo = get(response, 'patient', null);
    var addressFromResponse = get(response, 'address', null);
    var result = {
        id: get(patientInfo, ['identifier', [0], 'value'], null),
        name: getTotalName(patientInfo, true),
        address: getTotalAddress(patientInfo, true),
        totalAddress: getTotalAddress(patientInfo, true),
        city: get(addressFromResponse, [[0], 'city'], null),
        country: get(addressFromResponse, [[0], 'country'], null),
        district: get(addressFromResponse, [[0], 'district'], null),
        postCode: get(addressFromResponse, [[0], 'postalCode'], null),
        birthDate: get(patientInfo, 'birthDate', null),
        department: get(patientInfo, 'department', null),
        gender: get(patientInfo, 'gender', null),
        nhsNumber: get(patientInfo, ['identifier', [0], 'value'], null),
        phone: get(patientInfo, 'telecom', null),
    };
    return [result];
}
function getUserSearchResults(response, params) {
    var pageNumber = get(params, 'pagination.page', 1);
    var numberPerPage = get(params, 'pagination.perPage', 10);
    var patientsArray = get(response, 'entry', []);
    var results = getPatientsList(patientsArray);
    var resultsSorting = getSortedResults(results, params);
    var startItem = (pageNumber - 1) * numberPerPage;
    var endItem = pageNumber * numberPerPage;
    return resultsSorting.slice(startItem, endItem);
}
var convertPatientsDataRequestToHTTP = function (type, resource, params) {
    var url = "";
    var method = "";
    var options = {};
    switch (type) {
        case GET_LIST: {
            url = getRequestUrl(params);
            method = getRequestMethod(params);
            options.method = method;
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
            };
            if (method === 'POST') {
                options.body = getRequestBody(params);
            }
            break;
        }
        case GET_ONE:
            url = domainName + "/mpi/Patient/" + params.id;
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token,
                'X-Requested-With': "XMLHttpRequest",
            };
            break;
        case UPDATE:
            checkFormData(params);
            var userName = get(params, 'data.firstName', null);
            var userId = get(params, 'data.nhsNumber', null);
            var updateData = {
                name: {
                    family: get(params, 'data.lastName', null),
                    given: userName.split(' '),
                    prefix: get(params, 'data.prefix', null),
                },
                telecom: String(get(params, 'data.phone', null)),
                gender: get(params, 'data.gender', null),
                birthDate: get(params, 'data.birthDate', null),
                address: {
                    line: get(params, 'data.address', null),
                    city: get(params, 'data.city', null),
                    district: get(params, 'data.district', null),
                    postalCode: get(params, 'data.postCode', null),
                    country: get(params, 'data.country', null)
                },
                id: userId.toString(),
            };
            url = domainName + "/mpi/Patient/" + params.id;
            options.method = "PUT";
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
            };
            options.body = JSON.stringify(updateData);
            break;
        case CREATE:
            checkFormData(params);
            var patientId = get(params, 'data.nhsNumber', null);
            var name_1 = get(params, 'data.firstName', null);
            var data = {
                name: {
                    family: get(params, 'data.lastName', null),
                    given: name_1.split(' '),
                    prefix: get(params, 'data.prefix', null),
                },
                telecom: String(get(params, 'data.phone', null)),
                gender: get(params, 'data.gender', null),
                birthDate: get(params, 'data.birthDate', null),
                address: {
                    line: get(params, 'data.address', null),
                    city: get(params, 'data.city', null),
                    district: get(params, 'data.district', null),
                    postalCode: get(params, 'data.postCode', null),
                    country: get(params, 'data.country', null)
                }
            };
            url = domainName + "/mpi/Patient/" + patientId;
            options.method = "POST";
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
            };
            options.body = JSON.stringify(data);
            break;
        default:
            return { data: 'No results' };
    }
    return { url: url, options: options };
};
var convertPatientsHTTPResponse = function (response, type, resource, params) {
    switch (type) {
        case GET_LIST:
            var searchType = get(params, 'filter.filterType', null);
            var paginationResults = (searchType === 'id') ? getUserSearchResultsById(response) : getUserSearchResults(response, params);
            return {
                data: paginationResults,
                total: paginationResults.length,
            };
        case GET_ONE:
            var patientFromResponse = get(response, 'patient', null);
            var id = get(patientFromResponse, ['identifier', [0], 'value'], null);
            var name_2 = get(patientFromResponse, ['name', [0]], null);
            var prefix = get(name_2, ['prefix'], null);
            var namesArray = get(name_2, 'given', null);
            var firstName = namesArray.join(' ');
            var lastName = get(name_2, ['family'], null);
            var addressArray = get(patientFromResponse, 'address', null);
            var city = get(addressArray, [[0], 'city'], null);
            var country = get(addressArray, [[0], 'country'], null);
            var postCode = get(addressArray, [[0], 'postalCode'], null);
            var line = get(addressArray, [[0], 'line', [0]], null);
            var district = get(addressArray, [[0], 'district'], null);
            return {
                data: {
                    id: id,
                    prefix: prefix,
                    firstName: firstName,
                    lastName: lastName,
                    name: [firstName, lastName].join(' '),
                    totalAddress: [line, city, district, postCode].join(', '),
                    address: line,
                    city: city,
                    country: country,
                    district: district,
                    postCode: postCode,
                    birthDate: get(patientFromResponse, 'birthDate', null),
                    department: get(patientFromResponse, 'department', null),
                    gender: get(patientFromResponse, 'gender', null),
                    source: get(patientFromResponse, ['identifier', [0], 'system'], null),
                    nhsNumber: id,
                    phone: get(patientFromResponse, 'telecom', null),
                }
            };
        case UPDATE:
            var newFirstName = get(params, 'data.firstName', null);
            var newLastName = get(params, 'data.lastName', null);
            var newAddressLine = get(params, 'data.address', null);
            var newCity = get(params, 'data.city', null);
            var newDistrict = get(params, 'data.district', null);
            var newPostalCode = get(params, 'data.postCode', null);
            var newData = params.data;
            newData.name = [newFirstName, newLastName].join(' ');
            newData.address = [newAddressLine, newCity, newDistrict, newPostalCode].join(' ');
            newData.totalAddress = [newAddressLine, newCity, newDistrict, newPostalCode].join(' ');
            return {
                id: get(params, 'data.nhsNumber', null),
                data: newData,
                previousData: get(params, 'previousData', {})
            };
        case CREATE:
            var dataFromRequest = get(params, 'data', null);
            var compositionUid = get(response, 'compositionUid', null);
            var sourceID = '';
            if (compositionUid) {
                var compositionUidArray = compositionUid.split('::');
                sourceID = compositionUidArray[0];
            }
            dataFromRequest.id = Number(get(params, 'data.nhsNumber', null));
            dataFromRequest.name = get(params, 'data.firstName', null) + ' ' + get(params, 'data.lastName', null);
            dataFromRequest.address = get(params, 'data.address', null) + ' ' + get(params, 'data.city', null) + ' ' + get(params, 'data.district', null) + ' ' + get(params, 'data.postCode', null);
            dataFromRequest.isNew = true;
            if (!get(params, 'source', null)) {
                dataFromRequest.source = 'ethercis';
            }
            return {
                data: dataFromRequest,
            };
        default:
            return { data: 'No results' };
    }
};
/**
 * This function filters patients list by department
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {array} patientsArray
 * @return {Array}
 */
function getPatientsList(patientsArray) {
    var results = [];
    patientsArray.forEach(function (item) {
        var addressFromResponse = get(item, 'resource.address', null);
        results.push({
            id: get(item, ['resource', 'identifier', [0], 'value'], null),
            name: getTotalName(item),
            address: getTotalAddress(item),
            totalAddress: getTotalAddress(item),
            city: get(addressFromResponse, [[0], 'city'], null),
            country: get(addressFromResponse, [[0], 'country'], null),
            district: get(addressFromResponse, [[0], 'district'], null),
            postCode: get(addressFromResponse, [[0], 'postalCode'], null),
            birthDate: get(item, 'resource.birthDate', null),
            department: get(item, 'resource.department', null),
            gender: get(item, 'resource.gender', null),
            nhsNumber: get(item, ['resource', 'identifier', [0], 'value'], null),
            phone: get(item, 'resource.telecom', null),
        });
    });
    return results;
}
/**
 * This function prepare total patient name (for table)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   item
 * @param {boolean} isSingle
 * @return {string}
 */
function getTotalName(item, isSingle) {
    if (isSingle === void 0) { isSingle = null; }
    var nameFromResponse = isSingle ? get(item, 'name', null) : get(item, 'resource.name', null);
    var namesArray = get(nameFromResponse, [[0], 'given'], null);
    var firstName = namesArray.join(' ');
    var surname = get(nameFromResponse, [[0], 'family'], null);
    return [firstName, surname].join(' ');
}
/**
 * This function prepare total patient address (for table)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   item
 * @param {boolean} isSingle
 * @return {string}
 */
function getTotalAddress(item, isSingle) {
    var addressFromResponse = isSingle ? get(item, 'address', null) : get(item, 'resource.address', null);
    var addressArray = [
        get(addressFromResponse, [[0], 'line', [0]], null),
        get(addressFromResponse, [[0], 'city'], null),
        get(addressFromResponse, [[0], 'district'], null),
        get(addressFromResponse, [[0], 'postalCode'], null)
    ];
    return addressArray.join(', ');
}
/**
 * This function sorts response array
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {array}  results
 * @param {shape}  params
 * @return {array}
 */
function getSortedResults(results, params) {
    var sortField = get(params, 'sort.field', null);
    var sortOrder = (get(params, 'sort.order', null) === 'DESC') ? DESC : ASC;
    return sort(results, [sortField], sortOrder);
}
export default (function (type, resource, params) {
    var _a = convertPatientsDataRequestToHTTP(type, resource, params), url = _a.url, options = _a.options;
    var responseInfo = {};
    return fetch(url, options).then(function (response) {
        responseInfo.status = get(response, 'status', null);
        return response.json();
    })
        .then(function (res) {
        var search = get(params, 'filter.filterText', null);
        if (responseInfo.status === 404 && search) {
            responseInfo.errorMessage = 'No patient by that surname, please try again';
            var errorString = responseInfo.status + '|' + responseInfo.errorMessage;
            // throw new HttpError(errorString);
        }
        else if (responseInfo.status !== 200) {
            responseInfo.errorMessage = get(res, 'error', null);
            var errorString = responseInfo.status + '|' + responseInfo.errorMessage;
            throw new HttpError(errorString);
        }
        return convertPatientsHTTPResponse(res, type, resource, params);
    })
        .catch(function (err) {
        console.log('Error: ', err);
        throw new Error(err);
    });
});
