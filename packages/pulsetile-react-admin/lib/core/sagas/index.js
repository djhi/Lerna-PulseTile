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
// CORE SAGAS
var currentPatientSagas_1 = __importDefault(require("./currentPatientSagas"));
var initializeSagas_1 = __importDefault(require("./initializeSagas"));
var demographicsSagas_1 = __importDefault(require("./demographicsSagas"));
var httpErrorSagas_1 = __importDefault(require("./httpErrorSagas"));
var showModeSagas_1 = __importDefault(require("./showModeSagas"));
var showHeadingsSagas_1 = __importDefault(require("./showHeadingsSagas"));
var patientsCountSagas_1 = __importDefault(require("./patientsCountSagas"));
var emergencySummarySagas_1 = __importDefault(require("../../core/sagas/emergencySummarySagas"));
var createSynopsisSagas_1 = __importDefault(require("./createSynopsisSagas"));
var synopsisActions_1 = require("../actions/synopsisActions");
// LINK TO NON-CORE SAGAS
var sagas_1 = __importDefault(require("../../version/sagas"));
var coreSagas = [
    currentPatientSagas_1.default,
    createSynopsisSagas_1.default(synopsisActions_1.SYNOPSIS_ALLERGIES_ACTION, synopsisActions_1.synopsisAllergiesAction, 'allergies'),
    createSynopsisSagas_1.default(synopsisActions_1.SYNOPSIS_CONTACTS_ACTION, synopsisActions_1.synopsisContactsAction, 'contacts'),
    createSynopsisSagas_1.default(synopsisActions_1.SYNOPSIS_MEDICATIONS_ACTION, synopsisActions_1.synopsisMedicationsAction, 'medications'),
    createSynopsisSagas_1.default(synopsisActions_1.SYNOPSIS_PROBLEMS_ACTION, synopsisActions_1.synopsisProblemsAction, 'problems'),
    initializeSagas_1.default,
    demographicsSagas_1.default,
    httpErrorSagas_1.default,
    showModeSagas_1.default,
    showHeadingsSagas_1.default,
    patientsCountSagas_1.default,
    emergencySummarySagas_1.default,
];
var mergeSagas = coreSagas.concat(sagas_1.default);
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all(mergeSagas)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
