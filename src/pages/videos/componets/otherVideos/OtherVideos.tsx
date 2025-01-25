import style from "./style.module.scss";
import OtherVideoLink from "../otherVideoLink/OtherVideoLink";
import { API_URL } from "../../../../constants";
import { useState, useEffect, useCallback, useRef } from "react";
import { IOtherVideoLink } from "../otherVideoLink/OtherVideoLink";
import * as React from "react";

interface IOtherVideos {
  ignoreid: string;
}

function OtherVideos({ ignoreid }: IOtherVideos) {
  const [otherVideoList, setOtherVideoList] = useState<IOtherVideoLink[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchOtherVideos = useCallback(
    async (pageNum = 1) => {
      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch(`${API_URL}?page=${pageNum}&limit=10`);
        const data = await response.json();

        const filteredData = data.filter(
          (video: IOtherVideoLink) => video.id !== ignoreid
        );
        setOtherVideoList((prev) => {
          const existingIds = new Set(prev.map((video) => video.id));
          const newVideos = filteredData.filter(
            (video: IOtherVideoLink) => !existingIds.has(video.id)
          );
          return [...prev, ...newVideos];
        });
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [ignoreid]
  );

  useEffect(() => {
    setOtherVideoList([]);
    setPage(1);
    fetchOtherVideos(1);
  }, [ignoreid, fetchOtherVideos]);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollHeight - scrollTop <= clientHeight + 10 && !isLoading) {
        setPage(page + 1);

        fetchOtherVideos(page);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading, handleScroll]);

  return (
    <div className={style.othervideos} ref={containerRef}>
      {otherVideoList.map((video: IOtherVideoLink) => (
        <OtherVideoLink
          key={video.id}
          id={video.id}
          title={video.title}
          img1={video.img1}
          username={video.username}
        />
      ))}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading videos</div>}
    </div>
  );
}

export default OtherVideos;
