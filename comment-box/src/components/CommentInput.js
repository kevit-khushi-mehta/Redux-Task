
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../slices/commentsSlice';

const CommentInput = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleAddComment = () => {
    if (comment.trim()) {
      dispatch(addComment({ id: Date.now(), text: comment, replies: [] }));
      setComment('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <textarea
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Write a comment..."
    />
  );
};

export default CommentInput;
