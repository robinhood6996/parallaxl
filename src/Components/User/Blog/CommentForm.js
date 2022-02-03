import React, { useState } from 'react';

const CommentForm = ({ submitLabel, handleSubmit }) => {
    const [text, setText] = useState('');
    const isTextAreaDisabled = text.length === 0;
    const submitComment = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return (
        <div>
            <form onSubmit={submitComment}>
                <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Write Comment
                    </label>
                    <div className="mt-5 md:mt-0">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                            placeholder="Write your commnet here...."
                            value={text}
                            onChange={e => setText(e.target.value)}

                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        Write Down Your Comment Here & Click on Post
                    </p>
                    <button className='bg-violet-500 text-white px-6 py-2 rounded' disabled={isTextAreaDisabled}>{submitLabel}</button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;