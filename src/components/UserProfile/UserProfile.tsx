import { useParams } from "react-router-dom";
import { usersSelector } from "../../services/slice/users-slice";
import { useSelector } from "react-redux";
import styles from "./UserProfile.module.css";
import React from "react";



export const UserProfile = () => {
  const { users } = useSelector(usersSelector);
  // @ts-ignore
const { userId } = useParams();
const currentUser = users.find((item) => {
  return item.id == userId;
});


  return (
    <>
    {currentUser && (
    <div className={styles.UserProfile__flexContainer}>
              <div className={styles.UserProfile__username}>
                {currentUser.username}
              </div>
              <ul className={styles.UserProfile__infoList}>
                <li className={styles.UserProfile__infoItem}>
                  {currentUser.name}
                </li>
                <li className={styles.UserProfile__infoItem}>
                  {currentUser.email}
                </li>
                <li className={styles.UserProfile__infoItem}>
                  {currentUser.phone}
                </li>
                <li className={styles.UserProfile__infoItem}>
                  {currentUser.website}
                </li>
                <li className={styles.UserProfile__infoItem}>
                  {currentUser.company.name}
                </li>
                <li className={styles.UserProfile__infoItem}>
                  {currentUser.company.bs}
                </li>
                <button className={styles.UserProfile__button}>
                  Написать сообщение
                </button>
                <button className={styles.UserProfile__button}>
                  Предложить работу
                </button>
              </ul>
            </div>
  )
}
</>
)
}