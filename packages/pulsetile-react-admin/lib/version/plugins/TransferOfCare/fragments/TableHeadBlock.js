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
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var rows = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'source', numeric: false, disablePadding: false, label: 'Source' },
];
var TableHeadBlock = /** @class */ (function (_super) {
    __extends(TableHeadBlock, _super);
    function TableHeadBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeadBlock.prototype.render = function () {
        return (react_1.default.createElement(TableHead_1.default, null,
            react_1.default.createElement(TableRow_1.default, null,
                rows.map(function (row) { return (react_1.default.createElement(TableCell_1.default, { key: row.id, align: row.numeric ? 'right' : 'left', padding: row.disablePadding ? 'none' : 'default' }, row.label)); }, this),
                react_1.default.createElement(TableCell_1.default, null))));
    };
    return TableHeadBlock;
}(react_1.Component));
;
exports.default = TableHeadBlock;
