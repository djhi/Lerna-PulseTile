"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var Switch_1 = __importDefault(require("@material-ui/core/Switch"));
var styles = function (theme) { return ({
    switchBase: {
        '&$checked': {
            '& + $bar': {
                backgroundColor: theme.palette.secondaryMainColor,
            },
        },
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp,
        }),
    },
    bar: {
        borderRadius: 0,
        width: 54,
        height: 30,
        marginTop: -13,
        marginLeft: -21,
        border: "1px solid " + theme.palette.borderColor,
        backgroundColor: theme.palette.mainColor,
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 0,
        marginTop: 4,
        backgroundColor: theme.palette.paperColor,
    },
    iconChecked: {
        boxShadow: theme.shadows[1],
        borderRadius: 0,
        marginLeft: 20,
        backgroundColor: theme.palette.paperColor,
    },
    checked: {
        transform: 'translateX(15px)',
        '& + $bar': {
            opacity: 1,
            border: 'none',
        },
    },
}); };
exports.default = styles_1.withStyles(styles)(Switch_1.default);
