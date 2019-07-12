import get from "lodash/get";
import moment from "moment";
import { GET_LIST, GET_ONE, CREATE, UPDATE, } from "react-admin";
import sort, { ASC, DESC } from 'sort-array-objects';
import pluginFilters from "../config/pluginFilters";
import dummyPatients from "../pages/PatientsList/dummyPatients";
/**
 * This function prepare total patient name (for table)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} item
 * @return {string}
 */
function getTotalName(item) {
    var nameFromResponse = get(item, 'resource.name', null);
    var prefix = get(nameFromResponse, [[0], 'prefix'], null);
    var namesArray = get(nameFromResponse, [[0], 'given'], null);
    var firstName = namesArray.join(' ');
    var surname = get(nameFromResponse, [[0], 'family'], null);
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
    var addressFromResponse = get(item, 'resource.address', null);
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
    var filterText = get(params, 'filter.filterText', null);
    var filters = pluginFilters[resource];
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
    var filter = get(params, 'sort.field', null);
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
        var endDate_1 = new moment(currentDate);
        results = Object.values(response).filter(function (item) {
            var birthDate = get(item, 'dateOfBirth', null);
            var startDate = new moment(birthDate);
            var duration = moment.duration(endDate_1.diff(startDate)).get('year');
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
        case GET_LIST:
            var pageNumber = get(params, 'pagination.page', 1);
            var numberPerPage = get(params, 'pagination.perPage', 10);
            var results = getResultsFromResponse(resource, dummyPatients, params);
            var resultsFiltering = getFilterResults(resource, results, params);
            var resultsSorting = getSortedResults(resultsFiltering, params);
            var startItem = (pageNumber - 1) * numberPerPage;
            var endItem = pageNumber * numberPerPage;
            var paginationResults = resultsSorting.slice(startItem, endItem);
            return {
                data: paginationResults,
                total: resultsSorting.length,
            };
        case GET_ONE:
        case UPDATE:
            var response = {};
            for (var i = 0, n = dummyPatients.length; i < n; i++) {
                var item = dummyPatients[i];
                if (item.id === params.id) {
                    response = item;
                    break;
                }
            }
            return {
                data: Object.assign({ id: params.id }, response),
            };
        case CREATE:
            return {
                data: Object.assign({ id: params.data.nhsNumber }, params.data)
            };
        default:
            return { data: 'No results' };
    }
};
export default fakePatientsProvider;
