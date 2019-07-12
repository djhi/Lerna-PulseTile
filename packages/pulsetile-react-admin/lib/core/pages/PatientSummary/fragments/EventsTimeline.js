"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var vertical_timeline_component_react_1 = require("vertical-timeline-component-react");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles = function (theme) { return ({
    timeline: {
        height: 500,
        overflowX: 'hidden',
        overflowY: 'auto',
        paddingLeft: 30,
        paddingTop: 15,
        '& .timeline__container__year': {
            marginRight: -20,
            zIndex: 10,
            color: theme.palette.mainColor,
        },
        '& .timeline__container__year:after': {
            background: 'none',
        },
        '& .timeline__container__body': {
            marginTop: 50,
            position: 'relative',
            '&:before': {
                backgroundColor: theme.palette.mainColor,
                width: 5,
                left: -6,
                content: '""',
                height: '100%',
                minHeight: '95%',
                position: 'absolute',
                top: 10,
            },
        },
    },
    eventBlock: {
        marginLeft: 30,
        marginTop: 25,
        textAlign: "center",
    },
    eventDate: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: theme.palette.mainColor,
        '& p': {
            color: theme.palette.paperColor,
        },
    },
    eventType: {
        color: theme.palette.mainColor,
        fontSize: 16,
        fontWeight: 700,
    },
    eventDescription: {
        border: "1px solid " + theme.palette.borderColor,
        backgroundColor: theme.palette.toolbarColor,
        padding: "10px 15px",
        borderRadius: 5,
    }
}); };
var CustomHeader = function (_a) {
    var classes = _a.classes, items = _a.items;
    var dateAndTime = items[0];
    var events = items[1];
    console.log('dateAndTime', dateAndTime);
    var dateForPoint = moment_1.default.unix(dateAndTime).format('Do MMM');
    console.log('dateForPoint', dateForPoint);
    // Use your own CSS
    return (react_1.default.createElement(vertical_timeline_component_react_1.Content, null,
        react_1.default.createElement(vertical_timeline_component_react_1.ContentYear, { year: react_1.default.createElement(EventDate, { classes: classes, label: dateForPoint }) }),
        react_1.default.createElement(vertical_timeline_component_react_1.ContentBody, null, events.map(function (item) {
            return (react_1.default.createElement("div", { className: classes.eventBlock },
                react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.eventType }, get_1.default(item, 'type', null)),
                react_1.default.createElement("div", { className: classes.eventDescription },
                    react_1.default.createElement(Typography_1.default, { variant: "h1" }, get_1.default(item, 'title', null)),
                    react_1.default.createElement(Typography_1.default, { variant: "caption" }, get_1.default(item, 'dateAndTime', null)))));
        }))));
};
var EventDate = function (_a) {
    var classes = _a.classes, label = _a.label;
    var dateArray = label.split(' ');
    return (react_1.default.createElement("div", { className: classes.eventDate },
        react_1.default.createElement(Typography_1.default, { variant: "body1" }, dateArray[0]),
        react_1.default.createElement(Typography_1.default, { variant: "body1" }, dateArray[1])));
};
var EventsTimeline = function (_a) {
    var classes = _a.classes;
    var events = [
        {
            date: 1559433600,
            type: 'Event',
            title: 'Appointment with Dr Jones',
            dateAndTime: '02-Jun-2019 at 13:30'
        },
        {
            date: 1559433600,
            type: 'Event',
            title: 'Appointment with Dr Smith',
            dateAndTime: '02-Jun-2019 at 15:30'
        },
        {
            date: 1559433600,
            type: 'Event',
            title: 'Appointment with Dr Taylor',
            dateAndTime: '02-Jun-2019 at 19:30'
        },
        {
            date: 1559520000,
            type: 'Event',
            title: 'Appointment with Dr Jones',
            dateAndTime: '03-Jun-2019 at 13:30'
        },
        {
            date: 1559692800,
            type: 'Event',
            title: 'Appointment with Dr Jones',
            dateAndTime: '05-Jun-2019 at 13:30'
        },
        {
            date: 1559692800,
            type: 'Event',
            title: 'Appointment with Dr Smith',
            dateAndTime: '05-Jun-2019 at 16:30'
        },
    ];
    var eventsGroupByDate = lodash_1.default.mapValues(lodash_1.default.groupBy(events, 'date'), function (clist) { return clist.map(function (event) { return lodash_1.default.omit(event, 'date'); }); });
    var eventsGroupByDateArray = Object.entries(eventsGroupByDate);
    console.log('eventsGroupByDate', eventsGroupByDate);
    return (react_1.default.createElement("div", { className: classes.timeline },
        react_1.default.createElement(vertical_timeline_component_react_1.Timeline, null,
            eventsGroupByDateArray.map(function (item) {
                return (react_1.default.createElement(CustomHeader, { classes: classes, items: item }));
            }),
            react_1.default.createElement(vertical_timeline_component_react_1.Content, null,
                react_1.default.createElement(vertical_timeline_component_react_1.ContentYear, null)))));
};
exports.default = styles_1.withStyles(styles)(EventsTimeline);
