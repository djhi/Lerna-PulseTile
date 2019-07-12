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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var react_admin_1 = require("react-admin");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var CustomIcon_1 = __importDefault(require("../../../../core/common/CustomIcon"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var styles = function (theme) { return ({
    expansionPanel: {
        height: "49px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    currentExpansionPanel: {
        margin: "0px !important",
        border: "1px solid " + theme.palette.borderColor,
        '& > div': {
            minHeight: "49px !important",
        }
    },
    expansionPanelSummary: {
        backgroundColor: theme.palette.mainColor,
        paddingLeft: 16,
        '& > div': {
            margin: "0px !important",
            marginTop: "0px",
            marginBottom: "0px",
        }
    },
    emptyBlock: {
        flexGrow: 1,
    },
    expandIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expandBlockIcon: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 35,
        border: theme.isOldDesign ? "1px solid " + theme.palette.secondaryMainColor : null,
        color: theme.isOldDesign ? theme.palette.secondaryMainColor : theme.palette.paperColor,
    },
    expansionTypography: {
        paddingTop: 10,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    expansionPanelDetails: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    showDetails: {
        padding: '10px 0',
        '& > div': {
            boxShadow: "none",
        }
    },
    showLayoutDetails: {
        paddingTop: '0px !important',
        paddingLeft: 10,
    },
    labelBlock: {
        '& > div': {
            marginTop: 0,
            marginBottom: 0,
        },
    },
    resultBlock: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    formControl: {
        display: 'flex',
        flexDirection: 'column'
    },
    formLabel: {
        display: "block",
        fontWeight: 800,
        color: "#000",
        fontSize: 14,
        marginBottom: 5,
    },
    formValue: {
        marginBottom: 10,
    }
}); };
/**
 * This component returns template for details block
 * (it used in Show details blocks for the plugins Allergies, Contacts, Medications, Problems etc.)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var ShowTemplate = /** @class */ (function (_super) {
    __extends(ShowTemplate, _super);
    function ShowTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMainPanelOpen: true,
            isSystemInfoPanelOpen: true,
        };
        _this.toggleMainPanel = function () {
            _this.setState({
                isMainPanelOpen: !_this.state.isMainPanelOpen,
            });
        };
        _this.toggleSystemInfoPanel = function () {
            _this.setState({
                isSystemInfoPanelOpen: !_this.state.isSystemInfoPanelOpen,
            });
        };
        return _this;
    }
    ShowTemplate.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, children = _a.children, isListOpened = _a.isListOpened, pageTitle = _a.pageTitle, labresults = _a.labresults, id = _a.id, toggleListBlock = _a.toggleListBlock, changeViewType = _a.changeViewType, rest = __rest(_a, ["classes", "children", "isListOpened", "pageTitle", "labresults", "id", "toggleListBlock", "changeViewType"]);
        var _b = this.state, isMainPanelOpen = _b.isMainPanelOpen, isSystemInfoPanelOpen = _b.isSystemInfoPanelOpen;
        var currentItem = get_1.default(labresults, id, null);
        var resultsArray = get_1.default(currentItem, 'testResults', []);
        var resultsNumber = resultsArray.length;
        return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: isListOpened ? 6 : 12 },
            react_1.default.createElement(ExpansionPanel_1.default, { className: isMainPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isMainPanelOpen, onChange: function () { return _this.toggleMainPanel(); } },
                react_1.default.createElement(ExpansionPanelSummary_1.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
                    react_1.default.createElement(Typography_1.default, { className: classes.expansionTypography }, pageTitle),
                    react_1.default.createElement("div", { className: classes.emptyBlock }),
                    react_1.default.createElement("div", { title: isListOpened ? "Expand" : "Compress" },
                        react_1.default.createElement(IconButton_1.default, { onClick: function (e) { return toggleListBlock(e); } },
                            react_1.default.createElement(CustomIcon_1.default, { iconClassName: isListOpened ? 'fa fa-expand' : 'fa fa-compress' })))),
                isMainPanelOpen &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { className: classes.expansionPanelDetails },
                        react_1.default.createElement(react_admin_1.Show, __assign({ className: classes.showDetails, title: pageTitle }, this.props),
                            react_1.default.createElement(react_admin_1.SimpleShowLayout, { className: classes.showLayoutDetails }, children)))),
            react_1.default.createElement(ExpansionPanel_1.default, { className: isSystemInfoPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isSystemInfoPanelOpen, onChange: function () { return _this.toggleSystemInfoPanel(); } },
                react_1.default.createElement(ExpansionPanelSummary_1.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
                    react_1.default.createElement(Typography_1.default, { className: classes.expansionTypography },
                        "Results (",
                        resultsNumber,
                        ")")),
                react_1.default.createElement(ExpansionPanelDetails_1.default, { className: classes.expansionPanelDetails }, (resultsArray.length > 0) && resultsArray.map(function (item, key) {
                    return (react_1.default.createElement("div", { className: classes.resultBlock, key: key },
                        react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Results"),
                            react_1.default.createElement(Typography_1.default, { className: classes.formValue }, item.result)),
                        react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Value"),
                            react_1.default.createElement(Typography_1.default, { className: classes.formValue }, item.value)),
                        react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Units"),
                            react_1.default.createElement(Typography_1.default, { className: classes.formValue }, item.unit)),
                        react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Normal range"),
                            react_1.default.createElement(Typography_1.default, { className: classes.formValue }, item.normalRange)),
                        react_1.default.createElement(FormControl_1.default, { className: classes.formControl },
                            react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Comment"),
                            react_1.default.createElement(Typography_1.default, { className: classes.formValue }, item.comment)),
                        react_1.default.createElement(Divider_1.default, null)));
                })))));
    };
    return ShowTemplate;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        labresults: get_1.default(state, 'admin.resources.labresults.data', []),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(ShowTemplate));
