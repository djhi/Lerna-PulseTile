import React from "react";
import _ from "lodash";
import get from "lodash/get";
import moment from "moment";
import { Timeline, Content, ContentYear, ContentBody, } from 'vertical-timeline-component-react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
    var dateForPoint = moment.unix(dateAndTime).format('Do MMM');
    console.log('dateForPoint', dateForPoint);
    // Use your own CSS
    return (React.createElement(Content, null,
        React.createElement(ContentYear, { year: React.createElement(EventDate, { classes: classes, label: dateForPoint }) }),
        React.createElement(ContentBody, null, events.map(function (item) {
            return (React.createElement("div", { className: classes.eventBlock },
                React.createElement(Typography, { variant: "body1", className: classes.eventType }, get(item, 'type', null)),
                React.createElement("div", { className: classes.eventDescription },
                    React.createElement(Typography, { variant: "h1" }, get(item, 'title', null)),
                    React.createElement(Typography, { variant: "caption" }, get(item, 'dateAndTime', null)))));
        }))));
};
var EventDate = function (_a) {
    var classes = _a.classes, label = _a.label;
    var dateArray = label.split(' ');
    return (React.createElement("div", { className: classes.eventDate },
        React.createElement(Typography, { variant: "body1" }, dateArray[0]),
        React.createElement(Typography, { variant: "body1" }, dateArray[1])));
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
    var eventsGroupByDate = _.mapValues(_.groupBy(events, 'date'), function (clist) { return clist.map(function (event) { return _.omit(event, 'date'); }); });
    var eventsGroupByDateArray = Object.entries(eventsGroupByDate);
    console.log('eventsGroupByDate', eventsGroupByDate);
    return (React.createElement("div", { className: classes.timeline },
        React.createElement(Timeline, null,
            eventsGroupByDateArray.map(function (item) {
                return (React.createElement(CustomHeader, { classes: classes, items: item }));
            }),
            React.createElement(Content, null,
                React.createElement(ContentYear, null)))));
};
export default withStyles(styles)(EventsTimeline);
