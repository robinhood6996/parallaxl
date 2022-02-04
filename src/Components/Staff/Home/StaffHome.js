import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StaffHome = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://secret-crag-61568.herokuapp.com/posts')
            .then(res => {
                setPosts(res.data);
            })
    }, [])
    useEffect(() => {
        axios.get('https://secret-crag-61568.herokuapp.com/users')
            .then(res => {
                setUsers(res.data);
            })
    }, [])
    const activePost = posts.filter(post => post.status === 1);
    const pendingPosts = posts.filter(post => post.status === 0);
    const activeUsers = users.filter(user => user.status === 1);
    const inActiveUsers = users.filter(user => user.status === 0);
    const staffs = users.filter(user => user.role === 'staff');
    return (
        <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Active User: <span className='font-base'>{activeUsers.length}</span></h2>
                    <Link to="users">View</Link>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Inactive Post: <span className='font-base'>{inActiveUsers.length}</span></h2>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Total Staff: <span className='font-base'>{staffs.length}</span></h2>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Approved Posts: <span className='font-base'>{activePost.length}</span></h2>
                </div>
                <div className="dashboard-home-body p-4 bg-violet-200 text-black h-50">
                    <h2 className='font-bold'>Pending Posts: <span className='font-base'>{pendingPosts.length}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default StaffHome;