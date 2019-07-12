"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var contrastModeReducer_1 = __importDefault(require("./contrastModeReducer"));
var selectedFeedsReducer_1 = __importDefault(require("./selectedFeedsReducer"));
var feedsRssReducer_1 = __importDefault(require("./feedsRssReducer"));
var transferOfCareReducer_1 = __importDefault(require("./transferOfCareReducer"));
var synopsisActions_1 = require("../actions/synopsisActions");
var feedsListAction_1 = require("../actions/feedsListAction");
var createCustomReducer_1 = __importDefault(require("../../core/reducers/createCustomReducer"));
var createRespectPluginReducer_1 = __importDefault(require("./createRespectPluginReducer"));
var respectModalReducer_1 = __importDefault(require("./respectModalReducer"));
var versionsServerInfoReducer_1 = __importDefault(require("./versionsServerInfoReducer"));
var businessIntelligenceReducer_1 = __importDefault(require("./businessIntelligenceReducer"));
var personalDetailsAction_1 = require("../actions/ReSPECT/personalDetailsAction");
var summaryInformationAction_1 = require("../actions/ReSPECT/summaryInformationAction");
var personalPreferencesAction_1 = require("../actions/ReSPECT/personalPreferencesAction");
var clinicalRecommendationsAction_1 = require("../actions/ReSPECT/clinicalRecommendationsAction");
var capacityAndRepresentationAction_1 = require("../actions/ReSPECT/capacityAndRepresentationAction");
var involvenentAction_1 = require("../actions/ReSPECT/involvenentAction");
var clinicalSignaturesAction_1 = require("../actions/ReSPECT/clinicalSignaturesAction");
var emergencyContactsAction_1 = require("../actions/ReSPECT/emergencyContactsAction");
var confirmationAction_1 = require("../actions/ReSPECT/confirmationAction");
var emergencyViewAction_1 = require("../actions/ReSPECT/emergencyViewAction");
/**
 * This component returns version reducers
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {shape}
 */
exports.default = {
    vaccinationsSynopsis: createCustomReducer_1.default(synopsisActions_1.SYNOPSIS_VACCINATIONS_ACTION, "data.synopsis"),
    top3ThingsSynopsis: createCustomReducer_1.default(synopsisActions_1.SYNOPSIS_TOP_THREE_THINGS_ACTION, "data.synopsis"),
    contrastMode: contrastModeReducer_1.default,
    feedsList: createCustomReducer_1.default(feedsListAction_1.FEEDS_LIST_ACTION, "data"),
    selectedFeedsList: selectedFeedsReducer_1.default,
    feedsRss: feedsRssReducer_1.default,
    transferOfCare: transferOfCareReducer_1.default,
    respectModal: respectModalReducer_1.default,
    personalDetails: createRespectPluginReducer_1.default(personalDetailsAction_1.PERSONAL_DETAILS_ACTION),
    summaryInformation: createRespectPluginReducer_1.default(summaryInformationAction_1.SUMMARY_INFORMATION_ACTION),
    personalPreferences: createRespectPluginReducer_1.default(personalPreferencesAction_1.PERSONAL_PREFERENCES_ACTION),
    clinicalRecommendations: createRespectPluginReducer_1.default(clinicalRecommendationsAction_1.CLINICAL_RECOMMENDATIONS_ACTION),
    capacityAndRepresentation: createRespectPluginReducer_1.default(capacityAndRepresentationAction_1.CAPACITY_AND_REPRESENTATION_ACTION),
    involvement: createRespectPluginReducer_1.default(involvenentAction_1.INVOLVEMENT_ACTION),
    clinicalSignatures: createRespectPluginReducer_1.default(clinicalSignaturesAction_1.CLINICAL_SIGNATURES_ACTION),
    emergencyContacts: createRespectPluginReducer_1.default(emergencyContactsAction_1.EMERGENCY_CONTACTS_ACTION),
    confirmation: createRespectPluginReducer_1.default(confirmationAction_1.CONFIRMATION_ACTION),
    emergencyView: createRespectPluginReducer_1.default(emergencyViewAction_1.EMERGENCY_VIEW_ACTION),
    versionsServerInfo: versionsServerInfoReducer_1.default,
    businessIntelligence: businessIntelligenceReducer_1.default,
};
