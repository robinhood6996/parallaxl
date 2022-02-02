import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const [blog, setBlog] = useState({});
    const id = '61f287b62c91398178175507';

    useEffect(() => {
        axios.get(`https://travelexss.herokuapp.com/blog/${id}`)
            .then(res => setBlog(res.data))
    }, [])
    return (
        <>
            <div className="blog container mx-auto p-4 mt-5">
                <div className="blog-title">
                    <h1 className='font-bold text-3xl'>{blog.title}</h1>
                </div>
                <div className="blog-img mt-4 ">
                    <img className='rounded' src={blog.image} alt="" />
                </div>
                <div className="author grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>Robin</h2>

                </div>

                <div className="blog-details mt-10 mb-5">
                    <p className='text-xl font-base'>
                        {blog.description}
                    </p>
                </div>
                <hr />
                <div className="comment-area grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className='overflow-auto	p-3'>
                        <div className='border-b-2 mb-2'>
                            <p><span className='font-bold'>Robin :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, rem!</p>
                        </div>
                        <div className='border-b-2 mb-2'>
                            <p><span className='font-bold'>Robin :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, rem!</p>
                        </div>
                        <div className='border-b-2 mb-2'>
                            <p><span className='font-bold'>Robin :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, rem!</p>
                        </div>

                    </div>
                    <div className="comment-area p-3 mt-5 md:mt-0">
                        <form>
                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    About
                                </label>
                                <div className="mt-5 md:mt-0">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                                        placeholder="you@example.com"
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Write Down Your Comment Here & Click on Post
                                </p>
                                <button className='bg-violet-500 text-white px-6 py-2 rounded'>Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;