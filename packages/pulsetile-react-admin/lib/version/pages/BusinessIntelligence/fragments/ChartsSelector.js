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
var index_1 = require("@material-ui/core/styles/index");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var barCharts_png_1 = __importDefault(require("../images/barCharts.png"));
var barChartsSelected_png_1 = __importDefault(require("../images/barChartsSelected.png"));
var pieCharts_png_1 = __importDefault(require("../images/pieCharts.png"));
var pieChartsSelected_png_1 = __importDefault(require("../images/pieChartsSelected.png"));
var heatMap_png_1 = __importDefault(require("../images/heatMap.png"));
var heatMapSelected_png_1 = __importDefault(require("../images/heatMapSelected.png"));
var constants_1 = require("../constants");
var styles = function (theme) { return ({
    chartSwitcher: {
        backgroundColor: theme.palette.tableHeadColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    content: {
        padding: 10,
    },
    chartButtons: {},
    imageBackgroundActive: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: "10px 5px",
        backgroundColor: theme.palette.mainColor,
        textAlign: 'center',
        marginBottom: 10,
        cursor: 'pointer',
    },
    imageBackground: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: "10px 5px",
        backgroundColor: theme.palette.paperColor,
        textAlign: 'center',
        marginBottom: 10,
        cursor: 'pointer',
    },
    chartTextActive: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.paperColor,
    },
    chartText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.fontColor,
    },
    buttonBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    patientsButton: {
        display: "block",
        width: 130,
        height: 40,
        marginBottom: 10,
        backgroundColor: theme.palette.secondaryMainColor,
        color: theme.palette.paperColor,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.secondaryMainColor,
            border: "1px solid " + theme.palette.secondaryMainColor,
        },
    },
}); };
var ChartsSelector = /** @class */ (function (_super) {
    __extends(ChartsSelector, _super);
    function ChartsSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redirectToPatients = function () {
            var history = _this.props.history;
            history.push('/patients');
        };
        return _this;
    }
    ChartsSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentTab = _a.currentTab, changeCurrentTab = _a.changeCurrentTab;
        return (react_1.default.createElement(Grid_1.default, { className: classes.chartSwitcher, item: true, xs: 12, sm: 4, md: 1 },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: classes.tableBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Charts")),
                react_1.default.createElement("div", { className: classes.content },
                    react_1.default.createElement("div", { className: classes.chartButtons },
                        react_1.default.createElement("div", { className: currentTab === constants_1.HEAT_MAP ? classes.imageBackgroundActive : classes.imageBackground, onClick: function () { return changeCurrentTab(constants_1.HEAT_MAP); } },
                            react_1.default.createElement(CardMedia_1.default, { className: classes.patientPhoto, component: "img", alt: "Heat Map", image: currentTab === constants_1.HEAT_MAP ? heatMapSelected_png_1.default : heatMap_png_1.default, title: "Heat Map" }),
                            react_1.default.createElement(Typography_1.default, { variant: "body1", className: currentTab === constants_1.HEAT_MAP ? classes.chartTextActive : classes.chartText }, "Heat Map")),
                        react_1.default.createElement("div", { className: currentTab === constants_1.BAR_CHARTS ? classes.imageBackgroundActive : classes.imageBackground, onClick: function () { return changeCurrentTab(constants_1.BAR_CHARTS); } },
                            react_1.default.createElement(CardMedia_1.default, { className: classes.patientPhoto, component: "img", alt: "Bar Charts", image: currentTab === constants_1.BAR_CHARTS ? barChartsSelected_png_1.default : barCharts_png_1.default, title: "Bar Charts" }),
                            react_1.default.createElement(Typography_1.default, { variant: "body1", className: currentTab === constants_1.BAR_CHARTS ? classes.chartTextActive : classes.chartText }, "Bar Charts")),
                        react_1.default.createElement("div", { className: currentTab === constants_1.PIE_CHARTS ? classes.imageBackgroundActive : classes.imageBackground, onClick: function () { return changeCurrentTab(constants_1.PIE_CHARTS); } },
                            react_1.default.createElement(CardMedia_1.default, { className: classes.patientPhoto, component: "img", alt: "Pie Charts", image: currentTab === constants_1.PIE_CHARTS ? pieChartsSelected_png_1.default : pieCharts_png_1.default, title: "Pie Charts" }),
                            react_1.default.createElement(Typography_1.default, { variant: "body1", className: currentTab === constants_1.PIE_CHARTS ? classes.chartTextActive : classes.chartText }, "Pie Charts"))))),
            react_1.default.createElement("div", { className: classes.buttonBlock },
                react_1.default.createElement(IconButton_1.default, { "aria-label": "Patients", className: classes.patientsButton, onClick: function () { return _this.redirectToPatients(); } },
                    "Patients",
                    react_1.default.createElement(ChevronRight_1.default, null)))));
    };
    return ChartsSelector;
}(react_1.Component));
exports.default = index_1.withStyles(styles)(ChartsSelector);
