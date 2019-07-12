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
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("@material-ui/core/styles");
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var statuses_1 = require("../statuses");
var StatusCell_1 = __importDefault(require("./StatusCell"));
var styles = function (theme) { return ({
    rowCompleted: {
        backgroundColor: theme.palette.paperColor,
    },
    rowStatusNone: {
        backgroundColor: theme.palette.paperColor,
    },
    rowInComplete: {
        backgroundColor: "#f1f0f0",
        '& td span': {
            color: "#6d6c6c",
        },
    },
    rowInProgress: {
        backgroundColor: "#dbe4ed",
        '& td span': {
            fontWeight: 600,
        },
    },
    rowPreview: {
        backgroundColor: theme.palette.mainColor,
        '& td span': {
            fontWeight: 600,
            color: theme.isOldDesign ? theme.palette.fontColor + " !important" : theme.palette.paperColor,
        },
        '&:hover td span': {
            color: theme.palette.paperColor + " !important"
        }
    }
}); };
var TableBodyBlock = /** @class */ (function (_super) {
    __extends(TableBodyBlock, _super);
    function TableBodyBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowClassName = function (status, item, isVersionInfo) {
            var result = 'rowInComplete';
            if (status === statuses_1.STATUS_COMPLETED) {
                result = 'rowCompleted';
            }
            else if (item.id === _this.props.currentRow) {
                result = 'rowInProgress';
            }
            if (isVersionInfo && item.id === _this.props.currentRow) {
                result = 'rowPreview';
            }
            if (isVersionInfo && (item.id === 1 || item.id === 10)) {
                result = 'rowStatusNone';
            }
            return result;
        };
        return _this;
    }
    TableBodyBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, sections = _a.sections, onRowClick = _a.onRowClick, currentRow = _a.currentRow, sectionsInfo = _a.sectionsInfo, isVersionInfo = _a.isVersionInfo;
        return (react_1.default.createElement(TableBody_1.default, null, sections.map(function (item, key) {
            var status = get_1.default(sectionsInfo, [item.name, 'status'], statuses_1.STATUS_INCOMPLETE);
            var dateCompleted = get_1.default(sectionsInfo, [item.name, 'dateCompleted'], null);
            var dateCompletedConvert = isVersionInfo
                ? (dateCompleted ? moment_1.default(dateCompleted).format(statuses_1.DATE_FORMAT) : '-')
                : (dateCompleted ? dateCompleted : '-');
            var rowClassName = _this.getRowClassName(status, item, isVersionInfo);
            return (react_1.default.createElement(TableRow_1.default, { className: classes[rowClassName], key: key, onClick: function () { return onRowClick(item.id); } },
                react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                    react_1.default.createElement("span", null, item.section)),
                react_1.default.createElement(TableCell_1.default, { align: "right" },
                    react_1.default.createElement(StatusCell_1.default, { item: item, isVersionInfo: isVersionInfo, currentRow: currentRow, status: status }))));
        })));
    };
    return TableBodyBlock;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(TableBodyBlock);
