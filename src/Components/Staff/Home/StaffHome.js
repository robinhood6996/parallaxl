import React from 'react';
import { Link } from 'react-router-dom';

const StaffHome = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Active User: <span className='font-base'>36</span></h2>
                    <Link to="users">View</Link>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Inactive Post: <span className='font-base'>36</span></h2>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Total Staff: <span className='font-base'>36</span></h2>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Approved Posts: <span className='font-base'>36</span></h2>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Pending Posts: <span className='font-base'>36</span></h2>
                </div>
            </div>
        </div>
    );
};

export default StaffHome;