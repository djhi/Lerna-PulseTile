"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Topbar_1 = __importDefault(require("../common/Topbar"));
var Footer_1 = __importDefault(require("../common/Footer"));
var FeedsSelectors_1 = __importDefault(require("../plugins/Feeds/FeedsSelectors"));
var FeedsPanels_1 = __importDefault(require("../plugins/Feeds/FeedsPanels"));
var background_jpg_1 = __importDefault(require("../images/background.jpg"));
var Charts_1 = __importDefault(require("../../core/pages/Charts"));
var summaryPanel_1 = __importDefault(require("../pages/ReSPECT/fragments/summaryPanel"));
exports.themeShortMenu = [
    { url: '/', label: 'Charts' },
    { url: '/patients', label: 'Patients' },
    { url: '/business', label: 'Business Intelligence' },
];
exports.themeFullMenu = [
    { url: '/summary', label: 'Patient Summary' },
    { url: '/problems', label: 'Problems / Issues' },
    { url: '/medications', label: 'Medications' },
    { url: '/vaccinations', label: 'Vaccinations' },
    { url: '/allergies', label: 'Allergies' },
    { url: '/contacts', label: 'Contacts' },
    { url: '/top3Things', label: 'TopThreeThings' },
    { url: '/clinicalnotes', label: 'Clinical Notes' },
    { url: '/mdtreports', label: 'MDT' },
    { url: '/events', label: 'Events' },
    { url: '/personalnotes', label: 'Personal Notes' },
    { url: '/procedures', label: 'Procedures' },
    { url: '/referrals', label: 'Referrals' },
    { url: '/labresults', label: 'Results' },
    { url: '/toc', label: 'Transfers Of Care' },
    { url: '/vitalsigns', label: 'Vitals' },
    { url: '/respect', label: 'ReSPECT' },
];
exports.themeCommonElements = {
    menuHasChevrons: true,
    invertedTableHeaders: true,
    patientSummaryPermission: true,
    patientListColumnToggling: true,
    isPatientListCount: true,
    redirectToPlugin: true,
    topbar: Topbar_1.default,
    footer: Footer_1.default,
    feedsSelectors: FeedsSelectors_1.default,
    feedsPanels: FeedsPanels_1.default,
    homePage: Charts_1.default,
    respectPanel: summaryPanel_1.default,
    hasEmergencySummaryPanel: true,
    hasPatientSummaryRoll: true,
};
exports.themeImages = {
    backgroundImage: background_jpg_1.default,
};
