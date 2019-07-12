import React from "react";
import _ from "lodash";
import get from "lodash/get";
import moment from "moment";
import { connect } from 'react-redux';
import { Toolbar } from "react-admin";
import { Timeline, Content, ContentYear, ContentBody, } from 'vertical-timeline-component-react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CreateButton from "../../../core/common/Buttons/CreateButton";
var styles = function (theme) { return ({
    timeline: {
        overflowX: 'hidden',
        overflowY: 'auto',
        paddingLeft: 30,
        paddingTop: 15,
        backgroundColor: theme.palette.paperColor,
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
        cursor: 'pointer',
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
    eventTitle: {
        marginBottom: 5,
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
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 0,
    }
}); };
var CustomHeader = function (_a) {
    var classes = _a.classes, items = _a.items, history = _a.history;
    var dateAndTime = items[0];
    var events = items[1];
    var dateForPoint = moment.unix(dateAndTime).format('Do MMM');
    return (React.createElement(Content, null,
        React.createElement(ContentYear, { year: React.createElement(EventDate, { classes: classes, label: dateForPoint }) }),
        React.createElement(ContentBody, null, events.map(function (item) {
            var eventRoute = '/events/' + get(item, 'sourceId', null);
            var dateTime = moment(get(item, 'dateTime', null)).format('DD-MM-YYYY HH:mm');
            return (React.createElement("div", { className: classes.eventBlock, onClick: function () { return history.push(eventRoute); } },
                React.createElement(Typography, { variant: "body1", className: classes.eventType }, get(item, 'type', null)),
                React.createElement("div", { className: classes.eventDescription },
                    React.createElement(Typography, { className: classes.eventTitle, variant: "h1" }, get(item, 'name', null)),
                    React.createElement(Typography, { variant: "caption" }, dateTime))));
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
    var classes = _a.classes, eventsList = _a.eventsList, history = _a.history, createUrl = _a.createUrl;
    var eventsGroupByDate = _.mapValues(_.groupBy(eventsList, 'dateCreated'), function (clist) { return clist.map(function (event) { return _.omit(event, 'date'); }); });
    var eventsGroupByDateArray = Object.entries(eventsGroupByDate);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.timeline },
            React.createElement(Timeline, null,
                eventsGroupByDateArray.map(function (item) {
                    return (React.createElement(CustomHeader, { classes: classes, items: item, history: history }));
                }),
                React.createElement(Content, null,
                    React.createElement(ContentYear, null)))),
        createUrl &&
            React.createElement(Toolbar, { className: classes.toolbar },
                React.createElement(CreateButton, { history: history, redirectPath: createUrl }))));
};
var mapStateToProps = function (state) {
    return {
        eventsList: get(state, 'admin.resources.events.data', []),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(EventsTimeline));
