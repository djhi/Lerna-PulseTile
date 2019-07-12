import { createRequestTypes } from "../../core/actions/functions";
export var SYNOPSIS_TOP_THREE_THINGS_ACTION = createRequestTypes('SYNOPSIS_TOP_THREE_THINGS_ACTION');
export var SYNOPSIS_VACCINATIONS_ACTION = createRequestTypes('SYNOPSIS_VACCINATIONS_ACTION');
export var synopsisTopThreeThingsAction = {
    request: function (data) { return ({ type: SYNOPSIS_TOP_THREE_THINGS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SYNOPSIS_TOP_THREE_THINGS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SYNOPSIS_TOP_THREE_THINGS_ACTION.FAILURE, error: error }); },
};
export var synopsisVaccinationsAction = {
    request: function (data) { return ({ type: SYNOPSIS_VACCINATIONS_ACTION.REQUEST, data: data }); },
    success: function (data) { return ({ type: SYNOPSIS_VACCINATIONS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: SYNOPSIS_VACCINATIONS_ACTION.FAILURE, error: error }); },
};
