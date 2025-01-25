import { useRef } from "react";
import { API_URL_USERS } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { setUser } from "../../../../userSlice";
import style from "./style.module.scss";
import UserDefaltIcon from "../../../../assets/img/userDefault.svg";
import * as React from "react";

interface IUserInfoBlock {
  setIsLoading: Function;
}

function UserInfoBlock({ setIsLoading }: IUserInfoBlock) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const formRef = useRef<HTMLFormElement>(null);

  const userUpdateFetch = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData as any);

      fetch(`${API_URL_USERS}${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            setIsLoading(false);
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          dispatch(setUser(data));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className={style.user__info}>
      <div className={style.user__info__tille__block}>
        <h1 className={style.user__info__title}>Ваш профиль</h1>
        <div className={style.user__info__title__line}>
          <span></span>
        </div>
      </div>

      <div className={style.user__info__avatar}>
        <img
          className={style.user__info__avatar__img}
          src={user.avatar ? user.avatar : UserDefaltIcon}
          alt="user avatar"
        />
        <form
          className={style.user__info__avatar__input__block}
          ref={formRef}
          onSubmit={userUpdateFetch}
        >
          <input
            type="text"
            className={style.user__info__avatar__input}
            name="firstName"
            placeholder="Имя"
            defaultValue={user.firstName}
            required
          />
          <input
            name="lastName"
            defaultValue={user.lastName}
            type="text"
            className={style.user__info__avatar__input}
            placeholder="Фамилия"
            required
          />
          <input
            name="email"
            defaultValue={user.email}
            type="email"
            className={style.user__info__avatar__input}
            placeholder="Почта"
            required
          />
          <input
            type="text"
            className={style.user__info__avatar__input}
            name="avatar"
            placeholder="new avatar link photo"
            required
          />
          <button type="submit" className={style.user__info__avatar__button}>
            Загрузить
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserInfoBlock;
