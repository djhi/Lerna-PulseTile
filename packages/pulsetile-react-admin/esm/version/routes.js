import React from 'react';
import { Route } from 'react-router-dom';
import ReSPECT from './pages/ReSPECT';
import BusinessIntelligence from "./pages/BusinessIntelligence";
export default [
    React.createElement(Route, { exact: true, path: "/respect", component: ReSPECT }),
    React.createElement(Route, { exact: true, path: "/business", component: BusinessIntelligence }),
];
