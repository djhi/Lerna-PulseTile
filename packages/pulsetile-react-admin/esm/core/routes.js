import React from 'react';
import { Route } from 'react-router-dom';
import Charts from './pages/Charts';
import PatientSummary from './pages/PatientSummary';
import nonCoreRoutes from "../version/routes";
var coreRoutes = [
    React.createElement(Route, { exact: true, path: "/charts", component: Charts }),
    React.createElement(Route, { exact: true, path: "/summary", component: PatientSummary }),
];
export default coreRoutes.concat(nonCoreRoutes);
