import { Location } from "history";
import { RootState } from "../../index";
import { AnyAction, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type TUser = {
  id: number | string,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
};

  export type TPost = {
    userId: number | string,
    id: number | string,
    title: string,
    body: string
};

export type TComment = {
  postId: number | string,
  id: number | string,
  name: string,
  email: string,
  body: string
};



export type TLocationState = {
  background?: Location<TLocationState>;
  from?: { pathname: string };
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>
