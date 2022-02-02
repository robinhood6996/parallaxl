import React from 'react';
import Navigation from '../../../Components/Shared/Navigation';

const NotAllowed = () => {
    return (
        <>
            <Navigation />
            <div className='text-center font-bold text-5xl text-red-600 mt-10'>
                <h2>Sorry! You are not allowed to visit Dashboard</h2>
            </div>
        </>
    );
};

export default NotAllowed;