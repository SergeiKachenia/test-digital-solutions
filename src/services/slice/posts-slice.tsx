import { createSlice} from "@reduxjs/toolkit";
import {checkResponse} from "../utils/utils";

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.posts = payload;
    },
    getPostsFailed: (state, {payload}) => {
      state.loading = false;
      state.error = payload
    }
  }
}
)
export const {getPosts, getPostsSuccess, getPostsFailed} = postsSlice.actions

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      checkResponse(res);
      const actualData = await res.json();
      dispatch(getPostsSuccess(actualData));
    } catch (error: unknown) {
      if (typeof error === "string") console.log(error);
      else if (error instanceof Error) {
      dispatch(getPostsFailed(error.message));
      }
    }
  };
}


export const postsSelector = (state) => state.posts;
export const postsReducer = postsSlice.reducer;