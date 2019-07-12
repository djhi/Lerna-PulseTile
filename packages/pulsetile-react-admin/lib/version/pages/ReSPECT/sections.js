"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalDetails_1 = __importDefault(require("./sections/PersonalDetails"));
var SummaryInformation_1 = __importDefault(require("./sections/SummaryInformation"));
var PersonalPreferences_1 = __importDefault(require("./sections/PersonalPreferences"));
var ClinicalRecommendations_1 = __importDefault(require("./sections/ClinicalRecommendations"));
var CapacityAndRepresentation_1 = __importDefault(require("./sections/CapacityAndRepresentation"));
var Involvement_1 = __importDefault(require("./sections/Involvement"));
var CliniciansSignatures_1 = __importDefault(require("./sections/CliniciansSignatures"));
var EmergencyContacts_1 = __importDefault(require("./sections/EmergencyContacts"));
var Confirmation_1 = __importDefault(require("./sections/Confirmation"));
var EmergencyView_1 = __importDefault(require("./sections/EmergencyView"));
exports.default = [
    { id: 1, name: "personalDetails", section: '1. Personal Details', component: PersonalDetails_1.default, date: false },
    { id: 2, name: "summaryInformation", section: '2. Summary of relevant information for this plan', component: SummaryInformation_1.default, date: false },
    { id: 3, name: "personalPreferences", section: '3. Personal preferences to guide this plan', component: PersonalPreferences_1.default, date: false },
    { id: 4, name: "clinicalRecommendations", section: '4. Clinical recommendations for emergency care and treatment', component: ClinicalRecommendations_1.default, date: false },
    { id: 5, name: "capacityAndRepresentation", section: '5. Capacity and representation at this time', component: CapacityAndRepresentation_1.default, date: false },
    { id: 6, name: "involvement", section: '6. Involvement in making this plan', component: Involvement_1.default, date: false },
    { id: 7, name: "clinicalSignatures", section: '7. Clinician signatures', component: CliniciansSignatures_1.default, date: false },
    { id: 8, name: "emergencyContacts", section: '8. Emergency contacts', component: EmergencyContacts_1.default, date: false },
    { id: 9, name: "confirmation", section: '9. Confirmation of validity', component: Confirmation_1.default, date: false },
    { id: 10, name: "emergencyView", section: '10. Emergency view', component: EmergencyView_1.default, date: false },
];
