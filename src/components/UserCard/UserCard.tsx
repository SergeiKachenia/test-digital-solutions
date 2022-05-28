import React, { FC } from "react";
import styles from "./UserCard.module.css";
import { TUser } from "../../services/types/data";

interface IUserCardProps {
  user: TUser;
}

export const UserCard: FC<IUserCardProps> = ({ user }) => {
  return (
    <>
      {user && (
        <div className={styles.UserCard}>
          <p className={styles.UserCard__name}>{user.name}</p>
          <p className={styles.UserCard__city}>{user.address.city}</p>
        </div>
      )}
    </>
  );
};
