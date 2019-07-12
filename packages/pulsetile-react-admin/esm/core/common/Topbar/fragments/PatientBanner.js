import React from "react";
import get from "lodash/get";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/**
 * This component returnts banner with Patient information
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} patientInfo
 * @constructor
 */
var PatientBanner = function (_a) {
    var classes = _a.classes, patientInfo = _a.patientInfo;
    var addressArray = [
        get(patientInfo, 'address', null),
        get(patientInfo, 'city', null),
        get(patientInfo, 'country', null),
        get(patientInfo, 'postCode', null)
    ];
    var doctor = get(patientInfo, 'gpName', null);
    var dateOfBirth = get(patientInfo, 'birthDate', null);
    return (React.createElement(Grid, { className: classes.patientInfo, container: true, spacing: 24 },
        React.createElement(Grid, { className: classes.gridBlock, item: true, xs: 12, lg: 8 },
            React.createElement(Typography, { variant: "h6", className: classes.patientNameBlock },
                React.createElement("span", { className: classes.keyName }, get(patientInfo, 'name', null))),
            doctor &&
                React.createElement(Typography, { variant: "body2" },
                    React.createElement("span", { className: classes.keyName }, "Doctor: "),
                    React.createElement("span", { className: classes.keyName }, doctor)),
            React.createElement(Typography, { variant: "body2" },
                React.createElement("span", { className: classes.keyName }, "Address: "),
                React.createElement("span", { className: classes.keyName }, addressArray.join(', ')))),
        React.createElement(Grid, { className: classes.gridBlock, item: true, xs: 6, lg: 2 },
            dateOfBirth &&
                React.createElement(Typography, { variant: "body2" },
                    React.createElement("span", { className: classes.keyName }, "D.O.B.: "),
                    React.createElement("span", { className: classes.keyName }, dateOfBirth)),
            React.createElement(Typography, { variant: "body2" },
                React.createElement("span", { className: classes.keyName }, "Phone: "),
                React.createElement("span", { className: classes.keyName }, get(patientInfo, 'phone', null)))),
        React.createElement(Grid, { className: classes.gridBlock, item: true, xs: 6, lg: 2 },
            React.createElement(Typography, { variant: "body2" },
                React.createElement("span", { className: classes.keyName }, "Gender: "),
                React.createElement("span", { className: classes.keyName }, get(patientInfo, 'gender', null))),
            React.createElement(Typography, { variant: "body2" },
                React.createElement("span", { className: classes.keyName }, "NHS No.: "),
                React.createElement("span", { className: classes.keyName }, get(patientInfo, 'nhsNumber', null))))));
};
export default PatientBanner;
