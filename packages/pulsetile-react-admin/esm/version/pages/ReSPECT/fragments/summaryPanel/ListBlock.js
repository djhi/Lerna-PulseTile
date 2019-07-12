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
import get from "lodash/get";
import { connect } from 'react-redux';
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { versionsServerAction } from "../../../../actions/ReSPECT/versionsServerAction";
import { themeCommonElements } from "../../../../config/theme.config";
/**
 * This component returns synopsis list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {array}  items
 * @param {shape}  history
 * @constructor
 */
var ItemsList = /** @class */ (function (_super) {
    __extends(ItemsList, _super);
    function ItemsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redirectToRespect = function (item) {
            _this.props.toggleRespectModal();
            _this.props.history.push('/respect');
            _this.props.getOneVersion(item.sourceId, item.version);
        };
        return _this;
    }
    ItemsList.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, items = _a.items, history = _a.history, isLoading = _a.isLoading;
        if (isLoading) {
            return (React.createElement(List, { className: classes.list },
                React.createElement("li", { className: classes.listItem },
                    React.createElement(Typography, null, "Loading..."))));
        }
        if (items && items.length > 0) {
            var menuHasChevrons_1 = get(themeCommonElements, 'menuHasChevrons', false);
            return (React.createElement(List, { className: classes.list }, items && items.slice(0, 4).map(function (item, key) {
                return (React.createElement("li", { key: key, className: classes.listItem, onClick: function () { return _this.redirectToRespect(item); } },
                    React.createElement(Typography, { noWrap: true },
                        "Version ",
                        item.version),
                    menuHasChevrons_1 && React.createElement(ChevronRight, null)));
            })));
        }
        else {
            return (React.createElement(List, { className: classes.list },
                React.createElement("li", { className: classes.listItem, onClick: function () { return history.push('/respect'); } },
                    React.createElement(Typography, null, "No versions"))));
        }
    };
    return ItemsList;
}(Component));
var mapStateToProps = function (state) {
    return {
        isLoading: state.custom.versionsServerInfo.loading,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getOneVersion: function (sourceId, version) {
            dispatch(versionsServerAction.requestOne(sourceId, version));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
