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
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
var MAXIMAL_BUTTONS_NUMBER = 5;
var styles = function (theme) { return ({
    paginatorRoot: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    button: {
        display: "block",
        border: "1px solid " + theme.palette.borderColor,
        height: 48,
        width: 48,
        boxSizing: "border-box",
        borderRadius: 0,
        color: theme.palette.secondaryMainColor,
        '&:hover': {
            color: "white",
            backgroundColor: theme.palette.secondaryMainColor
        }
    },
    activeButton: {
        display: "block",
        border: "1px solid " + theme.palette.borderColor,
        height: 48,
        width: 48,
        boxSizing: "border-box",
        borderRadius: 0,
        color: "white",
        backgroundColor: theme.palette.secondaryMainColor,
        '&:hover': {
            color: "white",
            backgroundColor: theme.palette.secondaryMainColor
        }
    }
}); };
/**
 * This component returns custom paginator
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var CustomPaginator = /** @class */ (function (_super) {
    __extends(CustomPaginator, _super);
    function CustomPaginator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            page: 1,
        };
        /**
         * This function adds page parameter to URL
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {number} page
         */
        _this.goToPage = function (page) {
            _this.setState({ page: page }, function () {
                var _a = _this.props, resourceUrl = _a.resourceUrl, history = _a.history, itemsPerPage = _a.itemsPerPage;
                var page = _this.state.page;
                history.push("/" + resourceUrl + "?page=" + page + "&perPage=" + itemsPerPage);
            });
        };
        /**
         * This function add spaces to the button array if digit buttons number is more than maximal
         *
         * @author Bogdan Shcherban <bsc@piogroup.net>
         * @param {number} buttonsNumber
         * @param {number} page
         * @param {shape} classes
         * @return {array}
         */
        _this.getDigitButtons = function (buttonsNumber, page, classes) {
            var buttons = [];
            if (buttonsNumber > MAXIMAL_BUTTONS_NUMBER) {
                var half = Math.ceil(MAXIMAL_BUTTONS_NUMBER / 2) - 1;
                var _loop_1 = function (i) {
                    buttons.push(React.createElement(Button, { onClick: function () { return _this.goToPage(i + 1); }, "aria-label": i + 1, className: (page === i + 1) ? classes.activeButton : classes.button }, i + 1));
                };
                for (var i = 0; i < half; i++) {
                    _loop_1(i);
                }
                buttons.push(React.createElement(Button, { className: classes.button }, '...'));
                var _loop_2 = function (i) {
                    buttons.push(React.createElement(Button, { onClick: function () { return _this.goToPage(i + 1); }, "aria-label": i + 1, className: (page === i + 1) ? classes.activeButton : classes.button }, i + 1));
                };
                for (var i = buttonsNumber - half; i < buttonsNumber; i++) {
                    _loop_2(i);
                }
            }
            else {
                var _loop_3 = function (i) {
                    buttons.push(React.createElement(Button, { onClick: function () { return _this.goToPage(i + 1); }, "aria-label": i + 1, className: (page === i + 1) ? classes.activeButton : classes.button }, i + 1));
                };
                for (var i = 0; i < buttonsNumber; i++) {
                    _loop_3(i);
                }
            }
            return buttons;
        };
        return _this;
    }
    CustomPaginator.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, itemsPerPage = _a.itemsPerPage, total = _a.total;
        var page = this.state.page;
        var buttonsNumber = Math.ceil(total / itemsPerPage);
        var buttons = this.getDigitButtons(buttonsNumber, page, classes);
        return (React.createElement("div", { className: classes.paginatorRoot },
            React.createElement(Tooltip, { title: "First page" },
                React.createElement(IconButton, { onClick: function () { return _this.goToPage(1); }, className: classes.button, disabled: page === 1, "aria-label": "First page" },
                    React.createElement(FirstPageIcon, null))),
            React.createElement(Tooltip, { title: "Previous page" },
                React.createElement(IconButton, { onClick: function () { return _this.goToPage(page - 1); }, className: classes.button, disabled: page === 1, "aria-label": "Previous page" },
                    React.createElement(KeyboardArrowLeft, null))),
            buttons,
            React.createElement(Tooltip, { title: "Next page" },
                React.createElement(IconButton, { onClick: function () { return _this.goToPage(page + 1); }, className: classes.button, disabled: page === buttonsNumber, "aria-label": "Next page" },
                    React.createElement(KeyboardArrowRight, null))),
            React.createElement(Tooltip, { title: "Last page" },
                React.createElement(IconButton, { onClick: function () { return _this.goToPage(buttonsNumber); }, className: classes.button, disabled: page === buttonsNumber, "aria-label": "Last page" },
                    React.createElement(LastPageIcon, null)))));
    };
    return CustomPaginator;
}(Component));
;
export default withStyles(styles)(CustomPaginator);
