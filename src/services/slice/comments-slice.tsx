import { createSlice} from "@reduxjs/toolkit";
import {checkResponse} from "../utils/utils";

export const initialState = {
  comments: [],
  loading: false,
  error: null,
};


const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.comments = payload;
    },
    getCommentsFailed: (state, {payload}) => {
      state.loading = false;
      state.error = payload
    }
  }
}
)
export const {getComments, getCommentsSuccess, getCommentsFailed} = commentsSlice.actions

export const fetchComments = () => {
  return async (dispatch) => {
    dispatch(getComments());
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/comments/'
      );
      checkResponse(res);
      const actualData = await res.json();
      dispatch(getCommentsSuccess(actualData));
    } catch (error: unknown) {
      if (typeof error === "string") console.log(error);
      else if (error instanceof Error) {
      dispatch(getCommentsFailed(error.message));
      }
    }
  };
}


export const commentsSelector = (state) => state.comments;
export const commentsReducer = commentsSlice.reducer;