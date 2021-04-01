import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({ component, user, userRoles = [], isPublic = false, requiredRole = '', ...rest }) {
    if (!isPublic && !user) return <Redirect to='/' />;
    if (isPublic && user) return <Redirect to='/player/hero-list' />;
    if (requiredRole && (!userRoles || !userRoles.length || !userRoles.includes(requiredRole))) return <Redirect to='/forbidden' />;

    return <Route {...rest} component={component} />;
}
