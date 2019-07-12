"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Charts_1 = __importDefault(require("./pages/Charts"));
var PatientSummary_1 = __importDefault(require("./pages/PatientSummary"));
var routes_1 = __importDefault(require("../version/routes"));
var coreRoutes = [
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/charts", component: Charts_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/summary", component: PatientSummary_1.default }),
];
exports.default = coreRoutes.concat(routes_1.default);
