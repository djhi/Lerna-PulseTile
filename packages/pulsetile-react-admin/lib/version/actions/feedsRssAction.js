"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../core/actions/functions");
exports.FEEDS_RSS_ACTION = functions_1.createRequestTypes('FEEDS_RSS_ACTION');
exports.feedsRssAction = {
    request: function (sourceId, rssFeedUrl) { return ({ type: exports.FEEDS_RSS_ACTION.REQUEST, sourceId: sourceId, rssFeedUrl: rssFeedUrl }); },
    success: function (data) { return ({ type: exports.FEEDS_RSS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: exports.FEEDS_RSS_ACTION.FAILURE, error: error }); },
};
