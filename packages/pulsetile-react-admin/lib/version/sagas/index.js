"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var feedsListSagas_1 = __importDefault(require("./feedsListSagas"));
var feedsRssSagas_1 = __importDefault(require("./feedsRssSagas"));
var transferOfCareSagas_1 = __importDefault(require("./transferOfCareSagas"));
var respectSagas_1 = __importDefault(require("./respectSagas"));
var businessIntelligenceSagas_1 = __importDefault(require("./businessIntelligenceSagas"));
var createSynopsisSagas_1 = __importDefault(require("../../core/sagas/createSynopsisSagas"));
var synopsisActions_1 = require("../actions/synopsisActions");
/**
 * This component returns array of version sagas
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {array}
 */
exports.default = [
    feedsListSagas_1.default,
    feedsRssSagas_1.default,
    createSynopsisSagas_1.default(synopsisActions_1.SYNOPSIS_VACCINATIONS_ACTION, synopsisActions_1.synopsisVaccinationsAction, 'vaccinations'),
    createSynopsisSagas_1.default(synopsisActions_1.SYNOPSIS_TOP_THREE_THINGS_ACTION, synopsisActions_1.synopsisTopThreeThingsAction, 'top3Things'),
    transferOfCareSagas_1.default,
    respectSagas_1.default,
    businessIntelligenceSagas_1.default,
];
