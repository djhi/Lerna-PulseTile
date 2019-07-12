import React from "react";
import moment from "moment";
import get from "lodash/get";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
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
    var dateOfOnset = get(recordInfo, 'dateOfOnset', null);
    var dateOfOnsetConvert = dateOfOnset ? moment(dateOfOnset).format('DD-MM-YYYY') : moment().format('DD-MM-YYYY');
    return (React.createElement("div", { className: classes.detailsPopover },
        React.createElement("div", { className: classes.blockTitle },
            React.createElement(Typography, { className: classes.title }, "Problems / Issue")),
        recordInfo ?
            React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement("div", { className: classes.blockDouble },
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Problem / Issue"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'problem', null))),
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Date of Onset"),
                            React.createElement(Typography, { variant: "body1" }, dateOfOnsetConvert)))),
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "h1" }, "Description"),
                    React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'description', null))),
                React.createElement("div", null,
                    React.createElement("div", { className: classes.blockDouble },
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Terminology"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'terminology', null))),
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Code"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'code', null))))))
            :
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "body1" }, "No data"))));
};
var MedicationsDetails = function (_a) {
    var classes = _a.classes, details = _a.details, sourceId = _a.sourceId;
    var recordInfo = getRecordInfo(details, sourceId);
    var startDate = get(recordInfo, 'startDate', null);
    var startDateConvert = startDate ? moment(startDate).format('DD-MM-YYYY') : moment().format('DD-MM-YYYY');
    return (React.createElement("div", { className: classes.detailsPopover },
        React.createElement("div", { className: classes.blockTitle },
            React.createElement(Typography, { className: classes.title }, "Medications")),
        recordInfo ?
            React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement("div", { className: classes.blockDouble },
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Name"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'name', null))),
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Date start"),
                            React.createElement(Typography, { variant: "body1" }, startDateConvert)))),
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "h1" }, "Dose amount"),
                    React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'doseAmount', null))),
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "h1" }, "Dose directions"),
                    React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'doseDirections', null))),
                React.createElement("div", null,
                    React.createElement("div", { className: classes.blockDouble },
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Terminology"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'medicationTerminology', null))),
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "Code"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'medicationCode', null))))))
            :
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "body1" }, "No data"))));
};
var ReferralsDetails = function (_a) {
    var classes = _a.classes, details = _a.details, sourceId = _a.sourceId;
    var recordInfo = getRecordInfo(details, sourceId);
    var dateOfReferral = get(recordInfo, 'dateOfReferral', null);
    var dateOfReferralConvert = dateOfReferral ? moment(dateOfReferral).format('DD-MM-YYYY') : moment().format('DD-MM-YYYY');
    return (React.createElement("div", { className: classes.detailsPopover },
        React.createElement("div", { className: classes.blockTitle },
            React.createElement(Typography, { className: classes.title }, "Referrals")),
        recordInfo ?
            React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement("div", { className: classes.blockDouble },
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "From"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'referralFrom', null))),
                        React.createElement("div", { className: classes.infoItem },
                            React.createElement(Typography, { variant: "h1" }, "To"),
                            React.createElement(Typography, { variant: "body1" }, get(recordInfo, 'referralTo', null))))),
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "h1" }, "Date of Referral"),
                    React.createElement(Typography, { variant: "body1" }, dateOfReferralConvert)))
            :
                React.createElement("div", { className: classes.infoItem },
                    React.createElement(Typography, { variant: "body1" }, "No data"))));
};
var PopoverWithDetails = function (_a) {
    var classes = _a.classes, anchorEl = _a.anchorEl, handlePopoverClose = _a.handlePopoverClose, popoverItem = _a.popoverItem, loadingDetails = _a.loadingDetails, details = _a.details;
    var open = Boolean(anchorEl);
    if (!popoverItem) {
        return null;
    }
    return (React.createElement(Popover, { id: "mouse-over-popover", className: classes.popover, classes: { paper: classes.paper }, open: open, anchorEl: anchorEl, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' }, onClose: handlePopoverClose, disableRestoreFocus: true },
        loadingDetails &&
            React.createElement("div", null,
                React.createElement(Typography, null, "Loading...")),
        popoverItem.type === 'problems' && React.createElement(ProblemsDetails, { details: details, classes: classes, sourceId: popoverItem.sourceId }),
        popoverItem.type === 'medications' && React.createElement(MedicationsDetails, { details: details, classes: classes, sourceId: popoverItem.sourceId }),
        popoverItem.type === 'referrals' && React.createElement(ReferralsDetails, { details: details, classes: classes, sourceId: popoverItem.sourceId })));
};
export default withStyles(styles)(PopoverWithDetails);
