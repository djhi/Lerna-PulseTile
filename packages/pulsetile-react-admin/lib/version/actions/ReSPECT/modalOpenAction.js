"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../../core/actions/functions");
exports.MODAL_OPEN_ACTION = functions_1.createRequestTypes('MODAL_OPEN_ACTION');
exports.modalOpenAction = {
    request: function (data) { return ({ type: exports.MODAL_OPEN_ACTION.REQUEST, data: data }); },
};
