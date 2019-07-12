import React from "react";
import Joyride from 'react-joyride';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import { tourSteps, locale } from '../content';
import toursStyles from "../styles";
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Tooltip, { title: "User Tour" },
            React.createElement(IconButton, { id: "icon-tour", className: classes.rightBlockButton, "aria-haspopup": "true", "aria-label": "Tour", color: "inherit", onClick: function () { return runTour(); } },
                React.createElement(HelpIcon, null))),
        React.createElement(Joyride, { continuous: true, disableOverlayClose: true, showSkipButton: true, showProgress: true, locale: locale, steps: tourSteps, run: isPassed, styles: toursStyles, callback: callback })));
};
export default RunUserTour;
