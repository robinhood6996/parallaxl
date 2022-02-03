import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Post = () => {
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState(user.displayName);
    const handleAddBlog = (e) => {
        e.preventDefault();
        if (!image || !title || !date || !description) {
            alert('Please Fillup All the field');
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('image', image);

        axios.post('http://localhost:5000/posts', formData)
            .then(res => {
                if (res.data.insertedId) {
                    e.target.value = '';
                    alert('Your post has been submitted for review!');
                    e.target.reset();
                } else {
                    alert('Your post cannot submitted due to some reason')
                }
            })
            .catch(error => {
                if (error.message) {
                    alert(error.message);
                }
            });

    }


    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-center font-bold text-3xl text-violet-500'>Add Post</h1>
            <div className=''>
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleAddBlog} action="#" name='blog-form'>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Title of Your Post
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                placeholder='Write the post title'
                                                className="border mt-1 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                onChange={e => setTitle(e.target.value)}
                                                required
                                            />
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Select Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className=" border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                onChange={e => setDate(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className=" border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-800 rounded-md p-2"
                                                placeholder="Description About Tour"
                                                defaultValue={''}
                                                onChange={e => setDescription(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Feature Image Link
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            className=" border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                            required
                                            onChange={e => setImage(e.target.files[0])}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post;