import React, { FC, useEffect } from "react";

import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { fetchUsers, usersSelector } from "../../services/slice/users-slice";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { AppHeader } from "../AppHeader/AppHeader";
import { UserPostsPage } from "../../pages/UserPostsPage/UserPostsPage";
import { PostItemPage } from "../../pages/PostItemPage/PostItemPage";
import { TLocationState } from "../../services/types/data";
import { useAppSelector, useAppDispatch } from "../../index";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import styles from "./App.module.css";

const App: FC = () => {
  const location = useLocation<TLocationState>();
  console.log(location);
  const history = useHistory();
  const background = location.state && location.state.background;
  const { error, loading } = useAppSelector(usersSelector);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return loading && !error ? (
    <div className={styles.App__loading}>Loading...</div>
  ) : (
    <>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/user/:userId" exact>
          <ProfilePage />
        </Route>
        <Route path="/user/:userId/posts" exact>
          <UserPostsPage />
        </Route>
        <Route path="/user/:userId/posts/:postId" exact>
          <PostItemPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
