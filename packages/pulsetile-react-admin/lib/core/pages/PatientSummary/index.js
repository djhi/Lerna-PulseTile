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
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var synopsisActions_1 = require("../../actions/synopsisActions");
var nonCoreSynopsis_1 = require("../../../version/config/nonCoreSynopsis");
var emergencySummaryAction_1 = require("../../actions/emergencySummaryAction");
var currentPatientAction_1 = require("../../actions/currentPatientAction");
var PatientSummaryTable_1 = __importDefault(require("./views/PatientSummaryTable"));
var PatientSummaryRoll_1 = __importDefault(require("./views/PatientSummaryRoll"));
var config_1 = require("./config");
var SettingsDialog_1 = __importDefault(require("./SettingsDialog"));
var Breadcrumbs_1 = __importDefault(require("../../common/Breadcrumbs"));
var theme_config_1 = require("../../../version/config/theme.config");
var functions_1 = require("./functions");
var styles = function (theme) { return ({
    summaryContainer: functions_1.getSummaryContainerStyles(config_1.synopsisData),
    container: {
        width: "100%",
        height: "100%",
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    toggleViewBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formGroup: {
        width: "98%",
        paddingTop: 5,
        boxSizing: "border-box",
    },
    formGroupLabel: {
        marginTop: 18,
    },
    formControlLabel: {
        marginBottom: 10,
    },
    radioGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 15,
        marginRight: 10,
    },
    radio: {
        '&$checked': {
            color: theme.palette.mainColor,
        }
    },
    checked: {}
}); };
var TABLE_VIEW = 'table';
var ROLL_VIEW = 'roll';
var PatientSummaryInfo = /** @class */ (function (_super) {
    __extends(PatientSummaryInfo, _super);
    function PatientSummaryInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isRollView: get_1.default(theme_config_1.themeCommonElements, 'hasPatientSummaryRoll', false),
        };
        _this.toggleView = function () {
            _this.setState({
                isRollView: !_this.state.isRollView,
            });
        };
        return _this;
    }
    PatientSummaryInfo.prototype.componentDidMount = function () {
        if (localStorage.getItem('role') === 'PHR') {
            this.props.updateCurrentPatient(localStorage.getItem('patientId'));
        }
        if (localStorage.getItem('userId') && localStorage.getItem('username')) {
            this.props.getPatientSynopsis();
            // this.props.getEmergencySummary(localStorage.getItem('patientId'));
        }
    };
    PatientSummaryInfo.prototype.componentWillReceiveProps = function (nextProps, nextContent) {
        var patientInfo = this.props.patientInfo;
        if (patientInfo !== nextProps.patientInfo) {
            // this.props.getRandomPhoto(get(nextProps, 'patientInfo.gender', 'male'));
        }
    };
    PatientSummaryInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, location = _a.location, history = _a.history;
        var isRollView = this.state.isRollView;
        var breadcrumbsResource = [
            { url: location.pathname, title: "Patient Summary", isActive: false }
        ];
        var viewType = isRollView ? ROLL_VIEW : TABLE_VIEW;
        return (react_1.default.createElement(Grid_1.default, { className: classes.container },
            react_1.default.createElement(Breadcrumbs_1.default, { resource: breadcrumbsResource }),
            react_1.default.createElement("div", { className: classes.toggleViewBlock },
                react_1.default.createElement(SettingsDialog_1.default, { className: classes.settingsIcon }),
                react_1.default.createElement("div", { className: classes.toggleViewBlock },
                    react_1.default.createElement(Typography_1.default, { variant: "h1", className: classes.formGroupLabel }, "View"),
                    react_1.default.createElement(FormGroup_1.default, { className: classes.formGroup },
                        react_1.default.createElement(RadioGroup_1.default, { name: "viewType", className: classes.radioGroup, value: viewType, onChange: function () { return _this.toggleView(); }, row: true },
                            react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, value: ROLL_VIEW, control: react_1.default.createElement(Radio_1.default, { classes: { root: classes.radio, checked: classes.checked } }), label: "Roll" }),
                            react_1.default.createElement(FormControlLabel_1.default, { className: classes.formControlLabel, value: TABLE_VIEW, control: react_1.default.createElement(Radio_1.default, { classes: { root: classes.radio, checked: classes.checked } }), label: "Table" }))))),
            react_1.default.createElement(Grid_1.default, { className: classes.summaryContainer, spacing: 16, container: true }, isRollView ? react_1.default.createElement(PatientSummaryRoll_1.default, { history: history }) : react_1.default.createElement(PatientSummaryTable_1.default, { history: history }))));
    };
    return PatientSummaryInfo;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        patientInfo: get_1.default(state, 'custom.currentPatient.patientInfo.data', null),
    };
};
var mapDispatchToProps = function (dispatch) {
    var coreSynopsisActions = [
        synopsisActions_1.synopsisAllergiesAction,
        synopsisActions_1.synopsisContactsAction,
        synopsisActions_1.synopsisProblemsAction,
        synopsisActions_1.synopsisMedicationsAction,
    ];
    var synopsisActions = coreSynopsisActions.concat(nonCoreSynopsis_1.nonCoreSynopsisActions);
    return {
        getPatientSynopsis: function () {
            synopsisActions.map(function (item) {
                return dispatch(item.request());
            });
        },
        getEmergencySummary: function (patientId) {
            dispatch(emergencySummaryAction_1.emergencySummaryAction.request('vitalsigns', patientId));
        },
        getRandomPhoto: function (gender) {
            dispatch(currentPatientAction_1.currentPatientAction.requestPhoto(gender));
        },
        updateCurrentPatient: function (data) {
            dispatch(currentPatientAction_1.currentPatientAction.request(data));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(styles_1.withStyles(styles)(PatientSummaryInfo));
