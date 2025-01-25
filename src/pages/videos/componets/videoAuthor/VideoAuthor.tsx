import style from "./style.module.scss";
import * as React from "react";

export interface IVideoAuthor {
  avatar: string;
  username: string;
}

function VideoAuthor({ avatar, username }: IVideoAuthor) {
  return (
    <div className={style.video__info__author}>
      <div className={style.video__info__author__avatar}>
        <img
          className={style.video__info__author__avatar__img}
          src={avatar}
          alt="Автор"
        />
        <p className={style.video__info__author__avatar__name}>{username}</p>
      </div>
    </div>
  );
}

export default VideoAuthor;
