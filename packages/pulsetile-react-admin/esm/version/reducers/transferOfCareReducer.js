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
import { TRANSFER_OF_CARE_ACTION } from "../actions/transferOfCareAction";
var initialState = {
    data: false,
    loading: false,
    error: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TRANSFER_OF_CARE_ACTION.CREATE:
        case TRANSFER_OF_CARE_ACTION.REQUEST:
            return __assign({}, state, { loading: true, data: state });
        case TRANSFER_OF_CARE_ACTION.REQUEST_ONE:
            return __assign({}, state, { loadingDetails: true });
        case TRANSFER_OF_CARE_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, data: get(action, 'data', []) });
        case TRANSFER_OF_CARE_ACTION.LIST:
            return __assign({}, state, { loading: false, list: get(action, 'data', []) });
        case TRANSFER_OF_CARE_ACTION.DETAILS:
            var currentDetails = get(state, 'details', []);
            var newDetails = get(action, 'data', null);
            currentDetails.push(newDetails);
            return __assign({}, state, { loadingDetails: false, details: currentDetails });
        case TRANSFER_OF_CARE_ACTION.FAILURE:
            return __assign({}, state, { loading: false, error: get(action, "error", null) });
        default:
            return state;
    }
});
