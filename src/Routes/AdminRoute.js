import React from 'react';
import useAuth from '../Hooks/useAuth';
import NotAllowed from '../Pages/User/NotAllowed/NotAllowed';

const AdminRoute = ({ children, ...rest }) => {
    const { userRole, user } = useAuth();

    if (!userRole === 'admin') {
        return <div className="lds-hourglass text-center"></div>
    }
    return user?.email && userRole === 'admin' ? children : <NotAllowed userType={'Admin'} />;
};



export default AdminRoute;