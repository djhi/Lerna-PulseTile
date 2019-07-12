"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pluginFilters_1 = __importDefault(require("../../version/config/pluginFilters"));
/**
 * This component returns array of fields for filtering
 * (core plugins)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {shape}
 */
var corePluginFilters = {
    allergies: ['cause', 'reaction'],
    contacts: ['name', 'relationship'],
    problems: ['problem'],
    medications: ['name'],
};
exports.default = Object.assign({}, corePluginFilters, pluginFilters_1.default);
