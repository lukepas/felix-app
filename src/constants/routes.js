import React from 'react';
import Home from '../pages/home/home';
import NotFound from '../pages/notFound/notFound';
import Login from '../pages/login/Login';
import { ROUTE_NAMES } from './routeNames';

export const ROUTES = [
    {
        path: ROUTE_NAMES.DEFAULT,
        component: <Home />,
        exact: true,
    },
    {
        path: ROUTE_NAMES.NOT_FOUND,
        component: <NotFound />,
        exact: true,
    },
    {
        path: ROUTE_NAMES.LOGIN,
        component: <Login />,
        exact: true,
    },
];
