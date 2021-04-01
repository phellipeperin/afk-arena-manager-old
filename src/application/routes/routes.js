import React from 'react';
import { Switch, withRouter } from 'react-router-dom';

import RouteWrapper from './routeWrapper';
import routeList from './routeList';

const Routes = ({ user, userRoles }) => (
    <Switch>
        {routeList?.map((route) => (
            <RouteWrapper
                key={route.path}
                component={route.component}
                isPublic={!!route.isPublic}
                requiredRole={route.requiredRole || ''}
                exact={!!route.exact}
                path={route.path}
                user={user}
                userRoles={userRoles}
            />
        ))}
    </Switch>
);

export default withRouter(Routes);
