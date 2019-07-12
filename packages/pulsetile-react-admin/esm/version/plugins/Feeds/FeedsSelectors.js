var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
import { connect } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import { feedsListAction } from "../../actions/feedsListAction";
import { setSelectedFeedsAction } from "../../actions/setSelectedFeedsAction";
import { feedsRssAction } from "../../actions/feedsRssAction";
import dummyFeeds from "./dummyFeeds";
/**
 * This component returns selectors for Feeds
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var FeedsSelectors = /** @class */ (function (_super) {
    __extends(FeedsSelectors, _super);
    function FeedsSelectors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedFeeds: _this.props.selectedFeeds ? Object.values(_this.props.selectedFeeds) : [],
        };
        /**
         * This function checks is current Feed was selected
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {string} sourceId
         * @return {boolean}
         */
        _this.isFeedsChecked = function (sourceId) {
            var selectedFeeds = _this.state.selectedFeeds;
            return selectedFeeds.indexOf(sourceId) !== -1;
        };
        _this.isFeedsPresented = function (item) {
            return (Object.values(_this.props.selectedFeeds).indexOf(item.sourceId) !== -1);
        };
        /**
         * This function toggle Feeds visibility
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {shape} item
         */
        _this.toggleVisibility = function (item) {
            _this.setState(function (state, props) {
                var selectedFeeds = props.selectedFeeds;
                var feedsArray = selectedFeeds;
                if (_this.isFeedsPresented(item)) {
                    var index = selectedFeeds.indexOf(item.sourceId);
                    feedsArray.splice(index, 1);
                }
                else {
                    feedsArray.push(item.sourceId);
                }
                return {
                    selectedFeeds: feedsArray,
                };
            }, function () {
                if (_this.isFeedsPresented(item)) {
                    _this.props.getRssData(item.sourceId, item.rssFeedUrl);
                }
                _this.props.setSelectedFeeds(_this.state.selectedFeeds);
            });
        };
        return _this;
    }
    FeedsSelectors.prototype.componentDidMount = function () {
        this.props.getUserFeeds();
    };
    ;
    FeedsSelectors.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, feeds = _a.feeds;
        var feedsArray = (feeds && feeds.length > 0) ? feeds : dummyFeeds;
        return (React.createElement(React.Fragment, null,
            React.createElement(Typography, null, "FEEDS"),
            React.createElement(Divider, null),
            React.createElement("div", { className: classes.dialogItem }, feedsArray.map(function (item, key) { return (React.createElement("div", { key: key, className: classes.dialogLabel },
                React.createElement(Checkbox, { className: classes.checkbox, checked: _this.isFeedsChecked(item.sourceId), color: "primary", onChange: function () { return _this.toggleVisibility(item); }, classes: { root: classes.radio, checked: classes.checked } }),
                React.createElement(Typography, { className: classes.checkboxLabel }, item.name))); }))));
    };
    return FeedsSelectors;
}(Component));
;
var mapStateToProps = function (state) { return ({
    feeds: state.custom.feedsList.data,
    selectedFeeds: state.custom.selectedFeedsList.data,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    getUserFeeds: function () {
        dispatch(feedsListAction.request());
    },
    setSelectedFeeds: function (feeds) {
        dispatch(setSelectedFeedsAction(feeds));
    },
    getRssData: function (sourceId, rssFeedUrl) {
        dispatch(feedsRssAction.request(sourceId, rssFeedUrl));
    },
}); };
export default connect(mapStateToProps, mapDispatchToProps)(FeedsSelectors);
