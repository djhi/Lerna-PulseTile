var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import get from "lodash/get";
import { COLUMNS_TOGGLING_ACTION } from "../../core/actions/columnsTogglingAction";
var initialState = {
    data: false,
};
export default (function (state, action) {
    var _a;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case COLUMNS_TOGGLING_ACTION.TOGGLE:
            var resource = action.resource;
            var columnName = action.columnName;
            var value = action.value;
            var currentList = get(state.data, resource, []);
            if (value) {
                var index = currentList.indexOf(columnName);
                currentList.splice(index, 1);
            }
            else if (currentList.indexOf(columnName) === -1) {
                currentList.push(columnName);
            }
            return __assign({}, state, { data: Object.assign({}, state.data, (_a = {},
                    _a[resource] = currentList,
                    _a)) });
        case COLUMNS_TOGGLING_ACTION.REMOVE:
            return __assign({}, state, { data: null });
        default:
            return state;
    }
});
