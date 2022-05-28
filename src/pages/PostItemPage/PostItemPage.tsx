import { useParams } from "react-router-dom";
import { postsSelector, fetchPosts } from "../../services/slice/posts-slice";
import {
  commentsSelector,
  closeCommentsFormModal,
} from "../../services/slice/comments-slice";
import styles from "./PostItemPage.module.css";
import {
  fetchComments,
  showCommentsFormModal,
} from "../../services/slice/comments-slice";
import { useLocation } from "react-router-dom";
import React, { useEffect, FC } from "react";
import { Modal } from "../../components/Modal/Modal";
import { SendForm } from "../../components/SendForm/SendForm";
import { CommentItem } from "../../components/CommentItem/CommentItem";
import { useAppSelector, useAppDispatch } from "../../index";
import { TLocationState } from "../../services/types/data";

export const PostItemPage: FC = () => {
  const { posts } = useAppSelector(postsSelector);
  const { comments, activeCommentsFormModal } =
    useAppSelector(commentsSelector);
  const location = useLocation<TLocationState>();
  const { postId } = useParams<{ postId: string }>();

  const postsComments = comments.filter((item) => {
    return item.postId == postId;
  });
  const postItem = posts.find((item) => {
    return item.id == postId;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchPosts());
  }, [location]);

  return (
    <>
      {postsComments && postItem && (
        <section className={styles.postItemPage}>
          <div className={styles.postItemPage__content}>
            <h2
              className={styles.postItemPage__postHeading}
            >{`Пост №${postItem.id}:`}</h2>
            <div className={styles.postItemPage__post}>
              <div className={styles.postItemPage__postContent}>
                <h3 className={styles.postItemPage__postTitle}>
                  {postItem.title}
                </h3>
                <p className={styles.postItemPage__postBody}>{postItem.body}</p>
              </div>
            </div>
            <h2 className={styles.postItemPage__commentsHeading}>
              Комментарии:
            </h2>
            <ul className={styles.postItemPage__commentsList}>
              {postsComments.map((commentItem) => (
                <li
                  className={styles.postItemPage__commentItem}
                  key={commentItem.id}
                >
                  <CommentItem commentItem={commentItem}></CommentItem>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                dispatch(showCommentsFormModal());
              }}
              className={styles.postItemPage__button}
              type="button"
            >
              Отправить комментарий
            </button>
          </div>
          {activeCommentsFormModal && (
            <Modal
              onClose={() => {
                dispatch(closeCommentsFormModal());
              }}
            >
              <SendForm />
            </Modal>
          )}
        </section>
      )}
    </>
  );
};
