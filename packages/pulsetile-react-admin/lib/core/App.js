"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_admin_1 = require("react-admin");
var dataProvider_1 = __importDefault(require("./dataProviders/dataProvider"));
var authProvider_1 = __importDefault(require("./dataProviders/authProvider"));
var corePlugins_1 = __importDefault(require("./config/corePlugins"));
var nonCorePlugins_1 = __importDefault(require("../version/config/nonCorePlugins"));
var sagas_1 = __importDefault(require("./sagas"));
var reducers_1 = __importDefault(require("./reducers"));
var routes_1 = __importDefault(require("./routes"));
var Charts_1 = __importDefault(require("./pages/Charts"));
var CustomLayout_1 = __importDefault(require("./common/CustomLayout"));
var InitializePage_1 = __importDefault(require("./pages/InitializePage"));
var PatientSummary_1 = __importDefault(require("./pages/PatientSummary"));
var theme_config_1 = require("../version/config/theme.config");
var translations_1 = __importDefault(require("./translations"));
var plugins = corePlugins_1.default.concat(nonCorePlugins_1.default);
var Homepage = get_1.default(theme_config_1.themeCommonElements, 'homePage', Charts_1.default);
var i18nProvider = function (locale) { return translations_1.default[locale]; };
var App = function () {
    var isPhrUser = localStorage.getItem('role') === 'PHR';
    return (react_1.default.createElement(react_admin_1.Admin, { authProvider: authProvider_1.default, customSagas: [sagas_1.default], customReducers: { custom: reducers_1.default }, customRoutes: routes_1.default, dataProvider: dataProvider_1.default, dashboard: isPhrUser ? PatientSummary_1.default : Homepage, appLayout: CustomLayout_1.default, loginPage: InitializePage_1.default, locale: "en", i18nProvider: i18nProvider }, plugins.map(function (item) {
        return (react_1.default.createElement(react_admin_1.Resource, { name: item.name, options: { label: item.label }, list: item.list }));
    })));
};
exports.default = App;
