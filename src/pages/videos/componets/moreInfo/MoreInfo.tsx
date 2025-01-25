import style from "./style.module.scss";
import cn from "classnames";
import * as React from "react";

interface IMoreInfo {
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
}

function MoreInfo({ title, description, img1, img2, img3 }: IMoreInfo) {
  return (
    <div className={style.info__more}>
      <div className={style.info__more__title}>
        <h1>{title}</h1>
      </div>
      <div className={style.info__more__block}>
        <div className={style.info__more__text}>
          <p>{description}</p>
        </div>
        <div className={style.info__more__imges}>
          <img
            className={style.info__more__imges__img}
            src={img1}
            alt="img context"
          />
          <img
            className={style.info__more__imges__img}
            src={img2}
            alt="img context"
          />
          <img
            className={cn(style.info__more__imges__img, {
              [style.img__open]: false,
            })}
            src={img3}
            alt="img context"
          />
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
