"use strict";
// CORE PLUGINS CONFIGURATION LIST
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// LISTS PAGES
var AllergiesList_1 = __importDefault(require("../plugins/Allergies/AllergiesList"));
var ContactsList_1 = __importDefault(require("../plugins/Contacts/ContactsList"));
var MedicationsList_1 = __importDefault(require("../plugins/Medications/MedicationsList"));
var ProblemsList_1 = __importDefault(require("../plugins/Problems/ProblemsList"));
var PatientsList_1 = __importDefault(require("../pages/PatientsList"));
exports.default = [
    {
        name: "allergies",
        label: "Allergies",
        list: AllergiesList_1.default,
    },
    {
        name: "contacts",
        label: "Contacts",
        list: ContactsList_1.default,
    },
    {
        name: "medications",
        label: "Medications",
        list: MedicationsList_1.default,
    },
    {
        name: "problems",
        label: "Problems / Issues",
        list: ProblemsList_1.default,
    },
    {
        name: "patients",
        label: "Patients",
        list: PatientsList_1.default,
    },
];
