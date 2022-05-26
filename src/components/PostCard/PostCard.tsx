import React from 'react';
import styles from './PostCard.module.css'
export const PostCard = ({postItem}) => {
  return (
    <>
    {postItem &&
    <div className={styles.PostCard}>
    <h3 className={styles.PostCard__title}>{postItem.title}</h3>
    <p className={styles.PostCard__body}>{postItem.body}</p>
    </div>
}
</>
  )
}