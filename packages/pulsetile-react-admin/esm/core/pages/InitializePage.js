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
import { connect } from 'react-redux';
import { initializeAction } from "../actions/initializeAction";
import LoadingSlider from "../common/LoadingSlider";
import { token } from "../token";
var InitializePage = /** @class */ (function (_super) {
    __extends(InitializePage, _super);
    function InitializePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitializePage.prototype.componentDidMount = function () {
        if (!token) {
            this.props.initializeAction();
        }
    };
    InitializePage.prototype.render = function () {
        return (React.createElement(LoadingSlider, null));
    };
    return InitializePage;
}(Component));
var mapDispatchToProps = function (dispatch) {
    return {
        initializeAction: function () {
            dispatch(initializeAction.request());
        }
    };
};
export default connect(null, mapDispatchToProps)(InitializePage);
