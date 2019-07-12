"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventsList_1 = __importDefault(require("../plugins/Events/EventsList"));
var VaccinationsList_1 = __importDefault(require("../plugins/Vaccinations/VaccinationsList"));
var TopThreeThingsList_1 = __importDefault(require("../plugins/TopThreeThings/TopThreeThingsList"));
var ClinicalNotesList_1 = __importDefault(require("../plugins/ClinicalNotes/ClinicalNotesList"));
var MdtList_1 = __importDefault(require("../plugins/MDT/MdtList"));
var ProceduresList_1 = __importDefault(require("../plugins/Procedures/ProceduresList"));
var PersonalNotesList_1 = __importDefault(require("../plugins/PersonalNotes/PersonalNotesList"));
var ReferralsList_1 = __importDefault(require("../plugins/Referrals/ReferralsList"));
var ResultsList_1 = __importDefault(require("../plugins/Results/ResultsList"));
var TransferOfCareList_1 = __importDefault(require("../plugins/TransferOfCare/TransferOfCareList"));
var VitalsList_1 = __importDefault(require("../plugins/Vitals/VitalsList"));
exports.default = [
    {
        name: "events",
        label: "Events",
        list: EventsList_1.default,
    },
    {
        name: "vaccinations",
        label: "Vaccinations",
        list: VaccinationsList_1.default,
    },
    {
        name: "top3Things",
        label: "Top Three Things",
        list: TopThreeThingsList_1.default,
    },
    {
        name: "clinicalnotes",
        label: "Clinical Notes",
        list: ClinicalNotesList_1.default,
    },
    {
        name: "mdtreports",
        label: "MDT",
        list: MdtList_1.default,
    },
    {
        name: "procedures",
        label: "Procedures",
        list: ProceduresList_1.default,
    },
    {
        name: "personalnotes",
        label: "Personal Notes",
        list: PersonalNotesList_1.default,
    },
    {
        name: "referrals",
        label: "Referrals",
        list: ReferralsList_1.default,
    },
    {
        name: "labresults",
        label: "Results",
        list: ResultsList_1.default,
    },
    {
        name: "toc",
        label: "Transfers of Care",
        list: TransferOfCareList_1.default,
    },
    {
        name: "vitalsigns",
        label: "Vitals",
        list: VitalsList_1.default,
    }
];
