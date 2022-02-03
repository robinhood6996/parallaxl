import React from 'react';
import CommentForm from './CommentForm';

const Comment = ({ comment, replies, activeComment, setActiveComment, parentId = null, addComment }) => {
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    // const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    return (
        <div className='comments my-4 border-b'>
            <div className="comment">
                <div className="user text-blue-600 font-bold">
                    {comment.username}
                </div>
                <p>
                    <span className='font-base text-red-400'>Commented at {createdAt}</span>
                </p>
                <div className="body text-xl">
                    {comment.body}
                </div>
                <div className="comment-actions flex ">
                    <button className="comment-action text-base text-blue-600 mx-2" onClick={() => setActiveComment({ id: comment.id, type: 'replying' })}>Reply</button>

                    {/* <button className="comment-action text-base text-blue-600" onClick={() => setActiveComment({ id: comment.id, type: 'editing' })}>Edit</button> */}
                </div>
                {
                    isReplying && <CommentForm submitLabel="Reply" handleSubmit={(text) => addComment(text, replyId)} />
                }
                {
                    replies.length > 0 &&
                    <div className='replies ml-4'>
                        {
                            replies.map((reply) => (<Comment comment={reply} key={reply.id} replies={[]} parentId={comment.id} addComment={addComment} activeComment={activeComment} setActiveComment={setActiveComment} />))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Comment;