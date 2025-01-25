import { useQuery } from "@tanstack/react-query";
import style from "./style.module.scss";
import Header from "../../componets/header/Header";
import VideoPlayer from "./componets/videoPlayer/VideoPlayer";
import VideoInfoBlock from "./componets/videoInfoBlock/VideoInfoBlock";
import OtherVideos from "./componets/otherVideos/OtherVideos";
import CommentsBlock from "./componets/commentsBlock/CommentsBlock";
import { API_URL } from "../../constants";
import Loading from "../../componets/loading/Loading";
import { useParams } from "react-router-dom";
import * as React from "react";

function Videos() {
  const { id } = useParams();

  const { data: requestData, isLoading } = useQuery({
    queryKey: ["video", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  return (
    <main>
      <Header />
      <section className={style.video}>
        <VideoPlayer
          src={requestData?.linkVideo || ""}
          title={requestData?.title || ""}
        />
        <VideoInfoBlock
          title={requestData?.title || ""}
          avatar={requestData?.avatar || ""}
          username={requestData?.username || ""}
          likes={requestData?.likes || 0}
          description={requestData?.description || ""}
          img1={requestData?.img1 || ""}
          img2={requestData?.img2 || ""}
          img3={requestData?.img3 || ""}
          id={Number(id) || 0}
        />
        <OtherVideos ignoreid={String(id) || "0"} />
        <CommentsBlock id={Number(id) || 0} />
      </section>
      {isLoading && <Loading isLoading={isLoading} />}
    </main>
  );
}
export default Videos;
