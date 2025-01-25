import style from "./style.module.scss";
import arrowDown from "../../../../assets/img/arrowBackWhite.svg";
import * as React from "react";

function CityTitle() {
  return (
    <div className={style.index__title}>
      <h1 className={style.index__title__text}>Ekaterinburg</h1>
      <a href="#infoSection">
        <img
          className={style.index__title__img}
          src={arrowDown}
          alt="arrow down"
        />
      </a>
    </div>
  );
}

export default CityTitle;
