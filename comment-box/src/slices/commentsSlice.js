
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [
    {
      id:1,
      comment:"hey!"
    }
  ]
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    addReply: (state, action) => {
      const { commentId, reply } = action.payload;
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.replies.push(reply);
      }
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    deleteReply: (state, action) => {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.replies = comment.replies.filter(reply => reply.id !== replyId);
      }
    }
  }
});

export const { addComment, addReply, deleteComment, deleteReply } = commentsSlice.actions;
export default commentsSlice.reducer;
