import React, { FC } from "react";
import styles from "./PostCard.module.css";
import { TPost } from "../../services/types/data";

interface IPostCardProps {
  postItem: TPost;
}
export const PostCard: FC<IPostCardProps> = ({ postItem }) => {
  return (
    <>
      {postItem && (
        <div className={styles.PostCard}>
          <h3 className={styles.PostCard__title}>{postItem.title}</h3>
          <p className={styles.PostCard__body}>{postItem.body}</p>
        </div>
      )}
    </>
  );
};
