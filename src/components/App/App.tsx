import React, { useEffect} from "react";

import { Route, Switch, useLocation, useHistory} from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, usersSelector } from "../../services/slice/users-slice";
import {ProfilePage} from '../../pages/ProfilePage/ProfilePage';
import {AppHeader} from '../AppHeader/AppHeader';
import {UserPostsPage} from '../../pages/UserPostsPage/UserPostsPage';
import {PostItemPage} from '../../pages/PostItemPage/PostItemPage';
const App = () => {

  const location = useLocation();
  console.log(location);
  const history = useHistory();
    // @ts-ignore
  const background = location.state && location.state.background;
    const { users, error, loading } =
      useSelector(usersSelector);

  const dispatch = useDispatch();
    useEffect(() => {
      //@ts-ignore
      dispatch(fetchUsers());
    }, [])

    const closeModal = () => {
      history.goBack();
    };
      return loading ? <div>loading...</div> : (
        <>

        <AppHeader/>
        <Switch>
          <Route path='/' exact>
          <MainPage/>
          </Route>
          <Route path='/user/:userId' exact>
          <ProfilePage/>
          </Route>
          <Route path='/user/:userId/posts' exact>
          <UserPostsPage/>
          </Route>
          <Route path='/user/:userId/posts/:postId' exact>
          <PostItemPage/>
          </Route>
    </Switch>
    </>

  )
  }

  export default App;