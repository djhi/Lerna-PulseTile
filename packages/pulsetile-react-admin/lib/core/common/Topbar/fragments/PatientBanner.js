"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
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
        get_1.default(patientInfo, 'address', null),
        get_1.default(patientInfo, 'city', null),
        get_1.default(patientInfo, 'country', null),
        get_1.default(patientInfo, 'postCode', null)
    ];
    var doctor = get_1.default(patientInfo, 'gpName', null);
    var dateOfBirth = get_1.default(patientInfo, 'birthDate', null);
    return (react_1.default.createElement(Grid_1.default, { className: classes.patientInfo, container: true, spacing: 24 },
        react_1.default.createElement(Grid_1.default, { className: classes.gridBlock, item: true, xs: 12, lg: 8 },
            react_1.default.createElement(Typography_1.default, { variant: "h6", className: classes.patientNameBlock },
                react_1.default.createElement("span", { className: classes.keyName }, get_1.default(patientInfo, 'name', null))),
            doctor &&
                react_1.default.createElement(Typography_1.default, { variant: "body2" },
                    react_1.default.createElement("span", { className: classes.keyName }, "Doctor: "),
                    react_1.default.createElement("span", { className: classes.keyName }, doctor)),
            react_1.default.createElement(Typography_1.default, { variant: "body2" },
                react_1.default.createElement("span", { className: classes.keyName }, "Address: "),
                react_1.default.createElement("span", { className: classes.keyName }, addressArray.join(', ')))),
        react_1.default.createElement(Grid_1.default, { className: classes.gridBlock, item: true, xs: 6, lg: 2 },
            dateOfBirth &&
                react_1.default.createElement(Typography_1.default, { variant: "body2" },
                    react_1.default.createElement("span", { className: classes.keyName }, "D.O.B.: "),
                    react_1.default.createElement("span", { className: classes.keyName }, dateOfBirth)),
            react_1.default.createElement(Typography_1.default, { variant: "body2" },
                react_1.default.createElement("span", { className: classes.keyName }, "Phone: "),
                react_1.default.createElement("span", { className: classes.keyName }, get_1.default(patientInfo, 'phone', null)))),
        react_1.default.createElement(Grid_1.default, { className: classes.gridBlock, item: true, xs: 6, lg: 2 },
            react_1.default.createElement(Typography_1.default, { variant: "body2" },
                react_1.default.createElement("span", { className: classes.keyName }, "Gender: "),
                react_1.default.createElement("span", { className: classes.keyName }, get_1.default(patientInfo, 'gender', null))),
            react_1.default.createElement(Typography_1.default, { variant: "body2" },
                react_1.default.createElement("span", { className: classes.keyName }, "NHS No.: "),
                react_1.default.createElement("span", { className: classes.keyName }, get_1.default(patientInfo, 'nhsNumber', null))))));
};
exports.default = PatientBanner;
