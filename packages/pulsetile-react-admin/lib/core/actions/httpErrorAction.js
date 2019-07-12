"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.HTTP_ERROR_ACTION = functions_1.createRequestTypes('HTTP_ERROR_ACTION', { SAVE: 'SAVE', REMOVE: 'REMOVE' });
exports.httpErrorAction = {
    save: function (data) { return ({ type: exports.HTTP_ERROR_ACTION.SAVE, data: data }); },
    remove: function (data) { return ({ type: exports.HTTP_ERROR_ACTION.REMOVE, data: data }); },
};
