"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var styles = function (theme) { return ({
    formGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        boxSizing: "border-box",
    },
    formLabel: {
        display: "block",
        color: theme.palette.fontColor,
        fontSize: 14,
        marginBottom: 5,
    },
    formLabelVersion: {
        display: "block",
        color: "#bebebe",
        fontSize: 14,
        marginBottom: 5,
    },
    formInput: {
        width: '100%',
        height: 25,
        paddingLeft: 10,
    },
    formTextarea: {
        width: '98%',
        height: 180,
        padding: 10,
    },
    formHelpText: {
        marginBottom: 5,
    },
    radioGroup: {
        marginLeft: 25,
        marginBottom: 25,
    },
}); };
var InsertedRadioButtonGroup = function (_a) {
    var classes = _a.classes, isSelected = _a.isSelected, variant = _a.variant, handleChange = _a.handleChange, isVersionInfo = _a.isVersionInfo;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormLabel_1.default, { className: isVersionInfo ? classes.formLabelVersion : classes.formLabel }, "C - This person is less than 16 (Scotland) / 18 (UK)"),
        isSelected &&
            react_1.default.createElement(RadioGroup_1.default, { name: "nonSelectABCreason", className: classes.radioGroup, value: variant, onChange: function (e) { return handleChange(e); } },
                react_1.default.createElement(FormHelperText_1.default, null, "Please select 1 or 2, and also 3 as applicable or explain in section D below."),
                react_1.default.createElement(FormControlLabel_1.default, { value: "valueSetC1", control: react_1.default.createElement(Radio_1.default, null), disabled: isVersionInfo, label: "1 - They have sufficient maturity and understanding to participate in making this plan." }),
                react_1.default.createElement(FormControlLabel_1.default, { value: "valueSetC2", control: react_1.default.createElement(Radio_1.default, null), disabled: isVersionInfo, label: "2 - They do not have sufficient maturity and understanding to participate in making this plan. Their views, when known, have been taken into account." }),
                react_1.default.createElement(FormControlLabel_1.default, { value: "valueSetC3", control: react_1.default.createElement(Radio_1.default, null), disabled: isVersionInfo, label: "3 - Those holding parental responsibility have been fully involved in discussing and making this plan." }))));
};
exports.default = styles_1.withStyles(styles)(InsertedRadioButtonGroup);
