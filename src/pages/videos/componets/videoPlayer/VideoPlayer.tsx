import style from "./style.module.scss";
import * as React from "react";

interface IVideoPlayer {
  src: string;
  title: string;
}

function VideoPlayer({ src, title }: IVideoPlayer) {
  return (
    <div className={style.video__player__video}>
      <iframe
        src={src}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
        className={style.video__player__iframe}
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
