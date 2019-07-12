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
var get_1 = __importDefault(require("lodash/get"));
var react_redux_form_1 = require("react-redux-form");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var styles = {
    textField: {
        display: 'block',
    },
    formGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    mainFormLabel: {
        display: "block",
        fontWeight: 800,
        color: "#000",
        fontSize: 14,
        marginBottom: 5,
    },
};
var SystemInformationBlock = /** @class */ (function (_super) {
    __extends(SystemInformationBlock, _super);
    function SystemInformationBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: true,
        };
        _this.togglePanel = function () {
            _this.setState({
                isOpen: !_this.state.isOpen,
            });
        };
        return _this;
    }
    SystemInformationBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, modelName = _a.modelName, filledValues = _a.filledValues;
        var isOpen = this.state.isOpen;
        return (react_1.default.createElement(ExpansionPanel_1.default, { className: isOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isOpen, onChange: function () { return _this.togglePanel(); } },
            react_1.default.createElement(ExpansionPanelSummary_1.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
                react_1.default.createElement(Typography_1.default, { className: classes.title }, "System Information")),
            isOpen &&
                react_1.default.createElement(ExpansionPanelDetails_1.default, { className: classes.expansionPanelDetails },
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.mainFormLabel }, "Source"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: modelName + '.source', defaultValue: get_1.default(filledValues, 'source', null), disabled: true })),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(FormLabel_1.default, { className: classes.mainFormLabel }, "Author"),
                        react_1.default.createElement(react_redux_form_1.Control.text, { className: classes.formInput, model: modelName + '.author', defaultValue: get_1.default(filledValues, 'author', null), disabled: true })))));
    };
    return SystemInformationBlock;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(SystemInformationBlock);
