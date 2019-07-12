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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var get_1 = __importDefault(require("lodash/get"));
var token_1 = require("../../core/token");
var versionsServerAction_1 = require("../actions/ReSPECT/versionsServerAction");
var httpErrorAction_1 = require("../../core/actions/httpErrorAction");
var getVersionsList = effects_1.takeEvery(versionsServerAction_1.VERSIONS_SERVER_ACTION.REQUEST, function (action) {
    var url, options, responseInfo, result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = token_1.domainName + '/api/patients/' + localStorage.getItem('patientId') + '/respectforms';
                options = {};
                options.method = "GET";
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    'X-Requested-With': "XMLHttpRequest",
                    Authorization: "Bearer " + token_1.token,
                };
                responseInfo = {};
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 9]);
                return [4 /*yield*/, fetch(url, options)
                        .then(function (res) {
                        responseInfo.status = get_1.default(res, 'status', null);
                        return res.json();
                    })
                        .then(function (res) {
                        if (responseInfo.status !== 200) {
                            responseInfo.errorMessage = get_1.default(res, 'error', null);
                            return false;
                        }
                        return res;
                    })];
            case 2:
                result = _a.sent();
                if (!(responseInfo.status === 200)) return [3 /*break*/, 4];
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.success(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, effects_1.put(httpErrorAction_1.httpErrorAction.save({
                    status: responseInfo.status,
                    message: responseInfo.errorMessage
                }))];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.error(e_1))];
            case 8:
                _a.sent();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
});
var getVersionById = effects_1.takeEvery(versionsServerAction_1.VERSIONS_SERVER_ACTION.REQUEST_ONE, function (action) {
    var sourceId, versionId, url, options, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sourceId = get_1.default(action, 'sourceId', null);
                versionId = get_1.default(action, 'versionId', null);
                url = token_1.domainName + '/api/patients/' + localStorage.getItem('patientId') + '/respectforms/' + sourceId + '/' + versionId;
                options = {};
                options.method = "GET";
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    'X-Requested-With': "XMLHttpRequest",
                    Authorization: "Bearer " + token_1.token,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, fetch(url, options).then(function (res) { return res.json(); })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.successOne(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.error(e_2))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
});
var getLatestVersion = effects_1.takeEvery(versionsServerAction_1.VERSIONS_SERVER_ACTION.REQUEST_LATEST, function (action) {
    var sourceId, versionId, url, options, result, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sourceId = get_1.default(action, 'sourceId', null);
                versionId = get_1.default(action, 'versionId', null);
                url = token_1.domainName + '/api/patients/' + localStorage.getItem('patientId') + '/respectforms/' + sourceId + '/' + versionId;
                options = {};
                options.method = "GET";
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    'X-Requested-With': "XMLHttpRequest",
                    Authorization: "Bearer " + token_1.token,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, fetch(url, options).then(function (res) { return res.json(); })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.successLatest(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.error(e_3))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
});
var createNewVersion = effects_1.takeEvery(versionsServerAction_1.VERSIONS_SERVER_ACTION.CREATE, function (action) {
    var url, options, result, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = token_1.domainName + '/api/patients/' + localStorage.getItem('patientId') + '/respectforms';
                options = {};
                options.method = "POST";
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    'X-Requested-With': "XMLHttpRequest",
                    Authorization: "Bearer " + token_1.token,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, fetch(url, options).then(function (res) { return res.json(); })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.successCreate(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_4 = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.error(e_4))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
});
var putOneSection = effects_1.takeEvery(versionsServerAction_1.VERSIONS_SERVER_ACTION.PUT, function (action) {
    var sourceId, versionId, versionData, url, options, responseInfo, result, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sourceId = get_1.default(action, 'sourceId', null);
                versionId = get_1.default(action, 'versionId', null);
                versionData = get_1.default(action, 'versionData', null);
                url = token_1.domainName + '/api/patients/' + localStorage.getItem('patientId') + '/respectforms/' + sourceId + '/' + versionId;
                options = {};
                options.method = "PUT";
                if (!options.headers) {
                    options.headers = new Headers({ Accept: 'application/json' });
                }
                options.headers = {
                    'Content-Type': 'application/json',
                    'X-Requested-With': "XMLHttpRequest",
                    Authorization: "Bearer " + token_1.token,
                };
                options.body = JSON.stringify(versionData);
                responseInfo = {};
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 9]);
                return [4 /*yield*/, fetch(url, options)
                        .then(function (res) {
                        responseInfo.status = get_1.default(res, 'status', null);
                        return res.json();
                    })
                        .then(function (res) {
                        if (responseInfo.status !== 200) {
                            responseInfo.errorMessage = get_1.default(res, 'error', null);
                            return false;
                        }
                        return res;
                    })];
            case 2:
                result = _a.sent();
                if (!(responseInfo.status === 200)) return [3 /*break*/, 4];
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.successPut(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, effects_1.put(httpErrorAction_1.httpErrorAction.save({
                    status: responseInfo.status,
                    message: responseInfo.errorMessage
                }))];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7:
                e_5 = _a.sent();
                return [4 /*yield*/, effects_1.put(versionsServerAction_1.versionsServerAction.error(e_5))];
            case 8:
                _a.sent();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
});
exports.default = [
    getVersionsList,
    getVersionById,
    getLatestVersion,
    createNewVersion,
    putOneSection,
];
