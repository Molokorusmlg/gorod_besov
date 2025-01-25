import style from "./style.module.scss";
import VideoCard from "../videoCard/VideoCard";
import MiniLoader from "../../../../componets/footer/miniLoader/MiniLoader";
import * as React from "react";
import { IVideo } from "../../types/videosInterface";

interface IBlockWithAllVideosProps {
  videoList: Array<IVideo>;
  isLoading: boolean;
}

function BlockWithAllVideos({
  videoList,
  isLoading,
}: IBlockWithAllVideosProps) {
  return (
    <div className={style.video__list}>
      {videoList.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id}
          img={video.img1 || ""}
          title={video.title || ""}
          username={video.username || ""}
          avatar={video.avatar || ""}
        />
      ))}
      <div className={style.loader__container}>
        <MiniLoader isLoading={isLoading} />
      </div>
    </div>
  );
}

export default BlockWithAllVideos;
