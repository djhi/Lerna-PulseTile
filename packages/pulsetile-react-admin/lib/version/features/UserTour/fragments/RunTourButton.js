"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_joyride_1 = __importDefault(require("react-joyride"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Help_1 = __importDefault(require("@material-ui/icons/Help"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var content_1 = require("../content");
var styles_1 = __importDefault(require("../styles"));
/**
 * This component returns button which run User Tour
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}   classes
 * @param {func}    runTour
 * @param {boolean} isPassed
 * @param {func}    callback
 * @constructor
 */
var RunUserTour = function (_a) {
    var classes = _a.classes, runTour = _a.runTour, isPassed = _a.isPassed, callback = _a.callback;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tooltip_1.default, { title: "User Tour" },
            react_1.default.createElement(IconButton_1.default, { id: "icon-tour", className: classes.rightBlockButton, "aria-haspopup": "true", "aria-label": "Tour", color: "inherit", onClick: function () { return runTour(); } },
                react_1.default.createElement(Help_1.default, null))),
        react_1.default.createElement(react_joyride_1.default, { continuous: true, disableOverlayClose: true, showSkipButton: true, showProgress: true, locale: content_1.locale, steps: content_1.tourSteps, run: isPassed, styles: styles_1.default, callback: callback })));
};
exports.default = RunUserTour;
