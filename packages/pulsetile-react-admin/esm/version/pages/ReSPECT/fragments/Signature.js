var _this = this;
import React from "react";
import SignaturePad from 'react-signature-pad-wrapper';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    return (React.createElement("div", { className: classes.signatureField },
        React.createElement(FormLabel, { className: isSubTitle ? classes.subTitle : classes.mainTitle }, "Clinical signature"),
        React.createElement(SignaturePad, { ref: function (ref) { return _this.signature = ref; }, options: {
                penColor: '#000080',
                onEnd: function () { return onEnd(name, _this.signature); }
            } }),
        React.createElement(FormHelperText, null, "Type name into box, click to draw your signature")));
};
export default withStyles(styles)(Signature);
