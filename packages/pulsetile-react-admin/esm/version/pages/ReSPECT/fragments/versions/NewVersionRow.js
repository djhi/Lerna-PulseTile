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
import React, { Component } from "react";
import moment from "moment";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import ModalWindow from "./ModalWindow";
import { getAuthorName } from "../../functions";
import { DATE_FORMAT } from "../../statuses";
var styles = function (theme) { return ({
    rowInProgress: {
        '&:hover p': {
            color: "#fff",
        },
    },
    editButton: {
        color: theme.palette.mainColor,
        fontSize: 16,
        height: 40,
    }
}); };
var NewVersionRow = /** @class */ (function (_super) {
    __extends(NewVersionRow, _super);
    function NewVersionRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpenModal: _this.props.respectModal,
        };
        _this.toggleMode = function () {
            _this.setState({
                isOpenModal: !_this.state.isOpenModal
            });
        };
        return _this;
    }
    NewVersionRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, versionsNumber = _a.versionsNumber, toggleMode = _a.toggleMode;
        var isOpenModal = this.state.isOpenModal;
        return (React.createElement(React.Fragment, null,
            React.createElement(ModalWindow, { open: isOpenModal, onClose: this.toggleMode, toggleMode: toggleMode }),
            React.createElement(TableRow, { className: classes.rowInProgress },
                React.createElement(TableCell, { scope: "row", padding: "none" },
                    React.createElement(Typography, null, versionsNumber)),
                React.createElement(TableCell, { scope: "row", padding: "none" },
                    React.createElement(Typography, null, moment().format(DATE_FORMAT))),
                React.createElement(TableCell, { scope: "row", padding: "none" },
                    React.createElement(Typography, null, moment().format('HH:mm'))),
                React.createElement(TableCell, { align: "right" },
                    React.createElement(Tooltip, { title: "Proceed", disableHoverListener: true },
                        React.createElement(IconButton, { className: classes.editButton, onClick: function () { return _this.toggleMode(); } },
                            "Latest",
                            React.createElement(EditIcon, null)))),
                React.createElement(TableCell, { align: "right" },
                    React.createElement(Typography, null, getAuthorName())))));
    };
    return NewVersionRow;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        respectModal: state.custom.respectModal.data,
        versionsServerInfo: state.custom.versionsServerInfo.data,
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(NewVersionRow));
