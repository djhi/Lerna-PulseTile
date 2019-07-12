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
import { all } from 'redux-saga/effects';
// CORE SAGAS
import currentPatientSagas from "./currentPatientSagas";
import initializeSagas from "./initializeSagas";
import demographicsSagas from "./demographicsSagas";
import httpErrorSagas from "./httpErrorSagas";
import showModeSagas from "./showModeSagas";
import showHeadingsSagas from "./showHeadingsSagas";
import patientsCountSagas from "./patientsCountSagas";
import emergencySummarySagas from "../../core/sagas/emergencySummarySagas";
import createSynopsisSagas from "./createSynopsisSagas";
import { SYNOPSIS_ALLERGIES_ACTION, synopsisAllergiesAction, SYNOPSIS_CONTACTS_ACTION, synopsisContactsAction, SYNOPSIS_MEDICATIONS_ACTION, synopsisMedicationsAction, SYNOPSIS_PROBLEMS_ACTION, synopsisProblemsAction } from "../actions/synopsisActions";
// LINK TO NON-CORE SAGAS
import nonCoreSagas from "../../version/sagas";
var coreSagas = [
    currentPatientSagas,
    createSynopsisSagas(SYNOPSIS_ALLERGIES_ACTION, synopsisAllergiesAction, 'allergies'),
    createSynopsisSagas(SYNOPSIS_CONTACTS_ACTION, synopsisContactsAction, 'contacts'),
    createSynopsisSagas(SYNOPSIS_MEDICATIONS_ACTION, synopsisMedicationsAction, 'medications'),
    createSynopsisSagas(SYNOPSIS_PROBLEMS_ACTION, synopsisProblemsAction, 'problems'),
    initializeSagas,
    demographicsSagas,
    httpErrorSagas,
    showModeSagas,
    showHeadingsSagas,
    patientsCountSagas,
    emergencySummarySagas,
];
var mergeSagas = coreSagas.concat(nonCoreSagas);
export default function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, all(mergeSagas)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
