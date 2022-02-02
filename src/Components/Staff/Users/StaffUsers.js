import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StaffUsers = () => {

    const [blogs, setBlogs] = useState([]);
    const [status, setStatus] = useState();
    useEffect(() => {
        axios.get('https://travelexss.herokuapp.com/blogs/admin')
            .then(res => {
                setBlogs(res.data);
            })
    }, [status]);

    const deleteBlog = (id) => {
        const confirm = window.confirm('Are you sure to delte this blog?');
        if (confirm) {
            axios.delete(`https://travelexss.herokuapp.com/blog/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert('Your Blog Deleted!');
                        const rest = blogs.filter(blog => blog._id !== id);
                        setBlogs(rest);
                    }
                });
        }
    }

    //Change Status 
    const handleStatus = (id, status) => {
        const confirm = window.confirm(`Are you sure to change it ${status} ?`);
        if (confirm) {
            axios.put(`https://travelexss.herokuapp.com/blog/status/${id}`, { status: status })
                .then(res => {
                    if (res.data.matchedCount) {
                        alert('Status Changed');
                        setStatus(status);
                    }
                })
        }
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <h2 className='text-center font-bold text-2xl'>Users</h2>
                        <div className='grid grid-cols-2 border p-4'>
                            <div className="filter">
                                <label htmlFor="status" className='mx-2 font-bold'>Filter Users</label>
                                <select name="status" id="" className='bg-violet-200'>
                                    <option value="active">Active</option>
                                    <option value="active">Inactive</option>
                                </select>
                            </div>

                            <div className="search">
                                <label htmlFor="search" className='font-bold'>Search Users</label>
                                <input type="text" placeholder='Enter User Email' className='border p-2 mx-2' />
                            </div>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Activity
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {blogs.map((blog) => (
                                    <tr key={blog._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">

                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{blog.author}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{blog.title}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button onClick={() => handleStatus(blog._id, 'Approved')} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black" title='Click to mark this user as Active'>
                                                Inactive
                                            </button> : <button onClick={() => handleStatus(blog._id, 'Pending')} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" title='Click to mark this user as Inactive'>
                                                Active
                                            </button>


                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-red-600 hover:text-red-900 bg-violet-300 p-2 rounded font-bold" onClick={() => deleteBlog(blog._id)}>
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffUsers;