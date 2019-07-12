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
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import CleanIcon from '@material-ui/icons/HighlightOff';
import Tooltip from "@material-ui/core/Tooltip";
import PopoverWithDetails from "./PopoverWithDetails";
var styles = function (theme) { return ({
    icon: {
        color: theme.palette.dangerColor,
    },
}); };
var TableBodyBlock = /** @class */ (function (_super) {
    __extends(TableBodyBlock, _super);
    function TableBodyBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            popoverItem: null,
        };
        _this.handlePopoverOpen = function (event, item) {
            _this.setState({
                anchorEl: event.currentTarget,
                popoverItem: item,
            });
        };
        _this.handlePopoverClose = function () {
            _this.setState({
                anchorEl: null,
                popoverItem: null,
            });
        };
        return _this;
    }
    TableBodyBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, removeItem = _a.removeItem, list = _a.list, details = _a.details, loadingDetails = _a.loadingDetails;
        var _b = this.state, anchorEl = _b.anchorEl, popoverItem = _b.popoverItem;
        return (React.createElement(TableBody, null, list.map(function (item, key) {
            return (React.createElement(React.Fragment, null,
                React.createElement(TableRow, { key: key, onMouseEnter: function (e) { return _this.handlePopoverOpen(e, item); }, onMouseLeave: _this.handlePopoverClose },
                    React.createElement(TableCell, { scope: "row", padding: "none" },
                        React.createElement(Typography, null, item.name)),
                    React.createElement(TableCell, { align: "right" },
                        React.createElement(Typography, null, item.type)),
                    React.createElement(TableCell, { align: "right" },
                        React.createElement(Typography, null, item.date)),
                    React.createElement(TableCell, { align: "right" },
                        React.createElement(Typography, null, item.source)),
                    React.createElement(TableCell, { align: "right" },
                        React.createElement(Tooltip, { title: "Clean Search", disableHoverListener: true },
                            React.createElement(IconButton, { className: classes.icon, "aria-haspopup": "true", color: "inherit", onClick: function () { return removeItem(item.sourceId); } },
                                React.createElement(CleanIcon, null))))),
                React.createElement(PopoverWithDetails, { anchorEl: anchorEl, handlePopoverClose: _this.handlePopoverClose, popoverItem: popoverItem, details: details, loadingDetails: loadingDetails })));
        })));
    };
    return TableBodyBlock;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        details: get(state, 'custom.transferOfCare.details', []),
        loadingDetails: get(state, 'custom.transferOfCare.loadingDetails', false),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(TableBodyBlock));
