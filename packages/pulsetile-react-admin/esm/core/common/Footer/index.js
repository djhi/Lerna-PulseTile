import React from "react";
import get from "lodash/get";
import DefaultFooter from "./DefaultFooter";
import HandleErrorModal from "../HandleErrorModal";
import { themeCommonElements } from "../../../version/config/theme.config";
var Footer = function () {
    var ThemeFooter = get(themeCommonElements, 'footer', false);
    var isFooterAbsent = get(themeCommonElements, 'isFooterAbsent', false);
    return (React.createElement(React.Fragment, null,
        React.createElement(HandleErrorModal, null),
        isFooterAbsent ? null :
            (ThemeFooter ? React.createElement(ThemeFooter, null) : React.createElement(DefaultFooter, null))));
};
export default Footer;
