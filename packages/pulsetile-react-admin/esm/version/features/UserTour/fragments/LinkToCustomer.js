import React from "react";
import HelpIcon from '@material-ui/icons/Help';
/**
 * This component returns link to the customer page
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} homepage
 * @constructor
 */
var LinkToCustomer = function (_a) {
    var classes = _a.classes, homepage = _a.homepage;
    return (React.createElement("a", { href: homepage.link, className: classes.rightBlockButton, target: "_blank", "aria-label": "To Customer" },
        React.createElement(HelpIcon, null)));
};
export default LinkToCustomer;
