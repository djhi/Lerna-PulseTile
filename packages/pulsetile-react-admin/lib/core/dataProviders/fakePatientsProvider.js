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
var moment_1 = __importDefault(require("moment"));
var react_admin_1 = require("react-admin");
var sort_array_objects_1 = __importStar(require("sort-array-objects"));
var pluginFilters_1 = __importDefault(require("../config/pluginFilters"));
var dummyPatients_1 = __importDefault(require("../pages/PatientsList/dummyPatients"));
/**
 * This function prepare total patient name (for table)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} item
 * @return {string}
 */
function getTotalName(item) {
    var nameFromResponse = get_1.default(item, 'resource.name', null);
    var prefix = get_1.default(nameFromResponse, [[0], 'prefix'], null);
    var namesArray = get_1.default(nameFromResponse, [[0], 'given'], null);
    var firstName = namesArray.join(' ');
    var surname = get_1.default(nameFromResponse, [[0], 'family'], null);
    return [firstName, surname].join(' ');
}
/**
 * This function prepare total patient address (for table)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} item
 * @return {string}
 */
function getTotalAddress(item) {
    var addressFromResponse = get_1.default(item, 'resource.address', null);
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
/**
 * This function filters response array
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {string} resource
 * @param {array}  results
 * @param {shape}  params
 * @return {array}
 */
function getFilterResults(resource, results, params) {
    var filterText = get_1.default(params, 'filter.filterText', null);
    var filters = pluginFilters_1.default[resource];
    return !filterText ? results : results.filter(function (item) { return isItemConsider(item, filters, filterText); });
}
/**
 * This function cheks is current item consider to filter condition
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  item
 * @param {shape}  filters
 * @param {string} filterText
 * @return {boolean}
 */
function isItemConsider(item, filters, filterText) {
    var result = false;
    filters.forEach(function (filterItem) {
        var string = item[filterItem];
        if (String(string).toLowerCase().search(filterText) >= 0) {
            result = true;
        }
    });
    return result;
}
/**
 * This function extracts results from response
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {string} resource
 * @param {shape}  response
 * @param {shape}  params
 * @return {array}
 */
function getResultsFromResponse(resource, response, params) {
    var results = [];
    if (resource !== 'patients') {
        results = response.map(function (item, id) {
            return Object.assign({ id: item.sourceId }, item);
        });
    }
    else {
        results = getPatientsList(response, params);
    }
    return results;
}
function getPatientsList(response, params) {
    var departmentsArray = ["CommunityCare", "Hospital", "MentalHealth", "Neighbourhood", "PrimaryCare"];
    var ageArray = ["first", "second", "third", "fourth"];
    var ageLimits = {
        first: { min: 19, max: 30 },
        second: { min: 31, max: 60 },
        third: { min: 61, max: 80 },
        fourth: { min: 81, max: 100 },
    };
    var filter = get_1.default(params, 'sort.field', null);
    var results = [];
    if (departmentsArray.indexOf(filter) !== -1) {
        results = Object.values(response).filter(function (item) {
            var filterWithSpaces = filter
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, function (str) { return str.toUpperCase(); })
                .trim();
            return (item.department === filterWithSpaces);
        });
    }
    else if (ageArray.indexOf(filter) !== -1) {
        var currentDate = new Date().getTime();
        var endDate_1 = new moment_1.default(currentDate);
        results = Object.values(response).filter(function (item) {
            var birthDate = get_1.default(item, 'dateOfBirth', null);
            var startDate = new moment_1.default(birthDate);
            var duration = moment_1.default.duration(endDate_1.diff(startDate)).get('year');
            return (duration > ageLimits[filter].min && duration < ageLimits[filter].max);
        });
    }
    else {
        results = Object.values(response).map(function (item) {
            return Object.assign({ id: item.sourceId }, item);
        });
    }
    return results;
}
var fakePatientsProvider = function (type, resource, params) {
    switch (type) {
        case react_admin_1.GET_LIST:
            var pageNumber = get_1.default(params, 'pagination.page', 1);
            var numberPerPage = get_1.default(params, 'pagination.perPage', 10);
            var results = getResultsFromResponse(resource, dummyPatients_1.default, params);
            var resultsFiltering = getFilterResults(resource, results, params);
            var resultsSorting = getSortedResults(resultsFiltering, params);
            var startItem = (pageNumber - 1) * numberPerPage;
            var endItem = pageNumber * numberPerPage;
            var paginationResults = resultsSorting.slice(startItem, endItem);
            return {
                data: paginationResults,
                total: resultsSorting.length,
            };
        case react_admin_1.GET_ONE:
        case react_admin_1.UPDATE:
            var response = {};
            for (var i = 0, n = dummyPatients_1.default.length; i < n; i++) {
                var item = dummyPatients_1.default[i];
                if (item.id === params.id) {
                    response = item;
                    break;
                }
            }
            return {
                data: Object.assign({ id: params.id }, response),
            };
        case react_admin_1.CREATE:
            return {
                data: Object.assign({ id: params.data.nhsNumber }, params.data)
            };
        default:
            return { data: 'No results' };
    }
};
exports.default = fakePatientsProvider;
