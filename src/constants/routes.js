import React from 'react';
import { ROUTE_NAMES } from './routeNames';
import Landing from '../pages/Landing/Landing';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';
import SingleMovie from '../pages/SingleMovie/SingleMovie';
import UserLanding from '../pages/UserLanding/UserLanding';

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
        exact: true,
    },
    {
        path: ROUTE_NAMES.MOVIES,
        component: <UserLanding />,
        exact: false,
    },
];
