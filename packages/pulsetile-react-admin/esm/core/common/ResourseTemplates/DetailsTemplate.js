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
import React, { Component } from "react";
/**
 * This component returns Details block template
 * (fork to Edit and Show)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
var DetailsTemplate = /** @class */ (function (_super) {
    __extends(DetailsTemplate, _super);
    function DetailsTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            viewType: _this.props.mode,
        };
        _this.changeViewType = function (viewType) {
            _this.setState({
                viewType: viewType,
            });
        };
        return _this;
    }
    DetailsTemplate.prototype.render = function () {
        var _a = this.props, classes = _a.classes, show = _a.show, edit = _a.edit, rest = __rest(_a, ["classes", "show", "edit"]);
        var viewType = this.state.viewType;
        var ShowTemplate = show;
        var EditTemplate = edit;
        if (viewType === 'show') {
            return (React.createElement(ShowTemplate, __assign({ changeViewType: this.changeViewType }, this.props)));
        }
        else if (viewType === 'edit') {
            return (React.createElement(EditTemplate, __assign({ changeViewType: this.changeViewType }, this.props)));
        }
        return null;
    };
    return DetailsTemplate;
}(Component));
export default DetailsTemplate;
