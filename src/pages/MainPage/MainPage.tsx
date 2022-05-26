import React from "react";
import {UserCard} from '../../components/UserCard/UserCard'
import { useSelector} from "react-redux";
import {
  usersSelector
} from "../../services/slice/users-slice";
import styles from './MainPage.module.css'
import { Link, useLocation } from "react-router-dom";


export const MainPage = () => {
  const { users } = useSelector(usersSelector);
    const location = useLocation();
  return (
    <>
    {users && users.length > 0 && (
    <main className={styles.MainPage__flexContainer}>
      <div className={styles.blackBlock}>
      <h1 className={styles.blackBlock__heading}>Главная страница</h1>
      </div>
    <section className={styles.MainPage__section}>
      <div className={styles.MainPage__flexContent}>
    <h1 className={styles.MainPage__heading}>Список пользователей</h1>
    <span className={styles.MainPage__span}>{`Найдено ${users.length} пользователей`}</span>
    </div>
      <ul className={styles.MainPage__list}>
{users.map((user)=> (
<li className={styles.MainPage__listItem} key={user.id}>
<UserCard user={user}></UserCard>
<Link

to={{
  pathname: `/user/${user.id}`,
  state: { background: location }
}}
className={styles.MainPage__button}
href="#"
>Смотреть профиль</Link>
</li>)
)
}
      </ul>
    </section>
    </main>
  )
}
    </>
  )
}