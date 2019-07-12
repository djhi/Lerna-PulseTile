"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_signature_pad_wrapper_1 = __importDefault(require("react-signature-pad-wrapper"));
var styles_1 = require("@material-ui/core/styles");
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var styles = {
    titleBlock: {
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
    },
    mainTitle: {
        color: "#000",
        fontWeight: 800,
    },
    subTitle: {
        color: "#000",
        fontSize: 12,
    },
    signatureField: {
        marginLeft: 20,
        marginRight: 20,
        '& canvas': {
            marginTop: 10,
            border: '1px solid #000',
            height: 100,
        },
    }
};
var Signature = function (_a) {
    var classes = _a.classes, name = _a.name, onEnd = _a.onEnd, isSubTitle = _a.isSubTitle;
    return (react_1.default.createElement("div", { className: classes.signatureField },
        react_1.default.createElement(FormLabel_1.default, { className: isSubTitle ? classes.subTitle : classes.mainTitle }, "Clinical signature"),
        react_1.default.createElement(react_signature_pad_wrapper_1.default, { ref: function (ref) { return _this.signature = ref; }, options: {
                penColor: '#000080',
                onEnd: function () { return onEnd(name, _this.signature); }
            } }),
        react_1.default.createElement(FormHelperText_1.default, null, "Type name into box, click to draw your signature")));
};
exports.default = styles_1.withStyles(styles)(Signature);
