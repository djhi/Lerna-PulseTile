"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var nonCoreSynopsis_1 = require("../../../version/config/nonCoreSynopsis");
var theme_config_1 = require("../../../version/config/theme.config");
/**
 * This function returns data for patient summary page
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {array}
 */
exports.coreSynopsisData = [
    {
        id: "block-problems",
        title: "Problems / Issues",
        list: "problems",
        icon: free_solid_svg_icons_1.faNotesMedical,
        isActive: true,
        isSynopsis: true,
        description: "The key problems that affect your health, some with clear diagnoses from your doctor",
    },
    {
        id: "block-medications",
        title: "Medications",
        list: "medications",
        icon: free_solid_svg_icons_1.faCapsules,
        isActive: true,
        isSynopsis: true,
        description: "The medical tablets and other medications that you take regularly for your health care",
    },
    {
        id: "block-allergies",
        title: "Allergies",
        list: "allergies",
        icon: free_solid_svg_icons_1.faAllergies,
        isActive: true,
        isSynopsis: true,
        description: "Those things that your body reacts against, that you have an allergy to",
    },
    {
        id: "block-contacts",
        title: "Contacts",
        list: "contacts",
        icon: free_solid_svg_icons_1.faPhone,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
exports.totalSynopsisData = exports.coreSynopsisData.concat(nonCoreSynopsis_1.nonCoreSynopsisData);
exports.synopsisData = exports.totalSynopsisData.filter(function (item) { return item.isActive; });
exports.SHOW_HEADING = 'heading';
exports.SHOW_ALL = 'headingAndList';
exports.showModesArray = [
    { type: exports.SHOW_HEADING, label: "Headings" },
    { type: exports.SHOW_ALL, label: "Headings + List" },
];
function getHeadingsLists() {
    var result = [];
    exports.synopsisData.forEach(function (item) {
        result.push(item.list);
    });
    var hasRespectPlugin = get_1.default(theme_config_1.themeCommonElements, 'respectPanel', false);
    if (hasRespectPlugin) {
        result.push('respect');
    }
    return result;
}
exports.getHeadingsLists = getHeadingsLists;
function getSynopsisProps(state) {
    var result = {};
    exports.synopsisData.forEach(function (item) {
        var reducerName = item.list + 'Synopsis';
        result[item.list] = get_1.default(state, ['custom', reducerName, 'data'], []);
    });
    return result;
}
exports.getSynopsisProps = getSynopsisProps;
