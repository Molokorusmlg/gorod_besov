import { API_URL } from "../../constants";
import { useEffect, useState, useCallback } from "react";
import SearchInput from "./components/searchInput/SearchInput";
import Header from "../../componets/header/Header";
import style from "./style.module.scss";
import BlockWithAllVideo from "./components/blockWithAllVideos/BlockWithAllVideo";
import SettingsBlock from "./components/settingsBlock/SettingsBlock";
import Footer from "../../componets/footer/Footer";
import NotFoundBlock from "../../componets/notFoundBlock/NotFoundBlock";
import { useGetFilterString } from "./hooks/useGetFilterString";
import { IVideo } from "./types/videosInterface";
import * as React from "react";

function AllVideos() {
  const [videoList, setVideoList] = useState<IVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchRequest, setSearchRequest] = useState("");
  const [filterRequerst, setFilterRequest] = useState<string[]>([]);
  const [sortRequest, setSortRequest] = useState("");
  const [error, setError] = useState(false);

  const fetchAllVideos = useCallback(
    async (page = 1) => {
      setIsLoading(true);
      setError(false);

      const filter = useGetFilterString(filterRequerst);
      const sort = sortRequest[0];

      const request = `${API_URL}?title=${searchRequest}&limit=12&page=${page}&type=${filter}&sortBy=${sort}`;

      try {
        const response = await fetch(request);

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data: IVideo[] = await response.json();
        setVideoList((prev) => {
          const existingIds = new Set(prev.map((video) => video.id));
          const newVideos = data.filter((video) => !existingIds.has(video.id));
          return [...prev, ...newVideos];
        });
      } catch (error) {
        console.log(error);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [searchRequest, filterRequerst, sortRequest]
  );

  useEffect(() => {
    setVideoList([]);
    fetchAllVideos();
  }, [filterRequerst, searchRequest, sortRequest, fetchAllVideos]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const nextPage = Math.ceil(videoList.length / 12) + 1;
      fetchAllVideos(nextPage);
    }
  }, [videoList.length, fetchAllVideos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <main>
      <Header />
      <section className={style.all__video}>
        <SearchInput setSearchRequest={setSearchRequest} />
        {error ? (
          <NotFoundBlock />
        ) : (
          <BlockWithAllVideo videoList={videoList} isLoading={isLoading} />
        )}
        <SettingsBlock
          setFilterRequest={setFilterRequest}
          setSortRequest={setSortRequest}
        />
      </section>
      <Footer />
    </main>
  );
}

export default AllVideos;
