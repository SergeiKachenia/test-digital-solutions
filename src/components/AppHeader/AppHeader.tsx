import styles from "./AppHeader.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { TLocationState } from "../../services/types/data";
import { FC } from "react";

export const AppHeader: FC = () => {
  const history = useHistory();
  const location = useLocation<TLocationState>();
  const display = location.pathname === "/" ? "none" : "inline-block";
  const goBack = () => {
    history.goBack();
  };
  return (
    <header className={styles.AppHeader}>
      <div className={styles.AppHeader__content}>
        <p className={styles.AppHeader__description}>
          Тестовое задание для компании "Цифровые решения"
        </p>
        <div className={styles.AppHeader__buttons}>
          <button
            onClick={goBack}
            style={{ display }}
            className={styles.AppHeader__button}
          >
            Вернуться назад
          </button>
          <button className={styles.AppHeader__button}>
            Версия для слабовидящих
          </button>
          <button className={styles.AppHeader__button}>Мой профиль</button>
        </div>
      </div>
    </header>
  );
};
