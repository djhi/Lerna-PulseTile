import React from "react";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import footerLogo from "../../images/ripple-foundation-logo-footer.png";
var styles = function (theme) {
    var _a;
    return ({
        footerBlock: (_a = {},
            _a[theme.breakpoints.only('xs')] = {
                display: 'none',
            },
            _a.display = "flex",
            _a.flexDirection = "row",
            _a.alignItems = "center",
            _a.justifyContent = "space-between",
            _a.flex = "0 0 auto",
            _a.borderTop = "1px solid " + theme.palette.borderColor,
            _a.height = 54,
            _a.boxSizing = "border-box",
            _a.color = "#5c5c5c",
            _a.backgroundColor = "#fff",
            _a.paddingTop = 12,
            _a.paddingBottom = 13,
            _a.paddingLeft = 14,
            _a.paddingRight = 14,
            _a),
        copyright: {
            fontSize: 12,
        },
        supportedBy: {
            marginRight: 10,
            fontSize: 12,
        },
        footerLogo: {
            width: "auto",
            maxWidth: "100%",
        },
        emptyBlock: {
            flexGrow: 1,
        },
    });
};
/**
 * This component returns custom default footer
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var DefaultFooter = function (_a) {
    var classes = _a.classes;
    return (React.createElement("footer", { className: classes.footerBlock },
        React.createElement(Typography, { className: classes.copyright }, "Transforming Usability"),
        React.createElement("div", { className: classes.emptyBlock }),
        React.createElement(React.Fragment, null,
            React.createElement(Typography, { className: classes.supportedBy }, "Supported by"),
            React.createElement(Link, { to: "/" },
                React.createElement(CardMedia, { className: classes.footerLogo, component: "img", alt: "Pulse Tile", height: "29px", image: footerLogo, title: "Pulse Tile" })))));
};
export default withStyles(styles)(DefaultFooter);
