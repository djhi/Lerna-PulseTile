import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import HorizontalBarChart from "./HorizontalBarChart";
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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.blockTitle },
            React.createElement(Typography, { className: classes.title }, "Lab Results")),
        React.createElement(Grid, { container: true, xs: 12, className: classes.content },
            React.createElement(Paper, { className: classes.root },
                React.createElement("div", { className: classes.tableWrapper },
                    React.createElement(Table, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                        React.createElement(TableHead, null,
                            React.createElement(TableRow, null,
                                React.createElement(TableCell, null, "Name"),
                                React.createElement(TableCell, null, "Normal Range"),
                                React.createElement(TableCell, null, "Value"),
                                React.createElement(TableCell, null, "Date"))),
                        React.createElement(TableBody, null, dummyLabResults.map(function (item, key) {
                            return (React.createElement(TableRow, { key: key },
                                React.createElement(TableCell, { scope: "row", padding: "none" },
                                    React.createElement("span", null, item.testName)),
                                React.createElement(TableCell, { scope: "row", padding: "none" },
                                    React.createElement("span", null, item.normalRange)),
                                React.createElement(TableCell, { scope: "row", padding: "none" },
                                    React.createElement("div", { className: classes.valueWithBar },
                                        React.createElement("span", { className: classes.value },
                                            item.value,
                                            " ",
                                            item.units),
                                        React.createElement("div", { className: classes.chartBlock },
                                            React.createElement(HorizontalBarChart, { value: item.value, color: item.color, maximal: item.maximal })))),
                                React.createElement(TableCell, null,
                                    React.createElement("span", null, item.dateCreated))));
                        }))))))));
};
export default withStyles(styles)(LabResults);
