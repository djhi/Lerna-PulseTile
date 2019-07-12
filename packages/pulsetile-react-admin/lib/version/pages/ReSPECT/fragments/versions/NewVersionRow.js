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
var moment_1 = __importDefault(require("moment"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var ModalWindow_1 = __importDefault(require("./ModalWindow"));
var functions_1 = require("../../functions");
var statuses_1 = require("../../statuses");
var styles = function (theme) { return ({
    rowInProgress: {
        '&:hover p': {
            color: "#fff",
        },
    },
    editButton: {
        color: theme.palette.mainColor,
        fontSize: 16,
        height: 40,
    }
}); };
var NewVersionRow = /** @class */ (function (_super) {
    __extends(NewVersionRow, _super);
    function NewVersionRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpenModal: _this.props.respectModal,
        };
        _this.toggleMode = function () {
            _this.setState({
                isOpenModal: !_this.state.isOpenModal
            });
        };
        return _this;
    }
    NewVersionRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, versionsNumber = _a.versionsNumber, toggleMode = _a.toggleMode;
        var isOpenModal = this.state.isOpenModal;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ModalWindow_1.default, { open: isOpenModal, onClose: this.toggleMode, toggleMode: toggleMode }),
            react_1.default.createElement(TableRow_1.default, { className: classes.rowInProgress },
                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                    react_1.default.createElement(Typography_1.default, null, versionsNumber)),
                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                    react_1.default.createElement(Typography_1.default, null, moment_1.default().format(statuses_1.DATE_FORMAT))),
                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                    react_1.default.createElement(Typography_1.default, null, moment_1.default().format('HH:mm'))),
                react_1.default.createElement(TableCell_1.default, { align: "right" },
                    react_1.default.createElement(Tooltip_1.default, { title: "Proceed", disableHoverListener: true },
                        react_1.default.createElement(IconButton_1.default, { className: classes.editButton, onClick: function () { return _this.toggleMode(); } },
                            "Latest",
                            react_1.default.createElement(Edit_1.default, null)))),
                react_1.default.createElement(TableCell_1.default, { align: "right" },
                    react_1.default.createElement(Typography_1.default, null, functions_1.getAuthorName())))));
    };
    return NewVersionRow;
}(react_1.Component));
;
var mapStateToProps = function (state) {
    return {
        respectModal: state.custom.respectModal.data,
        versionsServerInfo: state.custom.versionsServerInfo.data,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(NewVersionRow));
