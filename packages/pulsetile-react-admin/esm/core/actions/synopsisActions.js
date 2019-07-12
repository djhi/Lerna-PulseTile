import { createRequestTypes } from "./functions";
export var SYNOPSIS_ALLERGIES_ACTION = createRequestTypes('SYNOPSIS_ALLERGIES_ACTION');
export var SYNOPSIS_CONTACTS_ACTION = createRequestTypes('SYNOPSIS_CONTACTS_ACTION');
export var SYNOPSIS_MEDICATIONS_ACTION = createRequestTypes('SYNOPSIS_MEDICATIONS_ACTION');
export var SYNOPSIS_PROBLEMS_ACTION = createRequestTypes('SYNOPSIS_PROBLEMS_ACTION');
export var synopsisAllergiesAction = {
    request: function (data) { return ({ type: SYNOPSIS_ALLERGIES_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SYNOPSIS_ALLERGIES_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SYNOPSIS_ALLERGIES_ACTION.FAILURE, error: error }); },
};
export var synopsisContactsAction = {
    request: function (data) { return ({ type: SYNOPSIS_CONTACTS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SYNOPSIS_CONTACTS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SYNOPSIS_CONTACTS_ACTION.FAILURE, error: error }); },
};
export var synopsisMedicationsAction = {
    request: function (data) { return ({ type: SYNOPSIS_MEDICATIONS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SYNOPSIS_MEDICATIONS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SYNOPSIS_MEDICATIONS_ACTION.FAILURE, error: error }); },
};
export var synopsisProblemsAction = {
    request: function (data) { return ({ type: SYNOPSIS_PROBLEMS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SYNOPSIS_PROBLEMS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SYNOPSIS_PROBLEMS_ACTION.FAILURE, error: error }); },
};
