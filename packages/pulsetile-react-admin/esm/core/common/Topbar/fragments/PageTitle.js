import React from "react";
import Typography from '@material-ui/core/Typography';
var titlesArray = {
    charts: "System Dashboard",
    patients: "Patients Lists",
};
/**
 * This component returns page title (for Charts and Patients pages)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} location
 */
var PageTitle = function (_a) {
    var classes = _a.classes, location = _a.location;
    var pathName = location.pathname;
    var title = titlesArray[pathName.replace('/', '')];
    return (React.createElement(Typography, { className: classes.title }, title ? title : "System Dashboard"));
};
export default PageTitle;
