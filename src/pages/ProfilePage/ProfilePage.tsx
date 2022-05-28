import { useParams } from "react-router-dom";
import { postsSelector, fetchPosts } from "../../services/slice/posts-slice";
import { usersSelector } from "../../services/slice/users-slice";
import { PostCard } from "../../components/PostCard/PostCard";
import styles from "./ProfilePage.module.css";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, FC } from "react";
import { useAppSelector, useAppDispatch } from "../../index";
import { TLocationState } from "../../services/types/data";

export const ProfilePage: FC = () => {
  const { posts } = useAppSelector(postsSelector);
  const { users } = useAppSelector(usersSelector);

  const location = useLocation<TLocationState>();
  const { userId } = useParams<{ userId: string }>();
  const currentUser = users.find((item) => {
    return item.id == userId;
  });
  const usersPosts = posts.filter((item) => {
    return item.userId == userId;
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [location]);

  return (
    <>
      {usersPosts && usersPosts.length > 0 && currentUser && (
        <main>
          <section className={styles.profilePage}>
            <UserProfile></UserProfile>
          </section>
          <section className={styles.profilePage__posts}>
            <div className={styles.profilePage__postsContent}>
              <div className={styles.profilePage__headContent}>
                <h2 className={styles.profilePage__postsHeading}>Посты</h2>
                <Link
                  to={{
                    pathname: `/user/${currentUser.id}/posts`,
                    state: { background: location },
                  }}
                  className={styles.profilePage__button}
                  href="#"
                >
                  Смотреть все посты
                </Link>
              </div>
              <ul className={styles.profilePage__postsList}>
                {usersPosts.slice(0, 3).map((postItem) => (
                  <li
                    className={styles.profilePage__postsItem}
                    key={postItem.id}
                  >
                    <PostCard postItem={postItem}></PostCard>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      )}
    </>
  );
};
