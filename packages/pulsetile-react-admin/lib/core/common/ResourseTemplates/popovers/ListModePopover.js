"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("@material-ui/core/styles/index");
var index_2 = __importDefault(require("@material-ui/core/Typography/index"));
var index_3 = __importDefault(require("@material-ui/core/Popover/index"));
var index_4 = __importDefault(require("@material-ui/core/IconButton/index"));
var index_5 = __importDefault(require("@material-ui/core/Tooltip/index"));
var List_1 = __importDefault(require("@material-ui/icons/List"));
var ShowChart_1 = __importDefault(require("@material-ui/icons/ShowChart"));
var AccessTime_1 = __importDefault(require("@material-ui/icons/AccessTime"));
var index_6 = __importDefault(require("@material-ui/core/Divider/index"));
var constants_1 = require("../fragments/constants");
var styles = function (theme) { return ({
    paper: {
        display: "block",
        width: 150,
        height: 'auto',
        margin: 0,
        padding: 10,
        borderRadius: 0,
    },
    label: {
        paddingLeft: 10,
    },
    icon: {
        paddingLeft: 20,
        color: theme.palette.secondaryMainColor,
    },
}); };
var ListModePopover = function (_a) {
    var classes = _a.classes, open = _a.open, anchorEl = _a.anchorEl, handleClose = _a.handleClose, resourse = _a.resourse, changeListMode = _a.changeListMode, hasChart = _a.hasChart, hasTimetable = _a.hasTimetable;
    return (react_1.default.createElement(index_3.default, { open: open, classes: { paper: classes.paper }, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_2.default, null, "TABLES"),
            react_1.default.createElement(index_6.default, null),
            react_1.default.createElement(index_5.default, { title: "Table" },
                react_1.default.createElement(index_4.default, { className: classes.icon, onClick: function () { return changeListMode(constants_1.MODE_TABLE); } },
                    react_1.default.createElement(List_1.default, null),
                    react_1.default.createElement(index_2.default, { className: classes.label }, resourse)))),
        hasChart &&
            react_1.default.createElement("div", null,
                react_1.default.createElement(index_2.default, null, "CHARTS"),
                react_1.default.createElement(index_6.default, null),
                react_1.default.createElement(index_5.default, { title: "Chart" },
                    react_1.default.createElement(index_4.default, { className: classes.icon, onClick: function () { return changeListMode(constants_1.MODE_CHART); } },
                        react_1.default.createElement(ShowChart_1.default, null),
                        react_1.default.createElement(index_2.default, { className: classes.label }, resourse)))),
        hasTimetable &&
            react_1.default.createElement("div", null,
                react_1.default.createElement(index_2.default, null, "TIMELINES"),
                react_1.default.createElement(index_6.default, null),
                react_1.default.createElement(index_5.default, { title: "Timeline" },
                    react_1.default.createElement(index_4.default, { className: classes.icon, onClick: function () { return changeListMode(constants_1.MODE_TIMELINE); } },
                        react_1.default.createElement(AccessTime_1.default, null),
                        react_1.default.createElement(index_2.default, { className: classes.label }, resourse))))));
};
exports.default = index_1.withStyles(styles)(ListModePopover);
