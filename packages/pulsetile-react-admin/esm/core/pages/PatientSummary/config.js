import get from "lodash/get";
import { faAllergies, faPhone, faCapsules, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { nonCoreSynopsisData } from "../../../version/config/nonCoreSynopsis";
import { themeCommonElements } from "../../../version/config/theme.config";
/**
 * This function returns data for patient summary page
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {array}
 */
export var coreSynopsisData = [
    {
        id: "block-problems",
        title: "Problems / Issues",
        list: "problems",
        icon: faNotesMedical,
        isActive: true,
        isSynopsis: true,
        description: "The key problems that affect your health, some with clear diagnoses from your doctor",
    },
    {
        id: "block-medications",
        title: "Medications",
        list: "medications",
        icon: faCapsules,
        isActive: true,
        isSynopsis: true,
        description: "The medical tablets and other medications that you take regularly for your health care",
    },
    {
        id: "block-allergies",
        title: "Allergies",
        list: "allergies",
        icon: faAllergies,
        isActive: true,
        isSynopsis: true,
        description: "Those things that your body reacts against, that you have an allergy to",
    },
    {
        id: "block-contacts",
        title: "Contacts",
        list: "contacts",
        icon: faPhone,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
export var totalSynopsisData = coreSynopsisData.concat(nonCoreSynopsisData);
export var synopsisData = totalSynopsisData.filter(function (item) { return item.isActive; });
export var SHOW_HEADING = 'heading';
export var SHOW_ALL = 'headingAndList';
export var showModesArray = [
    { type: SHOW_HEADING, label: "Headings" },
    { type: SHOW_ALL, label: "Headings + List" },
];
export function getHeadingsLists() {
    var result = [];
    synopsisData.forEach(function (item) {
        result.push(item.list);
    });
    var hasRespectPlugin = get(themeCommonElements, 'respectPanel', false);
    if (hasRespectPlugin) {
        result.push('respect');
    }
    return result;
}
export function getSynopsisProps(state) {
    var result = {};
    synopsisData.forEach(function (item) {
        var reducerName = item.list + 'Synopsis';
        result[item.list] = get(state, ['custom', reducerName, 'data'], []);
    });
    return result;
}
