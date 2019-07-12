"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var synopsisActions_1 = require("../actions/synopsisActions");
exports.nonCoreSynopsisActions = [
    synopsisActions_1.synopsisVaccinationsAction,
    synopsisActions_1.synopsisTopThreeThingsAction,
];
exports.nonCoreSynopsisData = [
    {
        id: "block-clinicalNotes",
        title: "Clinical Notes",
        list: "clinicalnotes",
        icon: free_solid_svg_icons_1.faClinicMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-MDT",
        title: "MDT",
        list: "mdtreports",
        icon: free_solid_svg_icons_1.faNotesMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-personalNotes",
        title: "Personal Notes",
        list: "personalnotes",
        icon: free_solid_svg_icons_1.faClinicMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-procedures",
        title: "Procedures",
        list: "procedures",
        icon: free_solid_svg_icons_1.faProcedures,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-referrals",
        title: "Referrals",
        list: "referrals",
        icon: free_solid_svg_icons_1.faBriefcaseMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-labresults",
        title: "Results",
        list: "labresults",
        icon: free_solid_svg_icons_1.faMicroscope,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-top3Things",
        title: "Top Three Things",
        list: "top3Things",
        icon: free_solid_svg_icons_1.faUserMd,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-toc",
        title: "Transfers Of Care",
        list: "toc",
        icon: free_solid_svg_icons_1.faAmbulance,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-vaccinations",
        title: "Vaccinations",
        list: "vaccinations",
        icon: free_solid_svg_icons_1.faSyringe,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-vitalsigns",
        title: "Vitals",
        list: "vitalsigns",
        icon: free_solid_svg_icons_1.faHeartbeat,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-events",
        title: "Events",
        list: "events",
        icon: free_solid_svg_icons_1.faStethoscope,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];