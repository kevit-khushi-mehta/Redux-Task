// reducers/index.js
import { combineReducers } from 'redux';
import commentsReducer from './commentSection';

export default combineReducers({
  comments: commentsReducer,
});
