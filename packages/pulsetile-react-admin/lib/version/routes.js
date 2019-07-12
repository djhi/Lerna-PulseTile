"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ReSPECT_1 = __importDefault(require("./pages/ReSPECT"));
var BusinessIntelligence_1 = __importDefault(require("./pages/BusinessIntelligence"));
exports.default = [
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/respect", component: ReSPECT_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/business", component: BusinessIntelligence_1.default }),
];
