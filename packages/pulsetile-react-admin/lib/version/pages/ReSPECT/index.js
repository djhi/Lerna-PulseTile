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
var SectionsTable_1 = __importDefault(require("./SectionsTable"));
var VersionsTable_1 = __importDefault(require("./VersionsTable"));
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
            return (react_1.default.createElement(SectionsTable_1.default, { toggleMode: this.toggleMode, currentVersion: currentVersion, sectionForShow: currentSection }));
        }
        return (react_1.default.createElement(VersionsTable_1.default, { toggleMode: this.toggleMode }));
    };
    return Respect;
}(react_1.Component));
exports.default = Respect;
