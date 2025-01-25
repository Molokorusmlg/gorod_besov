import * as React from "react";
import style from "./style.module.scss";
import CloseImg from "@assets/img/arrowBackWhite.svg?url";
import cn from "classnames";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

interface ISettings {
  setFilterRequest: Function;
  setSortRequest: Function;
}
function SettingsBlock({ setFilterRequest, setSortRequest }: ISettings) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const GetSortRequest = useCallback(() => {
    const sortConfig = [
      { id: "views", value: "views" },
      { id: "likes", value: "likes" },
    ];

    const selectedSort = sortConfig
      .filter(
        (sort) => (document.getElementById(sort.id) as HTMLInputElement).checked
      )
      .map((sort) => sort.value);

    setSortRequest(selectedSort);
  }, []);

  const GetFilterRequest = useCallback(() => {
    const filterConfig = [
      { id: "building", value: "building" },
      { id: "parks", value: "parks" },
      { id: "life", value: "life" },
      { id: "temple", value: "temple" },
    ];

    const selectedFilters = filterConfig
      .filter(
        (filter) =>
          (document.getElementById(filter.id) as HTMLInputElement).checked
      )
      .map((filter) => filter.value);

    setFilterRequest(selectedFilters);
  }, []);

  const changeOpenState = useCallback(() => {
    setIsSettingsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={cn(style.settings, {
        [style.settings__hide]: !isSettingsOpen,
      })}
    >
      <div className={style.settings__title}>
        <h1 className={style.settings__title__text}>Параметры</h1>
        <div className={style.settings__title__line}>
          <span></span>
        </div>
      </div>

      <div className={style.settings__type__block}>
        <h3 className={style.settings__type__title}>Тип статьи</h3>
        <div className={style.settings__type__line}>
          <span></span>
        </div>

        <label className={style.container}>
          <input id="building" type="checkbox" onChange={GetFilterRequest} />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Здания</p>
        </label>

        <label className={style.container}>
          <input id="parks" type="checkbox" onChange={GetFilterRequest} />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Парки</p>
        </label>

        <label className={style.container}>
          <input id="life" type="checkbox" onChange={GetFilterRequest} />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Жизнь</p>
        </label>

        <label className={style.container}>
          <input id="temple" type="checkbox" onChange={GetFilterRequest} />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Храмы</p>
        </label>
      </div>

      <div className={style.settings__sort__block}>
        <h3 className={style.settings__sort__title}>Сортировка по</h3>
        <div className={style.settings__sort__line}>
          <span></span>
        </div>

        <div className={style.settings__sort__radio__button__container}>
          <div className={style.settings__sort__radio__button}>
            <input
              type="radio"
              className={style.settings__sort__radio__button__input}
              id="likes"
              name="radio-group"
              onChange={GetSortRequest}
            />
            <label
              className={style.settings__sort__radio__button__label}
              htmlFor="likes"
            >
              <span className={style.settings__sort__radio__button__custom} />
              Лайкам
            </label>
          </div>
          <div className={style.settings__sort__radio__button}>
            <input
              type="radio"
              className={style.settings__sort__radio__button__input}
              id="views"
              name="radio-group"
              onChange={GetSortRequest}
            />
            <label
              className={style.settings__sort__radio__button__label}
              htmlFor="views"
            >
              <span className={style.settings__sort__radio__button__custom} />
              Просмотры
            </label>
          </div>
        </div>
      </div>

      <Link to={"/create"} className={style.settings__button}>
        <p className={style.settings__button__text}>Создать</p>
      </Link>

      <p className={style.settings__disclaimer}>
        2025 Дима Якорнов. Все права защищены. Текст, изображения, графика и
        другие материалы, представленные на этом сайте, являются
        интеллектуальной собственностью Димы Якорнова и защищены
        законодательством об авторских правах.
      </p>

      <div className={style.settings__close} onClick={changeOpenState}>
        <img
          className={cn(style.settings__close__button, {
            [style.settings__close__button__reverse]: !isSettingsOpen,
          })}
          src={CloseImg}
          alt="close button"
        />
      </div>
    </div>
  );
}

export default SettingsBlock;
