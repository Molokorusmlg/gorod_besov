import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL_USERS } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setUser } from "../../../userSlice";
import Loading from "../../../componets/loading/Loading";
import style from "../style.module.scss";
import * as React from "react";

interface IFormRegistation {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IRegistartionForm {
  setIsLoading: Function;
}

function RegistartionForm({ setIsLoading }: IRegistartionForm) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const getId = async () => {
    const response = await fetch(`${API_URL_USERS}?email=${user.email}`, {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);

    return data[0].id;
  };
  const postUser = async (data: IFormRegistation) => {
    setIsLoading(true);
    const response = await fetch(API_URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...data }),
    });
    if (!response.ok) return setIsLoading(false);

    console.log(response);

    dispatch(
      setUser({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        avatar: "",
        password: data.password,
        id: await getId(),
      })
    );
    setIsLoading(false);
    navigate("/main");
  };

  useEffect(() => {
    console.log("Updated user:", user);
  }, [user]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormRegistation>();

  const onSubmit = (data: IFormRegistation) => {
    postUser(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form__inputs}>
        <div className={style.form__block__input}>
          {errors.firstName && (
            <label
              htmlFor="firstName"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.firstName.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Имя"
            id="firstName"
            {...register("firstName", {
              required: "*First name is required",
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.lastName && (
            <label
              htmlFor="lastName"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.lastName.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Фамилия"
            id="lastName"
            {...register("lastName", {
              required: "*Last name is required",
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.email && (
            <label
              htmlFor="email"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.email.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Почта"
            id="email"
            {...register("email", {
              required: "*Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "*Invalid email address",
              },
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.password && (
            <label
              htmlFor="password"
              className={` ${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.password.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Пароль"
            id="password"
            type="password"
            {...register("password", {
              required: "*Password is required",
              minLength: {
                value: 8,
                message: "*Password must be at least 8 characters",
              },
            })}
          />
        </div>
      </div>
      <button className={style.form__button} type="submit">
        Sumbit
      </button>
      <button
        onClick={() => reset()}
        className={style.form__button}
        type="reset"
      >
        Clear
      </button>
    </form>
  );
}
export default RegistartionForm;
