
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReply, deleteComment, deleteReply } from '../slices/commentsSlice';

const CommentList = () => {
  const [replyText, setReplyText] = useState({});
  const [showReplyInput, setShowReplyInput] = useState({});
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const handleAddReply = (commentId) => {
    if (replyText[commentId]?.trim()) {
      dispatch(addReply({ commentId, reply: { id: Date.now(), text: replyText[commentId] } }));
      setReplyText((prev) => ({ ...prev, [commentId]: '' }));
      setShowReplyInput((prev) => ({ ...prev, [commentId]: false }));
    }
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  const handleDeleteReply = (commentId, replyId) => {
    dispatch(deleteReply({ commentId, replyId }));
  };

  const handleKeyDown = (e, commentId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddReply(commentId);
    }
  };

  return (
    <div>
      
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button onClick={() => handleDeleteComment(comment.id)}>Delete Comment</button>
          <button onClick={() => setShowReplyInput((prev) => ({ ...prev, [comment.id]: !prev[comment.id] }))}>
            Reply
          </button>
          {showReplyInput[comment.id] && (
            <div>
              <textarea
                value={replyText[comment.id] || ''}
                onChange={(e) => setReplyText((prev) => ({ ...prev, [comment.id]: e.target.value }))}
                onKeyDown={(e) => handleKeyDown(e, comment.id)}
                placeholder="Write a reply..."
              />
            </div>
          )}
          {comment.replies.map((reply) => (
            <div key={reply.id}>
              <p>{reply.text}</p>
              <button onClick={() => handleDeleteReply(comment.id, reply.id)}>Delete Reply</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
