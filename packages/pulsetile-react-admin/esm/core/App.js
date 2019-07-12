import React from "react";
import get from "lodash/get";
import { Admin, Resource } from "react-admin";
import customDataProvider from "./dataProviders/dataProvider";
import authProvider from "./dataProviders/authProvider";
import corePlugins from "./config/corePlugins";
import nonCorePlugins from "../version/config/nonCorePlugins";
import customSagas from "./sagas";
import customReducers from "./reducers";
import customRoutes from "./routes";
import Charts from "./pages/Charts";
import Layout from "./common/CustomLayout";
import InitializePage from "./pages/InitializePage";
import PatientSummaryPage from "./pages/PatientSummary";
import { themeCommonElements } from "../version/config/theme.config";
import translations from "./translations";
var plugins = corePlugins.concat(nonCorePlugins);
var Homepage = get(themeCommonElements, 'homePage', Charts);
var i18nProvider = function (locale) { return translations[locale]; };
var App = function () {
    var isPhrUser = localStorage.getItem('role') === 'PHR';
    return (React.createElement(Admin, { authProvider: authProvider, customSagas: [customSagas], customReducers: { custom: customReducers }, customRoutes: customRoutes, dataProvider: customDataProvider, dashboard: isPhrUser ? PatientSummaryPage : Homepage, appLayout: Layout, loginPage: InitializePage, locale: "en", i18nProvider: i18nProvider }, plugins.map(function (item) {
        return (React.createElement(Resource, { name: item.name, options: { label: item.label }, list: item.list }));
    })));
};
export default App;
