import React from "react";
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { DATE_FORMAT } from "../statuses";
var styles = function (theme) { return ({
    tableList: {
        '& thead': {
            backgroundColor: "#e5e5e5",
            '& tr th span span': {
                color: "#000",
            },
            '& tr th': {
                paddingLeft: 10,
            },
            '& tr': {
                height: 48,
            },
        },
        '& tbody tr td': {
            paddingLeft: 10,
        },
    },
}); };
var TableOfContacts = function (_a) {
    var classes = _a.classes, headers = _a.headers, rowsArray = _a.rowsArray;
    return (React.createElement(Table, { className: classes.tableList, "aria-labelledby": "tableTitle" },
        React.createElement(TableHead, null,
            React.createElement(TableRow, null, headers.map(function (item, key) {
                return (React.createElement(TableCell, { key: key, align: item.numeric ? 'right' : 'left', padding: item.disablePadding ? 'none' : 'default' }, item.label));
            }))),
        React.createElement(TableBody, null, rowsArray.map(function (rowItem, key) {
            return (React.createElement(TableRow, { key: key }, headers.map(function (headerItem, key) {
                var label = rowItem[headerItem.id];
                if (headerItem.isDate) {
                    label = moment(label).format(DATE_FORMAT);
                }
                else if (headerItem.isBinary) {
                    label = rowItem[headerItem.id] ? 'Yes' : 'No';
                }
                return (React.createElement(TableCell, { key: key, align: headerItem.numeric ? 'right' : 'left', padding: headerItem.disablePadding ? 'none' : 'default' }, label));
            })));
        }))));
};
export default withStyles(styles)(TableOfContacts);
