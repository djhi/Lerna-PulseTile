"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../core/actions/functions");
exports.CONTRAST_MODE_ACTION = functions_1.createRequestTypes('CONTRAST_MODE_ACTION');
exports.contrastModeAction = {
    request: function (data) { return ({ type: exports.CONTRAST_MODE_ACTION.REQUEST, data: data }); },
};
