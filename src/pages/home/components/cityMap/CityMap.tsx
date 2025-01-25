import RadioButtonsCity from "../radioButtonsCity/RadioButtonsCity";
import InteractiveMaps from "../interactiveMaps/InteractiveMaps";
import style from "./style.module.scss";
import { useState } from "react";
import * as React from "react";

function CityMap() {
  const [selectedValue, setSelectedValue] = useState("value-1");

  return (
    <div className={style.map}>
      <div className={style.map__wrapper}>
        <div className={style.map__title__block}>
          <h1 className={style.map__title}>Карта города</h1>
          <div className={style.map__title__line}>
            <span></span>
          </div>
        </div>
      </div>
      <div className={style.map__block}>
        <InteractiveMaps selectedValue={selectedValue} />
        <RadioButtonsCity
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>

      <a href="#top" className={style.button} title="Scroll to top">
        <svg className={style.svgIcon} viewBox="0 0 384 512" aria-hidden="true">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </a>
    </div>
  );
}
export default CityMap;
