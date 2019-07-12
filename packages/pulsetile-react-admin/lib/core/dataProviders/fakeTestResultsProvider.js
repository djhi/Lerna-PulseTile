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
var dummyTestResults_1 = __importDefault(require("../../version/plugins/Results/dummyTestResults"));
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
    return response.map(function (item, id) {
        return Object.assign({ id: item.sourceId }, item);
    });
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
var fakePatientsProvider = function (type, resource, params) {
    switch (type) {
        case react_admin_1.GET_LIST:
            var pageNumber = get_1.default(params, 'pagination.page', 1);
            var numberPerPage = get_1.default(params, 'pagination.perPage', 10);
            var results = getResultsFromResponse(resource, dummyTestResults_1.default, params);
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
            var response = {};
            for (var i = 0, n = dummyTestResults_1.default.length; i < n; i++) {
                var item = dummyTestResults_1.default[i];
                if (item.sourceId === params.id) {
                    response = item;
                    break;
                }
            }
            return {
                data: Object.assign({ id: params.id }, response),
            };
        default:
            return { data: 'No results' };
    }
};
exports.default = fakePatientsProvider;
