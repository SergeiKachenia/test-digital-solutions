import React, { FC } from "react";
import styles from "./CommentItem.module.css";
import { TComment } from "../../services/types/data";

interface ICommentItemProps {
  commentItem: TComment;
}
export const CommentItem: FC<ICommentItemProps> = ({ commentItem }) => {
  return (
    <>
      {commentItem && (
        <div className={styles.CommentItem}>
          <p className={styles.CommentItem__email}>{commentItem.email}</p>
          <h3 className={styles.CommentItem__title}>{commentItem.name}</h3>
          <p className={styles.CommentItem__body}>{commentItem.body}</p>
        </div>
      )}
    </>
  );
};
