"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var MainFormBlock = function (_a) {
    var classes = _a.classes, isMainPanel = _a.isMainPanel, togglePanel = _a.togglePanel, children = _a.children, title = _a.title;
    return (react_1.default.createElement(ExpansionPanel_1.default, { className: isMainPanel ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isMainPanel, onChange: function () { return togglePanel(); } },
        react_1.default.createElement(ExpansionPanelSummary_1.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
            react_1.default.createElement(Typography_1.default, { className: classes.title }, title)),
        isMainPanel &&
            react_1.default.createElement(ExpansionPanelDetails_1.default, { className: classes.expansionPanelDetails }, children)));
};
exports.default = MainFormBlock;
