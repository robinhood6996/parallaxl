import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import NotFound from '../Components/Shared/NotFound';
import useAuth from '../Hooks/useAuth';
import NotAllowed from '../Pages/User/NotAllowed/NotAllowed';

const AdminRoute = ({ children, ...rest }) => {
    const { userRole, user, isLoading } = useAuth();
    const navigate = useNavigate();
    const returnUser = () => {
        navigate('/');
    }
    if (!userRole === 'admin') {
        return <div className="lds-hourglass text-center"></div>
    }
    return user?.email && userRole === 'admin' ? children : <NotAllowed />;
};



export default AdminRoute;