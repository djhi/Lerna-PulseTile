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
var statuses_1 = require("../../statuses");
var styles = function (theme) { return ({
    rowCompleted: {
        backgroundColor: "#fff",
    },
    rowInComplete: {
        backgroundColor: "#f1f0f0",
        '& td span': {
            color: "#6d6c6c",
        },
    },
    currentRow: {
        backgroundColor: theme.palette.secondaryMainColor,
        '& td span': {
            color: "#fff",
        },
    }
}); };
var TableBodyBlock = /** @class */ (function (_super) {
    __extends(TableBodyBlock, _super);
    function TableBodyBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowClassName = function (status, item) {
            var result = 'rowInComplete';
            if (status === statuses_1.STATUS_COMPLETED) {
                result = 'rowCompleted';
            }
            return result;
        };
        return _this;
    }
    TableBodyBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, currentVersion = _a.currentVersion, showVersion = _a.showVersion, versionsInfo = _a.versionsInfo;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(TableBody_1.default, null, versionsInfo && versionsInfo.map(function (item, key) {
                var status = get_1.default(item, 'status', statuses_1.STATUS_INCOMPLETE);
                var dateCreated = get_1.default(item, 'dateCreated', '-');
                var date = moment_1.default(dateCreated).format(statuses_1.DATE_FORMAT);
                var time = moment_1.default(dateCreated).format(statuses_1.TIME_FORMAT);
                var author = get_1.default(item, 'author', null);
                var rowClassName = _this.getRowClassName(status, item);
                var version = get_1.default(item, 'version', null);
                var sourceId = get_1.default(item, 'sourceId', null);
                return (react_1.default.createElement(TableRow_1.default, { className: (currentVersion === version) ? classes.currentRow : classes[rowClassName], key: key, onClick: function () { return showVersion(version, sourceId); } },
                    react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                        react_1.default.createElement("span", null, version)),
                    react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                        react_1.default.createElement("span", null, date)),
                    react_1.default.createElement(TableCell_1.default, { scope: "row", padding: "none" },
                        react_1.default.createElement("span", null, time)),
                    react_1.default.createElement(TableCell_1.default, { align: "right" },
                        react_1.default.createElement("span", null, (version === 1) ? 'System' : author))));
            }))));
    };
    return TableBodyBlock;
}(react_1.Component));
;
exports.default = styles_1.withStyles(styles)(TableBodyBlock);
