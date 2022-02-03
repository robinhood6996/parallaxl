import React from 'react';
import Navigation from '../../../Components/Shared/Navigation';

const NotAllowed = ({ userType }) => {
    return (
        <>
            <Navigation />
            <div className='text-center font-bold text-5xl text-red-600 mt-10'>
                <h2>Sorry! You are not {userType} and your're not allowed to visit this page. </h2>
                <h2>If you are an {userType} Please login first and try again </h2>
            </div>
        </>
    );
};

export default NotAllowed;