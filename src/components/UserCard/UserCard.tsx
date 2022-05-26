import React from 'react';
import styles from './UserCard.module.css'
export const UserCard = ({user}) => {
  return (
    <>
    {user  && (
    <div className={styles.UserCard}>
    <p className={styles.UserCard__name}>{user.name}</p>
    <p className={styles.UserCard__city}>{user.address.city}</p>
    </div>
    )
}
</>
  )
}