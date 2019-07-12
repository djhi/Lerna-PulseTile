"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var token_1 = require("../../core/token");
var transferOfCareAction_1 = require("../actions/transferOfCareAction");
var patientID = localStorage.getItem('patientId') ? localStorage.getItem('patientId') : localStorage.getItem('userId');
var createNewItem = effects_1.takeEvery(transferOfCareAction_1.TRANSFER_OF_CARE_ACTION.CREATE, function (action) {
    var url, options, result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = token_1.domainName + '/api/patients/' + patientID + '/events/toc';
                options = {};
                options.method = 'POST';
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    Authorization: "Bearer " + token_1.token,
                    'X-Requested-With': "XMLHttpRequest",
                    'Content-Type': 'application/json'
                };
                options.body = JSON.stringify(action.data);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, fetch(url, options).then(function (res) { return res.json(); })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(transferOfCareAction_1.transferOfCareAction.success(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(transferOfCareAction_1.transferOfCareAction.error(e_1))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
});
var getSelectorsItem = effects_1.takeEvery(transferOfCareAction_1.TRANSFER_OF_CARE_ACTION.REQUEST, function (action) {
    var url, options, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = token_1.domainName + '/api/patients/' + patientID + '/' + action.data;
                options = {};
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    Authorization: "Bearer " + token_1.token,
                    'X-Requested-With': "XMLHttpRequest",
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, fetch(url, options).then(function (res) { return res.json(); })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(transferOfCareAction_1.transferOfCareAction.list(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(transferOfCareAction_1.transferOfCareAction.error(e_2))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
});
var getDetails = effects_1.takeEvery(transferOfCareAction_1.TRANSFER_OF_CARE_ACTION.REQUEST_ONE, function (action) {
    var url, options, result, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = token_1.domainName + '/api/patients/' + patientID + '/' + action.heading + '/' + action.sourceId;
                options = {};
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    Authorization: "Bearer " + token_1.token,
                    'X-Requested-With': "XMLHttpRequest",
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, fetch(url, options).then(function (res) { return res.json(); })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(transferOfCareAction_1.transferOfCareAction.details(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(transferOfCareAction_1.transferOfCareAction.error(e_3))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
});
exports.default = [
    createNewItem,
    getSelectorsItem,
    getDetails,
];
