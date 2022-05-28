import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";
import { FC } from "react";

export const PageNotFound: FC = () => {
  return (
    <div className={styles.main}>
      <span className={styles.heading}>404 - Страница не найдена</span>
      <Link to="/" className={styles.link}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
};
