"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.SYNOPSIS_ALLERGIES_ACTION = functions_1.createRequestTypes('SYNOPSIS_ALLERGIES_ACTION');
exports.SYNOPSIS_CONTACTS_ACTION = functions_1.createRequestTypes('SYNOPSIS_CONTACTS_ACTION');
exports.SYNOPSIS_MEDICATIONS_ACTION = functions_1.createRequestTypes('SYNOPSIS_MEDICATIONS_ACTION');
exports.SYNOPSIS_PROBLEMS_ACTION = functions_1.createRequestTypes('SYNOPSIS_PROBLEMS_ACTION');
exports.synopsisAllergiesAction = {
    request: function (data) { return ({ type: exports.SYNOPSIS_ALLERGIES_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SYNOPSIS_ALLERGIES_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SYNOPSIS_ALLERGIES_ACTION.FAILURE, error: error }); },
};
exports.synopsisContactsAction = {
    request: function (data) { return ({ type: exports.SYNOPSIS_CONTACTS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SYNOPSIS_CONTACTS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SYNOPSIS_CONTACTS_ACTION.FAILURE, error: error }); },
};
exports.synopsisMedicationsAction = {
    request: function (data) { return ({ type: exports.SYNOPSIS_MEDICATIONS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SYNOPSIS_MEDICATIONS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SYNOPSIS_MEDICATIONS_ACTION.FAILURE, error: error }); },
};
exports.synopsisProblemsAction = {
    request: function (data) { return ({ type: exports.SYNOPSIS_PROBLEMS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: exports.SYNOPSIS_PROBLEMS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.SYNOPSIS_PROBLEMS_ACTION.FAILURE, error: error }); },
};
