"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var react_redux_1 = require("react-redux");
var react_admin_1 = require("react-admin");
var vertical_timeline_component_react_1 = require("vertical-timeline-component-react");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CreateButton_1 = __importDefault(require("../../../core/common/Buttons/CreateButton"));
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
    var dateForPoint = moment_1.default.unix(dateAndTime).format('Do MMM');
    return (react_1.default.createElement(vertical_timeline_component_react_1.Content, null,
        react_1.default.createElement(vertical_timeline_component_react_1.ContentYear, { year: react_1.default.createElement(EventDate, { classes: classes, label: dateForPoint }) }),
        react_1.default.createElement(vertical_timeline_component_react_1.ContentBody, null, events.map(function (item) {
            var eventRoute = '/events/' + get_1.default(item, 'sourceId', null);
            var dateTime = moment_1.default(get_1.default(item, 'dateTime', null)).format('DD-MM-YYYY HH:mm');
            return (react_1.default.createElement("div", { className: classes.eventBlock, onClick: function () { return history.push(eventRoute); } },
                react_1.default.createElement(Typography_1.default, { variant: "body1", className: classes.eventType }, get_1.default(item, 'type', null)),
                react_1.default.createElement("div", { className: classes.eventDescription },
                    react_1.default.createElement(Typography_1.default, { className: classes.eventTitle, variant: "h1" }, get_1.default(item, 'name', null)),
                    react_1.default.createElement(Typography_1.default, { variant: "caption" }, dateTime))));
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
    var classes = _a.classes, eventsList = _a.eventsList, history = _a.history, createUrl = _a.createUrl;
    var eventsGroupByDate = lodash_1.default.mapValues(lodash_1.default.groupBy(eventsList, 'dateCreated'), function (clist) { return clist.map(function (event) { return lodash_1.default.omit(event, 'date'); }); });
    var eventsGroupByDateArray = Object.entries(eventsGroupByDate);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.timeline },
            react_1.default.createElement(vertical_timeline_component_react_1.Timeline, null,
                eventsGroupByDateArray.map(function (item) {
                    return (react_1.default.createElement(CustomHeader, { classes: classes, items: item, history: history }));
                }),
                react_1.default.createElement(vertical_timeline_component_react_1.Content, null,
                    react_1.default.createElement(vertical_timeline_component_react_1.ContentYear, null)))),
        createUrl &&
            react_1.default.createElement(react_admin_1.Toolbar, { className: classes.toolbar },
                react_1.default.createElement(CreateButton_1.default, { history: history, redirectPath: createUrl }))));
};
var mapStateToProps = function (state) {
    return {
        eventsList: get_1.default(state, 'admin.resources.events.data', []),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(styles_1.withStyles(styles)(EventsTimeline));
