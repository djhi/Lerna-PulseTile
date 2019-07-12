var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { connect } from 'react-redux';
import dummyFeeds from "./dummyFeeds";
import RssCard from "./RssCard";
function getCurrentFeedInfo(feedsArray, sourceId) {
    var result = null;
    feedsArray.forEach(function (item) {
        if (item.sourceId === sourceId) {
            result = item;
        }
    });
    return result;
}
/**
 * This component returns set of Feeds panels
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} props
 */
var FeedsPanels = function (props) {
    var feeds = props.feeds, rssFeeds = props.rssFeeds, showMode = props.showMode, showHeadings = props.showHeadings, loading = props.loading;
    var rssFeedsArray = Object.entries(rssFeeds);
    var feedsArray = (feeds && feeds.length > 0) ? feeds : dummyFeeds;
    return rssFeedsArray.length > 0 ? rssFeedsArray.map(function (item, key) {
        var sourceId = item[0];
        var rssItems = item[1];
        var currentFeed = getCurrentFeedInfo(feedsArray, sourceId);
        return (React.createElement(RssCard, __assign({ key: key, showMode: showMode, showHeadings: showHeadings, sourceId: sourceId, title: currentFeed.name, link: currentFeed.landingPageUrl, loading: loading, items: rssItems }, props)));
    })
        : null;
};
var mapStateToProps = function (state) {
    return {
        feeds: state.custom.feedsList.data,
        rssFeeds: state.custom.feedsRss.data,
        loading: state.custom.demographics.loading,
        showMode: state.custom.showMode.data,
        showHeadings: state.custom.showHeadings.data,
    };
};
export default connect(mapStateToProps, null)(FeedsPanels);
