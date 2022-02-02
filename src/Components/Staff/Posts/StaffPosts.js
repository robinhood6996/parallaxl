import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StaffPosts = () => {

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
                        <h2 className='text-center font-bold text-2xl'>All Approved Post</h2>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Author
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Comments
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
                                            {
                                                blog.status === 'Pending' ? <button onClick={() => handleStatus(blog._id, 'Approved')} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black">
                                                    {blog.status}
                                                </button> : <button onClick={() => handleStatus(blog._id, 'Pending')} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {blog.status}
                                                </button>

                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">55</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link to=":id" className="text-black bg-violet-300 p-2 rounded mx-2">
                                                View
                                            </Link>
                                            <button className="text-red-600 bg-violet-300 p-2 rounded font-bold" onClick={() => deleteBlog(blog._id)}>
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

export default StaffPosts;