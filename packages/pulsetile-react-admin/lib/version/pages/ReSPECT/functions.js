"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var statuses_1 = require("./statuses");
function getAuthorName() {
    return localStorage.getItem('username') ? localStorage.getItem('username') : '-';
}
exports.getAuthorName = getAuthorName;
exports.getSectionStatus = function (data, totalNumber) {
    var filledNumber = Object.values(data).length;
    var filledRation = filledNumber / totalNumber;
    return (filledRation > 0.5) ? statuses_1.STATUS_COMPLETED : statuses_1.STATUS_INCOMPLETE;
};
/**
 * This function returns the object with filled values
 * If user completes sections - it returns store information about section
 * If user reviewed versions - it returns store information about version
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   sectionsInfo
 * @param {shape}   latestVersionInfo
 * @param {shape}   sectionStoreData
 * @param {string}  sectionName
 * @param {boolean} isVersionInfo
 * @param {shape}   defaultValues
 * @return {shape}
 */
function getFilledValues(sectionsInfo, latestVersionInfo, sectionStoreData, sectionName, isVersionInfo, defaultValues) {
    var latestStoreData = get_1.default(latestVersionInfo, sectionName, null);
    var result = Object.assign({}, defaultValues, latestStoreData);
    if (isVersionInfo) {
        var versionStoreData = get_1.default(sectionsInfo, sectionName, null);
        result = Object.assign({}, defaultValues, versionStoreData);
    }
    else if (sectionStoreData) {
        result = Object.assign({}, defaultValues, sectionStoreData);
    }
    return result;
}
exports.getFilledValues = getFilledValues;
function getStateData(props, toSearch, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    var isVersionInfo = props.isVersionInfo, sectionsInfo = props.sectionsInfo, latestVersionInfo = props.latestVersionInfo;
    var result = get_1.default(latestVersionInfo, toSearch, defaultValue);
    if (isVersionInfo) {
        result = get_1.default(sectionsInfo, toSearch, defaultValue);
    }
    else if (get_1.default(props, toSearch, null)) {
        result = get_1.default(props, toSearch, defaultValue);
    }
    return result;
}
exports.getStateData = getStateData;
function getInitialRangeLine(props, toSearch, leftValue, rightValue, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    var isVersionInfo = props.isVersionInfo, sectionsInfo = props.sectionsInfo, latestVersionInfo = props.latestVersionInfo;
    var result = get_1.default(latestVersionInfo, toSearch, defaultValue);
    if (isVersionInfo) {
        result = get_1.default(sectionsInfo, toSearch, defaultValue);
    }
    else if (get_1.default(props, toSearch, null)) {
        result = get_1.default(props, toSearch, defaultValue);
    }
    var focusValue = 50;
    if (result === leftValue) {
        focusValue = 0;
    }
    else if (result === rightValue) {
        focusValue = 100;
    }
    return [focusValue];
}
exports.getInitialRangeLine = getInitialRangeLine;
function getEmptyJson(sectionName) {
    var RespectJson = {
        summaryInformation: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            summary: null,
            details: null,
            status: statuses_1.STATUS_INCOMPLETE,
        },
        personalPreferences: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            preferencesText: null,
            preferencesValue: 5,
            status: statuses_1.STATUS_INCOMPLETE,
        },
        clinicalRecommendation: {
            clinicalGuidance: null,
            clinicalSignature: null,
            focusValue: null,
            cprValue: 'NotforCPR',
            dateDecision: moment_1.default().format(statuses_1.DATE_FORMAT),
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            status: statuses_1.STATUS_INCOMPLETE,
        },
        capacityAndRepresentation: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            capacityFirst: null,
            legalProxyValue: 'Unknown',
            status: statuses_1.STATUS_INCOMPLETE,
        },
        involvement: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            notSelectingReason: null,
            involvementValue: 'valueSetD',
            documentExplanation: null,
            status: statuses_1.STATUS_INCOMPLETE,
        },
        clinicalSignatures: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            signaturesArray: [],
            status: statuses_1.STATUS_INCOMPLETE,
        },
        emergencyContacts: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            contactsArray: [],
            details: null,
            status: statuses_1.STATUS_INCOMPLETE,
        },
        confirmation: {
            dateCompleted: moment_1.default().format(statuses_1.DATE_FORMAT),
            confirmationsArray: [],
            status: statuses_1.STATUS_INCOMPLETE,
        }
    };
    return get_1.default(RespectJson, sectionName, null);
}
exports.getEmptyJson = getEmptyJson;
function getDateUnix(date) {
    if (date === void 0) { date = null; }
    var dateCreated = date ? date : moment_1.default().format(statuses_1.DATE_FORMAT);
    var dateArray = dateCreated.split('-');
    var newDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
    return (new Date(newDate).getTime());
}
exports.getDateUnix = getDateUnix;
function getDateForDatepicker(date) {
    if (date === void 0) { date = null; }
    var dateCreated = date ? moment_1.default(date).format(statuses_1.DATE_FORMAT) : moment_1.default().format(statuses_1.DATE_FORMAT);
    if (dateCreated === "Invalid date") {
        dateCreated = moment_1.default().format(statuses_1.DATE_FORMAT);
    }
    var dateArray = dateCreated.split('-');
    var newDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
    return new Date(newDate);
}
exports.getDateForDatepicker = getDateForDatepicker;
