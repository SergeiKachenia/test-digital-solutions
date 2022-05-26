import { useParams } from "react-router-dom";
import { postsSelector, fetchPosts } from "../../services/slice/posts-slice";
import { usersSelector } from "../../services/slice/users-slice";
import {commentsSelector} from "../../services/slice/comments-slice"
import { useSelector, useDispatch } from "react-redux";
import styles from "./PostItemPage.module.css";
import { fetchComments } from "../../services/slice/comments-slice";
import { Link, useLocation } from "react-router-dom";
import React, {useEffect} from "react";

export const PostItemPage = () => {
  const { posts } = useSelector(postsSelector);
  const { users } = useSelector(usersSelector);
  const { comments } = useSelector(commentsSelector);
  const location = useLocation();
  // @ts-ignore
  const { userId } = useParams();
    // @ts-ignore
  const {postId} = useParams();
  console.log(postId);
  const currentUser = users.find((item) => {
    return item.id == userId;
  });
  const usersPosts = posts.filter((item) => {
    return item.userId == userId;
  });
  const postsComments = comments.filter((item) => {
    return item.postId == postId;
  })
  const postItem = posts.find((item)=> {
    return item.id == postId
  })
  console.log(postItem)
  const dispatch = useDispatch();
  useEffect(() => {
          //@ts-ignore
    dispatch(fetchComments());
              //@ts-ignore
    dispatch(fetchPosts());
  }, [location])

return (
  <section className={styles.postItemPage}>
    <div>
      <h2>{postItem.title}</h2>
      <p>{postItem.body}</p>
    </div>
  <ul className={styles.userPostsPage__commentsList}>
  {postsComments.map((commentItem) => (
    <li className={styles.postItemPage__commentItem} key={commentItem.id}>
      <div>
        <li>{commentItem.body}</li>
        <li>{commentItem.name}</li>
        <li>{commentItem.email}</li>
      </div>
    </li>

  ))}
</ul>
      <button type="submit">Отправить комментарий</button>
  </section>
)
}
