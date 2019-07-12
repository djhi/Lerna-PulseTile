"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../core/actions/functions");
exports.SYNOPSIS_TOP_THREE_THINGS_ACTION = functions_1.createRequestTypes('SYNOPSIS_TOP_THREE_THINGS_ACTION');
exports.SYNOPSIS_VACCINATIONS_ACTION = functions_1.createRequestTypes('SYNOPSIS_VACCINATIONS_ACTION');
exports.synopsisTopThreeThingsAction = {
    request: function (data) { return ({ type: exports.SYNOPSIS_TOP_THREE_THINGS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SYNOPSIS_TOP_THREE_THINGS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SYNOPSIS_TOP_THREE_THINGS_ACTION.FAILURE, error: error }); },
};
exports.synopsisVaccinationsAction = {
    request: function (data) { return ({ type: exports.SYNOPSIS_VACCINATIONS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SYNOPSIS_VACCINATIONS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SYNOPSIS_VACCINATIONS_ACTION.FAILURE, error: error }); },
};
