import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkResponse} from "../utils/utils";
import { TComment, AppThunk } from "../types/data";
import {RootState} from "../../index";

interface ICommentsState {
  comments: TComment[],
  loading: boolean,
  error: string,
  activeCommentsFormModal: boolean,
  name: string,
  email: string,
  text: string,
  success: boolean
}

export const initialState: ICommentsState = {
  comments: [],
  loading: false,
  error: '',
  activeCommentsFormModal: false,
  name: '',
  email: '',
  text: '',
  success: false,
};


const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
      state.comments = payload;
    },
    getCommentsFailed: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    },
    showCommentsFormModal: state => {
      state.activeCommentsFormModal = true;
    },
    closeCommentsFormModal: state => {
      state.activeCommentsFormModal = false;
    },
    sendCommentInProgress: state => {
      state.loading = true;
    },
    sendCommentSuccess: (state, { payload }: PayloadAction<any>) => {
    state.loading = false;
    state.name = payload.name;
    state.email = payload.email;
    state.text = payload.text;
    state.success = true;
    },
    sendCommentFailed: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = `Отправить комментарий не удалось: ${payload}`;
      state.success = false;
    },
    resetError: state => {
      state.loading = false;
      state.error = '';
      state.success = false;
    }
  }
}
)
export const {getComments, getCommentsSuccess, getCommentsFailed, showCommentsFormModal, closeCommentsFormModal, sendCommentInProgress, sendCommentSuccess, sendCommentFailed, resetError} = commentsSlice.actions

export const fetchComments = (): AppThunk => {
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

export const sendCommentRequest = (form: {name: string, email: string, text: string}): AppThunk => {
  return async (dispatch) => {
    dispatch(sendCommentInProgress());
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      checkResponse(res);
      const actualData = await res.json();
      dispatch(sendCommentSuccess(actualData));
      console.log(actualData);
    } catch (error: unknown) {
      if (typeof error === "string") console.log(error);
      else if (error instanceof Error) {
        dispatch(sendCommentFailed(error.message));
      }
    }
  };
};


export const commentsSelector = (state: RootState) => state.comments;
export const commentsReducer = commentsSlice.reducer;
