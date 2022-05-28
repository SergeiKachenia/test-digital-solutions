import { combineReducers } from "redux";
import { usersReducer } from "./services/slice/users-slice";
import { postsReducer } from "./services/slice/posts-slice";
import {commentsReducer } from "./services/slice/comments-slice";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;

