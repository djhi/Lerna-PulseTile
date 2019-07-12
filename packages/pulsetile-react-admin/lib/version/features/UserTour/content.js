"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LastStepContent_1 = __importDefault(require("./fragments/LastStepContent"));
function getStepsArray(steps) {
    var result = [];
    for (var i = 0, n = steps.length; i < n; i++) {
        var item = steps[i];
        result[i] = {
            title: item.title,
            target: item.target,
            content: (react_1.default.createElement("div", { className: "tour-body" },
                react_1.default.createElement("h4", { className: "tour-body-title" }, item.lowTitle),
                react_1.default.createElement("p", { className: "tour-body-content" }, item.content))),
            placement: item.placement,
            disableOverlayClicks: true,
            showSkipButton: true,
        };
    }
    return result;
}
/**
 * URL and Title for the Customer homepage
 * (Ripple Foundation by default)
 */
exports.homepage = {
    link: 'https://www.myhelm.org',
    title: 'My Helm',
};
var steps = [
    {
        title: 'Hello!',
        lowTitle: 'Welcome to the quick tour of Helm',
        target: '#icon-tour',
        content: '',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 1',
        lowTitle: 'Select the home button at any time...',
        target: '#icon-home',
        content: 'Press the home button at any time to return to your dashboard.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 2',
        lowTitle: 'Select the profile icon...',
        target: '#icon-profile',
        content: 'The profile allows you to view your personal information.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 3',
        lowTitle: 'Click on a heading or icon for further information',
        target: '#block-problems',
        content: 'Click on the icon, or heading to view the detailed information within.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 4',
        lowTitle: '',
        target: '#block-medications',
        content: 'Or you can click on a specific individual item to discover relevant detail',
        placement: 'right',
    },
    {
        title: 'Guided Step 5',
        lowTitle: 'Select Settings...',
        target: '#icon-settings',
        content: 'Use the settings cog to change the view of your dashboard.',
        placement: 'right',
    },
];
var lastStep = {
    title: 'End of tour',
    target: '#logo-image',
    content: (react_1.default.createElement("div", { className: "tour-body" },
        react_1.default.createElement(LastStepContent_1.default, { title: exports.homepage.title, link: exports.homepage.link }))),
    placement: 'bottom',
    disableOverlayClicks: true,
    showSkipButton: true,
};
var stepsArray = getStepsArray(steps);
exports.tourSteps = stepsArray.concat(lastStep);
exports.locale = {
    next: 'Next',
    skip: 'Cancel',
    last: 'Last',
    back: 'Back',
};
