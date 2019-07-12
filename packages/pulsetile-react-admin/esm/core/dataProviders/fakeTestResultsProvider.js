import get from "lodash/get";
import { GET_LIST, GET_ONE, } from "react-admin";
import sort, { ASC, DESC } from 'sort-array-objects';
import pluginFilters from "../config/pluginFilters";
import dummyTestResults from "../../version/plugins/Results/dummyTestResults";
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
    var sortField = get(params, 'sort.field', null);
    var sortOrder = (get(params, 'sort.order', null) === 'DESC') ? DESC : ASC;
    return sort(results, [sortField], sortOrder);
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
    var filterText = get(params, 'filter.filterText', null);
    var filters = pluginFilters[resource];
    return !filterText ? results : results.filter(function (item) { return isItemConsider(item, filters, filterText); });
}
var fakePatientsProvider = function (type, resource, params) {
    switch (type) {
        case GET_LIST:
            var pageNumber = get(params, 'pagination.page', 1);
            var numberPerPage = get(params, 'pagination.perPage', 10);
            var results = getResultsFromResponse(resource, dummyTestResults, params);
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
            var response = {};
            for (var i = 0, n = dummyTestResults.length; i < n; i++) {
                var item = dummyTestResults[i];
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
export default fakePatientsProvider;
