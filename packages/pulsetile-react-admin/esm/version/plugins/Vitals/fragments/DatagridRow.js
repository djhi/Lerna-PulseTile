var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import get from "lodash/get";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import TableCell from '@material-ui/core/TableCell';
import { DANGER_COLOR, WARNING_COLOR, SUCCESS_COLOR } from "./settings";
import CustomDatagridRow from "../../../../core/common/ResourseTemplates/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../../core/common/ResourseTemplates/fragments/constants";
var styles = function (theme) { return ({
    newsScoreCellDanger: {
        borderLeft: "5px solid " + DANGER_COLOR + " !important"
    },
    newsScoreCellWarning: {
        borderLeft: "5px solid " + WARNING_COLOR + " !important"
    },
    newsScoreCellSuccess: {
        borderLeft: "5px solid " + SUCCESS_COLOR + " !important"
    },
}); };
function defineColor(newsScoreValue) {
    var result = '';
    if (newsScoreValue > 6) {
        result = 'newsScoreCellDanger';
    }
    else if (newsScoreValue > 4) {
        result = 'newsScoreCellWarning';
    }
    else if (newsScoreValue > 0) {
        result = 'newsScoreCellSuccess';
    }
    return result;
}
;
var DatagridRow = function (props) {
    var classes = props.classes, record = props.record;
    if (!record) {
        return null;
    }
    var newsScore = get(record, 'newsScore', null);
    var newsScoreCellClassName = defineColor(newsScore);
    return (React.createElement(CustomDatagridRow, __assign({}, props),
        React.createElement(TableCell, { key: record.id + "-number" }, record.number),
        React.createElement(TableCell, { key: record.id + "-dateCreate" }, moment(record.dateCreate).format(DATE_FORMAT)),
        React.createElement(TableCell, { className: classes[newsScoreCellClassName], key: record.id + "-newsScore" }, record.newsScore),
        React.createElement(TableCell, { key: record.id + "-source" }, record.source)));
};
export default withStyles(styles)(DatagridRow);
