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
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import ModalWindow from "../versions/ModalWindow";
var styles = function (theme) { return ({
    editButton: {
        display: "block",
        float: "right",
        width: 100,
        height: 40,
        margin: 8,
        padding: 0,
        backgroundColor: theme.palette.paperColor,
        color: theme.palette.secondaryMainColor,
        border: "1px solid " + theme.palette.secondaryMainColor,
        borderRadius: 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.secondaryMainColor,
            color: theme.palette.paperColor,
        }
    }
}); };
var VersionUpdateButton = /** @class */ (function (_super) {
    __extends(VersionUpdateButton, _super);
    function VersionUpdateButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpenModal: _this.props.respectModal,
        };
        _this.toggleModalWindow = function () {
            _this.setState({
                isOpenModal: !_this.state.isOpenModal
            });
        };
        return _this;
    }
    VersionUpdateButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, toggleMode = _a.toggleMode;
        var isOpenModal = this.state.isOpenModal;
        return (React.createElement(React.Fragment, null,
            React.createElement(ModalWindow, { open: isOpenModal, onClose: this.toggleModalWindow, toggleMode: toggleMode }),
            React.createElement(Tooltip, { title: "Update", disableHoverListener: true },
                React.createElement(IconButton, { className: classes.editButton, onClick: function () { return _this.toggleModalWindow(); } },
                    "Update",
                    React.createElement(EditIcon, null)))));
    };
    return VersionUpdateButton;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        respectModal: state.custom.respectModal.data,
        versionsServerInfo: state.custom.versionsServerInfo.data,
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(VersionUpdateButton));
