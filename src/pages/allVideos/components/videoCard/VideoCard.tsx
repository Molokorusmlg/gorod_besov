import style from "./style.module.scss";
import { Link } from "react-router-dom";
import * as React from "react";

interface IVideoCard {
  id: string;
  img: string;
  title: string;
  username: string;
  avatar: string;
}

function VideoCard({ id, img, title, username, avatar }: IVideoCard) {
  return (
    <Link to={`/videos/${id}`} className={style.card}>
      <div className={style.card__img}>
        <img className={style.card__img} src={img} alt="video_prev" />
      </div>

      <div className={style.card__info}>
        <h1 className={style.card__info__title}>{title}</h1>
        <div className={style.card__info__profile}>
          <img
            src={avatar}
            alt="user avatar"
            className={style.card__info__avatar}
          />
          <h1 className={style.card__info__text}>{username}</h1>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
