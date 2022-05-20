import React from 'react';
import Landing from '../pages/Landing/Landing';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';
import SingleMovie from '../pages/SingleMovie/SingleMovie';
import { ROUTE_NAMES } from './routeNames';

export const ROUTES = [
    {
        path: ROUTE_NAMES.DEFAULT,
        component: <Landing />,
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
    {
        path: ROUTE_NAMES.SINGLE_MOVIE,
        component: <SingleMovie />,
        exact: false,
    },
];
