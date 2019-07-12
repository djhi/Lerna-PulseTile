"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var statuses_1 = require("../statuses");
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
    return (react_1.default.createElement(Table_1.default, { className: classes.tableList, "aria-labelledby": "tableTitle" },
        react_1.default.createElement(TableHead_1.default, null,
            react_1.default.createElement(TableRow_1.default, null, headers.map(function (item, key) {
                return (react_1.default.createElement(TableCell_1.default, { key: key, align: item.numeric ? 'right' : 'left', padding: item.disablePadding ? 'none' : 'default' }, item.label));
            }))),
        react_1.default.createElement(TableBody_1.default, null, rowsArray.map(function (rowItem, key) {
            return (react_1.default.createElement(TableRow_1.default, { key: key }, headers.map(function (headerItem, key) {
                var label = rowItem[headerItem.id];
                if (headerItem.isDate) {
                    label = moment_1.default(label).format(statuses_1.DATE_FORMAT);
                }
                else if (headerItem.isBinary) {
                    label = rowItem[headerItem.id] ? 'Yes' : 'No';
                }
                return (react_1.default.createElement(TableCell_1.default, { key: key, align: headerItem.numeric ? 'right' : 'left', padding: headerItem.disablePadding ? 'none' : 'default' }, label));
            })));
        }))));
};
exports.default = styles_1.withStyles(styles)(TableOfContacts);
