"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var react_admin_1 = require("react-admin");
var sort_array_objects_1 = __importStar(require("sort-array-objects"));
var token_1 = require("../token");
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
        var value = get_1.default(params, item.param, null);
        if (!value) {
            missedParamsArray.push(item.label);
        }
    }
    if (missedParamsArray.length > 0) {
        var string = missedParamsArray.join(', ');
        throw new react_admin_1.HttpError('777|Please add ' + string);
    }
    return true;
}
function getRequestUrl(params) {
    var search = get_1.default(params, 'filter.filterText', null);
    var searchType = get_1.default(params, 'filter.filterType', null);
    var clinicalSearchType = get_1.default(params, 'filter.clinicalQuery.searchType', null);
    var result = null;
    if (searchType === 'id') {
        result = token_1.domainName + "/mpi/Patient/" + search;
    }
    else if (searchType === 'clinicalQuery' && clinicalSearchType) {
        result = token_1.domainName + "/api/patient/clinicalSearch/" + clinicalSearchType;
    }
    else if (searchType === 'by_age' && search) {
        result = token_1.domainName + "/mpi/Patient/search/advanced?type=by_age&from=" + search[0] + "&to=" + search[1];
    }
    else if (searchType !== 'name' && search) {
        result = token_1.domainName + "/mpi/Patient/search/advanced?type=" + searchType + "&value=" + search.toLowerCase();
    }
    else if (search) {
        result = token_1.domainName + "/mpi/Patient?name=" + search;
    }
    return result;
}
function getRequestMethod(params) {
    var isClinicalQuery = get_1.default(params, 'filter.clinicalQuery', null);
    return isClinicalQuery ? 'POST' : 'GET';
}
function getRequestBody(params) {
    var isClinicalQuery = get_1.default(params, 'filter.clinicalQuery', null);
    if (!isClinicalQuery) {
        return null;
    }
    var requestBody = {
        query: get_1.default(params, 'filter.clinicalQuery.searchValue', null),
        gender: get_1.default(params, 'filter.clinicalQuery.gender', null),
    };
    var dateOfBirth = get_1.default(params, 'filter.clinicalQuery.dateOfBirth', null);
    var from = get_1.default(params, 'filter.clinicalQuery.minAge', null);
    var to = get_1.default(params, 'filter.clinicalQuery.maxAge', null);
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
    var patientInfo = get_1.default(response, 'patient', null);
    var addressFromResponse = get_1.default(response, 'address', null);
    var result = {
        id: get_1.default(patientInfo, ['identifier', [0], 'value'], null),
        name: getTotalName(patientInfo, true),
        address: getTotalAddress(patientInfo, true),
        totalAddress: getTotalAddress(patientInfo, true),
        city: get_1.default(addressFromResponse, [[0], 'city'], null),
        country: get_1.default(addressFromResponse, [[0], 'country'], null),
        district: get_1.default(addressFromResponse, [[0], 'district'], null),
        postCode: get_1.default(addressFromResponse, [[0], 'postalCode'], null),
        birthDate: get_1.default(patientInfo, 'birthDate', null),
        department: get_1.default(patientInfo, 'department', null),
        gender: get_1.default(patientInfo, 'gender', null),
        nhsNumber: get_1.default(patientInfo, ['identifier', [0], 'value'], null),
        phone: get_1.default(patientInfo, 'telecom', null),
    };
    return [result];
}
function getUserSearchResults(response, params) {
    var pageNumber = get_1.default(params, 'pagination.page', 1);
    var numberPerPage = get_1.default(params, 'pagination.perPage', 10);
    var patientsArray = get_1.default(response, 'entry', []);
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
        case react_admin_1.GET_LIST: {
            url = getRequestUrl(params);
            method = getRequestMethod(params);
            options.method = method;
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
            };
            if (method === 'POST') {
                options.body = getRequestBody(params);
            }
            break;
        }
        case react_admin_1.GET_ONE:
            url = token_1.domainName + "/mpi/Patient/" + params.id;
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
                'X-Requested-With': "XMLHttpRequest",
            };
            break;
        case react_admin_1.UPDATE:
            checkFormData(params);
            var userName = get_1.default(params, 'data.firstName', null);
            var userId = get_1.default(params, 'data.nhsNumber', null);
            var updateData = {
                name: {
                    family: get_1.default(params, 'data.lastName', null),
                    given: userName.split(' '),
                    prefix: get_1.default(params, 'data.prefix', null),
                },
                telecom: String(get_1.default(params, 'data.phone', null)),
                gender: get_1.default(params, 'data.gender', null),
                birthDate: get_1.default(params, 'data.birthDate', null),
                address: {
                    line: get_1.default(params, 'data.address', null),
                    city: get_1.default(params, 'data.city', null),
                    district: get_1.default(params, 'data.district', null),
                    postalCode: get_1.default(params, 'data.postCode', null),
                    country: get_1.default(params, 'data.country', null)
                },
                id: userId.toString(),
            };
            url = token_1.domainName + "/mpi/Patient/" + params.id;
            options.method = "PUT";
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
            };
            options.body = JSON.stringify(updateData);
            break;
        case react_admin_1.CREATE:
            checkFormData(params);
            var patientId = get_1.default(params, 'data.nhsNumber', null);
            var name_1 = get_1.default(params, 'data.firstName', null);
            var data = {
                name: {
                    family: get_1.default(params, 'data.lastName', null),
                    given: name_1.split(' '),
                    prefix: get_1.default(params, 'data.prefix', null),
                },
                telecom: String(get_1.default(params, 'data.phone', null)),
                gender: get_1.default(params, 'data.gender', null),
                birthDate: get_1.default(params, 'data.birthDate', null),
                address: {
                    line: get_1.default(params, 'data.address', null),
                    city: get_1.default(params, 'data.city', null),
                    district: get_1.default(params, 'data.district', null),
                    postalCode: get_1.default(params, 'data.postCode', null),
                    country: get_1.default(params, 'data.country', null)
                }
            };
            url = token_1.domainName + "/mpi/Patient/" + patientId;
            options.method = "POST";
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
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
        case react_admin_1.GET_LIST:
            var searchType = get_1.default(params, 'filter.filterType', null);
            var paginationResults = (searchType === 'id') ? getUserSearchResultsById(response) : getUserSearchResults(response, params);
            return {
                data: paginationResults,
                total: paginationResults.length,
            };
        case react_admin_1.GET_ONE:
            var patientFromResponse = get_1.default(response, 'patient', null);
            var id = get_1.default(patientFromResponse, ['identifier', [0], 'value'], null);
            var name_2 = get_1.default(patientFromResponse, ['name', [0]], null);
            var prefix = get_1.default(name_2, ['prefix'], null);
            var namesArray = get_1.default(name_2, 'given', null);
            var firstName = namesArray.join(' ');
            var lastName = get_1.default(name_2, ['family'], null);
            var addressArray = get_1.default(patientFromResponse, 'address', null);
            var city = get_1.default(addressArray, [[0], 'city'], null);
            var country = get_1.default(addressArray, [[0], 'country'], null);
            var postCode = get_1.default(addressArray, [[0], 'postalCode'], null);
            var line = get_1.default(addressArray, [[0], 'line', [0]], null);
            var district = get_1.default(addressArray, [[0], 'district'], null);
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
                    birthDate: get_1.default(patientFromResponse, 'birthDate', null),
                    department: get_1.default(patientFromResponse, 'department', null),
                    gender: get_1.default(patientFromResponse, 'gender', null),
                    source: get_1.default(patientFromResponse, ['identifier', [0], 'system'], null),
                    nhsNumber: id,
                    phone: get_1.default(patientFromResponse, 'telecom', null),
                }
            };
        case react_admin_1.UPDATE:
            var newFirstName = get_1.default(params, 'data.firstName', null);
            var newLastName = get_1.default(params, 'data.lastName', null);
            var newAddressLine = get_1.default(params, 'data.address', null);
            var newCity = get_1.default(params, 'data.city', null);
            var newDistrict = get_1.default(params, 'data.district', null);
            var newPostalCode = get_1.default(params, 'data.postCode', null);
            var newData = params.data;
            newData.name = [newFirstName, newLastName].join(' ');
            newData.address = [newAddressLine, newCity, newDistrict, newPostalCode].join(' ');
            newData.totalAddress = [newAddressLine, newCity, newDistrict, newPostalCode].join(' ');
            return {
                id: get_1.default(params, 'data.nhsNumber', null),
                data: newData,
                previousData: get_1.default(params, 'previousData', {})
            };
        case react_admin_1.CREATE:
            var dataFromRequest = get_1.default(params, 'data', null);
            var compositionUid = get_1.default(response, 'compositionUid', null);
            var sourceID = '';
            if (compositionUid) {
                var compositionUidArray = compositionUid.split('::');
                sourceID = compositionUidArray[0];
            }
            dataFromRequest.id = Number(get_1.default(params, 'data.nhsNumber', null));
            dataFromRequest.name = get_1.default(params, 'data.firstName', null) + ' ' + get_1.default(params, 'data.lastName', null);
            dataFromRequest.address = get_1.default(params, 'data.address', null) + ' ' + get_1.default(params, 'data.city', null) + ' ' + get_1.default(params, 'data.district', null) + ' ' + get_1.default(params, 'data.postCode', null);
            dataFromRequest.isNew = true;
            if (!get_1.default(params, 'source', null)) {
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
        var addressFromResponse = get_1.default(item, 'resource.address', null);
        results.push({
            id: get_1.default(item, ['resource', 'identifier', [0], 'value'], null),
            name: getTotalName(item),
            address: getTotalAddress(item),
            totalAddress: getTotalAddress(item),
            city: get_1.default(addressFromResponse, [[0], 'city'], null),
            country: get_1.default(addressFromResponse, [[0], 'country'], null),
            district: get_1.default(addressFromResponse, [[0], 'district'], null),
            postCode: get_1.default(addressFromResponse, [[0], 'postalCode'], null),
            birthDate: get_1.default(item, 'resource.birthDate', null),
            department: get_1.default(item, 'resource.department', null),
            gender: get_1.default(item, 'resource.gender', null),
            nhsNumber: get_1.default(item, ['resource', 'identifier', [0], 'value'], null),
            phone: get_1.default(item, 'resource.telecom', null),
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
    var nameFromResponse = isSingle ? get_1.default(item, 'name', null) : get_1.default(item, 'resource.name', null);
    var namesArray = get_1.default(nameFromResponse, [[0], 'given'], null);
    var firstName = namesArray.join(' ');
    var surname = get_1.default(nameFromResponse, [[0], 'family'], null);
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
    var addressFromResponse = isSingle ? get_1.default(item, 'address', null) : get_1.default(item, 'resource.address', null);
    var addressArray = [
        get_1.default(addressFromResponse, [[0], 'line', [0]], null),
        get_1.default(addressFromResponse, [[0], 'city'], null),
        get_1.default(addressFromResponse, [[0], 'district'], null),
        get_1.default(addressFromResponse, [[0], 'postalCode'], null)
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
    var sortField = get_1.default(params, 'sort.field', null);
    var sortOrder = (get_1.default(params, 'sort.order', null) === 'DESC') ? sort_array_objects_1.DESC : sort_array_objects_1.ASC;
    return sort_array_objects_1.default(results, [sortField], sortOrder);
}
exports.default = (function (type, resource, params) {
    var _a = convertPatientsDataRequestToHTTP(type, resource, params), url = _a.url, options = _a.options;
    var responseInfo = {};
    return fetch(url, options).then(function (response) {
        responseInfo.status = get_1.default(response, 'status', null);
        return response.json();
    })
        .then(function (res) {
        var search = get_1.default(params, 'filter.filterText', null);
        if (responseInfo.status === 404 && search) {
            responseInfo.errorMessage = 'No patient by that surname, please try again';
            var errorString = responseInfo.status + '|' + responseInfo.errorMessage;
            // throw new HttpError(errorString);
        }
        else if (responseInfo.status !== 200) {
            responseInfo.errorMessage = get_1.default(res, 'error', null);
            var errorString = responseInfo.status + '|' + responseInfo.errorMessage;
            throw new react_admin_1.HttpError(errorString);
        }
        return convertPatientsHTTPResponse(res, type, resource, params);
    })
        .catch(function (err) {
        console.log('Error: ', err);
        throw new Error(err);
    });
});
