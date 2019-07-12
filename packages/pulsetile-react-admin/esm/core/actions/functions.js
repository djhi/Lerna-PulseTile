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
/**
 * This function create main request types
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param base
 * @param optional
 */
export function createRequestTypes(base, optional) {
    for (var index in optional) {
        optional[index] = base + '_' + index;
    }
    return __assign({ REQUEST: base + '_REQUEST', SUCCESS: base + '_SUCCESS', FAILURE: base + '_FAILURE' }, optional);
}
