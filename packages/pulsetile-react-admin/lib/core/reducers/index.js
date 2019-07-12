"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var currentPatientReducer_1 = __importDefault(require("./currentPatientReducer"));
var showHeadingsReducer_1 = __importDefault(require("./showHeadingsReducer"));
var createCustomReducer_1 = __importDefault(require("./createCustomReducer"));
var httpErrorReducer_1 = __importDefault(require("./httpErrorReducer"));
var userSearchReducer_1 = __importDefault(require("./userSearchReducer"));
var toggleColumnsReducer_1 = __importDefault(require("./toggleColumnsReducer"));
var advancedSearchReducer_1 = __importDefault(require("./advancedSearchReducer"));
var clinicalQueryReducer_1 = __importDefault(require("./clinicalQueryReducer"));
var patientsCountReducer_1 = __importDefault(require("./patientsCountReducer"));
var emergencySummaryReducer_1 = __importDefault(require("./emergencySummaryReducer"));
var synopsisActions_1 = require("../actions/synopsisActions");
var initializeAction_1 = require("../actions/initializeAction");
var demographicsAction_1 = require("../actions/demographicsAction");
var showModeAction_1 = require("../actions/showModeAction");
// LINK TO NON-CORE CUSTOM REDUCERS
var reducers_1 = __importDefault(require("../../version/reducers"));
var coreReducers = {
    allergiesSynopsis: createCustomReducer_1.default(synopsisActions_1.SYNOPSIS_ALLERGIES_ACTION, "data.synopsis"),
    contactsSynopsis: createCustomReducer_1.default(synopsisActions_1.SYNOPSIS_CONTACTS_ACTION, "data.synopsis"),
    medicationsSynopsis: createCustomReducer_1.default(synopsisActions_1.SYNOPSIS_MEDICATIONS_ACTION, "data.synopsis"),
    problemsSynopsis: createCustomReducer_1.default(synopsisActions_1.SYNOPSIS_PROBLEMS_ACTION, "data.synopsis"),
    initialize: createCustomReducer_1.default(initializeAction_1.INITIALIZE_ACTION, "data"),
    demographics: createCustomReducer_1.default(demographicsAction_1.DEMOGRAPHICS_ACTION, "data.demographics"),
    httpErrors: httpErrorReducer_1.default,
    showMode: createCustomReducer_1.default(showModeAction_1.SHOW_MODE_ACTION, "data"),
    showHeadings: showHeadingsReducer_1.default,
    userSearch: userSearchReducer_1.default,
    currentPatient: currentPatientReducer_1.default,
    toggleColumns: toggleColumnsReducer_1.default,
    advancedSearch: advancedSearchReducer_1.default,
    clinicalQuery: clinicalQueryReducer_1.default,
    patientsCount: patientsCountReducer_1.default,
    emergencySummary: emergencySummaryReducer_1.default,
};
var reducers = Object.assign({}, coreReducers, reducers_1.default);
exports.default = redux_1.combineReducers(reducers);
