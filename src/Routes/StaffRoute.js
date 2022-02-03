import React from 'react';
import useAuth from '../Hooks/useAuth';
import NotAllowed from '../Pages/User/NotAllowed/NotAllowed';

const StaffRoute = ({ children }) => {
    const { userRole, user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="lds-hourglass text-center"></div>
    }
    return user?.email && userRole === 'staff' ? children : <NotAllowed userType={'Staff'} />;
};

export default StaffRoute;