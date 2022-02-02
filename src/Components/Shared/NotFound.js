import React from 'react';
import Navigation from './Navigation';
import notfound from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <>
            <Navigation />
            <div className='flex justify-center mt-10'>
                <img src={notfound} alt="" />
            </div>
        </>
    );
};

export default NotFound;