import style from "./style.module.scss";
import { Link } from "react-router-dom";
import * as React from "react";

export interface IOtherVideoLink {
  id: string;
  title: string;
  img1: string;
  username: string;
}

function OtherVideoLink({ id, title, img1, username }: IOtherVideoLink) {
  return (
    <Link to={`/videos/${id}`} className={style.minivideo}>
      <div className={style.minivideo__img}>
        <img
          className={style.minivideo__img__photo}
          src={img1}
          alt="video-preview"
        />
      </div>

      <div className={style.minivideo__info}>
        <p className={style.minivideo__info__title}>{title}</p>
        <p className={style.minivideo__info__username}>{username}</p>
      </div>
    </Link>
  );
}

export default OtherVideoLink;
