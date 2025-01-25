import Backround_img from "../../../../assets/video/Background.mp4";
import style from "./style.module.scss";
import * as React from "react";

function HomeBackground() {
  return (
    <div className={style.background__video__container}>
      <video
        autoPlay
        loop
        preload="auto"
        muted
        className={style.background__video}
      >
        <source className={style.video} src={Backround_img} />
      </video>
    </div>
  );
}

export default HomeBackground;
