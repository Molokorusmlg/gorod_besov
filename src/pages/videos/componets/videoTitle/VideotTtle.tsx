import style from "./style.module.scss";
import * as React from "react";

interface IVideoTitle {
  title: string;
}

function VideoTitle({ title }: IVideoTitle) {
  return (
    <div className={style.video__title}>
      <p className={style.video__title__text}>{title}</p>
    </div>
  );
}

export default VideoTitle;
