"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var theme_config_1 = require("../../../version/config/theme.config");
var defaultShortMenu = [
    { url: '/', label: 'Charts' },
    { url: '/patients', label: 'Patients' }
];
var defaultFullMenu = [
    { url: '/summary', label: 'Patient Summary' },
    { url: '/problems', label: 'Problems / Issues' },
    { url: '/medications', label: 'Medications' },
    { url: '/vaccinations', label: 'Vaccinations' },
    { url: '/allergies', label: 'Allergies' },
    { url: '/contacts', label: 'Contacts' },
    { url: '/top3Things', label: 'TopThreeThings' },
];
function isResourcePresentedInMenu(currentResource, menuItemsArray) {
    var filterArray = menuItemsArray.filter(function (item) { return item.url === ('/' + currentResource); });
    return filterArray.length > 0;
}
function getMenuItems(currentPathname) {
    var pathArray = currentPathname.split('/');
    var currentResource = get_1.default(pathArray, [1], null);
    if (localStorage.getItem('role') === 'PHR') {
        return theme_config_1.themeFullMenu;
    }
    if (isResourcePresentedInMenu(currentResource, theme_config_1.themeShortMenu) || currentPathname === "/") {
        return theme_config_1.themeShortMenu;
    }
    if (isResourcePresentedInMenu(currentResource, theme_config_1.themeFullMenu)) {
        return theme_config_1.themeFullMenu;
    }
    if (isResourcePresentedInMenu(currentResource, defaultFullMenu)) {
        return defaultFullMenu;
    }
    return defaultShortMenu;
}
exports.getMenuItems = getMenuItems;
function isSinglePatientView(currentPathname) {
    var pathArray = currentPathname.split('/');
    var currentResource = get_1.default(pathArray, [1], null);
    return isResourcePresentedInMenu(currentResource, theme_config_1.themeFullMenu) || isResourcePresentedInMenu(currentResource, defaultFullMenu);
}
exports.isSinglePatientView = isSinglePatientView;
