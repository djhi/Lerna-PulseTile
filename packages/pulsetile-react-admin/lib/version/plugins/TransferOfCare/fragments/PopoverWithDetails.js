"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var get_1 = __importDefault(require("lodash/get"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles = function (theme) { return ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        display: "block",
        width: "600px !important",
        padding: 0,
        margin: 0,
        borderRadius: 0,
    },
    blockTitle: {
        display: "flex",
        alignItems: "center",
        height: 49,
        color: theme.palette.paperColor,
        backgroundColor: theme.palette.secondaryMainColor,
        paddingLeft: 15,
    },
    title: {
        color: theme.palette.paperColor,
        fontSize: 18,
        fontWeight: 700,
    },
    blockDouble: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start"
    },
    infoItem: {
        width: 290,
        margin: 10,
    }
}); };
function getRecordInfo(details, sourceId) {
    var result = null;
    for (var i = 0, n = details.length; i < n; i++) {
        var item = details[i];
        if (item.sourceId === sourceId) {
            result = item;
            break;
        }
    }
    return result;
}
var ProblemsDetails = function (_a) {
    var classes = _a.classes, details = _a.details, sourceId = _a.sourceId;
    var recordInfo = getRecordInfo(details, sourceId);
    var dateOfOnset = get_1.default(recordInfo, 'dateOfOnset', null);
    var dateOfOnsetConvert = dateOfOnset ? moment_1.default(dateOfOnset).format('DD-MM-YYYY') : moment_1.default().format('DD-MM-YYYY');
    return (react_1.default.createElement("div", { className: classes.detailsPopover },
        react_1.default.createElement("div", { className: classes.blockTitle },
            react_1.default.createElement(Typography_1.default, { className: classes.title }, "Problems / Issue")),
        recordInfo ?
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: classes.blockDouble },
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Problem / Issue"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'problem', null))),
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Date of Onset"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, dateOfOnsetConvert)))),
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Description"),
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'description', null))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: classes.blockDouble },
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Terminology"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'terminology', null))),
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Code"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'code', null))))))
            :
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, "No data"))));
};
var MedicationsDetails = function (_a) {
    var classes = _a.classes, details = _a.details, sourceId = _a.sourceId;
    var recordInfo = getRecordInfo(details, sourceId);
    var startDate = get_1.default(recordInfo, 'startDate', null);
    var startDateConvert = startDate ? moment_1.default(startDate).format('DD-MM-YYYY') : moment_1.default().format('DD-MM-YYYY');
    return (react_1.default.createElement("div", { className: classes.detailsPopover },
        react_1.default.createElement("div", { className: classes.blockTitle },
            react_1.default.createElement(Typography_1.default, { className: classes.title }, "Medications")),
        recordInfo ?
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: classes.blockDouble },
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Name"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'name', null))),
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Date start"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, startDateConvert)))),
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Dose amount"),
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'doseAmount', null))),
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Dose directions"),
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'doseDirections', null))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: classes.blockDouble },
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Terminology"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'medicationTerminology', null))),
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Code"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'medicationCode', null))))))
            :
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, "No data"))));
};
var ReferralsDetails = function (_a) {
    var classes = _a.classes, details = _a.details, sourceId = _a.sourceId;
    var recordInfo = getRecordInfo(details, sourceId);
    var dateOfReferral = get_1.default(recordInfo, 'dateOfReferral', null);
    var dateOfReferralConvert = dateOfReferral ? moment_1.default(dateOfReferral).format('DD-MM-YYYY') : moment_1.default().format('DD-MM-YYYY');
    return (react_1.default.createElement("div", { className: classes.detailsPopover },
        react_1.default.createElement("div", { className: classes.blockTitle },
            react_1.default.createElement(Typography_1.default, { className: classes.title }, "Referrals")),
        recordInfo ?
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: classes.blockDouble },
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "From"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'referralFrom', null))),
                        react_1.default.createElement("div", { className: classes.infoItem },
                            react_1.default.createElement(Typography_1.default, { variant: "h1" }, "To"),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, get_1.default(recordInfo, 'referralTo', null))))),
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, "Date of Referral"),
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, dateOfReferralConvert)))
            :
                react_1.default.createElement("div", { className: classes.infoItem },
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, "No data"))));
};
var PopoverWithDetails = function (_a) {
    var classes = _a.classes, anchorEl = _a.anchorEl, handlePopoverClose = _a.handlePopoverClose, popoverItem = _a.popoverItem, loadingDetails = _a.loadingDetails, details = _a.details;
    var open = Boolean(anchorEl);
    if (!popoverItem) {
        return null;
    }
    return (react_1.default.createElement(Popover_1.default, { id: "mouse-over-popover", className: classes.popover, classes: { paper: classes.paper }, open: open, anchorEl: anchorEl, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' }, onClose: handlePopoverClose, disableRestoreFocus: true },
        loadingDetails &&
            react_1.default.createElement("div", null,
                react_1.default.createElement(Typography_1.default, null, "Loading...")),
        popoverItem.type === 'problems' && react_1.default.createElement(ProblemsDetails, { details: details, classes: classes, sourceId: popoverItem.sourceId }),
        popoverItem.type === 'medications' && react_1.default.createElement(MedicationsDetails, { details: details, classes: classes, sourceId: popoverItem.sourceId }),
        popoverItem.type === 'referrals' && react_1.default.createElement(ReferralsDetails, { details: details, classes: classes, sourceId: popoverItem.sourceId })));
};
exports.default = styles_1.withStyles(styles)(PopoverWithDetails);
