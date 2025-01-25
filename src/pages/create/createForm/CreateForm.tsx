import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../constants";
import { useState } from "react";
import Loading from "../../../componets/loading/Loading";
import * as React from "react";

interface FormData {
  title: string;
  description: string;
  video: string;
  img1: string;
  img2: string;
  img3: string;
}

function CreateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create video");
      }

      setIsLoading(false);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className={style.create__form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.create__form__title}>
        <h1 className={style.create__form__title__text}>Создать видео</h1>
        <div className={style.create__form__title__line}>
          <span></span>
        </div>
      </div>
      <div className={style.create__form__inputs}>
        <div className={style.create__form__input__block}>
          {errors.title && (
            <label
              htmlFor="title"
              className={`${style.create__form__error} ${
                errors.title ? style.visible : ""
              }`}
            >
              {errors.title.message as React.ReactNode}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Название"
            id="title"
            {...register("title", { required: "Title is required" })}
          />
        </div>

        <div className={style.create__form__input__block}>
          {errors.description && (
            <label
              htmlFor="description"
              className={`${style.create__form__error} ${
                errors.description ? style.visible : ""
              }`}
            >
              {errors.description.message as React.ReactNode}
            </label>
          )}
          <textarea
            className={style.create__form__textarea}
            placeholder="Описание"
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>

        <div className={style.create__form__input__block}>
          {errors.video && (
            <label
              htmlFor="video"
              className={`${style.create__form__error} ${
                errors.video ? style.visible : ""
              }`}
            >
              {errors.video.message as React.ReactNode}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Ссылка на видео"
            id="video"
            {...register("video", { required: "Video is required" })}
          />
        </div>

        {Array.from({ length: 3 }, (_, index) => (
          <div
            className={style.create__form__input__block}
            key={`image-${index + 1}`}
          >
            {errors[`img${index + 1}` as keyof FormData] && (
              <label
                htmlFor={`img-${index + 1}`}
                className={`${style.create__form__error} ${
                  errors[`img${index + 1}` as keyof FormData]
                    ? style.visible
                    : ""
                }`}
              >
                {
                  errors[`img${index + 1}` as keyof FormData]
                    ?.message as React.ReactNode
                }
              </label>
            )}
            <input
              className={style.create__form__input}
              placeholder={`Ссылка на изображение ${index + 1}`}
              id={`img-${index + 1}`}
              {...register(`img${index + 1}` as keyof FormData, {
                required: "Image is required",
              })}
            />
          </div>
        ))}
      </div>
      <div className={style.create__form__button__block}>
        <button
          className={style.form__button}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Создание..." : "Создать"}
        </button>
        <button
          onClick={() => reset()}
          className={style.form__button}
          type="button"
        >
          Очистить
        </button>
      </div>
      {isLoading && <Loading isLoading={isLoading} />}
    </form>
  );
}

export default CreateForm;
