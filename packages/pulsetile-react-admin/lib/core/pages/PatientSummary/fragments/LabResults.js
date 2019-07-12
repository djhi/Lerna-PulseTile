"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var HorizontalBarChart_1 = __importDefault(require("./HorizontalBarChart"));
var styles = function (theme) { return ({
    root: {
        width: '100%',
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    tableList: {
        '& thead': {
            backgroundColor: theme.palette.tableHeadColor,
            '& tr th': {
                fontSize: 14,
                paddingLeft: 10,
            },
        },
        '& tbody tr td span': {
            paddingLeft: 10,
            fontSize: 14,
        },
        '& tbody tr:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
            '& td span': {
                color: theme.palette.paperColor,
            }
        },
    },
    value: {
        marginTop: 15,
    },
    valueWithBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chartBlock: {
        width: '60%',
    }
}); };
var LabResults = function (_a) {
    // const labResults = customDataProvider(GET_LIST, 'labresults', {});
    // const labResultsArray = get(labResults, 'data', []);
    var classes = _a.classes;
    var COLOR_AMBER = '#ffac5a';
    var COLOR_GREEN = '#2dcd0d';
    var COLOR_YELLOW = '#fbf800';
    var COLOR_RED = '#ff5d00';
    var dummyLabResults = [
        { testName: 'HBA1C', normalRange: '5-7 mmol/l', value: 7, units: 'mmol/l', dateCreated: '22-Jun-2019', color: COLOR_GREEN, maximal: 10 },
        { testName: 'Glucose', normalRange: '5-9 mmol/l', value: 6, units: 'mmol/l', dateCreated: '15-Jul-2019', color: COLOR_GREEN, maximal: 60 },
        { testName: 'Glucose', normalRange: '5-9 mmol/l', value: 10, units: 'mmol/l', dateCreated: '26-Jun-2019', color: COLOR_AMBER, maximal: 20 },
        { testName: 'Glucose', normalRange: '5-9 mmol/l', value: 15, units: 'mmol/l', dateCreated: '05-May-2019', color: COLOR_RED, maximal: 20 },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.blockTitle },
            react_1.default.createElement(Typography_1.default, { className: classes.title }, "Lab Results")),
        react_1.default.createElement(Grid_1.default, { container: true, xs: 12, className: classes.content },
            react_1.default.createElement(Paper_1.default, { className: classes.root },
                react_1.default.createElement("div", { className: classes.tableWrapper },
                    react_1.default.createElement(Table_1.default, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                        react_1.default.createElement(TableHead_1.default, null,
                            react_1.default.createElement(TableRow_1.default, null,
                                react_1.default.createElement(TableCell_1.default, null, "Name"),
                                react_1.default.createElement(TableCell_1.default, null, "Normal Range"),
                                react_1.default.createElement(TableCell_1.default, null, "Value"),
                                react_1.default.createElement(TableCell_1.default, null, "Date"))),
                        react_1.default.createElement(TableBody_1.default, null, dummyLabResults.map(function (item, key) {
                            return (react_1.default.createElement(TableRow_1.default, { key: key },
                                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                                    react_1.default.createElement("span", null, item.testName)),
                                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                                    react_1.default.createElement("span", null, item.normalRange)),
                                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                                    react_1.default.createElement("div", { className: classes.valueWithBar },
                                        react_1.default.createElement("span", { className: classes.value },
                                            item.value,
                                            " ",
                                            item.units),
                                        react_1.default.createElement("div", { className: classes.chartBlock },
                                            react_1.default.createElement(HorizontalBarChart_1.default, { value: item.value, color: item.color, maximal: item.maximal })))),
                                react_1.default.createElement(TableCell_1.default, null,
                                    react_1.default.createElement("span", null, item.dateCreated))));
                        }))))))));
};
exports.default = styles_1.withStyles(styles)(LabResults);
