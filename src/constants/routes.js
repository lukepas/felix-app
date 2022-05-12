import React from 'react';
import Home from '../pages/home/home';
import NotFound from '../pages/notFound/notFound';

export const ROUTE_NAMES = {
    NOT_FOUND: '*',
    DEFAULT: '/',
    LOGIN: '/login',
};

export const ROUTE_REDERECT = {
    NOT_FOUND: '*',
    DEFAULT: '/',
    LOGIN: '/login/',
};

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
];
