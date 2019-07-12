"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
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
    return (react_1.default.createElement(Typography_1.default, { className: classes.title }, title ? title : "System Dashboard"));
};
exports.default = PageTitle;
