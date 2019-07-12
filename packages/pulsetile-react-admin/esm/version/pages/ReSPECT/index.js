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
import SectionsTable from "./SectionsTable";
import VersionsTable from "./VersionsTable";
var Respect = /** @class */ (function (_super) {
    __extends(Respect, _super);
    function Respect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isVersionMode: true,
            currentVersion: null,
            currentSection: null,
        };
        _this.toggleMode = function (currentVersion, currentSection) {
            _this.setState({
                isVersionMode: !_this.state.isVersionMode,
                currentVersion: currentVersion,
                currentSection: currentSection,
            });
        };
        return _this;
    }
    Respect.prototype.render = function () {
        var _a = this.state, isVersionMode = _a.isVersionMode, currentVersion = _a.currentVersion, currentSection = _a.currentSection;
        if (!isVersionMode) {
            return (React.createElement(SectionsTable, { toggleMode: this.toggleMode, currentVersion: currentVersion, sectionForShow: currentSection }));
        }
        return (React.createElement(VersionsTable, { toggleMode: this.toggleMode }));
    };
    return Respect;
}(Component));
export default Respect;
