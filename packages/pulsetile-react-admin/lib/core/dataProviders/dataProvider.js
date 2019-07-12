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
var pluginFilters_1 = __importDefault(require("../config/pluginFilters"));
var token_1 = require("../token");
var fakeTestResultsProvider_1 = __importDefault(require("./fakeTestResultsProvider"));
var patientsProvider_1 = __importDefault(require("./patientsProvider"));
var apiPatientsUser = 'api/patients';
/**
 * This constant prepare data for requests (URL and options)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  type
 * @param {string} resource
 * @param {shape}  params
 */
var convertDataRequestToHTTP = function (type, resource, params) {
    var url = "";
    var options = {};
    switch (type) {
        case react_admin_1.GET_LIST: {
            url = token_1.domainName + "/" + apiPatientsUser + "/" + localStorage.getItem('patientId') + "/" + resource;
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
                'X-Requested-With': "XMLHttpRequest",
            };
            break;
        }
        case react_admin_1.GET_ONE:
            url = token_1.domainName + "/" + apiPatientsUser + "/" + localStorage.getItem('patientId') + "/" + resource + "/" + params.id;
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
                'X-Requested-With': "XMLHttpRequest",
            };
            break;
        case react_admin_1.UPDATE:
            var updateData = Object.assign({ userId: localStorage.getItem('patientId') }, params.data);
            url = token_1.domainName + "/" + apiPatientsUser + "/" + localStorage.getItem('patientId') + "/" + resource + "/" + params.id;
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
            var newData = Object.assign({ userId: localStorage.getItem('patientId') }, params.data);
            url = token_1.domainName + "/" + apiPatientsUser + "/" + localStorage.getItem('patientId') + "/" + resource;
            options.method = "POST";
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            options.headers = {
                Authorization: "Bearer " + token_1.token,
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
            };
            options.body = JSON.stringify(newData);
            break;
        default:
            throw new Error("Unsupported fetch action type " + type);
    }
    return { url: url, options: options };
};
/**
 * This function extracts results from response
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  response
 * @return {array}
 */
function getResultsFromResponse(response) {
    return response.map(function (item, id) {
        return Object.assign({
            number: (id + 1),
            id: item.sourceId
        }, item);
    });
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
 * This constant handle response data
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  response
 * @param {shape}  type
 * @param {string} resource
 * @param {shape}  params
 */
var convertHTTPResponse = function (response, type, resource, params) {
    switch (type) {
        case react_admin_1.GET_LIST:
            var pageNumber = get_1.default(params, 'pagination.page', 1);
            var numberPerPage = get_1.default(params, 'pagination.perPage', 10);
            var results = getResultsFromResponse(response);
            var resultsFiltering = getFilterResults(resource, results, params);
            var resultsSorting = getSortedResults(resultsFiltering, params);
            var startItem = (pageNumber - 1) * numberPerPage;
            var endItem = pageNumber * numberPerPage;
            var paginationResults = resultsSorting.slice(startItem, endItem);
            return {
                data: paginationResults,
                total: results.length,
            };
        case react_admin_1.GET_ONE:
            return {
                data: Object.assign({ id: response.sourceId }, response),
            };
        case react_admin_1.UPDATE:
            return params;
        case react_admin_1.CREATE:
            var dataFromRequest = get_1.default(params, 'data', null);
            var compositionUid = get_1.default(response, 'compositionUid', null);
            var sourceID = '';
            if (compositionUid) {
                var compositionUidArray = compositionUid.split('::');
                sourceID = compositionUidArray[0];
            }
            dataFromRequest.id = get_1.default(response, 'host', null) + '-' + sourceID;
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
var dataProvider = function (type, resource, params) {
    var _a = convertDataRequestToHTTP(type, resource, params), url = _a.url, options = _a.options;
    var responseInfo = '';
    return fetch(url, options).then(function (response) {
        responseInfo = get_1.default(response, 'status', null);
        return response.json();
    })
        .then(function (res) {
        if (responseInfo !== 200) {
            responseInfo += '|' + get_1.default(res, 'error', null);
            throw new react_admin_1.HttpError(responseInfo);
        }
        return convertHTTPResponse(res, type, resource, params);
    })
        .catch(function (err) {
        console.log('Error: ', err);
        throw new Error(err);
    });
};
/**
 * This function provides requests/response to server
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  type
 * @param {string} resource
 * @param {shape}  params
 */
exports.default = (function (type, resource, params) {
    // if (resource === `patients`) {
    //     return fakePatientsProvider(type, resource, params);
    // }
    if (resource === "patients") {
        return patientsProvider_1.default(type, resource, params);
    }
    if (resource === "labresults") {
        return fakeTestResultsProvider_1.default(type, resource, params);
    }
    return dataProvider(type, resource, params);
});
