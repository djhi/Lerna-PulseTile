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
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var PhotoAndVitals_1 = __importDefault(require("../fragments/PhotoAndVitals"));
var PatientSummaryPanels_1 = __importDefault(require("../fragments/PatientSummaryPanels"));
var LabResults_1 = __importDefault(require("../fragments/LabResults"));
var DummyVitalsChart_1 = __importDefault(require("../fragments/DummyVitalsChart"));
var EventsTimeline_1 = __importDefault(require("../fragments/EventsTimeline"));
var styles = function (theme) { return ({
    headerBlock: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    blockTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
    },
    blockTitleLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
        borderRight: "0.5px solid " + theme.palette.paperColor
    },
    blockTitleRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
        borderLeft: "0.5px solid " + theme.palette.paperColor
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
    },
    content: {
        width: '100%',
        backgroundColor: theme.palette.paperColor,
    },
    photoAndVitals: {
        padding: 10,
    },
    chartBlock: {
        padding: 10,
    },
    dummyEvents: {
        margin: 20,
    }
}); };
var PatientSummaryTable = /** @class */ (function (_super) {
    __extends(PatientSummaryTable, _super);
    function PatientSummaryTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatientSummaryTable.prototype.render = function () {
        var _a = this.props, classes = _a.classes, emergencySummary = _a.emergencySummary, history = _a.history, location = _a.location, isVitalsLoading = _a.isVitalsLoading;
        return (react_1.default.createElement("div", { className: classes.headerBlock },
            react_1.default.createElement(PhotoAndVitals_1.default, { classes: classes }),
            react_1.default.createElement(PatientSummaryPanels_1.default, { classes: classes }),
            react_1.default.createElement(LabResults_1.default, { classes: classes, location: location }),
            react_1.default.createElement(Grid_1.default, { container: true, xs: 12, className: classes.content },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 6 },
                    react_1.default.createElement("div", { className: classes.blockTitleLeft },
                        react_1.default.createElement(Typography_1.default, { className: classes.title }, "Timeline")),
                    react_1.default.createElement(EventsTimeline_1.default, null)),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 6 },
                    react_1.default.createElement("div", { className: classes.blockTitleRight },
                        react_1.default.createElement(Typography_1.default, { className: classes.title }, "Vitals")),
                    react_1.default.createElement("div", { className: classes.chartBlock }, isVitalsLoading
                        ? react_1.default.createElement(Typography_1.default, null, "Loading...")
                        // : <VitalsChart vitalsEmergencySummary={get(emergencySummary, 'vitalsigns', [])} history={history} />
                        : react_1.default.createElement(DummyVitalsChart_1.default, null))))));
    };
    return PatientSummaryTable;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        emergencySummary: get_1.default(state, 'custom.emergencySummary.data', null),
        isVitalsLoading: get_1.default(state, 'custom.emergencySummary.loading', null),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(PatientSummaryTable));
