import { createRequestTypes } from "../../core/actions/functions";
export var FEEDS_RSS_ACTION = createRequestTypes('FEEDS_RSS_ACTION');
export var feedsRssAction = {
    request: function (sourceId, rssFeedUrl) { return ({ type: FEEDS_RSS_ACTION.REQUEST, sourceId: sourceId, rssFeedUrl: rssFeedUrl }); },
    success: function (data) { return ({ type: FEEDS_RSS_ACTION.SUCCESS, data: data }); },
    error: function (error) { return ({ type: FEEDS_RSS_ACTION.FAILURE, error: error }); },
};
