"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var feedsListAction_1 = require("../../actions/feedsListAction");
var setSelectedFeedsAction_1 = require("../../actions/setSelectedFeedsAction");
var feedsRssAction_1 = require("../../actions/feedsRssAction");
var dummyFeeds_1 = __importDefault(require("./dummyFeeds"));
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
        var feedsArray = (feeds && feeds.length > 0) ? feeds : dummyFeeds_1.default;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Typography_1.default, null, "FEEDS"),
            react_1.default.createElement(Divider_1.default, null),
            react_1.default.createElement("div", { className: classes.dialogItem }, feedsArray.map(function (item, key) { return (react_1.default.createElement("div", { key: key, className: classes.dialogLabel },
                react_1.default.createElement(Checkbox_1.default, { className: classes.checkbox, checked: _this.isFeedsChecked(item.sourceId), color: "primary", onChange: function () { return _this.toggleVisibility(item); }, classes: { root: classes.radio, checked: classes.checked } }),
                react_1.default.createElement(Typography_1.default, { className: classes.checkboxLabel }, item.name))); }))));
    };
    return FeedsSelectors;
}(react_1.Component));
;
var mapStateToProps = function (state) { return ({
    feeds: state.custom.feedsList.data,
    selectedFeeds: state.custom.selectedFeedsList.data,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    getUserFeeds: function () {
        dispatch(feedsListAction_1.feedsListAction.request());
    },
    setSelectedFeeds: function (feeds) {
        dispatch(setSelectedFeedsAction_1.setSelectedFeedsAction(feeds));
    },
    getRssData: function (sourceId, rssFeedUrl) {
        dispatch(feedsRssAction_1.feedsRssAction.request(sourceId, rssFeedUrl));
    },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FeedsSelectors);
