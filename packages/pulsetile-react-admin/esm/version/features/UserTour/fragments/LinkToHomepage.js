import React from "react";
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import { PATIENT_SUMMARY } from "../../../../core/config/clientUrls";
/**
 * This component returns link to Homepage
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {func} toggleMode
 * @constructor
 */
var LinkToHomepage = function (_a) {
    var classes = _a.classes, toggleMode = _a.toggleMode;
    return (React.createElement(Link, { to: PATIENT_SUMMARY, className: classes.rightBlockButton, onClick: function () { return toggleMode(); }, "aria-label": "Home" },
        React.createElement(HelpIcon, null)));
};
export default LinkToHomepage;
