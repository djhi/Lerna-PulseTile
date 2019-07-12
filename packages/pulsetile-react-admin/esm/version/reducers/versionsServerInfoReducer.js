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
import get from 'lodash/get';
import moment from "moment";
import { VERSIONS_SERVER_ACTION } from "../actions/ReSPECT/versionsServerAction";
var initialState = {
    data: false,
    loading: false,
    error: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case VERSIONS_SERVER_ACTION.REQUEST:
        case VERSIONS_SERVER_ACTION.REQUEST_ONE:
        case VERSIONS_SERVER_ACTION.REQUEST_LATEST:
            return __assign({}, state, { loading: true });
        case VERSIONS_SERVER_ACTION.CREATE:
            return __assign({}, state, { loading: true });
        case VERSIONS_SERVER_ACTION.SUCCESS:
            return __assign({}, state, { loading: false, data: action.data });
        case VERSIONS_SERVER_ACTION.SUCCESS_ONE:
            return __assign({}, state, { loading: false, version: get(action, "data.respect_form", null) });
        case VERSIONS_SERVER_ACTION.SUCCESS_LATEST:
            return __assign({}, state, { loading: false, latest: get(action, "data.respect_form", null) });
        case VERSIONS_SERVER_ACTION.SUCCESS_CREATE:
            return __assign({}, state, { loading: false, first: get(action, "data", null), latest: null });
        case VERSIONS_SERVER_ACTION.SUCCESS_PUT:
            var newVersion = get(action, "data", null);
            var versionsArray = get(state, "data", []);
            var compositionIdString = get(newVersion, 'compositionUid', null);
            var compositionIdArray = compositionIdString.split('::');
            var sourceId = get(compositionIdArray, [0], null);
            var versionId = get(compositionIdArray, [2], null);
            var date = moment().format("MM/DD/YYYY HH:mm");
            var newItem = {
                source: newVersion.host,
                sourceId: newVersion.host + '-' + sourceId,
                version: Number(versionId),
                author: localStorage.getItem('username'),
                dateCreated: Math.round(new Date(date).getTime()),
                status: "Completed",
            };
            var newArray = versionsArray.concat([newItem]).sort(function (prev, next) { return next.version - prev.version; });
            return __assign({}, state, { loading: false, data: newArray, latest: null, first: null, version: null });
        case VERSIONS_SERVER_ACTION.ERROR:
            return __assign({}, state, { loading: false, error: get(action, "error", null) });
        default:
            return state;
    }
});
