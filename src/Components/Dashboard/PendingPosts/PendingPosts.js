import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PendingPosts = () => {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState();
    useEffect(() => {
        axios.get('https://secret-crag-61568.herokuapp.com/posts/pending')
            .then(res => {
                setPosts(res.data);
            })
    }, [status]);

    const deleteBlog = (id) => {
        const confirm = window.confirm('Are you sure to delete this Post?');
        if (confirm) {
            axios.delete(`https://secret-crag-61568.herokuapp.com/posts/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert('This post has been Deleted!');
                        const rest = posts.filter(blog => blog._id !== id);
                        setPosts(rest);
                    }
                });
        }
    }

    //Change Status 
    const handleStatus = (id, status) => {
        const confirm = window.confirm(`Are you sure to approve this post ?`);
        if (confirm) {
            axios.put(`https://secret-crag-61568.herokuapp.com/posts/status/${id}`, { status: status })
                .then(res => {
                    if (res.data.matchedCount) {
                        alert('Post Approved');
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
                        <h2 className='text-center font-bold text-2xl'>All Pending Posts</h2>
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
                                        Change Status
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
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {posts.map((post) => (
                                    <tr key={post._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">

                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{post.author}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{post.title}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                post.status === 0 && <button onClick={() => handleStatus(post._id, 1)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" title='click here to approve this post'>
                                                    Click to Approved
                                                </button>

                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link to="" className="text-black bg-violet-300 p-2 rounded font-bold">
                                                View
                                            </Link>
                                            <button className="text-red-600 hover:text-red-900 mx-2 bg-violet-300 p-2 rounded font-bold" onClick={() => deleteBlog(post._id)}>
                                                Delete
                                            </button>

                                        </td>
                                    </tr>

                                ))}
                                {
                                    posts.length < 1 && <h2 className='font-bold text-4xl text-red-500 text-center p-4'>No Pending Post Available</h2>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingPosts;