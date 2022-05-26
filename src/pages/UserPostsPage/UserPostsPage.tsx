import { useParams } from "react-router-dom";
import { postsSelector, fetchPosts } from "../../services/slice/posts-slice";
import { usersSelector } from "../../services/slice/users-slice";
import { useSelector, useDispatch } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import styles from "./UserPostsPage.module.css";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { Link, useLocation } from "react-router-dom";
import React, {useEffect} from "react";

export const UserPostsPage = () => {
  const { posts } = useSelector(postsSelector);
  const { users } = useSelector(usersSelector);

  const location = useLocation();
  // @ts-ignore
  const { userId } = useParams();
  const currentUser = users.find((item) => {
    return item.id == userId;
  });
  const usersPosts = posts.filter((item) => {
    return item.userId == userId;
  });

  const dispatch = useDispatch();
  useEffect(() => {
          //@ts-ignore
    dispatch(fetchPosts());
  }, [location])

  return (
    <>
    {usersPosts && usersPosts.length > 0 && (
    <section className={styles.userPostsPage}>
      <div className={styles.userPostsPage__content}>
      <h2 className={styles.userPostsPage__heading}>{`Все посты пользователя ${currentUser.username}`}</h2>
      <ul className={styles.userPostsPage__postsList}>
        {usersPosts.map((postItem) => (
          <li className={styles.userPostsPage__postsItem} key={postItem.id}>
            <PostCard postItem={postItem}></PostCard>
            <Link

to={{
  pathname: `/user/${currentUser.id}/posts/${postItem.id}`,
  state: { background: location }
}}
className={styles.userPostsPage__button}
href="#"
>Подробнее</Link>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}
</>
  );
};
