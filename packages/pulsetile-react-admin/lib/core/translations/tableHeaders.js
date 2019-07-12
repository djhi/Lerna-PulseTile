"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableHeaders_1 = __importDefault(require("../../version/config/tableHeaders"));
/**
 * This component returns titles and descriptions for table headers
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {shape}
 */
var coreTableHeaders = {
    allergies: {
        title: "Allergies",
        description: "Those things that your body reacts against , that you have an allergy to",
    },
    contacts: {
        title: "Contacts",
        description: "",
    },
    medications: {
        title: "Medications",
        description: "The medical tablets and other medications that you take regularly for your health care",
    },
    problems: {
        title: "Problems / Issues",
        description: "The key problems that affect your health, some with clear diagnoses from your doctor",
    },
};
exports.default = Object.assign({}, coreTableHeaders, tableHeaders_1.default);
