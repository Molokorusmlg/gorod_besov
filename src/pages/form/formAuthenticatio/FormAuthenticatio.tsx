import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { API_URL_USERS } from "../../../constants";
import { useNavigate } from "react-router-dom";
import style from "../style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setUser } from "../../../userSlice";
import * as React from "react";

interface IFormAuthenticatio {
  emailsign: string;
  passwordsign: string;
}

interface IAuthenticatioForm {
  setIsLoading: Function;
}

function AuthenticatioForm({ setIsLoading }: IAuthenticatioForm) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetData = () => {
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormAuthenticatio>();

  const onSubmit = (data: IFormAuthenticatio) => {
    getUserFetch(data);
  };

  const getUserFetch = async (data: IFormAuthenticatio) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL_USERS}?email=${data.emailsign}&password=${data.passwordsign}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }

      const userData = await response.json();

      dispatch(setUser(userData[0]));

      setIsLoading(false);

      navigate("/main");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    console.log("Updated user:", user);
  }, [user]);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form__inputs}>
        <div className={style.form__block__input}>
          {errors.emailsign && (
            <label
              htmlFor="emailsign"
              className={`${style.form__error} ${
                errors.emailsign ? style.visible : ""
              }`}
            >
              {errors.emailsign.message as React.ReactNode}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Почта"
            id="emailsign"
            {...register("emailsign", {
              required: "*Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "*Invalid email address",
              },
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.passwordsign && (
            <label
              htmlFor="passwordsign"
              className={`${style.form__error} ${
                errors.passwordsign ? style.visible : ""
              }`}
            >
              {errors.passwordsign.message as React.ReactNode}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Пароль"
            id="passwordsign"
            type="password"
            {...register("passwordsign", {
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
      <button onClick={resetData} className={style.form__button} type="reset">
        Clear
      </button>
    </form>
  );
}
export default AuthenticatioForm;
