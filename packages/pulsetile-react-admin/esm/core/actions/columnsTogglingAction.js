import { createRequestTypes } from "./functions";
export var COLUMNS_TOGGLING_ACTION = createRequestTypes('COLUMNS_TOGGLING_ACTION', { TOGGLE: 'TOGGLE', REMOVE: 'REMOVE' });
export var columnsTogglingAction = {
    toggle: function (resource, columnName, value) { return ({ type: COLUMNS_TOGGLING_ACTION.TOGGLE, resource: resource, columnName: columnName, value: value }); },
    remove: function (data) { return ({ type: COLUMNS_TOGGLING_ACTION.REMOVE, data: data }); },
};
