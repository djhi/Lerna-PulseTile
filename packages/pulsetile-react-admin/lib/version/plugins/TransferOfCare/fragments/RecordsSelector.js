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
var styles_1 = require("@material-ui/core/styles");
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableHeadBlock_1 = __importDefault(require("./TableHeadBlock"));
var TableBodyBlock_1 = __importDefault(require("./TableBodyBlock"));
var styles = function (theme) { return ({
    tableWrapper: {
        margin: 20,
    },
    tableList: {
        '& thead': {
            backgroundColor: theme.palette.borderColor,
            '& tr th span span': {
                color: theme.palette.fontColor,
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
        '& tbody tr:hover': {
            backgroundColor: theme.palette.secondaryMainColor,
        },
        '& tbody tr:hover td  p': {
            color: theme.palette.paperColor,
        }
    },
}); };
var RecordsSelector = /** @class */ (function (_super) {
    __extends(RecordsSelector, _super);
    function RecordsSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSelectorValue = function (item, recordType) {
            var result = '';
            if (recordType === 'problems') {
                result = get_1.default(item, 'problem', null);
            }
            else if (recordType === 'medications') {
                result = get_1.default(item, 'name', null) + ' ' + get_1.default(item, 'doseAmount', null);
            }
            else if (recordType === 'referrals') {
                result = get_1.default(item, 'referralFrom', null) + ' ' + get_1.default(item, 'referralTo', null);
            }
            return result;
        };
        return _this;
    }
    RecordsSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, recordType = _a.recordType, recordsList = _a.recordsList, selectItem = _a.selectItem, recordsArray = _a.recordsArray, removeItem = _a.removeItem;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                react_1.default.createElement(FormLabel_1.default, { className: classes.formLabel }, "Records"),
                react_1.default.createElement("select", { className: classes.formSelect, onChange: function (e) { return selectItem(e); }, required: true },
                    react_1.default.createElement("option", { value: '' }, "-- Select to --"),
                    recordsList && recordsList.map(function (item, key) {
                        return (react_1.default.createElement("option", { key: key, value: item.sourceId }, _this.getSelectorValue(item, recordType)));
                    }))),
            (recordsArray && recordsArray.length > 0) &&
                react_1.default.createElement("div", { className: classes.tableWrapper },
                    react_1.default.createElement(Table_1.default, { className: classes.tableList, "aria-labelledby": "tableTitle" },
                        react_1.default.createElement(TableHeadBlock_1.default, null),
                        react_1.default.createElement(TableBodyBlock_1.default, { list: recordsArray, removeItem: removeItem })))));
    };
    return RecordsSelector;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(RecordsSelector);
