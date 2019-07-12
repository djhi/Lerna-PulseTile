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
var react_redux_1 = require("react-redux");
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Typography/index"));
var index_3 = __importDefault(require("@material-ui/core/ExpansionPanel/index"));
var index_4 = __importDefault(require("@material-ui/core/ExpansionPanelDetails/index"));
var index_5 = __importDefault(require("@material-ui/core/ExpansionPanelSummary/index"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var emergencySummaryAction_1 = require("../../../../actions/emergencySummaryAction");
var VitalsChart_1 = __importDefault(require("../../../../../version/plugins/Vitals/VitalsChart"));
var ItemBlock_1 = __importDefault(require("./ItemBlock"));
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
    itemBlock: {
        margin: 10,
    },
    blockContent: {
        marginTop: 5,
    },
    showAll: {
        color: theme.palette.secondaryMainColor,
        fontWeight: 800,
        cursor: 'pointer',
    }
}); };
var EmergencySummaryPanel = /** @class */ (function (_super) {
    __extends(EmergencySummaryPanel, _super);
    function EmergencySummaryPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isPanelOpen: true,
        };
        _this.togglePanel = function () {
            _this.setState({
                isPanelOpen: !_this.state.isPanelOpen,
            });
        };
        _this.getResourceList = function (resourse, name) {
            var emergencySummary = _this.props.emergencySummary;
            var listArray = get_1.default(emergencySummary, resourse, []);
            var result = [];
            listArray.map(function (item) {
                result.push(item[name]);
            });
            return result;
        };
        return _this;
    }
    EmergencySummaryPanel.prototype.componentDidMount = function () {
        var id = this.props.id;
        if (id) {
            this.props.getEmergencySummary(id);
        }
    };
    EmergencySummaryPanel.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var id = this.props.id;
        if (nextProps.id !== id) {
            this.props.getEmergencySummary(id);
        }
    };
    EmergencySummaryPanel.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentData = _a.currentData, id = _a.id, emergencySummary = _a.emergencySummary, history = _a.history, isLoading = _a.isLoading;
        var isPanelOpen = this.state.isPanelOpen;
        var currentPatient = get_1.default(currentData, id, null);
        var allergiesList = this.getResourceList('allergies', 'cause');
        var medicationsList = this.getResourceList('medications', 'name');
        var problemsList = this.getResourceList('problems', 'problem');
        return (react_1.default.createElement(index_3.default, { className: isPanelOpen ? classes.currentExpansionPanel : classes.expansionPanel, expanded: isPanelOpen, onChange: function () { return _this.togglePanel(); } },
            react_1.default.createElement(index_5.default, { className: classes.expansionPanelSummary, expandIcon: react_1.default.createElement(ExpandMore_1.default, { className: classes.expandIcon }) },
                react_1.default.createElement(index_2.default, { className: classes.expansionTypography }, "Emergency Summary")),
            isPanelOpen &&
                react_1.default.createElement(index_4.default, { className: classes.expansionPanelDetails },
                    react_1.default.createElement("div", { className: classes.itemBlock },
                        react_1.default.createElement(index_2.default, { variant: "h3" }, "Name"),
                        react_1.default.createElement(index_2.default, { className: classes.blockContent },
                            get_1.default(currentPatient, 'firstName', null),
                            " ",
                            get_1.default(currentPatient, 'lastName', null))),
                    react_1.default.createElement(ItemBlock_1.default, { isLoading: isLoading, list: problemsList, title: "Diagnosis" }),
                    react_1.default.createElement(ItemBlock_1.default, { isLoading: isLoading, list: medicationsList, title: "Medications" }),
                    react_1.default.createElement(ItemBlock_1.default, { isLoading: isLoading, list: allergiesList, title: "Allergies" }),
                    react_1.default.createElement("div", { className: classes.itemBlock },
                        react_1.default.createElement(index_2.default, { variant: "h3" }, "Vitals"),
                        react_1.default.createElement(VitalsChart_1.default, { vitalsEmergencySummary: get_1.default(emergencySummary, 'vitalsigns', []), history: history })))));
    };
    return EmergencySummaryPanel;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        emergencySummary: get_1.default(state, 'custom.emergencySummary.data', null),
        isLoading: get_1.default(state, 'custom.emergencySummary.loading', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getEmergencySummary: function (patientId) {
            dispatch(emergencySummaryAction_1.emergencySummaryAction.request('allergies', patientId));
            dispatch(emergencySummaryAction_1.emergencySummaryAction.request('medications', patientId));
            dispatch(emergencySummaryAction_1.emergencySummaryAction.request('problems', patientId));
            dispatch(emergencySummaryAction_1.emergencySummaryAction.request('vitalsigns', patientId));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(index_1.withStyles(styles)(EmergencySummaryPanel));
