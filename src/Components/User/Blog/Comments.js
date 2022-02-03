import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getComments, createComment as createCommentApi, createComment } from '../../../api';
import Comment from './Comment';
import CommentForm from './CommentForm';
import useAuth from '../../../Hooks/useAuth';

const Comments = ({ blog, id }) => {
    const [backendComments, setBackendCommnets] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const { user } = useAuth();


    const getReplies = (commentId) => {
        return backendComments?.filter(backendComment => backendComment?.parentId === commentId).sort((a, b) => new Date(a.cretedAt).getTime() - new Date(b.cretedAt).getTime()
        );
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(data => setBackendCommnets(data.data.comment))

    }, []);
    const rootComments = backendComments?.filter(backendComment => backendComment?.parentId === null);
    const addComment = (text, parentId = null) => {
        console.log('addCommnet', text, parentId);
        const generateComment = {
            id: Math.random().toString(36).substring(2, 9),
            body: text,
            parentId: parentId,
            username: user?.displayName,
            userEmail: user?.email,
            createdAt: new Date().toISOString(),
        }
        // createCommentApi(text, parentId).then(comment => {
        //     setBackendCommnets([comment, ...backendComments]);
        //     setActiveComment(null);
        // })
        axios.put(`http://localhost:5000/posts/comment/${id}`, [generateComment, ...backendComments])
            .then(data => {
                setBackendCommnets([generateComment, ...backendComments,]);
                setActiveComment(null);
            })

    }
    console.log(backendComments);
    return (
        <div className="comment-area">
            {/* <div className="comment-form-title">Write Comment</div> */}
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className='overflow-auto	p-3'>
                {
                    rootComments?.map((rootComment) => (
                        <>
                            <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} activeComment={activeComment} setActiveComment={setActiveComment} addComment={addComment} />
                        </>
                    )
                    )
                }

            </div>

        </div>
    );
};

export default Comments;