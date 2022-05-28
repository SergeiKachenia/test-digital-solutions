import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkResponse} from "../utils/utils";
import { TPost, AppThunk } from "../types/data";
import {RootState} from "../../index";
interface IPostsState {
  posts: TPost[],
  loading: boolean,
  error: string
}

export const initialState: IPostsState = {
  posts: [],
  loading: false,
  error: '',
};


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, {payload}: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
      state.posts = payload;
    },
    getPostsFailed: (state, {payload}: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    }
  }
}
)
export const {getPosts, getPostsSuccess, getPostsFailed} = postsSlice.actions

export const fetchPosts = (): AppThunk => {
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


export const postsSelector = (state: RootState) => state.posts;
export const postsReducer = postsSlice.reducer;
