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
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var ModalWindow_1 = __importDefault(require("../versions/ModalWindow"));
var styles = function (theme) { return ({
    editButton: {
        display: "block",
        float: "right",
        width: 100,
        height: 40,
        margin: 8,
        padding: 0,
        backgroundColor: theme.palette.paperColor,
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.secondaryMainColor,
            color: theme.palette.paperColor,
        }
    }
}); };
var VersionUpdateButton = /** @class */ (function (_super) {
    __extends(VersionUpdateButton, _super);
    function VersionUpdateButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpenModal: _this.props.respectModal,
        };
        _this.toggleModalWindow = function () {
            _this.setState({
                isOpenModal: !_this.state.isOpenModal
            });
        };
        return _this;
    }
    VersionUpdateButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, toggleMode = _a.toggleMode;
        var isOpenModal = this.state.isOpenModal;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ModalWindow_1.default, { open: isOpenModal, onClose: this.toggleModalWindow, toggleMode: toggleMode }),
            react_1.default.createElement(Tooltip_1.default, { title: "Update", disableHoverListener: true },
                react_1.default.createElement(IconButton_1.default, { className: classes.editButton, onClick: function () { return _this.toggleModalWindow(); } },
                    "Update",
                    react_1.default.createElement(Edit_1.default, null)))));
    };
    return VersionUpdateButton;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        respectModal: state.custom.respectModal.data,
        versionsServerInfo: state.custom.versionsServerInfo.data,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(VersionUpdateButton));
