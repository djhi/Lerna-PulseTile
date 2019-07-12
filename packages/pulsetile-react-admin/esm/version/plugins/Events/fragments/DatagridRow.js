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
import moment from "moment";
import TableCell from '@material-ui/core/TableCell';
import CustomDatagridRow from "../../../../core/common/ResourseTemplates/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../../core/common/ResourseTemplates/fragments/constants";
var EventsDatagridRow = function (props) {
    var record = props.record;
    if (!record) {
        return null;
    }
    return (React.createElement(CustomDatagridRow, __assign({}, props),
        React.createElement(TableCell, { key: record.name + "-name" }, record.name),
        React.createElement(TableCell, { key: record.id + "-type" }, record.type),
        React.createElement(TableCell, { key: record.id + "-dateCreated" }, moment(record.dateCreated).format(DATE_FORMAT))));
};
export default EventsDatagridRow;
