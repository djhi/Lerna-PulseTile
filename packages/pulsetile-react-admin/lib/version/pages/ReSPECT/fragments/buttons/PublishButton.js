"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Done_1 = __importDefault(require("@material-ui/icons/Done"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var versionsServerAction_1 = require("../../../../actions/ReSPECT/versionsServerAction");
var personalDetailsAction_1 = require("../../../../actions/ReSPECT/personalDetailsAction");
var summaryInformationAction_1 = require("../../../../actions/ReSPECT/summaryInformationAction");
var personalPreferencesAction_1 = require("../../../../actions/ReSPECT/personalPreferencesAction");
var clinicalRecommendationsAction_1 = require("../../../../actions/ReSPECT/clinicalRecommendationsAction");
var capacityAndRepresentationAction_1 = require("../../../../actions/ReSPECT/capacityAndRepresentationAction");
var involvenentAction_1 = require("../../../../actions/ReSPECT/involvenentAction");
var clinicalSignaturesAction_1 = require("../../../../actions/ReSPECT/clinicalSignaturesAction");
var emergencyViewAction_1 = require("../../../../actions/ReSPECT/emergencyViewAction");
var confirmationAction_1 = require("../../../../actions/ReSPECT/confirmationAction");
var emergencyContactsAction_1 = require("../../../../actions/ReSPECT/emergencyContactsAction");
var statuses_1 = require("../../statuses");
var functions_1 = require("../../functions");
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
            var result = get_1.default(_this.props, sectionName, null);
            if (!result && latestVersionInfo) {
                result = get_1.default(latestVersionInfo, sectionName, null);
            }
            else if (!result && !latestVersionInfo) {
                result = functions_1.getEmptyJson(sectionName);
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
            var host = get_1.default(firstVersionInfo, 'host', null);
            var compositionId = get_1.default(firstVersionInfo, 'compositionUid', null);
            var compositionIdArray = compositionId.split('::');
            sourceId = host + '-' + get_1.default(compositionIdArray, [0], null);
            versionId = get_1.default(compositionIdArray, [2], null);
        }
        else if (Array.isArray(versionsList)) {
            var latestVersion = versionsList[0];
            sourceId = latestVersion.sourceId;
            versionId = latestVersion.version;
        }
        var versionData = {
            author: functions_1.getAuthorName(),
            author_id: localStorage.getItem('userId'),
            dateCreated: moment_1.default().format(statuses_1.DATE_FORMAT),
            status: statuses_1.STATUS_COMPLETED,
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
        if (!isVersionInfo && get_1.default(clinicalRecommendations, 'status', null) === statuses_1.STATUS_COMPLETED && get_1.default(involvement, 'status', null) === statuses_1.STATUS_COMPLETED) {
            return (react_1.default.createElement(Tooltip_1.default, { title: "Publish" },
                react_1.default.createElement(IconButton_1.default, { "aria-label": "Publish", className: classes.publishButton, onClick: function () { return _this.onClickHandler(); } },
                    react_1.default.createElement(Done_1.default, null),
                    " Publish")));
        }
        return null;
    };
    return PublishButton;
}(react_1.Component));
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
        latestVersionInfo: get_1.default(state, 'custom.versionsServerInfo.latest', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        updateVersion: function (sourceId, versionId, versionData) {
            dispatch(versionsServerAction_1.versionsServerAction.put(sourceId, versionId, versionData));
        },
        removeFormData: function () {
            dispatch(personalDetailsAction_1.personalDetailsAction.remove());
            dispatch(summaryInformationAction_1.summaryInformationAction.remove());
            dispatch(personalPreferencesAction_1.personalPreferencesAction.remove());
            dispatch(clinicalRecommendationsAction_1.clinicalRecommendationsAction.remove());
            dispatch(capacityAndRepresentationAction_1.capacityAndRepresentationAction.remove());
            dispatch(involvenentAction_1.involvementAction.remove());
            dispatch(clinicalSignaturesAction_1.clinicalSignaturesAction.remove());
            dispatch(emergencyViewAction_1.emergencyViewAction.remove());
            dispatch(confirmationAction_1.confirmationAction.remove());
            dispatch(emergencyContactsAction_1.emergencyContactsAction.remove());
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(PublishButton));
