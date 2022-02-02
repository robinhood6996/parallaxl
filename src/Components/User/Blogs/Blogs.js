import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [value, setValue] = useState('AllBlogs');
    const [pageCount, setPageCount] = useState(0)
    const size = 10;
    const activePost = blogs.filter(blog => blog.status !== 'Pending')

    useEffect(() => {
        axios.get(`https://travelexss.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => {
                setBlogs(res.data.blogs)
                const count = res.data.count
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            }).catch(err => alert(err.message))
    }, [page]);

    if (blogs.length === 0) {
        return <div className="lds-hourglass text-center"></div>
    }

    return (<div className='col-span-2'>
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className='text-center font-bold text-4xl'>Recent Blogs</h2>
                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {blogs.map((blog) => (
                            <div key={blog._id} className="group relative shadow-lg p-2 rounded">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={blog.image}
                                        alt="Tour Scene"
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <p className='text-sm text-gray-500'>Author</p>
                                <h3 className=" text-2xl font-semibold text-gray-900 ">
                                    <Link to='/blog/:id'>
                                        <span className="absolute inset-0" />
                                        {blog.title}
                                    </Link>
                                </h3>
                                {/* <p className="text-md text-gray-800">{callout.description.slice(0, 150)}</p> */} <div className="details">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem, vero eaque voluptas minima iste amet labore harum iusto laborum quisquam alias fugiat ut vitae magnam voluptatem illum consequuntur, obcaecati fuga! Ad fugit eligendi tenetur assumenda odio porro sed rem corrupti provident, molestiae magnam laborum, enim laudantium eum. Quos, natus! <a href='/' className='text-violet-500 font-semibold'>Read More</a></p>
                                </div>



                                <div className='mt-3 '>
                                    <h2 className='font-bold'>Commments: <span className='font-base'>50</span></h2>
                                </div>


                            </div>
                        ))}


                    </div>

                </div>
            </div>
        </div>
    </div >
    );
};

export default Blogs;