var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { Layout } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import CustomSidebar from "./Sidebar";
import CustomTopBar from "./Topbar";
import CustomFooter from "./Footer";
import getCurrentTheme from "../config/styles";
var styles = {
    root: {
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '101vh',
        position: 'relative',
        '& > div': {
            minHeight: '101vh',
        },
        '& main > div': {
            padding: 0,
        },
    },
};
/**
 * This component returns custom layout
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @constructor
 */
var CustomLayout = function (_a) {
    var classes = _a.classes, rest = __rest(_a, ["classes"]);
    return (React.createElement(Layout, __assign({}, rest, { className: classes.root, appBar: CustomTopBar, sidebar: CustomSidebar, notification: CustomFooter })));
};
var mapStateToProps = function (state) {
    var isContrastMode = get(state, 'custom.contrastMode.data', false);
    return {
        theme: getCurrentTheme(isContrastMode),
    };
};
export default connect(mapStateToProps, null)(withStyles(styles)(CustomLayout));
