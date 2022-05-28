import styles from "./SendForm.module.css";
import { useState } from "react";
import {
  sendCommentRequest,
  commentsSelector,
  resetError,
} from "../../services/slice/comments-slice";
import { FC, FormEvent, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../index";
export const SendForm: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector(commentsSelector);
  const [formData, addFormData] = useState<{
    name: string;
    email: string;
    text: string;
  }>({
    name: "",
    email: "",
    text: "",
  });

  const changeFormData = (e: { target: { name: string; value: string } }) => {
    addFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const sendNewComment = (e: FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(sendCommentRequest(formData));
  };

  useEffect(() => {
    dispatch(resetError());
  }, []);

  return (
    <>
      <form onSubmit={sendNewComment} className={styles.SendForm}>
        <h3 className={styles.SendForm__heading}>Отправить комментарий</h3>
        <label className={styles.SendForm__label}>
          {" "}
          Имя:
          <input
            type="text"
            placeholder={"Ваше имя"}
            onChange={changeFormData}
            value={formData.name}
            name={"name"}
            className={styles.SendForm__input}
          ></input>
        </label>
        <label className={styles.SendForm__label}>
          {" "}
          E-mail:
          <input
            type="email"
            placeholder={"Ваш email"}
            onChange={changeFormData}
            value={formData.email}
            name={"email"}
            className={styles.SendForm__input}
          ></input>
        </label>
        <label className={styles.SendForm__label}>
          {" "}
          Текст комментария:
          <textarea
            placeholder={"Текст комментария"}
            onChange={changeFormData}
            value={formData.text}
            name={"text"}
            className={styles.SendForm__textarea}
          ></textarea>
        </label>
        <button
          disabled={loading ? true : false}
          className={styles.SendForm__button}
          type="submit"
        >
          {loading ? "Отправка..." : "Отправить"}
        </button>
        {!loading && !error && success && (
          <p className={styles.SendForm__success}>
            Комментарий успешно отправлен!
          </p>
        )}
      </form>
    </>
  );
};
