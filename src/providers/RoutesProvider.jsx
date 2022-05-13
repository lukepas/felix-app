import React from 'react';
import { Routes as RouterRoutes, Route as RouterRoute } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function RoutesProvider() {
    return (
        <RouterRoutes>
            {ROUTES.map((route) => <RouterRoute
                key={route.path}
                path={route.path}
                element={route.component}
            />)}
        </RouterRoutes>
    );
}
