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
var get_1 = __importDefault(require("lodash/get"));
var react_redux_1 = require("react-redux");
var List_1 = __importDefault(require("@material-ui/core/List"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var versionsServerAction_1 = require("../../../../actions/ReSPECT/versionsServerAction");
var theme_config_1 = require("../../../../config/theme.config");
/**
 * This component returns synopsis list
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {array}  items
 * @param {shape}  history
 * @constructor
 */
var ItemsList = /** @class */ (function (_super) {
    __extends(ItemsList, _super);
    function ItemsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redirectToRespect = function (item) {
            _this.props.toggleRespectModal();
            _this.props.history.push('/respect');
            _this.props.getOneVersion(item.sourceId, item.version);
        };
        return _this;
    }
    ItemsList.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, items = _a.items, history = _a.history, isLoading = _a.isLoading;
        if (isLoading) {
            return (react_1.default.createElement(List_1.default, { className: classes.list },
                react_1.default.createElement("li", { className: classes.listItem },
                    react_1.default.createElement(Typography_1.default, null, "Loading..."))));
        }
        if (items && items.length > 0) {
            var menuHasChevrons_1 = get_1.default(theme_config_1.themeCommonElements, 'menuHasChevrons', false);
            return (react_1.default.createElement(List_1.default, { className: classes.list }, items && items.slice(0, 4).map(function (item, key) {
                return (react_1.default.createElement("li", { key: key, className: classes.listItem, onClick: function () { return _this.redirectToRespect(item); } },
                    react_1.default.createElement(Typography_1.default, { noWrap: true },
                        "Version ",
                        item.version),
                    menuHasChevrons_1 && react_1.default.createElement(ChevronRight_1.default, null)));
            })));
        }
        else {
            return (react_1.default.createElement(List_1.default, { className: classes.list },
                react_1.default.createElement("li", { className: classes.listItem, onClick: function () { return history.push('/respect'); } },
                    react_1.default.createElement(Typography_1.default, null, "No versions"))));
        }
    };
    return ItemsList;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        isLoading: state.custom.versionsServerInfo.loading,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getOneVersion: function (sourceId, version) {
            dispatch(versionsServerAction_1.versionsServerAction.requestOne(sourceId, version));
        },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ItemsList);
