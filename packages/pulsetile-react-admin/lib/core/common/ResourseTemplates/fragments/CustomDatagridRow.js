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
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var styles = function (theme) { return ({
    tableRow: {
        '&:hover': {
            backgroundColor: theme.palette.secondaryMainColor + '!important',
            cursor: "pointer"
        },
        '&:hover td': {
            color: theme.palette.paperColor,
        },
    },
    tableRowActive: {
        backgroundColor: theme.palette.secondaryMainColor + '!important',
        '& td': {
            color: theme.palette.paperColor,
        }
    },
}); };
var CustomDatagridRow = /** @class */ (function (_super) {
    __extends(CustomDatagridRow, _super);
    function CustomDatagridRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isActiveRow = function () {
            var _a = _this.props, id = _a.id, location = _a.location;
            var pathname = get_1.default(location, 'pathname', null);
            var pathnameArray = pathname ? pathname.split('/') : [];
            var sourceId = get_1.default(pathnameArray, [2], null);
            return id === sourceId;
        };
        return _this;
    }
    CustomDatagridRow.prototype.render = function () {
        var _a = this.props, classes = _a.classes, record = _a.record, id = _a.id, history = _a.history, basePath = _a.basePath, children = _a.children;
        if (!record) {
            return null;
        }
        var detailsPath = basePath + '/' + id;
        var isActiveRow = this.isActiveRow();
        return (react_1.default.createElement(TableRow_1.default, { className: isActiveRow ? classes.tableRowActive : classes.tableRow, key: record.id, onClick: function () { return history.push(detailsPath); } }, children));
    };
    return CustomDatagridRow;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(CustomDatagridRow);
