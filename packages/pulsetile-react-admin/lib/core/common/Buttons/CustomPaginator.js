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
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var FirstPage_1 = __importDefault(require("@material-ui/icons/FirstPage"));
var KeyboardArrowLeft_1 = __importDefault(require("@material-ui/icons/KeyboardArrowLeft"));
var KeyboardArrowRight_1 = __importDefault(require("@material-ui/icons/KeyboardArrowRight"));
var LastPage_1 = __importDefault(require("@material-ui/icons/LastPage"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
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
                    buttons.push(react_1.default.createElement(Button_1.default, { onClick: function () { return _this.goToPage(i + 1); }, "aria-label": i + 1, className: (page === i + 1) ? classes.activeButton : classes.button }, i + 1));
                };
                for (var i = 0; i < half; i++) {
                    _loop_1(i);
                }
                buttons.push(react_1.default.createElement(Button_1.default, { className: classes.button }, '...'));
                var _loop_2 = function (i) {
                    buttons.push(react_1.default.createElement(Button_1.default, { onClick: function () { return _this.goToPage(i + 1); }, "aria-label": i + 1, className: (page === i + 1) ? classes.activeButton : classes.button }, i + 1));
                };
                for (var i = buttonsNumber - half; i < buttonsNumber; i++) {
                    _loop_2(i);
                }
            }
            else {
                var _loop_3 = function (i) {
                    buttons.push(react_1.default.createElement(Button_1.default, { onClick: function () { return _this.goToPage(i + 1); }, "aria-label": i + 1, className: (page === i + 1) ? classes.activeButton : classes.button }, i + 1));
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
        return (react_1.default.createElement("div", { className: classes.paginatorRoot },
            react_1.default.createElement(Tooltip_1.default, { title: "First page" },
                react_1.default.createElement(IconButton_1.default, { onClick: function () { return _this.goToPage(1); }, className: classes.button, disabled: page === 1, "aria-label": "First page" },
                    react_1.default.createElement(FirstPage_1.default, null))),
            react_1.default.createElement(Tooltip_1.default, { title: "Previous page" },
                react_1.default.createElement(IconButton_1.default, { onClick: function () { return _this.goToPage(page - 1); }, className: classes.button, disabled: page === 1, "aria-label": "Previous page" },
                    react_1.default.createElement(KeyboardArrowLeft_1.default, null))),
            buttons,
            react_1.default.createElement(Tooltip_1.default, { title: "Next page" },
                react_1.default.createElement(IconButton_1.default, { onClick: function () { return _this.goToPage(page + 1); }, className: classes.button, disabled: page === buttonsNumber, "aria-label": "Next page" },
                    react_1.default.createElement(KeyboardArrowRight_1.default, null))),
            react_1.default.createElement(Tooltip_1.default, { title: "Last page" },
                react_1.default.createElement(IconButton_1.default, { onClick: function () { return _this.goToPage(buttonsNumber); }, className: classes.button, disabled: page === buttonsNumber, "aria-label": "Last page" },
                    react_1.default.createElement(LastPage_1.default, null)))));
    };
    return CustomPaginator;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(CustomPaginator);
