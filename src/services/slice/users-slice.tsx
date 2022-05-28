import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkResponse} from "../utils/utils";
import { TUser, AppThunk } from "../types/data";
import {RootState} from "../../index";
interface IUsersState {
  users: TUser[],
  loading: boolean,
  error: string
}

export const initialState: IUsersState = {
  users: [],
  loading: false,
  error: ''
};


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, {payload}: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
      state.users = payload;
    },
    getUsersFailed: (state, {payload}: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    }
  }
}
)
export const {getUsers, getUsersSuccess, getUsersFailed} = usersSlice.actions

export const fetchUsers = (): AppThunk => {
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      checkResponse(res);
      const actualData = await res.json();
      dispatch(getUsersSuccess(actualData));
    } catch (error: unknown) {
      if (typeof error === "string") console.log(error);
      else if (error instanceof Error) {
      dispatch(getUsersFailed(error.message));
      }
    }
  };
}


export const usersSelector = (state: RootState) => state.users;
export const usersReducer = usersSlice.reducer;
