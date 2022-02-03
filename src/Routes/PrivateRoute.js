import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className="lds-hourglass text-center"></div>
    }

    return user.email ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;