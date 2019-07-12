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
import get from "lodash/get";
import moment from "moment";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import Tooltip from '@material-ui/core/Tooltip';
import { versionsServerAction } from "../../../../actions/ReSPECT/versionsServerAction";
import { personalDetailsAction } from "../../../../actions/ReSPECT/personalDetailsAction";
import { summaryInformationAction } from "../../../../actions/ReSPECT/summaryInformationAction";
import { personalPreferencesAction } from "../../../../actions/ReSPECT/personalPreferencesAction";
import { clinicalRecommendationsAction } from "../../../../actions/ReSPECT/clinicalRecommendationsAction";
import { capacityAndRepresentationAction } from "../../../../actions/ReSPECT/capacityAndRepresentationAction";
import { involvementAction } from "../../../../actions/ReSPECT/involvenentAction";
import { clinicalSignaturesAction } from "../../../../actions/ReSPECT/clinicalSignaturesAction";
import { emergencyViewAction } from "../../../../actions/ReSPECT/emergencyViewAction";
import { confirmationAction } from "../../../../actions/ReSPECT/confirmationAction";
import { emergencyContactsAction } from "../../../../actions/ReSPECT/emergencyContactsAction";
import { STATUS_COMPLETED, DATE_FORMAT } from "../../statuses";
import { getAuthorName, getEmptyJson } from "../../functions";
var styles = function (theme) { return ({
    publishButton: {
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
var PublishButton = /** @class */ (function (_super) {
    __extends(PublishButton, _super);
    function PublishButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSectionForSaving = function (sectionName) {
            var latestVersionInfo = _this.props.latestVersionInfo;
            var result = get(_this.props, sectionName, null);
            if (!result && latestVersionInfo) {
                result = get(latestVersionInfo, sectionName, null);
            }
            else if (!result && !latestVersionInfo) {
                result = getEmptyJson(sectionName);
            }
            return result;
        };
        return _this;
    }
    PublishButton.prototype.componentWillUnmount = function () {
        this.props.removeFormData();
    };
    PublishButton.prototype.onClickHandler = function () {
        var _a = this.props, versionsList = _a.versionsList, firstVersionInfo = _a.firstVersionInfo;
        var sourceId = null;
        var versionId = null;
        if (firstVersionInfo) {
            var host = get(firstVersionInfo, 'host', null);
            var compositionId = get(firstVersionInfo, 'compositionUid', null);
            var compositionIdArray = compositionId.split('::');
            sourceId = host + '-' + get(compositionIdArray, [0], null);
            versionId = get(compositionIdArray, [2], null);
        }
        else if (Array.isArray(versionsList)) {
            var latestVersion = versionsList[0];
            sourceId = latestVersion.sourceId;
            versionId = latestVersion.version;
        }
        var versionData = {
            author: getAuthorName(),
            author_id: localStorage.getItem('userId'),
            dateCreated: moment().format(DATE_FORMAT),
            status: STATUS_COMPLETED,
            summaryInformation: this.getSectionForSaving('summaryInformation'),
            personalPreferences: this.getSectionForSaving('personalPreferences'),
            clinicalRecommendations: this.getSectionForSaving('clinicalRecommendations'),
            capacityAndRepresentation: this.getSectionForSaving('capacityAndRepresentation'),
            involvement: this.getSectionForSaving('involvement'),
            clinicalSignatures: this.getSectionForSaving('clinicalSignatures'),
            emergencyContacts: this.getSectionForSaving('emergencyContacts'),
            confirmation: this.getSectionForSaving('confirmation'),
        };
        if (sourceId && versionId) {
            this.props.updateVersion(sourceId, versionId, versionData);
            this.props.toggleMode();
        }
    };
    ;
    PublishButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, isVersionInfo = _a.isVersionInfo, clinicalRecommendations = _a.clinicalRecommendations, involvement = _a.involvement;
        if (!isVersionInfo && get(clinicalRecommendations, 'status', null) === STATUS_COMPLETED && get(involvement, 'status', null) === STATUS_COMPLETED) {
            return (React.createElement(Tooltip, { title: "Publish" },
                React.createElement(IconButton, { "aria-label": "Publish", className: classes.publishButton, onClick: function () { return _this.onClickHandler(); } },
                    React.createElement(DoneIcon, null),
                    " Publish")));
        }
        return null;
    };
    return PublishButton;
}(Component));
;
var mapStateToProps = function (state) {
    return {
        summaryInformation: state.custom.summaryInformation.data,
        personalPreferences: state.custom.personalPreferences.data,
        clinicalRecommendations: state.custom.clinicalRecommendations.data,
        capacityAndRepresentation: state.custom.capacityAndRepresentation.data,
        involvement: state.custom.involvement.data,
        clinicalSignatures: state.custom.clinicalSignatures.data,
        emergencyContacts: state.custom.emergencyContacts.data,
        confirmation: state.custom.confirmation.data,
        latestVersionInfo: get(state, 'custom.versionsServerInfo.latest', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        updateVersion: function (sourceId, versionId, versionData) {
            dispatch(versionsServerAction.put(sourceId, versionId, versionData));
        },
        removeFormData: function () {
            dispatch(personalDetailsAction.remove());
            dispatch(summaryInformationAction.remove());
            dispatch(personalPreferencesAction.remove());
            dispatch(clinicalRecommendationsAction.remove());
            dispatch(capacityAndRepresentationAction.remove());
            dispatch(involvementAction.remove());
            dispatch(clinicalSignaturesAction.remove());
            dispatch(emergencyViewAction.remove());
            dispatch(confirmationAction.remove());
            dispatch(emergencyContactsAction.remove());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PublishButton));
