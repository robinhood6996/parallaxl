import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Comments from './Comments';

const Blog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();



    useEffect(() => {
        axios.get(`https://secret-crag-61568.herokuapp.com/posts/${id}`)
            .then(res => {
                setBlog(res.data);
            })
    }, []);



    // const handleComment = (e) => {
    //     const creatingCommnet = comment;
    //     creatingCommnet.id = 
    // }
    return (
        <>
            <div className="blog container mx-auto p-4 mt-5">
                <div className="blog-title">
                    <h1 className='font-bold text-3xl'>{blog.title}</h1>
                </div>
                <div className="blog-img mt-4 ">
                    <img className='rounded' src={`data:image/jpeg;base64, ${blog?.image}`} alt="" />
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
                <Comments blog={blog} id={id} />
            </div>
        </>
    );
};

export default Blog;